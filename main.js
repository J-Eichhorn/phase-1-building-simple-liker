// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let heart = document.querySelectorAll('span.like-glyph');

function activateHeart(item) {
  if (item.innerText === EMPTY_HEART) {
    item.innerText = FULL_HEART;
    item.classList.add('activated-heart')
  } else if (item.innerText === FULL_HEART) {
    item.innerText = EMPTY_HEART;
    item.classList.remove('activated-heart');
  }
}

heart.forEach((item) => {
item.addEventListener('click', () => {
    mimicServerCall()
    .then(() => {
      return activateHeart(item);
    })
    .catch((error) => {
      let hidden1 = document.getElementById('modal');
      setTimeout(() => {
        hidden1.classList.add('hidden');
      }, 3000)
      hidden1.classList.remove('hidden')
      document.getElementById("modal-message").innerText = error;
    })
  })
})

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
