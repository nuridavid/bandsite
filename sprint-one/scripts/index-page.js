let form = document.getElementById("form");

let comment = document.getElementById("form__comment");
let timestamp = document.getElementById("form__timestamp");
let commentBox = document.querySelector(".comment__holder");
let name = document.querySelector("#form__name");

const key = "?api_key=3662ddd8-de29-457d-97d8-72c81d5722b4";

const url = "https://project-1-api.herokuapp.com/comments";
let defaultComments;

axios
  .get(url + key)
  .then((res) => {
    console.log(res);
    defaultComments = res.data;
    let comments = defaultComments
      .sort((a, b) => {
        return b.timestamp - a.timestamp;
      })
      .map((comment) => {
        let timestamp = moment(comment.timestamp).format("L");
        console.log(timestamp);
        return `<div class="commentLi">
        
       <div class="pic__box">
         <div class="pic"></div>
         </div>
         <div class="text">
            <div class="top__comment">
                <div class="comment__name">${comment.name}</div>
                <div class="comment__date">${timestamp}</div>
            </div>
            <div id="commentLi__comment">${comment.comment}</div>
      
         </div>
      
         </div>
         `;
      })
      .join("");
    commentBox.innerHTML = comments;
  })

  .catch((error) => {
    console.log(error);
  });

form.addEventListener("submit", (event) => {
  event.preventDefault();

  axios
    .post(url + key, {
      name: name.value,
      comment: comment.value,
    })
    .then((res) => {
      defaultComments.push(res.data);
      const newComment = defaultComments

        .sort((a, b) => {
          return b.timestamp - a.timestamp;
        })
        .map((comment) => {
          let timestamp = moment(comment.timestamp).format("L");
          return `<div class="commentLi">
    <div class="pic__box">
    <div class="pic"></div>
    </div>
    <div class="text">
        <div class="top__comment">
            <div class="comment__name">${comment.name}</div>
            <div class="comment__date">${timestamp}</div>
            
        </div>
        <div id="commentLi__comment">${comment.comment}</div>
    </div>
    </div>
  
    `;
        })
        .join("");
      commentBox.innerHTML = newComment;
      form.reset();
    })

    .catch((error) => {
      console.log(error);
    });
});
