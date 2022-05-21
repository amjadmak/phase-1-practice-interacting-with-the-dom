window.addEventListener('DOMContentLoaded', (event) => {
const counter = document.querySelector('#counter');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const heart = document.querySelector('#heart');
const pause = document.querySelector('#pause');
const restart = document.querySelector('#restart');
const comments = document.querySelector('#list'); ///
const form = document.querySelector('#comment-form')  ///
let count = parseInt(counter.innerText);
const likesList = document.querySelector('.likes');

var repeatedLikes = [];

    // Counting on the screen
    let counting = 
         setInterval(() => {
            counter.innerText = count += 1;
        }, 1000); 

    // Add the minus/Plus button
    minus.addEventListener('click', () => {
        if (count > 0) {
            counter.innerText = count -= 1;
        }
    });
    plus.addEventListener('click', () => {
        if (count > 0) {
            counter.innerText = count += 1;
        }})

    // Add functionality of the heart button
    heart.addEventListener('click', () => {
        if (repeatedLikes.includes(count)) {
            const repeatedLike =  document.getElementById(`num${count}`).children[0]
            repeatedLike.innerText = parseInt(repeatedLike.innerText) + 1;
        }
         else {
            repeatedLikes.push(count);
            likesList.innerHTML += `<li id= num${count}> ${count} has been liked <span>1</span> time</li>`;
            
        }
    }
)

// Handling the pause Button

var playing = true;
pause.addEventListener('click', () => {
    if (playing) {
    playing = false;
    clearInterval(counting);
    minus.disabled = true;
    plus.disabled = true;
    heart.disabled = true;
    pause.innerText = "Resume";
    }
    else {
        counting = 
        pause.innerText = "Pause";
         setInterval(() => {
            counter.innerText = count += 1;
        }, 1000);
        playing = true
        heart.disabled = false;
        minus.disabled = false;
        plus.disabled = false;
    }
});

// creating a list in the comments section
console.log(form)
const ul = document.createElement('ul')
comments.appendChild(ul)

// Handling comments
const input = document.getElementById('comment-input');

form.addEventListener('submit', (e) => {
e.preventDefault();
console.log(input.value)
comments.firstChild.innerHTML += `<li>${input.value}</li>`;
input.value = '';
})

// creating a restart button
restart.addEventListener('click', () => {
    
    repeatedLikes = [];
    likesList.innerHTML = '';
    comments.firstChild.innerHTML = '';
    window.clearInterval(counting);
    counter.innerText = count = 0;
    input.value = '';
    counting = 
         setInterval(() => {
            counter.innerText = count += 1;
        }, 1000); 

})
})
