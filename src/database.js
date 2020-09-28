const DB = {
  english: {
    navbar: {
      home: "Home",
      skills: "Game",
      projects: "My Skills",
      contact: "Contact me",
    },

    home: {
      title: "Get Things Done.",
      body: `My name is Luis. I'm a developer from Cartagena, Colombia.
this is my personal website. take a look around and see if there's anything you
like. I'm currently a student at the Universidad Tecnológica de Bolívar, but I'm
interested in junior developer positions, starting in 2021.`,
    },

    skills: {
      warning: "Move your phone sideways to play!",
      title: "WASD to move. P to crush. destroy all the bricks!",
      mobile: `Press the arrow keys to move. Use the blue button to attack.
destroy all the bricks!`
    },

    projects: {
      title: "Know my strengths",
      body: `Many different technologies are in use today, on the ever expanding
tech ecosystem. I try to keep up with the latest in front-end technology, as
well as back-end engines, databases and everything else. Here's a (non exhaustive)
 list of the frameworks, languages and libraries I know, and can use in building
your next hit website.`,
      buttons: {
        back: "back",
        forward: "foward",
      },
    },

    contact: {
      title: "Contact me",
      body: `I try to keep up with events in Github and Stackoverflow. Checkout
some of my projects on my profile. You can also mail me using the link on this
page.`,
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

      {name: "SQL databases",
       description: `Relational databases are the backbone of most of today's
websites. Nowadays we mainly employ servers like MySQL, Postgres, or SQLite.`,
       logo: "sql",
      },

      {name: "React.js",
       description: "This web framework enables us to have large-scale, " +
       "single-page applications on the net. It powers this website.",
       logo: "react",
      },
    ],
  },

  español: {
    navbar: {
      home: "Inicio",
      skills: "Juego",
      projects: "Mis Habilidades",
      contact: "Contáctame",
    },

    home: {
      title: "Resolviendo las Cosas.",
      body: `Mi nombre es Luis. Soy un desarrollador de Cartagena, Colombia.
Este es mi sitio web personal. Aquí puedes descubrir mis habilidades de
programación y decidir si soy una buena opción para tu proyecto.
Soy actualmente un estudiante en la Universidad Tecnológica de Bolívar, pero
estoy interesado en posiciones de desarrollador Junior, empezando en 2021.
`,
    },

    skills: {
      warning: "Pon tu celular de lado para jugar!",
      title: "WASD para moverte. P para atacar. Destruye todos los ladrillos!",
      mobile: `Toca las flechas para moverte. Presiona el botón azul para atacar.
 destruye todos los ladrillos!`,
    },

    projects: {
      title: "Conoce mis fortalezas",
      body: `Muchas tecnologías diferentes están en uso hoy, en el ecosistema
      informático en constante expansión. Trato de mantenerme al tanto con lo
      último en sistemas front-end, así como motores back-end, bases de datos y
      todo lo demás. Aquí ha una lista (no exhaustiva) de
      los frameworks, lenguajes y bibliotecas que conozco, y puedo usar para
      construir tu próximo sitio exitoso.`,
      buttons: {
        back: "anterior",
        forward: "siguiente",
      }
    },

    contact: {
      title: "Contáctame",
      body: `Trato de mantenerme al tanto de las cosas en Github y
      stackOverflow. Puedes ver algunos de mis proyectos en Github. También
      puedes enviarme un correo usando el enlace en esta página.`,
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

      {name: "Bases de datos SQL",
       description: `Las bases de datos relacionales forman la columna vertebral
de la mayoría de los sitios web modernos. Hoy en día, se emplean principalmente
servidores como MySQL, Postgres, o SQLite.`,
       logo: "sql"},

      {name: "React.js",
       description: `Este framework web permite tener aplicaciones de una
sola página a gran escala en internet. Está detrás de este sitio`,
       logo: "react",
      },
    ],
  },
};

export {DB};

