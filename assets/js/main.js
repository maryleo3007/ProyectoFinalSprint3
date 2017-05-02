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

var soloNumeros = function(e){
  var codigoTecla = e.keyCode;
  var longitud = this.value.length;
  if(longitud==1){
    console.log(this.nextElementSibling);
    this.nextElementSibling.focus();
  }
  if(codigoTecla>=48 && codigoTecla<=57 && this.value.length<=8){
    return true;
  }else{
    return false;
  }
}
var validarVacio = function (e) {
  if(this.value.trim().length==0){
    this.value ="";
    this.nextElementSibling= crearError();
  }else{
    this.nextElementSibling= "";
  }
}

function crearError(parent) {
  var span = document.createElement("span");
  span.setAttribute("class","span-error");

  var img = document.createElement("img");
  img.setAttribute("src","assets/img/error.png");

  span.appendChild(img);
  parent.appendChild(span);
}
function limpiarError(parent) {
  var span = document.createElement("span");
  span.setAttribute("class","limpiar-error");

  var img = document.createElement("img");
  img.setAttribute("src","assets/img/limpiar.png");

  span.appendChild(img);
  parent.appendChild(span);
}
var changeMayus = function() {
  var str = this.value.trim().replace(/\d/g, "").toLowerCase().replace(/\b\w/g, function(match) {
    return match.toUpperCase() + match.substring(1);
  });
  this.value = str;
}

window.addEventListener("load",function() {
  var inputstotales = document.getElementsByClassName("form-control");
  var inputphone = document.getElementById("phone");
  var inputname = document.getElementById("name");
  var email = document.getElementById("email");
  var city = document.getElementById("city");
  inputname.style.display="none";
  email.style.display="none";
  city.style.display="none";


  inputphone.addEventListener("click",function() {

    inputname.style.display="block";
    email.style.display="block";
    city.style.display="block";
    inputphone.onkeypress=soloNumeros;
  });

  inputname.addEventListener("click",function() {
    inputname.onblur = changeMayus;
      if(this.previousElementSibling.previousElementSibling.value.length == 0){
        this.previousElementSibling.previousElementSibling.classList.add("inputclass");
        crearError(this.previousElementSibling);
      }else{

        this.previousElementSibling.previousElementSibling.classList.remove("inputclass");
        limpiarError(this.previousElementSibling);
      }

  });
  email.addEventListener("click",function() {
      var expresion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/ ;
      if(this.previousElementSibling.previousElementSibling.value.length == 0 && !expresion.test(email.value)){
        this.previousElementSibling.previousElementSibling.classList.add("inputclass");
        console.log(this.previousElementSibling);
        crearError(this.previousElementSibling);
      }else{
        this.previousElementSibling.previousElementSibling.classList.remove("inputclass");
        limpiarError(this.previousElementSibling);

      }

  });
  city.addEventListener("click",function() {
      if(this.previousElementSibling.previousElementSibling.value.length == 0){
        this.previousElementSibling.previousElementSibling.classList.add("inputclass");
        console.log(this.previousElementSibling);
        crearError(this.previousElementSibling);
      }else{
        this.previousElementSibling.previousElementSibling.classList.remove("inputclass");
        limpiarError(this.previousElementSibling);
      }
  });

  var submitbtn = document.getElementById("submitbtn");
  submitbtn.addEventListener("click",function() {
    for(var i = 0; i<inputstotales.length;i++){
  		inputstotales[i].value="";
  	}
  });



});
