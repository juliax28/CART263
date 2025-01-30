window.onload = setup;

/** function setup */
function setup() {
    console.log("we are a go!")
    // Done in a group: Olivia Axiuk and Julia Axiuk
/*** ALL ANWSERS TO BE ADDED IN THE ALLOCATED SPACE */
/*** START PART ONE ACCESS */
/* 1: all paragraph elements */
/***CODE */console.log(document.getElementsByTagName("p"));
    /***OUTPUT: 
     * HTMLCollection(9) [p#1, p#2.img-descript, p#3.img-descript, p#4.img-descript, p#5.img-descript, p#6.img-descript, p#7.img-descript, p#8.img-descript, p#9.img-descript]
0
: 
p#1
1
: 
p#2.img-descript
2
: 
p#3.img-descript
3
: 
p#4.img-descript
4
: 
p#5.img-descript
5
: 
p#6.img-descript
6
: 
p#7.img-descript
7
: 
p#8.img-descript
8
: 
p#9.img-descript
9
: 
<value unavailable>
length
: 
9
[[Prototype]]
: 
HTMLCollection
    //  */



    /*************************************** */
    /* 2: only the first paragraph element */
    /***CODE */console.log(document.getElementsByTagName("div").length);
    console.log(document.getElementsByTagName("p")[0]);
    /***OUTPUT: 
     * <p id="1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perspiciatis blanditiis, et
                laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur ducimus
                officiis non
                quasi officia sit veniam!
            </p>
     */


    /*************************************** */
    /* 3: all elements with the class inner-container */
    /***CODE */ console.log(document.getElementsByClassName("inner-container"));
    /***OUTPUT: 
     * HTMLCollection(8) [div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container]
0
: 
div.inner-container
1
: 
div.inner-container
2
: 
div.inner-container
3
: 
div.inner-container
4
: 
div.inner-container
5
: 
div.inner-container
6
: 
div.inner-container
7
: 
div.inner-container
length
: 
8
     */


    /*************************************** */
    /* 4: the last image element inside the element that has the class img-container */
    /***CODE */ console.log(document.getElementsByClassName("img-container").length);
    console.log(document.getElementsByClassName("img-container")[7]);
    /***OUTPUT: 
     * <div class="img-container">
                        <img class="img-image" src="task-1-images/seventeen.png">
                    </div>
     */


    /*************************************** */
    /* 5A: all h2 elements */console.log(document.getElementsByTagName("h2"));
    /* 5B: length of the list in 5A */ console.log(document.getElementsByTagName("h2").length);
    /* 5C: the text content of the first element in the list from 5A */ console.log(document.getElementsByTagName("h2")[0].textContent);
    /***CODE */
    /***OUTPUT:
     * A)
     * ALL h2 Elements:
     *  HTMLCollection [h2]
     * 0 : h2
        length:  1
        [[Prototype]] :  HTMLCollection

    B)
    HTMLCollection [h2]
     1
    
    C)
    The header of this fancy page

    /*************************************** */
    /* 6: the element with id name parent */
    /***CODE */ console.log(document.getElementById("parent"));
    /***OUTPUT: 
     * <section id="parent">
            <div class="inner-container"></div>
            <div class="inner-container"></div>
            <div class="inner-container"></div>
            <div class="inner-container"></div>
            <div class="inner-container"></div>
            <div class="inner-container"></div>
            <div class="inner-container"></div>
            <div class="inner-container"></div>
        </section>
     * 
     */

    /*************************************** */
    /*** END PART ONE ACCESS */


    /*************************************** */
    // /*** START PART TWO MODIFY */
    // /*************************************** */
    // /* 1: Select the first paragraph and replace the text within the paragraph... */
    // /***CODE */(document.getElementsByTagName("p")[0].textContent = "new text in parapgraph 01: Julia Axiuk and Olivia Axiuk on the following date: 2025-01-28");
    // /*************************************** */
    // /* 2: Select all elements in the HTML that have the class name content-container
    //  and change the background color ... of first and second ...*/


    // /***CODE */
    // (document.getElementsByClassName("content-container")[0].style.background = "orange");
    // (document.getElementsByClassName("content-container")[1].style.background = "purple");


    // /*************************************** */
    // /* 3: Change the src element of the first image element on the page to be ...
    // /***CODE */(document.getElementsByTagName("img")[0].src = "/task-1-images/seven.png");

    // /*************************************** */
    // /* 4: Select the third paragraph element on the page and 
    // replace the content (within the paragraph) to be an h2 element which contains the text `TEST 123`
    // /***CODE */(document.getElementsByTagName("p")[2].innerHTML = "<h2> TEST 123</h2>");

    // /*************************************** */
    // /* 5: Select the fourth paragraph element on the page and 
    // add to the existing content an h2 element containing the text `TEST 123`
    // /***CODE */ (document.getElementsByTagName("p")[3].innerHTML += "<h2> TEST 123</h2>");

    // /*************************************** */
    // /* 6: Select the fifth paragraph element on the page and add to the existing content 
    // an img element that holds `one.png`, and add the class newStyle to said paragraph element.
    // /***CODE */console.log(document.getElementsByTagName("p")[4].innerHTML += "<img src =/task-1-images/one.png>");
    // //console.log(document.getElementsByTagName("p")[4].innerHTML += "");
    // document.querySelectorAll("p")[4].setAttribute("class", "newStyle")



    // /*************************************** */
    // /* 7: Add the following array variable: let colors = ['red','blue','green','orange'];,
    // then access all elements with class name inner-container and save to a variable called `innerContainers`. 
    // Next, iterate over the colors array, and for each color: 
    // assign the element from innerContainers variable with the same index 
    // (i.e. colors[0] should be allocated to the first innerContainers element, colors[1] to the second, etc ...) 
    // a background using that color.
    // /***CODE */
    // let colors = ['red', 'blue', 'green', 'orange'];
    // let innerContainers = document.getElementsByClassName("inner-container");
    // for (let i = 0; i < colors.length; i++) {
    //     innerContainers[i].style.background = colors[i]

    // }



    /*************************************** */
    /*** END PART TWO MODIFY */


    /*************************************** */
    /*** START PART THREE CREATE */
    /*************************************** */
    /* 1: NEW PARAGRAPHS */
    /* 1A: Access all paragraph elements, and store the result in a variable called: allPTagsThree */
    /* 1B: Create a function:function customCreateElement(parent){ //body } */

    /* 1C:  In the body of customCreateElement create a new parargraph element*/

    /* 1D:  Set the text of this element to be : `using create Element`*/

    /* 1E:  Set the background of this paragraph element to be green */


    /* 1F:  Set the color of the text in this paragraph element to be white */


    /* 1G: Append this new element to the parent variable within the function. */


    /* 1H: Iterate through the allPTagsThree array and call customCreateElement(),
    passing the current allPTagsThree element as the parent with each iteration.*/
    /***CODE */
    let allPTagsThree = document.querySelectorAll("p");

    function customCreateElement(parent) {

        let newParagraph = document.createElement("p");

        newParagraph.innerHTML = "<p> using create Element </p>";

        newParagraph.style.background = "green";

        newParagraph.style.color = "white";

        parent.append(newParagraph);
    }
    allPTagsThree.forEach((newP) => { customCreateElement(newP) });

    /***EXPLANATION::
     * store all of the iexisting paragraph tags as an array in the allPTagsThree variable
     * Create a function that...
        * 1. Defines newParagraph as a p element to be created to the document
        * 2. Indicates that this p element will be added to the html as a <p> tag
        * 3. Defines the style of the new paragraph as green with white text
        * 4. Appends this new Paragrapj to the parent
     * Then, use the forEach function to define that for all of the exisitng p tags in allPTagsThree there will be a corresponding array for the newly created paragraph using our custom function
     */

    /*************************************** */
    /* 2: GRID OF BOXES */
    /* 2A: Create another new function: function customNewBoxCreate(parent){ //body }*/

    /* 2B: In the body of customNewBoxCreate create a new div element, that has the class testDiv.
    */
    /* 2C:Then append this new element to the parent variable within the function.
*/
    /* 2D:Finally, return</code> this new element */

    /* 2E:Create a nested for loop (for rows and columns) to iterate through 10 columns and 10 rows (just like the JS Review :)).
        Call the customNewBoxCreate function, in order to generate a new div -> representing each cell in the grid. 
        Ensure that the parent element for each of these new divs is the element whose id is named `new-grid`*/

    /* 2F: You will see at this point that the x,y position of the resulting divs makes no sense...
        Fix this by doing the following: every time you call customNewBoxCreate() - save the current returned element 
        in a variable i.e. returnedDiv. 
        Set the style (left and top) to the of this element to 
        the necessary x and y position (use the counter variables in the for nested for loop to 
        calculate the new positions.
        
    /* 2G: BONUS I: Make every div in the resulting grid in an even numbered row have white background 
        and otherwise let it have a background of purple.</li>
    /* 2H: BONUS II: For every div in an even numbered row make it contain the text `EVEN`, 
        otherwise lat it have the content `ODD`.*/

    /***CODE */
    function customNewBoxCreate(parent) {

        let newDiv = document.createElement("div");

        newDiv.classList.add("testDiv");

        newDiv.innerHTML = "NEW ELEMENT TWO";

        parent.append(newDiv);

        return newDiv

    };

    let rowNumbers = 9;
    let columnNumbers = 9;

    let newDivID = (document.querySelector("#new-grid"));

    for (let row = 0; row <= rowNumbers; row++) {
        for (let column = 0; column <= columnNumbers; column++) {
            let returnedDiv = customNewBoxCreate(newDivID);
            returnedDiv.style.left = `${row * 40}px`;
            returnedDiv.style.top = `${column * 40}px`;
            if (column % 2 === 0) {
                returnedDiv.style.background = "cornflowerblue";
                returnedDiv.textContent = "EVEN"
            }
            else {
                returnedDiv.style.background = "white";
                returnedDiv.textContent = "ODD"

            }


            (customNewBoxCreate(newDivID));

        }
    }


    /***EXPLANATION::
     * First, we created a function that creates a new box, and appends it to the parent. It also adds it to the class list, adds text and retunrs the final newDiv. Next, 
     * two variables are created for the row and column numbers (we want 10 boxes in each), but an array starts at 0, so we wrote 9. After assigning the newDivId ID to the variable that will ne our new divs, we create a nested forloop.
     * This forloop goes through the array for the rows and columns, assigning the newDivId ID to each them of them, as well as chaning their styles.
     * 
     */

    /*************************************** */
    /* 3: GRID OF BOXES II */

    /* 3A: Create ANOTHER nested for loop - in order to generate a new grid ...
        USE the same customNewBoxCreate function..., the only difference is that the parent element 
        for each of these new divs is the element whose id is `new-grid-three`. */
    /* 3B: Then: write the code to check when a column is a multiple of 3 (no remainder),
        when it is a column where the remainder is 1 or when the remainder is 2 ... 
        HINT:: look up the % operator.. */
    /* 3C: Then for each of the above cases: give the new divs in the first case a background of red,
            then the second a background of orange and the third yellow. */
    /*  3D: Finally, let each div contain the text content representing the associated remainder
        when dividing by three. */

    /***CODE */

    // NOTE: using customBoc function from last question

    let rowNumbers3 = 9;
    let columnNumbers3 = 9;

    let newDivID03 = document.querySelector("#new-grid-three");

    for (let row = 0; row <= rowNumbers3; row++) {
        for (let column = 0; column <= columnNumbers3; column++) {
            let returnedDiv = customNewBoxCreate(newDivID03);
            returnedDiv.style.left = `${row * 40}px`;
            returnedDiv.style.top = `${column * 40}px`;
            if (row % 3 === 1) {
                returnedDiv.style.background = "red";

            }

            if (row % 3 === 2) {
                returnedDiv.style.background = "orange";

            }
            if (row % 3 === 0) {
                returnedDiv.style.background = "white";

            }
            (customNewBoxCreate(newDivID03));
            returnedDiv.textContent = row % 3;
        }
    }



    /***EXPLANATION::
     * Used the customNewBocCreate function already created in the last question
     * defined a new variable for the new div to be created
     * Used the same for loop as was used in the last question but with the names of the new variables asigned to the new grid
     * Used the % operator (information found on mozilla!) to calculate the remainder of the divided row number by 3
     * Displayed the text content of the returned Div as the row % 3
     */

    /*************************************** */
    /*** END PART THREE CREATE */
    /*************************************** */





}

