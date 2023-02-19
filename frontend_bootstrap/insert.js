const url = "http://127.0.0.1:3000/dictionary/";
const insert = document.getElementById('insert');
const word = document.getElementById('word');
const meaning = document.getElementById('meaning');

insert.addEventListener("click",e=>{
  e.preventDefault()
  axios
    .post(url + "insert", JSON.stringify({ word: word.value, meaning: meaning.value }), {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      console.log("deleted successfully")
      result.innerHTML = `<h3>${response.data.message}</h3>`;
    })
    .catch((error) => {
        console.log(error.response.data.message)
        result.innerHTML = `<h3 class="error">${error.response.data.message}</h3>`;
      });
})