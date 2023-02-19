const url = "http://127.0.0.1:3000/dictionary/";
const delete_word = document.getElementById('delete');
const word = document.getElementById('word');

delete_word.addEventListener("click",e=>{
  e.preventDefault()
  axios
      .delete(url + "delete", {
        headers: {
          "Content-Type": "application/json",
        },
        data: { word: word.value },
      })
      .then((response) => {
        result.innerHTML = `<h3>${response.data.message}</h3>`;
      })
      .catch((error) => {
        console.log(error.response.data.message)
        result.innerHTML = `<h3 class="error">${error.response.data.message}</h3>`;
      });
})

