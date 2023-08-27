/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link')

navLink.forEach(n => n.addEventListener('click',() =>{
    navMenu.classList.remove('show-menu')
}))

/*==================== ACCORDION SKILLS ====================*/
const skillContent = document.getElementsByClassName('skills_content'),
      skillArrow = document.getElementsByClassName('skills_arrow'),
      skillHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemClass = this.parentNode.className
/*
    for(i=0; i<skillContent.length; i++){
        skillContent[i].className = "skills_content skills_close"
    }
*/
    if(itemClass === "skills_content skills_close"){
        this.parentNode.className = "skills_content skills_open"
    }
    if(itemClass === "skills_content skills_open"){
        this.parentNode.className = "skills_content skills_close"
    }
}


skillHeader.forEach((h) => {h.addEventListener('click', toggleSkills)})


/*==================== QUALIFICATION TABS ====================*/





/*==================== CHANGE BACKGROUND HEADER ====================*/ 
window.addEventListener('scroll',function(){
    let header=this.document.querySelector("header");
    let windowPosition = window.scrollY>0;
    header.classList.toggle("navbar_on_scrolled",windowPosition);
})


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 


/*const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-brightness'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-brightness'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme) 
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'brightness_5'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.textContent.includes(iconTheme) ? 'brightness_4' : 'brightness_5'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  if (themeButton.textContent.includes(selectedIcon)){
    themeButton.textContent="brightness_5";
    }else{
    themeButton.textContent="brightness_4";
    }

}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    if (themeButton.textContent.includes("brightness_4")){
        themeButton.textContent="brightness_5";
    }else{
        themeButton.textContent="brightness_4";
    }

    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== GAMES  ====================*/

// var randomNumber = Math.floor(Math.random() * 101) + 1
// console.log(randomNumber)
// const UserNum = document.getElementById('guess_num')
// const messBG = document.getElementById('mess_section')
// function GuessTheValue(){

//     let myGuess = guess_num.value
//     if (myGuess == randomNumber) {
//         message.textContent = "You got it right!"
//         messBG.classList.remove('color_change_false_in_range10')
//         messBG.classList.add('color_change_true')

//     } else if (myGuess > randomNumber) {
//         if ((myGuess-randomNumber)<=10){
//             message.textContent = "Your guess was " + myGuess + ". That's too high. Try Again!"
//             messBG.classList.remove('color_change_true')
//             messBG.classList.remove('color_change_false_out_range30')
//             messBG.classList.add('color_change_false_in_range10')
//         }
//         else if((myGuess-randomNumber)>30){
//             message.textContent = "Your guess was " + myGuess + ". That's too high. Try Again!"
//             messBG.classList.remove('color_change_true')
//             messBG.classList.remove('color_change_false_in_range10')
//             messBG.classList.add('color_change_false_out_range30')
//         }


//     } else if (myGuess < randomNumber){
//         if ((randomNumber - myGuess)<=10){
//             message.textContent = "Your guess was " + myGuess + ". That's too low. Try Again!"
//             messBG.classList.remove('color_change_true')
//             messBG.classList.remove('color_change_false_out_range30')
//             messBG.classList.add('color_change_false_in_range10')
//         }
//         else if((randomNumber - myGuess)>30){
//             message.textContent = "Your guess was " + myGuess + ". That's too low. Try Again!"
//             messBG.classList.remove('color_change_true')
//             messBG.classList.remove('color_change_false_in_range10')
//             messBG.classList.add('color_change_false_out_range30')
//         }
//     }

// }

var randomNumber = Math.floor(Math.random() * 101) + 1
console.log(randomNumber)
const UserNum = document.getElementById('guess_num')
const messBG = document.getElementById('mess_section')
function GuessTheValue(){

    let myGuess = guess_num.value
    if (myGuess == randomNumber) {
        message.textContent = "You got it right!"
        messBG.style.backgroundColor="#99ff99";

    } else if (myGuess > randomNumber) {
        message.textContent = "Your guess was " + myGuess + ". That's too high. Try Again!"
        if ((myGuess-randomNumber)<=10){
            messBG.style.backgroundColor="#ff8f8f";
        }
        else if((myGuess-randomNumber)>30){
            messBG.style.backgroundColor="#a1e1ff";
        }else{
            messBG.style.backgroundColor="white";
        }


    } else if (myGuess < randomNumber){
        message.textContent = "Your guess was " + myGuess + ". That's too low. Try Again!"
        if ((randomNumber - myGuess)<=10){
            messBG.style.backgroundColor="#ff8f8f";
        }
        else if((randomNumber - myGuess)>30){
            messBG.style.backgroundColor="#a1e1ff";
        }else{
            messBG.style.backgroundColor="white";
        }
    }

}

function RestartGame(){
    let sreen = document.getElementById('guess_num')
               
    if(screen.value != ''){
        sreen.value = ''
    }
    if(message.textContent != ''){
        message.textContent = ''
    }
    messBG.style.backgroundColor=""
    randomNumber = Math.floor(Math.random() * 101) + 1
}



// var get_num = document.getElementById('guess_num');
// get_num.addEventListener("keypress", function(event){
//     if(event.keycode===13){
//         event.preventDefault();
//         document.getElementById("Guess").click();
//     }
// })


/*==================== SERVICE WORKERS  ====================*/



// Register the service worker
if ('serviceWorker' in navigator) {
  // Wait for the 'load' event to not block other work
    window.addEventListener('load', function() {
        navigator.serviceWorker
        .register('https://portfolio-wdos-final.web.app/service-worker.js')
        .then(reg => console.log('Service Worker: Registered'))
        .catch(err => console.log('Service Worker: Error:' + err))
    })
}

