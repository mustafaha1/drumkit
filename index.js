var numberOfDrums = document.querySelectorAll('.drum').length;

for (i = 0; i < numberOfDrums; i++){

    document.querySelectorAll('.drum')[i].addEventListener('click', function (){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
        
    });
}

document.addEventListener('keypress', function(e){
    makeSound(e.key);
    buttonAnimation(e.key);
});

function makeSound(key){
    switch (key) {
        case 'w':
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;

        case 'a':
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;

        case 's':
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;

        case 'd':
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;

        case 'k':
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;

        case 'l':
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        default:
            alert('you have to pess a key');
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector('.' + currentKey);
    activeButton.classList.add('pressed');

    setTimeout(function(){
        activeButton.classList.remove('pressed');
    }, 100);
}




// var audio = new Audio('sounds/tom-1.mp3');
//         audio.play();

// function clickHandeler(){
//     alert('i got clicked');
// }

// var developer1 = {
//     name: 'mustafa',
//     years_experience: '3 years',
//     age: 32,
//     languages: ['javaScript', 'php', 'Jquer']
// }


// function Developer(name, years_experience, languages, workprimit){
//     this.name = name;
//     this.years_experience = years_experience;
//     this.languages = languages;
//     this.workprimit = workprimit;
// }
// var developer10 = new Developer('nazanin', 4, ['php', 'java ',' node']);
// alert('this is the new develioper name ' + developer10.name);




