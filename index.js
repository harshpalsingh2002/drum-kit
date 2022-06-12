// listening to the events

var numbersOfDrumButtons=document.querySelectorAll(".drum").length;

for(var i = 0 ; i<=numbersOfDrumButtons; i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function() {
  
  var buttonInnerHtml = this.innerHTML;

  makeSound(buttonInnerHtml);
  buttonAnimation(buttonInnerHtml);
});

document.addEventListener("keydown",function(event){

  var key = event.key;

  makeSound(key);
  buttonAnimation(key);

});

}
// listening to keyboard events



// making sound 
  
  function makeSound (key){

    switch (key) {
    
      case "a":
  
        var audio = new Audio('./sounds/tom-1.mp3');
  
        audio.play();
  
        break;
  
      case "s":
  
        audio = new Audio('./sounds/tom-2.mp3');
  
        audio.play();
  
        break;
  
      case "d":
  
        audio = new Audio('./sounds/tom-3.mp3');
        
        audio.play();
  
        break;
  
      case "f":
        
        audio = new Audio('./sounds/tom-4.mp3');
        
        audio.play();
        break;
  
      case "j":
        
      audio = new Audio('./sounds/crash.mp3');
  
      audio.play();
  
        break;
  
      case "k":
      
        audio = new Audio('./sounds/snare.mp3');
  
        audio.play();
  
        break;
  
      case "l":
      
      audio = new Audio('./sounds/kick-bass.mp3');
  
      audio.play();
  
        break;
  
    }
  }

// animate buttons

function buttonAnimation(currentKey){

  var activeButton=document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100

  );

}
                                                                                                      