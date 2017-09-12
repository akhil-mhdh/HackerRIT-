
                                      /*function for hr logo mouse movement */
document.addEventListener('DOMContentLoaded', function(){
  let wrapper = document.getElementById('wrapper');
  let topLayer = wrapper.querySelector('.top');
  let handle = wrapper.querySelector('.handle');
  let skew = 0;
  let delta = 0;

  if(wrapper.className.indexOf('skewed') != -1){
    skew = 1000;
  }
  
  wrapper.addEventListener('mousemove', function(e){
    delta = (e.clientX - window.innerWidth / 2) * 0.5;
  
    handle.style.left = e.clientX + delta + 'px';

    topLayer.style.width= e.clientX + skew + delta + 'px';
  });
});
                      /*function for gallery */
function showImg(n) {
  var i;
  var imgs = document.getElementsByClassName("images");
  console.log(imgs.length)
  var dots = document.getElementsByClassName("dot");
  if (n > imgs.length) {index = 1;}
  if (n < 1) {index = imgs.length}
  for (i = 0; i < imgs.length; i++) {
      imgs[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  imgs[index-1].style.display = "block";
  dots[index-1].className += " active";
} 
var index = 1;
showImg(index);

function imgPos(n) {
  showImg(index += n);
}

function currentImg(n) {
  showImg(index=n)
}





