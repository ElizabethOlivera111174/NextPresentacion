# <h1>Requisitos Previos</h1>

1.1 Instalar JDK https://www.oracle.com/cl/java/technologies/javase-jdk11-downloads.htm
Agregue JAVA_HOME en variables de entorno
Una vez que haya instalado el JDK 8, debemos configurar la variable del sistema en las variables de entorno. Abra Variables de entorno desde el menú Inicio.
Si usted ya tiene agregada la variable de entorno en windows no hace falta que realice este procedimiento.


<br>
<img src="https://firebasestorage.googleapis.com/v0/b/datanete-comerce.appspot.com/o/variables%20de%20entorno.png?alt=media&token=707fc298-ca63-4137-9e9c-24d409134950" alt="" className="card-img-top" />

Haga clic en nuevo y asigne un nuevo nombre de variable del sistema JAVA_HOME y elija el directorio de jre 1.8.


<br>


<img src="https://firebasestorage.googleapis.com/v0/b/datanete-comerce.appspot.com/o/javaHome.png?alt=media&
token=7621db8f-409d-42ea-bfa5-fe68df1c5256" alt="" className="card-img-top" />

<br>

Cuando haya agregado la variable del sistema, haga clic en Aceptar.


<br>

<img src="https://firebasestorage.googleapis.com/v0/b/datanete-comerce.appspot.com/o/nifiInstall.png?alt=media&token=323e3211-bd48-4b8f-9e41-e2a46c78a3a1" alt="" className="card-img-top" />


<br>
<br>

<h2>1.2  Descargue Apache Nifi</h2>

Vaya al sitio web oficial y haga clic en el archivo zip debajo de binarios. Al momento de escribir este blog, la última versión.
<br>

<img src="https://firebasestorage.googleapis.com/v0/b/datanete-comerce.appspot.com/o/instalacion.png?alt=media&token=8cd8fdf2-7911-443d-bf5f-20162a7adbad" alt="" className="card-img-top" />

<br>

Descomprime el archivo y así quedará la estructura de carpetas.

<br>
<img src="https://firebasestorage.googleapis.com/v0/b/datanete-comerce.appspot.com/o/archivo1.png?alt=media&token=ef67b9c0-643e-43fa-a5fb-6f5d512d3fc4" alt="" className="card-img-top" />
<br>
<br>

<h2>1.3 Compruebe las Configuraciones</h2> 

Abra la carpeta conf y abra el nifi.properties archivo. Desplázate hasta las propiedades web. Tome nota del host y el puerto donde se ejecutará el NiFi.

<br>

<img src="https://firebasestorage.googleapis.com/v0/b/datanete-comerce.appspot.com/o/archivo2.png?alt=media&token=a638a96d-e94a-44eb-a6c9-5d2ba292604e" alt="" className="card-img-top" />

Si desea puede cambiar la dirección 127.0.0.1 por localhost y utilizar la URL: https://localhost:8443/nifi/ .

<h2>1.4 Ejecutar Nifi </h2>
Vaya a la carpeta bin y abra la línea de comando desde allí.


<br>
<img src="https://firebasestorage.googleapis.com/v0/b/datanete-comerce.appspot.com/o/archivo3.png?alt=media&token=ef631de9-3446-40e4-9a6b-b3df1709b6f3" alt="" className="card-img-top" />

<br>
Para iniciar el NiFi, puede hacer doble clic directamente en el run-nifi.batarchivo. O simplemente puede escribir el nombre del archivo en el símbolo del sistema.

<br>
<img src="https://firebasestorage.googleapis.com/v0/b/datanete-comerce.appspot.com/o/archivo4.png?alt=media&token=baeff6fa-75e9-48b4-80a1-1b797f74ee23" alt="" className="card-img-top" />

Si la línea de comando produce una ID de proceso, eso significa que su NiFi se está ejecutando. También puede verificar el estado de NiFi si se está ejecutando o no ejecutando el status-nifi.batarchivo.

Vaya a la siguiente URL: https://127.0.0.1:8443/nifi/ para verificar si NiFi se ha iniciado. Su puerto puede ser diferente. No se preocupe si esta URL no se carga al instante. NiFi toma tiempo después de comenzar. Crea las carpetas del repositorio en la ubicación raíz.


<br>
<img src="https://firebasestorage.googleapis.com/v0/b/datanete-comerce.appspot.com/o/archivo5.png?alt=media&token=f2e4eac8-33ef-4d70-bc19-875a22e633f1" alt="" className="card-img-top" />


A continuación se muestra la pantalla de inicio de sesión que verá.


<br>
<img src="https://firebasestorage.googleapis.com/v0/b/datanete-comerce.appspot.com/o/archivo7.png?alt=media&token=b4b839be-9966-40f7-9f08-0a625fc5fa18" alt="" className="card-img-top" />
Ahora, ha iniciado sesión correctamente.



<br>
<img src="https://https://firebasestorage.googleapis.com/v0/b/datanete-comerce.appspot.com/o/archivo11.png?alt=media&token=f7551749-8b82-4321-9eeb-7593bb539d93" alt="" className="card-img-top" />
<br>
