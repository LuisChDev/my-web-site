const DB = {
  english: {
    home: {
      title: "Get Things Done.",
      body: `Hello. My name is Luis (without the 'o'), and I like to Get Things
      Done™. I try, at least. Welcome to my website. It only took me <s> four
      months</s> three weeks or so to get this website up and running, and
      I'll get YOUR website online just as fast. <u>As long as I get my
      coffee that is.</u> Did I mention I like to have coffee near
      midnight? Anyway, I'm currently enrolled at the FreeCodeCamp Institution,
      and LOVING every second of it. I do all kinds of coding, from the servers
      to the browsers, all the way to the build automation (and editor
      customization). The next page will illustrate this.`,
    },

    skills: {
      title: "WASD to move. P to crush. destroy all the bricks!",
    },

    projects: {
      title: "Know my strengths",
      body: `Many different technologies are in use today, on the ever expanding
tech ecosystem. I try to keep up with the latest in front-end technology, as well
as back-end engines, databases and everything else. <s>They just keep coming</s>
Here's a (non exhaustive) list of the frameworks, languages and libraries I know,
and can use in building your next hit website.`,
      buttons: {
        back: "back",
        forward: "foward",
      },
    },

    contact: {
      title: "Contact me",
      body: `I try to keep up with events in Twitter and Stackoverflow. Checkout
some of my projects on Github. You can also mail me using the link to the left.`,
    },

    skillList: [
      {name: "Javascript",
       description: "This is the language that powers the interactivity " +
       "on this site. Dynamic, prototype-based, the engine of the Web.",
       logo: "javascript",
      },

      {name: "HTML5",
       description: "This technology enables the Web as we know it. The " +
       "latest iteration, HTML5, allows to include audio and video directly " +
       "into websites.",
       logo: "html",
      },

      {name: "CSS3",
       description: "This web technology allows developers to define " +
       "the look-and-feel of websites to a very fine degree. CSS3 comes with " +
       "advanced capabilities, including 3D shapes and animations.",
       logo: "css",
      },

      {name: "Python",
       description: "This programming language is widely used in a " +
       "variety of settings. It sees use in the data science/machine learning " +
       "scene, but it has also seen a rise in popularity among back-end web" +
       "development.",
       logo: "python",
      },

      {name: "Git",
       description: "The leading version control system in industry. " +
       "Decentralized, flexible, it gives developers the tools required for " +
       "safely modifying and growing their codebases while collaborating with " +
       "people, both in the workplace and across the globe.",
       logo: "git",
      },

      {name: "PostgreSQL",
       description: "Perhaps the most comprehensive relational " +
       "database engine employed in mainstream applications. It complies " +
       "faithfully to the SQL specification, while allowing to easily scale " +
       "up to larger userbases.",
       logo: "postgresql",
      },

      {name: "MySQL",
       description: "This relational database engine is wildly popular and " +
       "serves many websites around the world.",
       logo: "mysql",
      },

      {name: "React.js",
       description: "This web framework enables us to have large-scale, " +
       "single-page applications on the net. It powers this website.",
       logo: "react",
      },
    ],
  },

  español: {
    home: {
      title: "Hacer Las Cosas.",
      body: `Hola. My nombre es Luis. y me gusta Hacer Las Cosas™. (Suena mejor
      en inglés :/) Bienvenido a mi sitio web. Sólo me tomó <s>cuatro meses</s>
      tres semanas más o menos terminar y montar este sitio, y puedo poner TU
      sitio en línea igual de rápido. <u>Siempre y cuando me tome mi café</u>.
      ¿Mencioné que tomo café a las doce de la noche? De todas formas, Estoy
      estudiiando ahora mismo en FreeCodeCamp.org y <b>disfrutando</b> cada
      segundo. Hago todo tipo de programas, del servidor al navegador,
      incluyendo el proceso de compilación (y configurar editores de texto). La
      próxima página es una demostración.`,
    },

    skills: {
      title: "WASD para moverte. P para atacar. Destruye todos los ladrillos!",
    },

    projects: {
      title: "Conoce mis fortalezas",
      body: `Muchas tecnologías diferentes están en uso hoy, en el ecosistema informático en constante expansión. Trato de mantenerme al tanto con lo último en sistemas front-end, así como motores back-end, bases de datos y todo lo demás. <s>Nunca se acaban</s> Aquí ha una lista (no exhaustiva) de los frameworks, lenguajes y bibliotecas que conozco, y puedo usar para construir tu próximo sitio exitoso.`,
      buttons: {
        back: "anterior",
        forward: "siguiente",
      }
    },

    contact: {
      title: "Contáctame",
      body: `Trato de mantenerme al tanto de las cosas en Twitter y stackOverflow. Puedes ver algunos de mis proyectos en Github. También puedes enviarme un correo usando el enlace a la izquierda.`,
    },

    skillList: [
      {name: "Javascript",
       description: `Este lenguaje está detrás de la interactividad de esta
página. Dinámico, basado en prototipos, el motor de la Web.`,
       logo: "javascript",
      },

      {name: "HTML5",
       description: `Esta tecnología permite a la Web existir en su forma
actual. La última iteración, HTML5, permite incluir audio y video directamente
en los sitios web.`,
       logo: "html",
      },

      {name: "CSS3",
       description: `Esta tecnología web le permite a los desarrolladores definir
el Look-and-feel de los sitios web a un grado muy alto de precisión. CSS3 viene
con capacidades avanzadas, incluyendo formas 3D y animaciones.`,
       logo: "css",
      },

      {name: "Python",
       description: `Este lenguaje de programación es usado considerablemente en
una amplia variedad de situaciones. Se emplea en el área de ciencia de datos y
aprendizaje de máquina, pero también ha visto un aumento en popularidad en
el desarrollo back-end de los sitios web.`,
       logo: "python",
      },

      {name: "Git",
       description: `El sistema de control de versiones líder en la industria.
Descentralizado, flexible, le da a los desarrolladores las herramientas para
modificar y expandir sus repositorios de código de manera segura, mientras
colaboran con otras personas, tanto de su entorno laboral como del resto del
mundo.`,
       logo: "git",
      },

      {name: "PostgreSQL",
       description: `Quizá el motor de base de datos relacional más
comprehensivo empleado en aplicaciones comerciales. cumple fielmente la
especificación SQL, al mismo tiempo permitiendo escalar las aplicaciones
a una mayor cantidad de usuarios.`,
       logo: "postgresql",
      },

      {name: "MySQL",
       description: `Este motor de base de datos relacional es muy popular y
sirve a muchos sitios web alrededor del mundo.`,
       logo: "mysql",
      },

      {name: "React.js",
       description: `Este framework web permite tener aplicaciones de una
sola página a gran escala en internet. Está detrás de este sitio`,
       logo: "react",
      },
    ],
  },
};

export {DB};

