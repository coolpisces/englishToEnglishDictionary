const word = document.getElementById('word');
const button = document.querySelector('button');
const translatedDiv = document.getElementById('translatedDiv');
const title = document.getElementById('title');
const meaning = document.getElementById('meaning');
const audio = document.getElementById('audio');
const error = document.querySelector('.error');

async function fetchApi() {

    error.style.display = 'none'
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word.value}`;
    const result = await fetch(url).then(res => res.json());
    console.log(result)
    if (result.message) {
        error.style.display = 'block';
        translatedDiv.style.display = 'none';
        error.textContent = result.message;
    } else {
        translatedDiv.style.display = 'block';
        title.textContent = result[0].word;
        meaning.textContent = result[0].meanings[0].definitions[0].definition;
        audio.src = result[0].phonetics[0].audio;

    }
}



button.addEventListener('click', fetchApi);
