var ultimaPosScroll = 0;
window.addEventListener("scroll",function(){
  var posScroll = window.pageYOffset || document.body.scrollTop;
  if(posScroll>ultimaPosScroll){
    document.getElementById("header").classList.add("header-in");


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

window.addEventListener("load",function() {
  var inputContainer = document.getElementById("inputContainer");
  inputContainer.style.display="none";

  var inputphone = document.getElementById("phone");
  inputphone.addEventListener("click",function() {
    if(inputContainer.style.display ==='none'){
        inputContainer.style.display="block";
    }else{
       inputContainer.style.display="none";
    }
    
  });

});
