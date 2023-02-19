const url = "http://127.0.0.1:3000/dictionary/";
const update = document.getElementById('update');
const word = document.getElementById('word');
const meaning = document.getElementById('meaning');

update.addEventListener("click", e => {
  e.preventDefault()
  axios
    .post(url + "update", JSON.stringify({ word: word.value, meaning: meaning.value }), {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      result.innerHTML = `<h3>${response.data.message}</h3>`;
    })
    .catch((error) => {
      console.log(error.response.data.error)
      result.innerHTML = `<h3 class="error">${error.response.data.message}</h3>`;
    });
})