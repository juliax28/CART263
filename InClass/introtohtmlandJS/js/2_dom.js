window.onload = setup
function setup(){
//     console.log("running setup");
//     console.log(document.getElementById("one"));
//     console.log(document.querySelector("#one"));
//     console.log(document.getElementsByTagName("div").length);
//     console.log(document.getElementsByTagName("div")[0]);

//     console.log(document.querySelectorAll("div"));
//    console.log(document.querySelectorAll("div").length);
//    console.log(document.querySelectorAll("div")[0]);

//    console.log(document.getElementsByClassName("square_shape"));
//    console.log(document.getElementsByClassName("square_shape").length);
//    console.log(document.getElementsByClassName("square_shape")[0]);

//    console.log(document.getElementById("two").innerHTML);

//    console.log(document.getElementById("two").textContent);

//    console.log(document.querySelector("#five").getAttribute("id"));
//   console.log(document.querySelector("#five").getAttribute("class"));

//   console.log(document.querySelector("#two").getAttribute("class"));
// console.log(typeof(document.querySelector("#two").getAttribute("class")));

// console.log(document.querySelector("#two").classList);
// console.log(document.querySelector("#five").getAttributeNames());

// console.log(document.querySelector("#one").style);
// console.log(document.querySelector("#one").style.background);

console.log(document.querySelector("#six").style);
console.log(document.querySelector("#six").style.background);
console.log(document.querySelector("#six").style.width);

document.querySelector("#two").children[0].innerHTML = "<h2> this is now a header</h2>";

//get the group
let allSquareShapes = document.querySelectorAll(".square_shape");
//go through each element
for(let  singleSquareShape of allSquareShapes){
    //get children
   console.log(singleSquareShape.children[0])
   singleSquareShape.children[0].textContent+="adding content"
}

document.querySelector(".square_shape").classList.remove("square_shape"); //first one only
  document.querySelector("p span").classList.add("change_span");


  let newDiv = document.createElement("div");
  newDiv.classList.add("square_shape");
  newDiv.innerHTML = "<p> NEW ELEMENT </p>";
  newDiv.style.backgroundColor = "purple";
// access parent element
let parentElement = document.querySelector(".wrapper_flex_box")
parentElement.appendChild(newDiv)


let newDivTwo = document.createElement("div");
newDivTwo.classList.add("square_shape");
newDivTwo.innerHTML = "<p> NEW ELEMENT TWO </p>";
newDivTwo.style.backgroundColor = "yellow";
newDivTwo.querySelector("p").style.color = "black"
// access parent element
let sibling = document.querySelector("#three")
let parentElementAgain = document.querySelector(".wrapper_flex_box")
parentElementAgain.insertBefore(newDivTwo,sibling);
}
