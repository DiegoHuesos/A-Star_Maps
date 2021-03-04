//Lista de ciudades
const ciudades100 = ["Mexico City", "Querétaro", "Cuernavaca", "Mérida", "Colima", "Veracruz"];
var ciudades = ciudades100;
var flag = false;

//Función que añade las ciudades a los DropDownList
function anadir() {
  var comboBoxOrigen = document.getElementById("ciudades_origen");
  var comboBoxDestino = document.getElementById("ciudades_destino");
  var optionA, optionB;
  for (i=0; i<ciudades.length; i++){
    optionA = document.createElement("option");
    optionB = document.createElement("option");
    optionA.text = ciudades[i];
    optionB.text = ciudades[i];
    optionA.value = ciudades[i];
    optionB.value = ciudades[i];
    comboBoxOrigen.add(optionA);
    comboBoxDestino.add(optionB);
  }
}

//Se añade la función anterior al eventListener de carga del DOM
addEventListener('DOMContentLoaded', (event) => {
  anadir();
  console.log('The DOM is fully loaded.');
});

//Método que envía las ciudades seleccionadas al backend y espera la respuesta
function sendSelectedOptions(){
  var comboBoxOrigen = document.getElementById("ciudades_origen");
  var comboBoxDestino = document.getElementById("ciudades_destino");
  var origen = comboBoxOrigen.value;
  var destino = comboBoxDestino.value;
  console.log(origen);
  console.log(destino);

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("demo").innerHTML =
      var alpha = this.responseText;
      var ar = alpha.replace('[', '').replace(']', '').replaceAll('"', '').split(','); // split string on comma space
      console.log( ar );
      ciudades = ar;
      flag = true;
      initMap();
    }
  };
  xhttp.open("GET", "selected_cities"+"?"+"origen="+origen+"&destino="+destino, true);
  xhttp.send();
}


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
let map;

function initMap() {
  var geocoder = new google.maps.Geocoder();
  const myLatLng = { lat:  23.0000000,  lng: -102.0000000 };

  //const myLatLng = { lat: -25.363, lng: 131.044 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: myLatLng,
  });



  function pinSymbol(color) {
    return {
        path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
        fillColor: color,
        fillOpacity: 0.5,
        strokeColor: '#000',
        strokeWeight: 2,
        scale: 1,
   };
}

  const lines = [];
  //Colocar los marcadores de las ciudades en el mapa:
  for(let i = 0; i< ciudades.length; i++){
    geocoder.geocode({        //Con Geocode obtenemos las coordenadas de las ciudades:
        "address": ciudades[i]
      }, 
      function(results, status) {
        if(status == 'OK'){
          if( i == 0  & flag == true ){
            new google.maps.Marker({
              position: results[0].geometry.location,
              map,
              label: "" + i,
              title: ciudades[i],
              icon: pinSymbol("green")
            });
          }else if( i == ciudades.length-1 & flag == true ){
            new google.maps.Marker({
              position: results[0].geometry.location,
              map,
              label: "" + i,
              title: ciudades[i],
              icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
            });
          }
          else{
            new google.maps.Marker({
              position: results[0].geometry.location,
              map,
              label: "" + i,
              title: ciudades[i],
            });
          }
          
        lines.push(results[0].geometry.location);
        }
    });
  }
  
  const linesPath = new google.maps.Polyline({
    path: lines,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  linesPath.setMap(map);

  //Marcador con imagen como ícono
  /*
  new google.maps.Marker({
    position: {  lat:  23.0000000,  lng: -101.0000000 },
    map,
    title: "Hello World!",
    icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
  });
  */

}
