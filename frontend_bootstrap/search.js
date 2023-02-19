const url = "http://127.0.0.1:3000/dictionary/";
const search = document.getElementById('search');
const word = document.getElementById('word');

search.addEventListener("click",e=>{
    e.preventDefault()
    let r = axios
    .get(url+"search?word="+word.value)
    .then((response) => {
        const data = response.data;
        console.log(data.wordData.word);
        console.log(data.wordData.meaning);
  
        result.innerHTML = `
          <div class="word">
            <h3>${data.wordData.word}</h3>
          </div>
          <p class="word-meaning">
            ${data.wordData.meaning}
          </p>`;
      })
      .catch((error) => {
          console.log(error.response.data.message)
          result.innerHTML = `<h3 class="error">${error.response.data.message}</h3>`;
        });
})