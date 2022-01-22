let unsearch = document.getElementById('search_result')
let btn = document.getElementById('search')

search.onclick = function(){
    unsearch.style.display = 'flex'
  }

window.onclick = function(event) {
    if (event.target == unsearch) {
        unsearch.style.display = 'none'
    }
}