function slideshow(buttonId, slideshowSelector){
    let index = 0; 

    document.getElementById(buttonId).addEventListener("click", () => {
        var slides = document.querySelectorAll(`${slideshowSelector} .slide`);

        slides.forEach(slide => {
            slide.classList.remove("active");
        });
        
        index = (index + 1) % slides.length;

        slides[index].classList.add("active");

        if (buttonId === "base-button"){
            const baseNames = ["flamingo", "panda", "tiger", "wolf", "eagle"];
            const currentBase = baseNames[index];
            setBaseClass(currentBase);
        }
  

    });
}

function setBaseClass(baseName){
    var imageBox = document.getElementById("image-box");
    imageBox.classList.remove("flamingo-active", "panda-active", "tiger-active", "wolf-active", "eagle-active");
    imageBox.classList.add(`${baseName}-active`);

}

/*This is audio stuff*/
var btn1 = document.getElementById("finished-button");

var doneSound = new Audio("Audio/wow.mp3");

doneSound.preload = "auto";

btn1.addEventListener("click", () =>{
    doneSound.currentTime = 0;
    doneSound.play();
});

/* Confetti Class, imported from Library*/
const jsConfetti = new JSConfetti();

document.getElementById("finished-button").addEventListener("click", () =>{
    jsConfetti.addConfetti();
});


var btn2 = document.getElementById("playButton");

var backgroundMusic = new Audio("Audio/Carefree.mp3");

backgroundMusic.preload = "auto";

btn2.addEventListener("click", () =>{
    backgroundMusic.currentTime = 0;
    backgroundMusic.play();
});

let clickCount = 0;

btn2.addEventListener("click", () =>{
    clickCount++;

    if(clickCount === 1){
        btn2.textContent = "Pause Music";
    }else{
        btn2.textContent = "no pauses :D";
    }
})
/*End of audio stuff */

slideshow("base-button", ".base-slideshow");  
slideshow("hat-button", ".hat-slideshow"); 
slideshow("face-button", ".face-slideshow"); 
slideshow("clothes-button", ".clothes-slideshow-one");
slideshow("shoes-button", ".shoes-slideshow-two");

setBaseClass("flamingo");

