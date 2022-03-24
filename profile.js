export const skills= [
    // skills
    {
        icono:'https://img.icons8.com/color/48/000000/bootstrap.png',
        skill: 'Bootstrap',
        progress: 80,
    },

    {
        icono:'https://img.icons8.com/color/48/000000/javascript--v1.png',
        skill: 'Javascript',
        progress: 60,
    },

    {
        icono:'https://img.icons8.com/office/48/000000/react.png',
        skill: 'React',
        progress: 80,
    },

    {
        icono:'https://img.icons8.com/plasticine/48/000000/oracle-pl-sql--v3.png',
        skill: 'sql- sql server - postgre sql',
        progress: 80,
    },

    {
        icono:'https://img.icons8.com/color/50/000000/c-sharp-logo-2.png',
        skill: 'c#',
        progress: 90,
    },
]
export const Estudios=[
    //Estudios
  
    {
        titulo:'Universidad Nacional Tecnológica Tecnico en Programacion',
        estado: 'En Curso',
        desde:2019,
        hasta:2021,
        descripcion:'2 Año faltan 4 materias y la tesis para egresar.'
    },
    {
        titulo:'U.N.C Analista Universitario de  Sistemas Informáticos',
        estado: 'Sin Finalizar, en pausa',
        desde:2014,
        hasta:2017,
        descripcion:'3 Año faltan 3 materias y la tesis para egresar.'
    },
]
 export const experiencia=[
    
     // experiencess
    {
        titulo:'Acl Tecnologies',
        desde:2020,
        hasta:'actualmente',
        descripcion:'Práctica Profesional de programación. Mi cargo es Practicante en el área de desarrollo.Practica en java, spring boot, c#, asp.net, mvc, razor.'+
        'herramientas de Microsoft Platform, Power automate, práctica en la automatización de tareas e'+
        'integración y conexión de distintas herramientas de Microsoft 360, utilización de herramientas de'+
        'inteligencia artificial con Azure y conexión con software de desarrollo propio en c#. Práctica en el'+
        'área de big data y DevOps, con java y Apache nifi, manejo de grandes volúmenes de información e'+
        'integración de distintas fuentes de información como bases de datos, otras páginas de internet.',
        referencias: 'Referencia: Dr Santiago Azocar',
        tel: 'Tel: +5493512049180'
    },
    {
        titulo:'Córdoba Joven y Lotería de Córdoba',
        desde:2015,
        hasta:'actualmente',
        descripcion:'Programa Jugar para Crecer y Crecer Jugando. Es un programa de reconocimiento internacional, orientado a promover a través de charlas  y actividades el uso responsable de las TIC (Tecnología de la Información y  Comunicación). En el que me encargaba de llevar a cabo charlas, coordinar actividades y gestionar información.',
        referencias: 'Referencia: Dr Santiago Azocar',
        tel: 'Tel: +5493512049180'
    },

 ]

 export const proyectos=[
    {
        nombre: 'Ong somos mas',
        descripcion: 'Desarrollo de una api en c#, las tecnologis utilizadas fueron jwt para el control de rol de ususario, SQL server para la gestion de base de datos, Send grid para el envio de mails, Amason web service para el guardado de imagenes y git hub para el versionado de codigo',
        imagen:'Alkemy.png', 
        repositorio:'https://github.com/ElizabethOlivera111174/Somos-Mas-Alkemy'
    },

    {
        nombre: 'Galeria de Imagenes',
        descripcion: 'Para este proyecto fue utilizado css, html y javascript. se utilizo la libreria muuri css y Lazzy Loading para la optimizacion de las imagenes',
        imagen:'Galeria.jpg',
        repositorio:'https://elizabetholivera111174.github.io/Galeria-Fotos/'
    },
    {
        nombre: 'Challenge Alkemy',
        descripcion: 'Desarrollo de una api en c#, las tecnologias utilizadas fueron JWT para el control de rol de ususario, Postgre SQL como motor de base de datos, SendGrid para el envio de mails',
        imagen:'Disney.jpg',
        repositorio:'https://github.com/ElizabethOlivera111174/ApiDisney'
    },
 ]
 export const foto=[
    {
        imagen:'Alkemy.png',
        titulo:'Alkemy: Ong Somos Mas',
        descripcion:'Somos Más es un centro comunitario que acompaña a más de 700 personas del barrio La Cava a través de las áreas de: Educación, deportes, primera infancia, salud, alimentación y trabajo social. ',
        alkemy: 'El objetivo del proyecto es desarrollar una api para la pagina web de la Ong, donde el cliente pueda ingresar los datos de la organizacion, eventos que realiza la organizacion, incluir datos de otras organizaciones que participan en el proyecto. La pagina web debe tener tipos de usuarios, administrador que se encarge del mantenimiento del sitio y debe poder agregar usuarios, los cuales podran dejar comentarios, fotos e historias.',
        tecnologias: 'Las tecnologias utilizadas para la realizacion de este proyecto fueron jwt para el control de usuarios, sql server como motor de base datos, Amazon web service para el guardado de imagenes, sendgrid para el envio de mails, utilizamos git para el versionado de codigo, utilizamos la metodogia scrum con la plataforma gira, utlizamos swagger para la documentacion e testeamos la aplicacion con Unit Test',
        repositorio:'https://github.com/ElizabethOlivera111174/Somos-Mas-Alkemy'
    },
    {
        imagen:'Galeria.jpg',
        titulo:'Galeria de Imagenes',
        descripcion:'Galeria de Imagenes es un proyecto creado por mi para guardar imagenes de mis viajes en bicilete y compartirlo con mis compañeros. Aparte de mi vida como programadora, mi hobby, es salir por las tardes y los fines de semana a andar en bicicleta y conocer lugares de Cordoba',
        tecnologias:'Las tecnologias utilizadas en este proyecto fueron basicamente javascript, html y css, tambien utilice algunas bibliotecas como muri para ordenar las imagens, tambien font awesome para las fuentes, etc',
        repositorio:'https://github.com/ElizabethOlivera111174/Galeria-Fotos'
    },
    {
        imagen:'Disney.jpg',
        titulo:'Api de Dysney',
        descripcion:'El proyecto Api de dysney fue el challenge de ingreso de alkemy, la consigna era crear una api donde se pudiera registar nombre de personaje, peliculas y generos, debia tener usuario administrador para la administracion, y envio de mails cuando un usuario se registrara en la pagina.',
        tecnologias:'Las tecnologias utilizadas en este proyecto fueron c#,jwt pra control de usurios, sengrid para el envio de mails, como motor de base de datos postgresql',
        repositorio:'https://github.com/ElizabethOlivera111174/DisneyV2'
    }
 ]
