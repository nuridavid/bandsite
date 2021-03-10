let tableSection = document.getElementById("tik");

let table = [
  {
    date: "MON Dec 17 2018",
    venue: "Ronald Lane",
    location: "San Fransisco, CA",
  },

  {
    date: "TUE Jul 18 2019",
    venue: "Pier 3 East",
    location: "San Fransisco, CA",
  },

  {
    date: "FRI Jul 22 2019",
    venue: "View Loungue",
    location: "San Fransisco, CA",
  },

  {
    date: "SAT Aug 12 2019",
    venue: "Hyatt Agency",
    location: "San Fransisco, CA",
  },

  {
    date: "FRI Sep 05",
    venue: "Moscow Center",
    location: "San Fransisco, CA",
  },
  {
    date: "FRI Sep 05",
    venue: "Moscow Center",
    location: "San Fransisco, CA",
  },

  {
    date: "WED Aug 11 2019",
    venue: "Pres Club",
    location: "San Fransisco, CA",
  },
];

let tableComplete = table
  .map(
    (row) => `<div class="shows__box">
<p>DATE</p>
      <div class="header">${row.date}</div>
      <p>VENUE</p>
      <div>${row.venue}</div>
      <p>LOCATION</p>
      <div>${row.location}</div>
      <button>BUY TICKETS</button>
    </div>`
  )
  .join("");

tableSection.innerHTML = tableComplete;

// tableSection.append(table.innerHTML);
