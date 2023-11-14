var imll = document.getElementById("iml").value;
var pssl = document.getElementById("pss").value;

var a1 = "https://smkibu.github.io/dmi-xiimm1/";
var a2 = "/index.html";
var aku = ["LATIF", "Mahyu", "Mahyu", "adit", "afdal-iman", "Farel", "denzkece12", "fajar", "Mahyu", "fatirrr", "Mahyu", "toni", "yoga", "zainal", "alfian", "Mahyu", "black", "anggaraja", "aril", "arip", "Baretha", "boby", "DANDA", "dimasafandi", "black", "dimas", "dion", "DWI", "erwin", "farhanm", "Farhan", "Robi", "Vaik172", "febri diansah", "foldercoba", "adiatis"];
  
function sub() {
    imll = document.getElementById("iml").value;
    pssl = document.getElementById("pss").value;
    
    imll = parseInt(imll.replace(/[@]/g, ''));
    imll = imll - 6704;
    
    
    var a3 = "<iframe class='fr' src='" + a1 + aku[imll] + a2 + "'></iframe>";
    localStorage.setItem('dataA3', a3);
    localStorage.setItem('dataA2', aku[imll]);
    
    window.location.href = "cavenweb.html";
    
    console.log(imll + pssl + "adalah login anda " + aku[imll] + a3);
    }

//cavenweb
