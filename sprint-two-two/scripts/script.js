const table = `
  <tr>
    <th>DATES</th>
    <th>VENUE</th>
    <th>LOCATION</th>
  </tr>
  <tr>
    <td>MON Dec 17 2018</td>
    <td>Ronald Lane</td>
    <td>San Fransisco, CA</td>
    <button>BUY TICKETS</button>
  </tr>
  <tr>
    <td>TUE Jul 18 2019</td>
    <td>Pier 3 East</td>
    <td>San Fransisco, CA</td>
    <button>BUY TICKETS</button>
  </tr>
  <tr>
  <td>FRI Jul 22 2019</td>
  <td>View Loungue</td>
  <td>San Fransisco, CA</td>
  <button>BUY TICKETS</button>
</tr>
<tr>
    <td>SAT Aug 12 2019</td>
    <td>Hyatt Agency</td>
    <td>San Fransisco, CA</td>
    <button>BUY TICKETS</button>
  </tr>
  <tr>
    <td>FRI Sep 05</td>
    <td>Moscow Center</td>
    <td>San Fransisco, CA</td>
    <button>BUY TICKETS</button>
  </tr>
  <tr>
    <td>WED Aug 11 2019</td>
    <td>Pres Club</td>
    <td>San Fransisco, CA</td>
    <button>BUY TICKETS</button>
  </tr>
`;

let tableSection = document.getElementById("table__section");

tableSection.innerHTML = table;

// tableSection.append(table.innerHTML);
