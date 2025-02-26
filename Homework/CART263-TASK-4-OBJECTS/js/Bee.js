class Bee {

    constructor(x, y, speedX, speedY) {
        this.y = y;
        this.x = x;
        this.speedX = speedX;
        this.speedY = speedY;
        // this.beeImg =  document.createElement("img");
        this.beeImage = new Image(imageX, imageY);
        this.beeImage.src = "images/bee.png";





    }

    renderBee() {
        // //sun - IN the sky
        this.beeImage.style.left = this.x + "px";

        this.beeImage.style.top = this.y + "px";
        this.beeImage.classList.add("bee");

        // //append to the SKY div

        document.querySelector(".sky").appendChild(this.beeImage);

    }
    checkBounds(parent, beeImage) {
        let bounds = parent.sky();
        if (parseInt(this.beeImage.style.left) > bounds.width) {
            speedX *= -1;


        }
        else if (parseInt(this.beeImage.style.left) < 0) {
            speedX *= -1;

        }

        if (parseInt(this.beeImage.style.top) > bounds.height) {
            speedY *= -1;

        }
        else if (parseInt(this.beeImage.style.top) < 0) {
            speedY *= -1;
        }

    }

    animateBee() {
        //move the bee
        // click on the ball, bool is on and the ball moves
        this.ref = window.requestAnimationFrame(animate);
        function animate() {
            this.beeImage.style.left = parseInt(this.beeImage.style.left) + speedX + "px";
            this.beeImage.style.top = parseInt(this.beeImage.style.top) + speedY + "px";
            checkBounds(parentCanvas, this.beeImage);
            ref = window.requestAnimationFrame(animate);
        }
    }


}