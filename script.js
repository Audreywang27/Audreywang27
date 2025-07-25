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

slideshow("base-button", ".base-slideshow");  
slideshow("hat-button", ".hat-slideshow"); 
slideshow("face-button", ".face-slideshow"); 
slideshow("clothes-button", ".clothes-slideshow-one");
slideshow("shoes-button", ".shoes-slideshow-two");

setBaseClass("flamingo");