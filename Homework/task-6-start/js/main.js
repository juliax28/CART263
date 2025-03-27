window.onload = run;

function run() {
  document.querySelector("#stepOneButton").addEventListener("click", fetchText);


  /****** PART A:: FETCH */

  async function fetchText() {
    console.log("in fetch");
    let raw_rainbow_text = "";
    try {
      let response = await fetch('files/rainbow.txt');
      let raw_rainbow_text = await response.text();
      document.querySelector("#resetButton").addEventListener("click", resetPoem);
      document.querySelector("#stepOneButton").style.display = "none";
      document.querySelector("#inputDiv").style.display = "block";
      document.getElementById("rainbow_text").textContent = raw_rainbow_text;
      runPartB(raw_rainbow_text);
      // console.log(raw_rainbow_text);

    } catch (e) { console.log(e); }
  }

  /****** PART B:: TEXT PROCESSING  */
  function runPartB(originalRainBowText) {
    document
      .querySelector("#produce-poem")
      .addEventListener("click", producePoem);

    /* FILL IN HERE */
    function producePoem() {
      //console.log(originalRainBowText);
      let newDelimiter = /[" ".?!\n]/
      let phrase_as_array = document.getElementById("phrase").value.split(newDelimiter);
      let rainbow_tokens = originalRainBowText.split(newDelimiter);

      runPartC(rainbow_tokens, phrase_as_array);




    }
  }


  /****** PART C:: POEM CREATION  */
  function runPartC(rainbow_tokens, seed_phrase_array) {


    let poem_sentence = "";

    for (let seedArray = 0; seedArray < seed_phrase_array.length; seedArray++) {
      let nextWord = seed_phrase_array[seedArray];
      // console.log(seed_phrase_array);
      for (let j = 0; j < nextWord.length; j++) {
        let nextChar = nextWord[j];
        
        for (let k = 0; k < rainbow_tokens.length; k++) {
          let outputWord = rainbow_tokens[k];


          if (outputWord[j] === nextChar) {
            poem_sentence += outputWord + " ";
            
            break;
          }

        }
      }



    }

    //to next stage
    runPartD(poem_sentence);
  }


  /****** PART D:: VISUALIZE  */
  function runPartD(new_sentence) {
    let outputDiv = document.querySelector("#output");
    outputDiv.style.display = "block";
    //result is poem_sentence, find each element in the array and then find charAt I guess?
    outputDiv.innerHTML = new_sentence;
    //letter array
    let letterArray = [];

    // console.log(runPartC(rainbow_words, seed_phrase_array));
    for (let j = 0; j < new_sentence.length; j++) {
      let letter = new_sentence.charAt(j);
      let letterDiv = document.createElement("div");
      letterDiv.classList.add("letterPos");

      letterDiv.innerHTML = letter;
      letterDiv.style.color = '#' +(Math.random()*0xFFFFFF << 0).toString(16).padStart(6, '0');
      letterDiv.style.fontSize = Math.random() * 5 + 'em';
      console.log(letterDiv.style.fontSize);
      letterDiv.style.left = `${j * 1.5}px`;

    //   requestAnimationFrame(mousemove);
    //    addEventListener("mousemove", function (e) {
    //     mouseOffsetX = parseInt(e.clientX);
    //     mouseOffsetY = parseInt(e.clientY);

    // });

      
      // letterDiv.style.top = `${j * 40}px`;
      // outputDiv.appendChild(letterDiv);
      letterArray.push(letterDiv);
      
           
  }
// deleting the original new sentence string
outputDiv.innerHTML = "";

  for (let i = 0; i < letterArray.length; i ++){
    outputDiv.appendChild(letterArray[i]);
    // console.log(letterArray[i]);
      }


}

  /****** PART E:: RESET  */
  function resetPoem() {
    /*** TO FILL IN */

  }
} //window onload


