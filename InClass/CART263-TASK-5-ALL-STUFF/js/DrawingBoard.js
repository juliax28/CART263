class DrawingBoard {
  /* Constructor */
  constructor(canvas, context, drawingBoardId) {
    this.canvas = canvas;
    this.context = context;
    this.objectsOnCanvas = [];
    let self = this;
    this.drawingBoardId = drawingBoardId;
    this.circles = [];
    //each element has a mouse clicked and a mouse over
    this.canvas.addEventListener("click", function (e) {
      self.clickCanvas(e);
    });

    this.canvas.addEventListener("mousemove", function (e) {
      self.overCanvas(e);
    });

    window.addEventListener("keydown", function (e) {

      if (self.drawingBoardId === "partA") {
        //console.log("test")
        e.preventDefault()
        self.DeleteCircles(e); //call

      }


    });
  }


  overCanvas(e) {
    //console.log("over");
    this.canvasBoundingRegion = this.canvas.getBoundingClientRect();
    this.mouseOffsetX = parseInt(e.clientX - this.canvasBoundingRegion.x);
    this.mouseOffsetY = parseInt(e.clientY - this.canvasBoundingRegion.y);
    console.log(this.mouseOffsetX, this.mouseOffsetY);
    //differentiate which canvas
    //you can remove the console.logs /// 
    if (this.drawingBoardId === "partA") {
      // console.log("in A")
    }
    if (this.drawingBoardId === "partB") {
      console.log("in B")
    }
    if (this.drawingBoardId === "partC") {
      console.log("in C")
    }
    if (this.drawingBoardId === "partD") {
      console.log("in D")
      // square follows the mouse (Olivia)
      let mx = this.mouseOffsetX
      let my = this.mouseOffsetY
      this.objectsOnCanvas[0].updatePositionRect(mx, my);
    }
  }

  clickCanvas(e) {

    // console.log("clicked");
    this.canvasBoundingRegion = this.canvas.getBoundingClientRect();
    this.mouseOffsetX = parseInt(e.clientX - this.canvasBoundingRegion.x);
    this.mouseOffsetY = parseInt(e.clientY - this.canvasBoundingRegion.y);
    //console.log(this.mouseOffsetX, this.mouseOffsetY);

    //differentiate which canvas
    //you can remove the console.logs /// 

    if (this.drawingBoardId === "partA") {

      let CircleX = this.mouseOffsetX;
      let CircleY = this.mouseOffsetY;
      let radius = Math.random() * 100;
      this.addObj(new CircularObj(CircleX, CircleY, radius, "#FFC300", "#E6E6FA", this.context))
      this.display();

      //add a circle to the circles array on click
      let circle = new CircularObj(CircleX, CircleY, radius, "#FFC300", "#E6E6FA", this.context);

      this.circles.push(circle);
      //console.log(this.circles.length);


      //this.objectsOnCanvas[0].update(newCircCol);
      // console.log(this.objectsOnCanvas[0].fill_color);
      // console.log(this.objectsOnCanvas[0].update(newCircCol), "test")
      // console.log(this.objectsOnCanvas[0], "the circle OBJ")


      for (let i = 0; i < this.circles.length; i++) {
        // Add the bee to the array of bees
        let newFill = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');

        this.objectsOnCanvas[i].updateColor(newFill);
      }




    }
    if (this.drawingBoardId === "partB") {
      console.log("in B")
    }
    if (this.drawingBoardId === "partC") {
      console.log("in C")
    }
    if (this.drawingBoardId === "partD") {
      console.log("in D")
      //New color on click (Olivia)
      //color randomizer found on stackoverflow.com
      let newCol = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
      this.objectsOnCanvas[0].changeColor(newCol);

    }
  }

  //Keydown Event for Canvas A
  DeleteCircles(e) {
    if (e.code === "ArrowRight") {
      console.log(this.circles)
      this.circles.pop();
      this.objectsOnCanvas.pop();
      console.log("Keypressed");
    }
  }


  /* method to add obj to canvas */
  addObj(objToAdd) {

    this.objectsOnCanvas.push(objToAdd);
  }

  /* method to add display objects on canvas */
  display() {
    for (let i = 0; i < this.objectsOnCanvas.length; i++) {
      this.objectsOnCanvas[i].display();
    }
  }

  /* method to add animate objects on canvas */


  animate() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    for (let i = 0; i < this.objectsOnCanvas.length; i++) {

      this.objectsOnCanvas[i].update(Math.random() * 2, Math.random() * -1);
      this.objectsOnCanvas[i].display();
      ;
    }
  }



  run(videoElement) {
    for (let i = 0; i < this.objectsOnCanvas.length; i++) {
      this.objectsOnCanvas[i].update(videoElement);
      this.objectsOnCanvas[i].display();
    }

  }
}
