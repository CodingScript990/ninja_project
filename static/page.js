$(document).ready(function () {
    showComment();
});

function showComment() {
    $.ajax({
        type: "GET",
        url: "/comment",
        data: {},
        success: function (response) {
            let comments = response['all_comments'];
            for (let i = 0; i < comments.length; i++) {
                let user_name = comments[i]['user_name'];
                let comment = comments[i]['comment'];
                let data = comments[i]['data'];

                let temp_html = `<li class="comment user-comment">
                                    <div class="info">
                                        <p class="comment-text-user">${user_name}<span class="date">${data}</span></p>
                                    </div>
                                    <div class="comments">
                                        <p class="comment-text">${comment}</p>
                                        <button onclick="deleteComment('${user_name}')" type="button" class="btn btn-danger delete">삭제</button>
                                    </div>
                                </li>`;

                $('#comment-area').append(temp_html);
            }
        }
    });
};

function makeComment() {
    let user_name = $('#user_name').val();
    let comment = $('#comment_box').val();

    $.ajax({
        type: "POST",
        url: "/page",
        data: {
            user_name_give: user_name,
            comment_give: comment
        },
        success: function (response) {
            alert(response['msg']);
            window.location.reload();
        }
    });
};

function deleteComment(user_name) {
    $.ajax({
        type: 'POST',
        url: '/delete',
        data:{user_name_give: user_name},
        success: function (response) {
            alert(response['msg']);
            window.location.reload();
        }
    });
};