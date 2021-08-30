$(document).ready(function () {
    bsCustomFileInput.init();
})

function makeReview() {
    let title = $('#title').val();
    let season = $('#season').val();
    let area = $('#area').val();
    let keywords = $('#keywords').val();
    let review = $('#review').val();

    let file = $('#file')[0].files[0];
    let form_data = new FormData();

    form_data.append("file_give", file);
    form_data.append("title_give", title);
    form_data.append("season_give", season);
    form_data.append("area_give", area);
    form_data.append("keywords_give", keywords);
    form_data.append("review_give", review);

    $.ajax({
        type: "POST",
        url: "/create",
        data: form_data,
        cache: false,
        contentType: false,
        processData: false,
        success: function (response) {
            alert(response["msg"]);
            window.location = "/";
        }
    });
}