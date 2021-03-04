let formSection = document.querySelector(".form__section");
let button = document.querySelector(".button");
const commentArray = [
  {
    comment: "Nuri David",
  },
  {
    comment: "that was awesome!",
  },
  {
    comment: "5 / 02 / 20",
  },
];

function displayComment() {
  for (let i = 0; i < commentArray.length; i++) {
    let comment = document.createElement("p");
    comment.innerText = `${commentArray[i].comment}`;
    formSection.appendChild(comment);

    console.log(commentArray[i].comment);
  }
}

displayComment();

button.addEventListener("click");
