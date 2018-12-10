document.addEventListener('DOMContentLoaded', (event) => {
  console.log("It's Alive")
  M.AutoInit();

  fab = document.getElementById("fab-menu");

  const fabScroll = () => {
    let y = window.scrollY
    if (y >= 10) {
      fab.setAttribute('class', 'fixed-action-btn')
    }
    else{
      fab.setAttribute('class', 'hide')
    }
  }

  window.addEventListener("scroll", fabScroll)



}) // DOMContentLoaded
