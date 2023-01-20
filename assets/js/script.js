var timeEl = document.getElementById('time');
var startButton = document.querySelector("#start");

//timer
function countdown() {
    var timeLeft = 10;
  
    var timeInterval = setInterval(function () {
      timeLeft--;
      timeEl.textContent = timeLeft
  
      if(timeLeft == 0){
        clearInterval(timeInterval);
        
    }
    }, 1000);
  
  
    };

startButton.addEventListener("click", function(){
    countdown();    
      
  }
);
