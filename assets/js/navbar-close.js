document.addEventListener('DOMContentLoaded', function(){
    var links = document.querySelectorAll('.nav-menu li a');
    for(var x=0; x<links.length; x++){
        links[x].onclick = function(){
            document.querySelector('.menu-toggle').click();
        }
    }
});