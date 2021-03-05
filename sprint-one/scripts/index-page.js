const formSection = document.querySelector("#form__section");
const name = document.querySelector("#name-Input");
const comment = document.querySelector("#comment-Input");

const commentContainer = document.querySelector(".comment__container");
commentContainer.innerHTML = `<h1></h1>`;
function createComment(e) {
  let message = `<div><span class="top__comment"><h2> ${comment.value}</h2>
  </span>

  </div>`;

  const commentInput = e.target.comment.value;
  const nameInput = e.target.name.value;

  commentContainer.innerHTML = comment + commentContainer.innerHTML;
}

const handleSubmit = (event) => {
  event.preventDefault();
  createComment(commentInput);
  //   formSection.reset();
};

formSection.addEventListener("submit", handleSubmit);

// const submitComment = (values) => {
//   const commentSubmit = document.querySelector("#form__section");
//   let commentBox = document.createElement("div");
//   commentBox.className = "comment__box";

//   for (let i = 0; i < values.length; i++) {
//     let commentText = document.createElement("p");
//     commentBox.innerText = values[i];
//     formSection.appendChild(commentText);
//   }
//   commentSubmit.appendChild(commentBox);
//   formSection.reset();
// };
