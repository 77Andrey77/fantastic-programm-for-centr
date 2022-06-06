
var image = document.querySelector('#image img');
document.getElementById('project-type').onchange = function(){
  image.src=document.getElementById(this.options[this.selectedIndex].getAttribute('data-img')).src;
}