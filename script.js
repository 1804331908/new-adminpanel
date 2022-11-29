const url =
  "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";

let tableBody = document.getElementById("table-body");
let infoContent = document.getElementById("info-content");

function personTable(items) {
  items.forEach((item) => {
    const element1 = document.createElement("tr");
    element1.classList.add("data-row");
    element1.setAttribute("id", item.id);
    element1.appendChild(createColumn(item.id, 1));
    element1.appendChild(createColumn(item.firstName, 2));
    element1.appendChild(createColumn(item.lastName, 3));
    element1.appendChild(createColumn(item.email, 4));
    element1.appendChild(createColumn(item.phone, 5));
    

    element1.addEventListener("click", () => {
      personDetails(item);
    });

    tableBody.appendChild(element1);
  });
}

function  personDetails(item) {
  const pointedRow = document.getElementById(item.id);

  const prePointedRow = document.getElementsByClassName("active")[0];

  if (prePointedRow !== undefined) {
    prePointedRow.classList.remove("active");
  }

  pointedRow.classList.add("active");
  infoContent.innerHTML = `
    <div><b>User selected:</b> ${item.firstName} ${item.lastName}</div>
    <div>
        <b>Description: </b>
        <textarea cols="50" rows="5" readonly>
            ${item.description}
        </textarea>
    </div>
    <div><b>Address:</b>${item.address.streetAddress}</div>
    <div><b>City:</b>${item.address.city}</div>
    <div><b>State:</b>${item.address.state}</div>
    <div><b>Zip:</b>${item.address.city}</div>
</div>
    `;
}

function createColumn(data, index) {
  const column = document.createElement("td");
  column.classList.add(`column${index}`);
  column.innerText = data;
  return column;
}


function initializeTable() {
    $.get(url, (response) => {
      personTable(response);
    });


    
}

initializeTable();