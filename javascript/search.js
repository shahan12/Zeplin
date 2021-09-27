function searchGroupName() {
    let input = document.getElementById("GroupNameTextBox").value;
    input = input.toLowerCase();
  
    // getting the th from tbody
    let tableElement = document.querySelector("table");
    let tableBody = tableElement.tBodies[0];
    let rows = Array.from(tableBody.querySelectorAll("tr"));
  
    //  looping in the rows tr data
    rows.forEach((element) => {
      // getting the text only from tr
      const extractGroupNameText = element.querySelectorAll("td").textContent.trim().toLowerCase();
      console.log(extractGroupNameText);
      // checks the input with the table data
      if (!extractGroupNameText.includes(input)) {
        element.style.display = "none";
      } else {
        element.style.display = "";
      }
    });
  }