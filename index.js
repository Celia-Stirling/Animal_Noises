var animals = document.querySelectorAll(".animal");

for (var i=0; i < animals.length; i++) {animals[i].addEventListener('click', function() {
  playSound(this.id[0]);
  animalAnimation(this.id[0]);
});
}

document.addEventListener("keydown", function() {
  playSound(event.key);
  animalAnimation(event.key);
})

function playSound(animal) {
  switch (animal) {
    case "p":
      var pig = new Audio("sounds/pig.mp3")
      pig.play();
      break;
    case "c":
      var cow = new Audio("sounds/cow.mp3")
      cow.play();
      break;
    case "h":
      var hen = new Audio("sounds/hen.mp3")
      hen.play();
      break;
    case "d":
      var dog = new Audio("sounds/dog.mp3")
      dog.play();
      break;
    case "s":
      var sheep = new Audio("sounds/sheep.mp3")
      sheep.play();
      break;
    default: console.log(animal);

  }
}

function animalAnimation(key) {
  var currentAnimal = document.querySelector("." + key);
  currentAnimal.classList.add("pressed");
  setTimeout(function() {
    currentAnimal.classList.remove("pressed");
  }, 100)
}
