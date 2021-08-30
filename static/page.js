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
                                    <p class="comment-text">${comment}</p>
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