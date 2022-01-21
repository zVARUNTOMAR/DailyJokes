const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('btn-joke');

generateJoke();

function generateJoke() {
    fetch('https://icanhazdadjoke.com/',{
        headers: {'Accept': 'application/json'}
    }).then(response => response.json()).then(data => joke.textContent = data.joke );
}

jokeBtn.addEventListener('click',()=>generateJoke());