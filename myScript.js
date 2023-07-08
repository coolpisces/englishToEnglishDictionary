const word = document.getElementById('word');
const button = document.querySelector('button');
const translatedDiv = document.getElementById('translatedDiv');
const title = document.getElementById('title');
const meaning = document.getElementById('meaning');
const audio = document.getElementById('audio');
const error = document.querySelector('.error');


async function fetchApi() {

    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`;
    const result = await fetch(url).then(res => res.json());
    console.log(result);
    if (result.title) {
        translatedDiv.style.display = 'none';
        error.style.display = 'block';
        error.textContent = result.title;
    } else {
        title.textContent = result[0].word;
        meaning.textContent = result[0].meanings[0].definitions[0].definition;
        audio.src = result[0].phonetics[0].audio;
        translatedDiv.style.display = 'block'
        error.style.display = 'none';
    }
}

button.addEventListener('click', fetchApi);