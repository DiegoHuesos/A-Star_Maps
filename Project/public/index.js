//Lista de ciudades
const dic_ciudades = { PIEDRAS_NEGRAS : { lat : 28.7,  lng : -100.5231},  LAGOS_DE_MORENO : { lat : 21.3564,  lng : -101.9292},  CUAUHTEMOC : { lat : 28.405,  lng : -106.8667},  CIUDAD_DEL_CARMEN : { lat : 18.6333,  lng : -91.8333},  COMITAN : { lat : 16.2511,  lng : -92.1342},  GUANAJUATO : { lat : 21.0178,  lng : -101.2567},  CHICOLOAPAN : { lat : 19.4167,  lng : -98.9},  CUAUTLA : { lat : 18.8167,  lng : -98.95},  CIUDAD_VALLES : { lat : 21.9833,  lng : -99.0167},  MANZANILLO : { lat : 19.0522,  lng : -104.3158},  CHILPANCINGO : { lat : 17.55,  lng : -99.5},  SAN_PABLO_DE_LAS_SALINAS : { lat : 19.6656,  lng : -99.0917},  SAN_LUIS_RIO_COLORADO : { lat : 32.4767,  lng : -114.7625},  CHOLULA_DE_RIVADABIA : { lat : 19.0633,  lng : -98.3064},  POZA_RICA_DE_HIDALGO : { lat : 20.5333,  lng : -97.45},  METEPEC : { lat : 19.2511,  lng : -99.6047},  BUENAVISTA : { lat : 19.6083,  lng : -99.1694},  CIUDAD_MADERO : { lat : 22.25,  lng : -97.8333},  SOLEDAD_DE_GRACIANO_SANCHEZ : { lat : 22.1833,  lng : -100.9333},  CIUDAD_ACUNA : { lat : 29.3242,  lng : -100.9317},  HEROICA_NOGALES : { lat : 31.3186,  lng : -110.9458},  CAMPECHE : { lat : 19.85,  lng : -90.5306},  PUERTO_VALLARTA : { lat : 20.6667,  lng : -105.2667},  HUIXQUILUCAN : { lat : 19.3611,  lng : -99.3508},  MONCLOVA : { lat : 26.9103,  lng : -101.4222},  SAN_JUAN_DEL_RIO : { lat : 20.3833,  lng : -99.9833},  PLAYA_DEL_CARMEN : { lat : 20.6275,  lng : -87.0811},  LOS_MOCHIS : { lat : 25.7835,  lng : -108.9937},  TEXCOCO : { lat : 19.52,  lng : -98.88},  CIUDAD_SANTA_CATARINA : { lat : 25.6833,  lng : -100.45},  CIUDAD_BENITO_JUAREZ : { lat : 25.65,  lng : -100.0833},  TEHUACAN : { lat : 18.4617,  lng : -97.3928},  PACHUCA : { lat : 20.1,  lng : -98.75},  COACALCO : { lat : 19.6333,  lng : -99.0931},  OAXACA : { lat : 17.0833,  lng : -96.75},  CIUDAD_VICTORIA : { lat : 23.7333,  lng : -99.1333},  CHALCO : { lat : 19.2647,  lng : -98.8975},  TAMPICO : { lat : 22.2553,  lng : -97.8686},  URUAPAN : { lat : 19.4208,  lng : -102.0628},  COATZACOALCOS : { lat : 18.15,  lng : -94.4333},  TAPACHULA : { lat : 14.9,  lng : -92.2667},  GOMEZ_PALACIO : { lat : 25.5611,  lng : -103.4983},  TEPIC : { lat : 21.5083,  lng : -104.8931},  MINATITLAN : { lat : 17.9833,  lng : -94.55},  CIUDAD_GENERAL_ESCOBEDO : { lat : 25.7933,  lng : -100.1583},  TECAMAC : { lat : 19.7131,  lng : -98.9683},  CUERNAVACA : { lat : 18.9186,  lng : -99.2342},  NICOLAS_ROMERO : { lat : 19.5833,  lng : -99.3667},  NUEVO_LAREDO : { lat : 27.4861,  lng : -99.5069},  TONALA : { lat : 20.6167,  lng : -103.2333},  IRAPUATO : { lat : 20.6667,  lng : -101.35},  CIUDAD_OBREGON : { lat : 27.4939,  lng : -109.9389},  CELAYA : { lat : 20.5222,  lng : -100.8122},  SAN_NICOLAS_DE_LOS_GARZA : { lat : 25.75,  lng : -100.2833},  TULTITLAN_DE_MARIANO_ESCOBEDO : { lat : 19.645,  lng : -99.1694},  CIUDAD_LOPEZ_MATEOS : { lat : 19.55,  lng : -99.2833},  IXTAPALUCA : { lat : 19.3186,  lng : -98.8822},  MAZATAN : { lat : 29.0167,  lng : -110.1333},  MAZATLAN : { lat : 23.22,  lng : -106.42},  CUAUTITLAN_IZCALLI : { lat : 19.65,  lng : -99.25},  HEROICA_MATAMOROS : { lat : 25.8797,  lng : -97.5042},  ENSENADA : { lat : 31.8578,  lng : -116.6058},  CIUDAD_APODACA : { lat : 25.7833,  lng : -100.1833},  XALAPA : { lat : 19.54,  lng : -96.9275},  TLAJOMULCO_DE_ZUNIGA : { lat : 20.4736,  lng : -103.4431},  VERACRUZ : { lat : 19.1903,  lng : -96.1533},  TLAQUEPAQUE : { lat : 20.6167,  lng : -103.3167},  TUXTLA : { lat : 16.7528,  lng : -93.1167},  CHIMALHUACAN : { lat : 19.4167,  lng : -98.9},  VILLAHERMOSA : { lat : 17.9892,  lng : -92.9281},  DURANGO : { lat : 24.0167,  lng : -104.6667},  TORREON : { lat : 25.5394,  lng : -103.4486},  ACAPULCO_DE_JUAREZ : { lat : 16.8636,  lng : -99.8825},  REYNOSA : { lat : 26.0922,  lng : -98.2778},  CANCUN : { lat : 21.1606,  lng : -86.8475},  TLALNEPANTLA : { lat : 19.5367,  lng : -99.1947},  MORELIA : { lat : 19.7683,  lng : -101.1894},  CULIACAN : { lat : 24.8069,  lng : -107.3939},  QUERETARO : { lat : 20.5875,  lng : -100.3928},  SALTILLO : { lat : 25.4333,  lng : -101.0},  HERMOSILLO : { lat : 29.0989,  lng : -110.9542},  TOLUCA : { lat : 19.2925,  lng : -99.6569},  SAN_LUIS_POTOSI : { lat : 22.1511,  lng : -100.9761},  NAUCALPAN_DE_JUAREZ : { lat : 19.4753,  lng : -99.2378},  CHIHUAHUA : { lat : 28.6353,  lng : -106.0889},  MERIDA : { lat : 20.97,  lng : -89.62},  AGUASCALIENTES : { lat : 21.876,  lng : -102.296},  MEXICALI : { lat : 32.6633,  lng : -115.4678},  NEZAHUALCOYOTL : { lat : 19.4,  lng : -98.9889},  ZAPOPAN : { lat : 20.7167,  lng : -103.4},  JUAREZ : { lat : 31.7386,  lng : -106.487},  LEON_DE_LOS_ALDAMA : { lat : 21.1167,  lng : -101.6833},  PUEBLA : { lat : 19.0333,  lng : -98.1833},  ECATEPEC : { lat : 19.6097,  lng : -99.06},  TIJUANA : { lat : 32.525,  lng : -117.0333},  MONTERREY : { lat : 25.6667,  lng : -100.3},  GUADALAJARA : { lat : 20.6767,  lng : -103.3475},  CDMX : { lat : 19.4333,  lng : -99.1333}};
const ciudades100 = ['PIEDRAS NEGRAS', 'LAGOS DE MORENO', 'CUAUHTEMOC', 'CIUDAD DEL CARMEN', 'COMITAN', 'GUANAJUATO', 'CHICOLOAPAN', 'CUAUTLA', 'CIUDAD VALLES', 'MANZANILLO', 'CHILPANCINGO', 'SAN PABLO DE LAS SALINAS', 'SAN LUIS RIO COLORADO', 'CHOLULA DE RIVADABIA', 'POZA RICA DE HIDALGO', 'METEPEC',  'CIUDAD MADERO', 'SOLEDAD DE GRACIANO SANCHEZ', 'CIUDAD ACUNA', 'HEROICA NOGALES', 'CAMPECHE', 'PUERTO VALLARTA', 'HUIXQUILUCAN', 'MONCLOVA', 'SAN JUAN DEL RIO', 'PLAYA DEL CARMEN', 'LOS MOCHIS', 'TEXCOCO', 'CIUDAD SANTA CATARINA', 'CIUDAD BENITO JUAREZ', 'TEHUACAN', 'PACHUCA', 'COACALCO', 'OAXACA', 'CIUDAD VICTORIA',  'TAMPICO', 'URUAPAN', 'COATZACOALCOS', 'TAPACHULA', 'GOMEZ PALACIO', 'TEPIC', 'MINATITLAN', 'CIUDAD GENERAL ESCOBEDO', 'TECAMAC', 'CUERNAVACA', 'NICOLAS ROMERO', 'NUEVO LAREDO', 'TONALA', 'IRAPUATO', 'CIUDAD OBREGON', 'CELAYA', 'SAN NICOLAS DE LOS GARZA', 'TULTITLAN DE MARIANO ESCOBEDO', 'CIUDAD LOPEZ MATEOS', 'IXTAPALUCA', 'MAZATAN', 'MAZATLAN', 'CUAUTITLAN IZCALLI', 'HEROICA MATAMOROS', 'ENSENADA', 'CIUDAD APODACA', 'XALAPA', 'TLAJOMULCO DE ZUNIGA', 'VERACRUZ', 'TLAQUEPAQUE', 'TUXTLA', 'CHIMALHUACAN', 'VILLAHERMOSA', 'DURANGO', 'TORREON', 'ACAPULCO DE JUAREZ', 'REYNOSA', 'CANCUN', 'TLALNEPANTLA', 'MORELIA', 'CULIACAN', 'QUERETARO', 'SALTILLO', 'HERMOSILLO', 'TOLUCA', 'SAN LUIS POTOSI', 'NAUCALPAN DE JUAREZ', 'CHIHUAHUA', 'MERIDA', 'AGUASCALIENTES', 'MEXICALI', 'NEZAHUALCOYOTL', 'ZAPOPAN', 'JUAREZ', 'LEON DE LOS ALDAMA', 'PUEBLA', 'ECATEPEC', 'TIJUANA', 'MONTERREY', 'GUADALAJARA', 'CDMX'];
var ciudades = ciudades100.sort();
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

  origen = origen.replaceAll(' ', '_'); 
  destino = destino.replaceAll(' ', '_'); 

  console.log(origen);
  console.log(destino);

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("demo").innerHTML =
      var alpha = this.responseText;
      console.log(alpha);
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
    zoom: 4.5,
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

  var lines = [];
  //Colocar los marcadores de las ciudades en el mapa:
  for(let i = 0; i< ciudades.length; i++){
    geocoder.geocode({        //Con Geocode obtenemos las coordenadas de las ciudades:
        "address": ciudades[i]
      }, 
      function(results, status) {
        if(status == 'OK'){
          console.log(results[0].geometry.location);
          if( flag == true ){
            if(i==0){
              new google.maps.Marker({
                position: results[0].geometry.location,
                map,
                label: "" + i,
                title: ciudades[i],
                icon: pinSymbol("green")
              });
            }else if(i==ciudades.length-1){
              new google.maps.Marker({
                position: results[0].geometry.location,
                map,
                label: "" + i,
                title: ciudades[i],
                icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
              });
            }else{
              new google.maps.Marker({
                position: results[0].geometry.location,
                map,
                label: "" + i,
                title: ciudades[i],
              });
            } 
          }

          else{
            new google.maps.Marker({
              position: dic_ciudades[ciudades[i].replaceAll(' ','_')],  //results[0].geometry.location,
              map,
              label: "" + i,
              title: ciudades[i],
            });
          }
          
          lines.push(results[0].geometry.location);
        }else{
          console.log("error: " + ciudades[i] );
        }
    });
  }
  console.log(lines);
  const path = lines;
  const linesPath = new google.maps.Polyline({
    path: path,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
    map: map
  });

  //linesPath.setMap(map);

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
