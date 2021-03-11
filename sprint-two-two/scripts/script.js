let tableSection = document.getElementById("tik");

const key = "?api_key=3662ddd8-de29-457d-97d8-72c81d5722b4";
let table;
const url = "https://project-1-api.herokuapp.com/showdates";

axios
  .get(url + key)
  .then((res) => {
    table = res.data;
    let tableComplete = table
      .map(
        (row) => `<div class="shows__box">
<p>DATE</p>
      <div class="header">${row.date}</div>
      <p>VENUE</p>
      <div>${row.place}</div>
      <p>LOCATION</p>
      <div>${row.location}</div>
      <button>BUY TICKETS</button>
    </div>`
      )
      .join("");
    tableSection.innerHTML = tableComplete;
  })
  .catch((error) => {
    console.log("error");
  });
console.log();
