class Bee {

    constructor(x, y) {
        this.y = y;
        this.x = x;
        this.speedX = 10;
        this.speedY = 5;
        // this.beeImg =  document.createElement("img");
        this.beeImage = new Image(50, 50);
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

    checkBounds(bounds) {
        let beeMoving = this;
        if (parseInt(beeMoving.beeImage.style.left) > bounds.width) {
            beeMoving.speedX *= -1;


        }
        else if (parseInt(beeMoving.beeImage.style.left) < 0) {
            beeMoving.speedX *= -1;

        }

        if (parseInt(beeMoving.beeImage.style.top) > bounds.height) {
            beeMoving.speedY *= -1;

        }
        else if (parseInt(beeMoving.beeImage.style.top) < 0) {
            beeMoving.speedY *= -1;
        }

    }

    animateBee() {
        let self = this;
        //move the bee
        // click on the ball, bool is on and the ball moves
        let ref = window.requestAnimationFrame(animate);
        function animate() {
            console.log(self)
            self.beeImage.style.left = parseInt(self.beeImage.style.left) + self.speedX + "px";
            self.beeImage.style.top = parseInt(self.beeImage.style.top) + self.speedY + "px";
            //self.checkBounds(self.parentCanvas, self.beeImage);
            ref = window.requestAnimationFrame(animate);
        }
    }


}