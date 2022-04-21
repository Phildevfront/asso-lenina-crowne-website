var wrapper = document.getElementById('wrapper');
function switchVisible() {
    wrapper.classList.toggle('switched');
}
document.getElementById('button').addEventListener('click', switchVisible);
  
