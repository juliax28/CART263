class Bee {

    constructor (x,y,speed){
this.y = y;
this.x = x;
this.speed = speed;
// this.beeImg =  document.createElement("img");
this.beeImage = new Image(50,50);
this.beeImage.src = "images/bee.png";





    }

    renderBee(){
        // //sun - IN the sky
        this.beeImage.style.left = this.x + "px";

        this.beeImage.style.top = this.y + "px";
        this.beeImage.classList.add("bee");

        // //append to the SKY div
       
       document.querySelector(".sky").appendChild(this.beeImage);
       
        }
}