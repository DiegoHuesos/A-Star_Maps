s = "PIEDRAS_NEGRAS,LAGOS_DE_MORENO,CUAUHTEMOC,CIUDAD_DEL_CARMEN,COMITAN,GUANAJUATO,CHICOLOAPAN,CUAUTLA,CIUDAD_VALLES,MANZANILLO,CHILPANCINGO,SAN_PABLO_DE_LAS_SALINAS,SAN_LUIS_RIO_COLORADO,CHOLULA_DE_RIVADABIA,POZA_RICA_DE_HIDALGO,METEPEC,BUENAVISTA,CIUDAD_MADERO,SOLEDAD_DE_GRACIANO_SANCHEZ,CIUDAD_ACUNA,HEROICA_NOGALES,CAMPECHE,PUERTO_VALLARTA,HUIXQUILUCAN,MONCLOVA,SAN_JUAN_DEL_RIO,PLAYA_DEL_CARMEN,LOS_MOCHIS,TEXCOCO,CIUDAD_SANTA_CATARINA,CIUDAD_BENITO_JUAREZ,TEHUACAN,PACHUCA,COACALCO,OAXACA,CIUDAD_VICTORIA,CHALCO,TAMPICO,URUAPAN,COATZACOALCOS,TAPACHULA,GOMEZ_PALACIO,TEPIC,MINATITLAN,CIUDAD_GENERAL_ESCOBEDO,TECAMAC,CUERNAVACA,NICOLAS_ROMERO,NUEVO_LAREDO,TONALA,IRAPUATO,CIUDAD_OBREGON,CELAYA,SAN_NICOLAS_DE_LOS_GARZA,TULTITLAN_DE_MARIANO_ESCOBEDO,CIUDAD_LOPEZ_MATEOS,IXTAPALUCA,MAZATAN,MAZATLAN,CUAUTITLAN_IZCALLI,HEROICA_MATAMOROS,ENSENADA,CIUDAD_APODACA,XALAPA,TLAJOMULCO_DE_ZUNIGA,VERACRUZ,TLAQUEPAQUE,TUXTLA,CHIMALHUACAN,VILLAHERMOSA,DURANGO,TORREON,ACAPULCO_DE_JUAREZ,REYNOSA,CANCUN,TLALNEPANTLA,MORELIA,CULIACAN,QUERETARO,SALTILLO,HERMOSILLO,TOLUCA,SAN_LUIS_POTOSI,NAUCALPAN_DE_JUAREZ,CHIHUAHUA,MERIDA,AGUASCALIENTES,MEXICALI,NEZAHUALCOYOTL,ZAPOPAN,JUAREZ,LEON_DE_LOS_ALDAMA,PUEBLA,ECATEPEC,TIJUANA,MONTERREY,GUADALAJARA,CDMX"
arr = s.split(',')

for i in range(len(arr)):
    arr[i] = arr[i].replace("_", " ")

print (arr)

file1 = open('rf.txt', 'w') 
s = str(arr)
  
# Writing a string to file 
file1.write(s) 
  
  
# Closing file 
file1.close() 