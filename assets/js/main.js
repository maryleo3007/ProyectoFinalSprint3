alert ('Scroll horizontal realizado: '+window.pageYOffset||document.body.scrollTop);
document.getElementById('toggle').addEventListener("click",function(e){
  e.preventDefault();
  var navBar =  document.getElementById('header');
  navBar.classList.toggle("open");
  document.getElementById('body').classList.toggle("overflow-hidden");
});

var ultimaPosScroll = 0;
window.addEventListener("scroll",function(){
  var posScroll = window.pageYOffset || document.body.scrollTop;
  if(posScroll>ultimaPosScroll){
    document.getElementById("header").classList.remove("header-in");
    document.getElementById("header").style.opacity = 0;

  }else{
    document.getElementById("header").classList.add("header-in");
    document.getElementById("header").classList.add("solid");
    document.getElementById("header").style.opacity = 1;
    if(posScroll<=3){
      document.getElementById("header").classList.remove("solid");
      document.getElementById("header").classList.remove("header-in");
    }

  }
  ultimaPosScroll =posScroll;
},false);
