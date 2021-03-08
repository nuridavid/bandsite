const defaultComments = [
  {
    name: "Michael Lyons",
    date: "12/8/2018",
    comment:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
  },
  {
    name: "Gary Wong",
    date: "12/12/2018",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!",
  },
  {
    name: "Theodore Duncan",
    date: "11/15/2018",
    comment:
      "How can someone be so good!!! You can tell he ives for this and loves to do it every day. Everytime I see him i feel instantly happy! He's definitely my favorite ever!",
  },
];

let form = document.getElementById("form");

let comment = document.getElementById("form__comment");
let timestamp = document.getElementById("form__timestamp");
let commentBox = document.querySelector(".comment__holder");
let name = document.querySelector("#form__name");

const comments = defaultComments
  .map((comment) => {
    return `<li class="commentLi">
  <div class="pic__box">
  <div class="pic"></div>
  <div class="text">
      <div class="top__comment">
          <div class="comment__name">${comment.name}</div>
          <div class="comment__date">${comment.date}</div>
      </div>
      <div class="commentLi__comment">${comment.comment}</div>
  </div>
  </div>

  </li>
  <hr>`;
  })
  .join("");

commentBox.innerHTML = comments;
// BREAK
// BREAK
// BREAK
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1;
let yyyy = today.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}
today = mm + "/" + dd + "/" + yyyy;
console.log(today);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let newComment = `<li class="commentLi">
  <div class="pic__box">
  <div class="pic"></div>
  <div class="text">
      <div class="nameDate">
          <div class="top__comment">${name.value}</div>
          <div class="comment__date">${today}</div>
      </div>
      <div class="commentLi__comment">${comment.value}</div>
  </div>
  </div>
  </li>`;
  commentBox.innerHTML = newComment + commentBox.innerHTML;
  form.reset();
});

// form.addEventListener("submit", submitComment);

// function submitComment(event) {
//   event.preventDefault();

//   let objectName = {
//     name: name.value,
//     comment: comment.value,
//   };

//   console.log(objectName);

//   defaultComments.push(objectName);
//   // commentBox.innerHTML = objectName + commentBox.innerHTML;
//   form.reset();
// }

// function displayComment(comObj) {
//   console.log(defaultComments);
//   // Re-add to the section element all comments from the comment array
// }

// const commentContainer = document.querySelector(".comment__container");
// commentContainer.innerHTML = `<h1></h1>`;
// function createComment(e) {
//   let message = `<div><span class="top__comment"><h2> ${comment.value}</h2>
//   </span>

//   </div>`;

//   const commentInput = e.target.comment.value;
//   const nameInput = e.target.name.value;

//   commentContainer.innerHTML = comment + commentContainer.innerHTML;
// }

// const SubmitTheForm = (event) => {
//   event.preventDefault();
//   createComment(commentInput);
//   //   formSection.reset();
// };

// formSection.addEventListener("submit", SubmitTheForm);

// const submitComment = (values) => {
//   const commentSubmit = document.querySelector("#form__section");
//   let commentBox = document.createElement("div");
//   commentBox.className = "comment__box";

// for (let i = 0; i < values.length; i++) {
//   let commentText = document.createElement("p");
//   commentBox.innerText = values[i];
//   formSection.appendChild(commentText);
// }
//   commentSubmit.appendChild(commentBox);
//   formSection.reset();
// };
