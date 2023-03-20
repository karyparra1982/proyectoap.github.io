function mouseOver() {
    document.getElementById("this").style.color = "#f7a7ab";
  }
  
  function mouseOut() {
    document.getElementById("this").style.color = "#551014";
  }

  document.getElementById('boton').addEventListener('click', function() {
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML ="27 de Diciembre de 1982";
  });
  
  document.getElementById('boton_dom').addEventListener('click', function() {
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML ="Belisario Roldán 868, El Palomar.";
  });
  
  document.getElementById('boton_mail').addEventListener('click', function() {
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML ="beapyar1982@gmail.com";
  });
  
  document.getElementById('boton_tel').addEventListener('click', function() {
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML ="+54 9 11 21881204";
  });