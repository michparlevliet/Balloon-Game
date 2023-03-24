window.onload = function () {

// VARIABLES
  var sky = document.getElementById("sky");
  var grass = document.getElementById("grass");
  var clouds = document.getElementById("clouds");
  var stars = document.getElementById("stars");

  var playButton = document.getElementById("play-button");
  var pauseButton = document.getElementById("pause-button");
  var resumeButton = document.getElementById("resume-button");

// PLAY/PAUSE/RESUME LOGIC
  playButton.onclick = function() {
    sky.classList.toggle("play");
    grass.classList.toggle("play");
    clouds.classList.toggle("play");
    stars.classList.toggle("play");
    playButton.style.display = "none";
    pauseButton.style.display = "block";
  }
  pauseButton.onclick = function() {
    sky.classList.toggle("play");
    clouds.classList.toggle("play");
    stars.classList.toggle("play");
    pauseButton.style.display = "none";
    resumeButton.style.display = "block";
  }
  resumeButton.onclick = function() {
    sky.classList.toggle("play");
    clouds.classList.toggle("play");
    resumeButton.style.display = "none";
    pauseButton.style.display = "block";
  }

// JQUERY FOR ARROW CONTROLS (SNIPPET FROM STACKOVERFLOW: https://stackoverflow.com/questions/4950575/how-to-move-a-div-with-arrow-keys)
// // I CHANGED IT SO IT WOULD ONLY CONTROL LEFT/RIGHT MOVEMENTS OF THE BALLOON AND SO THE BALLOON WOULD MOVE FASTER
 
var pane = $('#sky'),
    box = $('#balloon'),
    maxValue = pane.width() - box.width(),
    keysPressed = {},
    distancePerIteration = 7;

  function calculateNewValue(oldValue, keyCode1, keyCode2) {
    var newValue = parseInt(oldValue, 10)
                   - (keysPressed[keyCode1] ? distancePerIteration : 0)
                   + (keysPressed[keyCode2] ? distancePerIteration : 0);
    return newValue < 0 ? 0 : newValue > maxValue ? maxValue : newValue;
}

  $(window).keydown(function(event) { keysPressed[event.which] = true; });
  $(window).keyup(function(event) { keysPressed[event.which] = false; });

  setInterval(function() {
    box.css({
        left: function(index ,oldValue) {
            return calculateNewValue(oldValue, 37, 39);
        },
    });
  }, 20);
  
}