window.onload = function(){
    console.log("keys");
    let speedX =5;


    window.addEventListener("keydown", function(event)
{
//  console.log(event);
//  // document.querySelector("#textContainer").textContent+=event.key;
//  document.querySelector("#textContainer").textContent+=event.code;


 if(event.key ==="ArrowRight"){
 
    document.getElementById("boxA").style.left=parseInt(document.getElementById("boxA").style.left)+speedX+"px";
  }
  else if(event.key ==="ArrowLeft"){
  //you cant add a strong w a number to add a number... so that's why parseInt is used to make the string into an interger to make "boxA"
  //interact w speed X
    document.getElementById("boxA").style.left =parseInt(document.getElementById("boxA").style.left)-speedX+"px";   
    
  }
  else if (event.code === "Space") {
    let bool = document.getElementById("boxB").getAttribute("custom-bool");
    if (bool === "off") {
      document.getElementById("boxB").style.background = "orange";
      document.getElementById("boxB").setAttribute("custom-bool", "on");
    } else {
      document.getElementById("boxB").style.background = "rgb(112, 184, 226)";
      document.getElementById("boxB").setAttribute("custom-bool", "off");
    }
  }
  else if (event.key === "Shift") {
    document.getElementById("boxA").style.background ="rgb(226, 112, 177)";
    window.addEventListener("keyup", function(event){
        console.log("keyup")
         //2: change color when space is down
         if(event.key ==="Shift"){
            document.getElementById("boxA").style.background = "rgb(112, 184, 226)";
   
        }
        else{
          console.log(`key up not shift:`)
          console.log(event)
        }
   
    }
}
})
window.setTimeout(addTimeoutText,5000);
  function addTimeoutText(){
    let parent = document.getElementById("parent");
    parent.innerHTML+="<p> NEW TEXT TO APPEAR </p>";
  }
  window.setInterval(addTextRecur,2000);
 
  function addTextRecur(){
    let parent = document.getElementById("parent");
    parent.innerHTML+="<p> NEW TEXT TO APPEAR RECUR </p>";
  }


}
