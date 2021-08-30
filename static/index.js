$(document).ready(function () {
    showReview();
});

function showReview() {
    $.ajax({
        type: "GET",
        url: "/home",
        data: {},
        success: function (response) {
            let reviews = response['all_reviews'];
            for (let i = 0; i < reviews.length; i++) {
                let title = reviews[i]['title'];
                let season = reviews[i]['season'];
                let area = reviews[i]['area'];
                let keywords = reviews[i]['keywords'];
                let review = reviews[i]['review'];
                let file = reviews[i]['file'];
                let data = reviews[i]['data'];


                let temp_html = `<div class="block" >
                                    <div class="grid">  
                                        <div class="image"> 
                                            <img src="../static/${file}" class="card-img-top">
                                        </div>
                                        <div class="title">
                                            <div class="title-left" style="float: left;">
                                                <p>${title}</p>
                                            </div>
                                            <div class="title-right" style="float: right;">
                                                <span>${data}</span>
                                            </div>
                                        </div>
                                        <div class="content">
                                            <p>${review}</p>
                                        </div>
                                        <ul class="hash">
                                            <li><strong style="color: #E35151;">계절</strong> : ${season}</li>
                                            <li><strong style="color: #E35151;">지역</strong> : ${area}</li>
                                            <li><strong style="color: #E35151;">해시</strong> : ${keywords}</li>
                                        </ul>
                                    </div>
                                 </div>`;
                $('#reviews-box').append(temp_html);
            }
        }
    });
}