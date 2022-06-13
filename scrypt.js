let input = document.createElement("input");
input.placeholder = "To Do List For Today...";
document.getElementById("form").appendChild(input);
// button
let meinbutton = document.createElement("button");
meinbutton.textContent = "Clear All";
document.getElementById("mainDiv").appendChild(meinbutton);
let button = document.createElement("button");
button.textContent = "Add List";
document.getElementById("mainDiv").appendChild(button);

// const arr = JSON.parse(localStorage.getItem("localItem"));
// console.log(arr)
// if( arr != null && arr.length ) {
//       let group = ``;

//     arr.forEach(function(item){
//         group+=`
//             <div class="task-item">${item}</div>
//         `
//     })

//     let div = document.createElement('div');
//     div.className = "tasks-list";
//     div.innerHTML = group;
//     console.log(div)
//     console.log(group)
//     let myDiv = document.getElementById("myDiv");
//     myDiv.appendChild(div);
// }


button.addEventListener("click", function () {
  let div = document.createElement("div");
  document.getElementById("mainDiv").appendChild(div);
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.classList.add("del");
  let check = document.createElement("span");
  check.classList.add("line");

  // localStorage
  // let localItems = JSON.parse(localStorage.getItem("localItem"));
  // if (localItems === null) {
  //   tasklist = [];
  // } else {
  //   tasklist = localItems;
  // } 
  // tasklist.push(input.value);
  // localStorage.setItem("localItem", JSON.stringify(tasklist));
  // let p = document.createElement("p");

  // tasklist.forEach((number) => {
    // console.log('Index: ' + index + ' Value: ' + number);
    // let p = document.createElement('p');
    // p.textContent = number;
    // console.log(p);
    // console.log(element);
    // console.log(tasklist);
  // });
  //
  if (input.value !== "") {
    div.appendChild(li);
    span.textContent = "\u0058";
    li.innerText = input.value;
    check.textContent = "\u2713";
    div.appendChild(span);
    div.appendChild(check);
  } else {
    alert("input ცარიელია");
  }

  span.addEventListener("click", function () {
    div.remove();
  });

  check.addEventListener("click", function () {
    li.classList.toggle("line-del");
  });

  meinbutton.addEventListener("click", function () {
    div.remove();
  });
  input.value = "";
});



