function searchGroupName() {
  let input = document.getElementById("inputGroupName").value;
  input = input.toLowerCase();

  
  let tableElement = document.querySelector("table");
  let tableBody = tableElement.tBodies[0];
  let rows = Array.from(tableBody.querySelectorAll("tr"));

  
  rows.forEach((element) => {
 
    const extractGroupNameText = element
      .querySelector("td")
      .textContent.trim()
      .toLowerCase();
    console.log(extractGroupNameText);
    
    if (!extractGroupNameText.includes(input)) {
      element.style.display = "none";
    } else {
      element.style.display = "";
    }
  });
}
//for debounce
function debounce(func, timeout = 1000) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}
const searchFunc = debounce(() => searchGroupName());