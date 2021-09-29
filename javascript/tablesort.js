    function sortTableByGroupName(table, column, asc = true) { 
        const dirModifier = asc ? 1 : -1; 
        const tBody = table.tBodies[0];
        console.log(tBody, "namwwala")
        const rows = Array.from(tBody.querySelectorAll("tr"));
        console.log(rows, "NameRows")
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
    
  function sortTableBycreatedDate(table, column, asc=true){
      console.log(table)
    const dirModifier = asc ? 1 : -1; 
    const tBody = table.tBodies[0];
    console.log(tBody, "Date")
    const rows = Array.from(tBody.querySelectorAll("tr"));
  
    console.log(rows, "EX")
    const sortedRows = rows.sort((a, b) => {
      const aColText = a.querySelector("td").textContent.split("/").reverse().join();
      const bColText = b.querySelector("td").textContent.split("/").reverse().join();
      console.log(aColText,bColText,"ABC")
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
    let datewhichSort = document.getElementById("sortingdate");
    datewhichSort.addEventListener("click", function () {
       
      let checkOrder = document.getElementsByTagName("th")[2];
      console.log(checkOrder)
      let currentIsAscending = checkOrder.classList.contains("th-sort-asc");
      let tableElement = document.querySelector("table");
      sortTableBycreatedDate(tableElement, 1, !currentIsAscending);
    });

  