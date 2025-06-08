const nicknameSubmitter = document.getElementById('nicknameSubmitter');
const greetingDiv = document.getElementById('greeting');
function greetUser(){
    const nickname = document.getElementById('nickname');
    const userName = nickname.value.trim(); 

    if(userName){
        //I want to add something in front of this that makes it wait a second before printing
        greetingDiv.textContent = "Well well well...welcome to Aura Land, " + userName;
        typeGreeting()

    }else{
        greetingDiv.textContent = "Erm...so you actually have to enter a name, yk...";
    }
}
nicknameSubmitter.addEventListener('click', greetUser);