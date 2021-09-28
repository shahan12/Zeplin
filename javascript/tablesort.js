function sortTableByGroupName(table, column, asc = true) { 
    const dirModifier = asc ? 1 : -1; 
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));
    console.log(rows);
    const sortedRows = rows.sort((a, b) => {
      const aColText = a.querySelector("td").textContent.trim();
      const bColText = b.querySelector("td").textContent.trim();
      return aColText > bColText ? 1 * dirModifier : -1 * dirModifier;
    });
    while (tBody.firstChild) {
      tBody.removeChild(tBody.firstChild);
    } 
    tBody.append(...sortedRows);
    table
      .querySelectorAll("th")
      .forEach((th) => th.classList.remove("th-sort-asc", "th-sort-desc"));
   
    table.querySelector("th").classList.toggle("th-sort-asc", asc);
    table.querySelector("th").classList.toggle("th-sort-desc", !asc);
  }
  let whichSort = document.getElementById("sorting");
  whichSort.addEventListener("click", function () {
    let checkOrder = document.getElementsByTagName("th")[0];
    let currentIsAscending = checkOrder.classList.contains("th-sort-asc");
    let tableElement = document.querySelector("table");
    sortTableByGroupName(tableElement, 1, !currentIsAscending);
  });
  