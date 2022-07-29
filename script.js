async function fetchAdvice() {
    let wisdomNugget = await fetch('https://api.adviceslip.com/advice')
        .then(res => res.json());

    console.log(wisdomNugget);
    var adviceDisplay = document.createElement('p');
    adviceDisplay.innerHTML = wisdomNugget.slip.advice; 

    var adviceWrapper = document.getElementById ("adviceWrapper");
    adviceWrapper.appendChild(adviceDisplay);
}

fetchAdvice();

// Method to make text appear bigger when mouse hovers
function sizeUpName(title) {
    console.log(title.style.width)
    title.style.fontSize = "50px";
    title.style.color = "green";
}

function sizeUpTitle(title){
    console.log(title)
    title.style.fontSize ="20px";
    title.style.color= "green";
}

function restoreOriginalName(title){
    title.style.color = "black";
    title.style.fontSize ="40px";
}

function restoreOriginalTitle(title){
    title.style.color = "black";
    title.style.fontSize ="16px";
}
    


