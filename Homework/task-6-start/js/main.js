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
      let newDelimiter = /["".?!\n]/
      let phrase_as_array = document.getElementById("phrase").value.split(newDelimiter);
      let rainbow_tokens = originalRainBowText.split(newDelimiter);

      runPartC(rainbow_tokens, phrase_as_array);




    }
  }


  /****** PART C:: POEM CREATION  */
  function runPartC(rainbow_words, seed_phrase_array) {



    let rainbowLength = rainbow_words.length;
    let poem_sentence = "";
    for (let seedArray = 0; seedArray < seed_phrase_array.length; seedArray++) {
      let word = seed_phrase_array[seedArray];
      let wordArrayL = word.length;
      for (let j = 0; j < wordArrayL; j++) {
        let char = word.charAt(j);
        // console.log(char);
        for (let k = 0; k < rainbowLength; k++) {
          let outputWord = rainbow_words[k];
          let rainbowChar = outputWord.charAt(j);

          if (rainbowChar === char) {
            if (poem_sentence === "") {
              poem_sentence += outputWord;
              break;
            }
            else {
              poem_sentence = + "" + outputWord;
              break;
            }
          }
          console.log();
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

  }

  /****** PART E:: RESET  */
  function resetPoem() {
    /*** TO FILL IN */

  }
} //window onload


