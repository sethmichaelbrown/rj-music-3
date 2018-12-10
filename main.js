document.addEventListener('DOMContentLoaded', function(event) {
  console.log("It's Alive")
  M.AutoInit();


fab = document.getElementById("fab-menu");

var fabScroll = () => {
  let y = window.scrollY;
  console.log(y)
  if (y >= 10) {
    fab.setAttribute('class', 'fixed-action-btn')
  }
  else{
    fab.setAttribute('class', 'hide')
  }
}

window.addEventListener("scroll", fabScroll);



}) // DOMContentLoaded;
