// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// EMPTY_HEART.addEventListerner('click', ()=>{mimicServerCall()})
document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.getElementById("modal");
  const errorMessage = document.getElementById("modal-message");
  const hearts = document.querySelectorAll(".like-glyph");

  errorModal.classList.add("hidden"); // Hide error modal initially

  hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          // Simulate successful server response
          heart.classList.toggle("activated-heart");
          heart.innerText = FULL_HEART;

        })
        .catch(() => {
          // Simulate failed server response
          errorMessage.innerText = "Server Error. Please try again later.";
          errorModal.classList.remove("hidden");

      setTimeout(() => {
        errorModal.classList.add("hidden");
      }, 3000);
    });
});
  });
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
