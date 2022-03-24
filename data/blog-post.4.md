Facebook lanzó React en 2013. Es una biblioteca de código abierto para proyectos de JavaScript, que permite a los desarrolladores crear aplicaciones web e interfaces de usuario. A pesar de ser relativamente nueva, React se ha vuelto enormemente popular y ha ganado una gran comunidad.

React tiene una gran variedad de beneficios para los desarrolladores. Algunos de ellos son:

Es fácil de aprender.
Es fácil de usar con un proyecto.
Es flexible.
Tiene componentes reutilizables.
Es de alto rendimiento.
Es flexible.
Mejora la productividad.
Ofrece estabilidad de código.
Ofrece muchas herramientas para el desarrollador.
Tiene un vasto ecosistema.
Facilita un fuerte desarrollo web.
Muchas de las principales empresas del mundo, incluidas varias empresas de Fortune 500, utilizan React.
<img src="https://www.educative.io/v2api/editorpage/6452289848475648/image/5294398307303424" alt="" className="card-img-top" />

<h1>Cero configuración</h1>
Next.js logra proveer de un entorno de cero configuración asumiendo unas pocas cosas sobre la estructura de tu aplicación en el sistema de archivos, una de estas es que necesitamos crear una carpeta pages en la raíz de nuestro proyecto y cada archivo dentro de esa carpeta va a ser una ruta.

Gracias a esto Next.js nos provee de un sistema de rutas, separación de código por ruta, actualizaciones de código sin necesidad de recargar y no tener que configurar nuestros entry points de WebPack ya que Next.js ya sabe donde buscar nuestros archivos.

Solo JavaScript, todo es una función
Cada ruta de nuestra aplicación no es más que un archivo de JavaScript que exporta un componente de React, el cual puede ser tan simple como una función y puede a su vez importar más componentes hechos sencillamente con funciones para que nuestra aplicación no sea otra cosa más que muchas funciones compuestas.

Incluso cuando se trata de estilizar nuestra aplicación Next.js nos provee de un sistema de CSS en JS llamado styled-jsx (creado especialmente para Next.js) que nos permite escribir nuestros estilos directo en JS haciendo uso de todo el poder de CSS.

¿Lo mejor de styled-jsx? Sólo genera el CSS necesario para los componentes renderizados (tanto en el servidor como en el cliente) y una vez un componente se deja de usar se quita su CSS, nunca vamos a tener más CSS del necesario y todo este va a estar hecho específicamente para nuestros componentes, es imposible que se pisen estilos.



<h1>Deploy sencillo</h1>
¿Cómo hacemos para llevar nuestra aplicación a producción? Con sólo correr el comando next build que nos da el framework ya tenemos una carpeta (llamada .next) con el código listo para producción, subimos eso a un servidor (el que sea) y corremos next start y listo.

¿Aún más fácil? Con now.sh simplemente configuramos los comandos build y start para que ejecuten next build y next start respectivamente y luego corremos now desde nuestra computadora, en unos minutos vamos a tener nuestra aplicación en producción, con HTTP/2 y auto escalable.
