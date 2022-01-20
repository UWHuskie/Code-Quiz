// Setting a variable.
var unorderedList = document.getElementById("unordered-list")

// Creating a function.
function displayScores() {

  // Creating another variable.
      var savedScores = JSON.parse(localStorage.getItem("HighScore")) || []

      // Starting a For loop.
      for (let i = 0; i < savedScores.length; i++){

        // Creating another variable.
      var liEl = document.createElement("li")
      
      // Adding the textual content to list element.
      liEl.textContent = savedScores[i].initials+ ": " + savedScores[i].score

      // Sending the unorderedlist to be displayed.
      unorderedList.appendChild(liEl)
      }
    }
    // Calling the function.
    displayScores()
    