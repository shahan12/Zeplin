//for the checkbox selected all at time
function selectall(source) {
    checkboxes = document.getElementsByClassName("subC");
    for (var t = 0, n = checkboxes.length; t < n; t++) {
      checkboxes[t].checked = source.checked;
    }
  }

// for the pagination



  let tableElement = document.querySelector("table");
let tableBody = tableElement.tBodies[0];
let tr = Array.from(tableBody.querySelectorAll("tr"));
let ul = document.querySelector("ul");
let arrayTr = [];
for (let i = 1; i < tr.length; i++) {
  arrayTr.push(tr[i]);
}

let limit = 10;

function displayTable(limit) {
  tableBody.innerHTML = "";
  for (let i = 0; i < limit; i++) {
    tableBody.appendChild(arrayTr[i]);
  }

  buttonGereration(limit);
}

function buttonGereration(limit) {
  const noftr = arrayTr.length;
  if (noftr <= limit) {
    ul.style.display = "none";
  } else {
    ul.style.display = "flex";
    var nofPage = Math.ceil(noftr / limit);
    updatepage(1);
    let updateflagpage = 0;
    for (let i = 1; i <= nofPage; i++) {
      let li = document.createElement("li");
      li.className = "list";
      let a = document.createElement("a");
      a.href = "#";
      a.setAttribute("data-page", i);
      a.setAttribute("id", i);
      a.setAttribute("class", "activeClass");
      li.appendChild(a);
      a.innerText = i;
      ul.insertBefore(li, document.getElementById("tableList").childNodes[3]);
      a.onclick = (e) => {
        let x = e.target.getAttribute("data-page");
        updatepage(x);
        tableBody.innerHTML = "";
        x--;
        let start = limit * x;
        let end = start + limit;
        let page = arrayTr.slice(start, end);

        for (let i = 0; i < page.length; i++) {
          let item = page[i];
          tableBody.appendChild(item);
        }
      };
    }
  }

  let z = 0;
  function nextElement() {
    if (this.id == "nextId") {
      z == arrayTr.length - limit
        ? (z = 0)
        : z / limit + 1 == nofPage
        ? z
        : (z += limit);
    }
    if (this.id == "prevId") {
      z == 0 ? arrayTr.length - limit : (z -= limit);
    }
    updatepage(z / limit + 1);
    tableBody.innerHTML = "";
    for (let i = z; i < z + limit; i++) {
      if (arrayTr[i] != null) {
        tableBody.appendChild(arrayTr[i]);
      } else {
        break;
      }
    }
  }

  document.getElementById("prevId").onclick = nextElement;
  document.getElementById("nextId").onclick = nextElement;
}

displayTable(10);

function onChangeGoToPage(go) {
    var noftr = arrayTr.length;
    var nofPage = Math.ceil(noftr / limit);
    console.log(go, nofPage);
    if (go <= nofPage && go > 0) {
      var goto = go - 1;
      updatepage(go);
  
      if (nofPage < goto) {
        return;
      }
      let offset = goto * limit;
      tableBody.innerHTML = "";
      for (let i = offset; i < offset + limit; i++) {
        if (arrayTr[i] != null) {
          tableBody.appendChild(arrayTr[i]);
        } else {
          break;
        }
      }
    }
  }
  const GoToPage = debounce((go) => onChangeGoToPage(go));

function updatepage(go) {
  var spanvalue1 = document.getElementById("goto_lower");
  spanvalue1.textContent = go * limit + 1 - limit;

  var spanvalue2 = document.getElementById("goto_upper");
  spanvalue2.textContent = go * limit;
}

let element = document.getElementsByClassName("activeClass");
for (let i = 0; i < element.length; i++) {
  element[i].addEventListener("click", function () {
    let activeOne = document.querySelector(".active");

    if (activeOne) {
      activeOne.classList.remove("active");
    }

    element[i].classList.add("active");
  });
}