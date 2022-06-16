// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const likes = document.getElementsByClassName("like");
const error = document.getElementById("modal");
console.log(likes);



for (const like of likes) {
  like.addEventListener("click", () => {
    mimicServerCall()
      .then(res => {
        const icon = like.childNodes[1];
        if(icon.textContent==FULL_HEART){
          icon.textContent=EMPTY_HEART;
        }
        else{
          icon.textContent = FULL_HEART;
        }
        icon.classList.toggle("activated-heart");
      })
      .catch(() => {
        error.classList.remove("hidden")
        setTimeout(function () { 
          error.classList.add("hidden");
        }, 3000);
      });
  });
}
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
