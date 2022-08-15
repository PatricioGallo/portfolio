const worksListEs = [
{
  id: 1,
  name: "Diseños 3D",
  subtitule: "Web para un emprendimiento",
  img: "iluminacion.png",
  p1: "Se diseño una Pagina Web desde cero para un emprendimiento de dieños de lamparas 3D. El cliente necesitaba dos paginas: una que muestre su descipcion y contacto, y la otra una tienda E-commerce para vender sus productos, con links a Mercadolibre",
  p2: "Para el diseno de la pagina se utilizo los lenguaje: HTML, CSS, JAVASCRIPT",
  p3: "Se puede ver el trabajo final, en el boton de VER PROYECTO y el codigo del mismo en el boton VER CODIGO, ambos en subidos en GITHUB",
  proyectLink: "https://patriciogallo.github.io/iluminacion/",
  codeLink: "https://github.com/PatricioGallo/iluminacion",
},{
    id: 2,
    name: "Fabrica Textil",
    subtitule: "Website para una fabrica textil",
    img: "TNPLATEX.png",
    p1: "Se realizo modificaciones para una pagina web de una empresa de la industria textil. El cliente necesitaba que se movieran algunos componentes de esta web, como asi tambien agregar nuevas imagenes, videos y formulario de contacto.",
    p2: "Para las modificaciones requeridas por el cliente, se utilizo lenguajes: HTML, CSS y JAVASCRIPT.",
    p3: "Se puede ver el trabajo final, en el boton de VER PROYECTO (el codigo no esta disponible por pedido del cliente).",
    proyectLink: "https://tnplatex.com/es/home/",
    codeLink: "",
  },
  {
    id: 3,
    name: "Portfolio Web",
    subtitule: "Proyecto propio",
    img: "portfolio.png",
    p1: "Se diseño una Pagina Web tipo portfolio, como proyecto propio para el uso de la misma.",
    p2: "Para el diseno de la pagina se utilizo los lenguaje: HTML, CSS y JAVASCRIPT",
    p3: "Se puede ver el trabajo final, en el boton de VER PROYECTO y el codigo del mismo en el boton VER CODIGO, ambos en subidos en GITHUB",
    proyectLink: "https://patriciogallo.github.io/portfolio/",
    codeLink: "https://github.com/PatricioGallo/portfolio",
  },
  {
    id: 4,
    name: "E-Commerce",
    subtitule: "Proyecto final de JS",
    img: "JS.png",
    p1: "Se desarrollo una Pagina Web del tipo E-COMMERCE, como proyecto final para el curso de programacion en lenguaje JAVASCRIPT, realizado en la plataforma CoderHouse",
    p2: "Para el diseno de la pagina se utilizo los lenguaje: HTML, CSS y JAVASCRIPT",
    p3: "Se puede ver el trabajo final, en el boton de VER PROYECTO y el codigo del mismo en el boton VER CODIGO, ambos subidos en GITHUB",
    proyectLink: "https://patriciogallo.github.io/ProyectoFinalJS/",
    codeLink: "https://github.com/PatricioGallo/ProyectoFinalJS",
  },
  {
    id: 5,
    name: "Web de vinos",
    subtitule: "Proyecto final de desarrollo web",
    img: "vinos.png",
    p1: "Se diseño una Pagina Web de vinos, como proyecto final para el curso de Desarrollo Web, realizado en la plataforma CoderHouse",
    p2: "Para el diseno de la pagina se utilizo los lenguaje: HTML y CSS",
    p3: "Se puede ver el trabajo final, en el boton de VER PROYECTO y el codigo del mismo en el boton VER CODIGO, ambos subidos en GITHUB",
    proyectLink: "https://patriciogallo.github.io/proyectofinal/",
    codeLink: "https://github.com/PatricioGallo/proyectofinal",
  },
  {
    id: 6,
    name: "Red Social",
    subtitule: "Proyecto propio",
    img: "socialweb.png",
    p1: "Se diseño una Pagina Web tipo Red Social, como proyecto propio, para implementar varios lenguajes de programacion.",
    p2: "Para el diseno de la pagina se utilizo los lenguaje: HTML, CSS, PHP y MySQL",
    p3: "Se puede ver el trabajo final, en el boton de VER PROYECTO y el codigo del mismo en el boton VER CODIGO, ambos en subidos en GITHUB",
    proyectLink: "",
    codeLink: "",
  }
]



const worksListEn = [
{
  id: 1,
  name: "3D DESIGNS",
  subtitule: "Website for a business",
  img: "iluminacion.png",
  p1: "SI designed a Web Page from scratch for a 3D lamp die design enterprise. The client needed two pages: one that shows his description and contact, and the other an E-commerce store to sell his products, with links to Mercadolibre",
  p2: "For the design of the page, the following languages are used: HTML, CSS, JAVASCRIPT",
  p3: "You can see the final work on the SEE PROJECT button and its code on the SEE CODE button, both uploaded on GITHUB",
  proyectLink: "https://patriciogallo.github.io/iluminacion/",
  codeLink: "https://github.com/PatricioGallo/iluminacion",
},
{
  id: 2,
  name: "Portfolio Web",
  subtitule: "Own proyect",
  img: "portfolio.png",
  p1: "A portfolio type Web Page was designed, as its own project for its use.",
  p2: "For the design of the page, the following languages were used: HTML, CSS and JAVASCRIPT",
  p3: "You can see the final work, in the SEE PROJECT button and its code in the SEE CODE button, both uploaded on GITHUB",
  proyectLink: "https://patriciogallo.github.io/portfolio/",
  codeLink: "https://github.com/PatricioGallo/portfolio",
},
{
    id: 3,
    name: "Textile Factory",
    subtitule: "Website for textile factory",
    img: "TNPLATEX.png",
    p1: "Modifications were made to a website of a company in the textile industry. The client needed some components of this website to be moved, as well as adding new images, videos and a contact form.",
    p2: "For the modifications required by the client, languages were used: HTML, CSS and JAVASCRIPT.",
    p3: "You can see the final work, in the SEE PROJECT button (the code is not available due to customer request).",
    proyectLink: "https://tnplatex.com/es/home/",
    codeLink: "",
  },
  {
    id: 4,
    name: "E-Commerce",
    subtitule: "Final Proyect of JS",
    img: "JS.png",
    p1: "An E-COMMERCE type Web Page was developed as a final project for the programming course in JAVASCRIPT language, carried out on the CoderHouse platform",
    p2: "For the design of the page, the following languages were used: HTML, CSS and JAVASCRIPT",
    p3: "You can see the final work, in the SEE PROJECT button and its code in the SEE CODE button, both uploaded in GITHUB",
    proyectLink: "https://patriciogallo.github.io/ProyectoFinalJS/",
    codeLink: "https://github.com/PatricioGallo/ProyectoFinalJS",
  },
  {
    id: 5,
    name: "Wines Web",
    subtitule: "Final proyect of web design",
    img: "vinos.png",
    p1: "A wine website was designed as a final project for the Web Development course, carried out on the CoderHouse platform",
    p2: "For the design of the page, the following languages were used: HTML and CSS",
    p3: "You can see the final work, in the SEE PROJECT button and its code in the SEE CODE button, both uploaded in GITHUB",
    proyectLink: "https://patriciogallo.github.io/proyectofinal/",
    codeLink: "https://github.com/PatricioGallo/proyectofinal",
  },
  {
    id: 6,
    name: "Social Web",
    subtitule: "Own proyect",
    img: "socialweb.png",
    p1: "A Social Network type Web Page was designed, as its own project, to implement various programming languages.",
    p2: "For the design of the page, the following languages were used: HTML, CSS, PHP and MySQL",
    p3: "You can see the final work, in the SEE PROJECT button and its code in the SEE CODE button, both uploaded on GITHUB",
    proyectLink: "",
    codeLink: "",
  }
]
