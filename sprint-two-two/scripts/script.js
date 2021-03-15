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
        (row) => `
      
        
        <div class="info"> 
        <div class="info__date">
        <label>DATE</label>
      <br>
      <h3 class="date__header">${row.date}</h3></div>

      <div class="header">
      <label>VENUE</label>
  
      <div class="info__place">${row.place}</div>
      </div>

      <div class="header">
      <label>LOCATION</label>

      <div class="info__location">${row.location}</div>
      </div>

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
