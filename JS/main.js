//https://preview.themeforest.net/item/ryan-vcard-resume-cv-template/full_screen_preview/21584603?clickid=3ncSjs0lExyNWjhyfISPvwJDUkD1tTUvd057yI0&iradid=275988&iradtype=ONLINE_TRACKING_LINK&irgwc=1&irmptype=mediapartner&irpid=369282&mp_value1=&utm_campaign=af_impact_radius_369282&utm_medium=affiliate&utm_source=impact_radius

//Variables y Programa

let btn_about = document.getElementById("btn_about");
let btn_resume = document.getElementById("btn_resume");
let btn_works = document.getElementById("btn_works");
let btn_contacto = document.getElementById("btn_contacto");
let btn_ingles = document.getElementById("btn_ingles");
let btn_espanol = document.getElementById("btn_espanol");

let idioma = 0;
let flag = 0;
let flotante_animacion = document.createElement("div");
let animacion = "animate__animated animate__fadeInLeft";
let worksList = [];
worksList = worksListEn;


btn_about.addEventListener("click", funcionAbout);
btn_resume.addEventListener("click", funcionResume);
btn_works.addEventListener("click", funcionWorks);
btn_contacto.addEventListener("click", funcionContact);
btn_ingles.addEventListener("click", funcionIngles);
btn_espanol.addEventListener("click", funcionEspanol);


if (flag == 0) {
  setTimeout(funcionFlotante, 2000);
}


//funciones

function funcionIngles() {
  idioma = 0;
  flag = 0;
  funcionFlotante();
  funcionAbout();
  worksList = worksListEn;
}

function funcionEspanol() {
  idioma = 1;
  flag = 0;
  funcionFlotante();
  funcionAbout();
  worksList = worksListEs;
}


function funcionFlotante() {
  flag = 1;
  if (idioma == 0) {
    flotante_animacion.innerHTML = `
  <div class="cuerpo_flotante">
    <div class="imagen_flotante">
      <img src="media/imagenes/fotoPerfil.jpeg" alt="">
    </div>
    <div class="texto_flotante">
      <h1>Welcome to my PORTFOLIO!</h1>
      <h2>Here you cand find information about my, my projects and my contact.</h2>
      <h2>Thank you! :)</h2>
    </div>

    <div class="cruz_flotante">
      <button type="button" name="button" id="cruz_flotante">X</button>
    </div>
  </div>
  `
  } else if (idioma == 1) {
    flotante_animacion.innerHTML = `
    <div class="cuerpo_flotante">
      <div class="imagen_flotante">
        <img src="media/imagenes/fotoPerfil.jpeg" alt="">
      </div>
      <div class="texto_flotante">
        <h1>Bienvenido a mi PORTFOLIO</h1>
        <h2>Aqui encontraras informacion sobre mi, mis proyectos y mi contacto.</h2>
        <h2>Muchas gracias por tu visita :)</h2>
      </div>

      <div class="cruz_flotante">
        <button type="button" name="button" id="cruz_flotante">X</button>
      </div>
    </div>
    `
  }
  flotante.append(flotante_animacion);
  flotante_animacion.classList = "animate__animated animate__bounceInRight";
  setTimeout(funcionCruzFlotante, 10000);
  let cruz_flotante = document.getElementById("cruz_flotante");
  cruz_flotante.addEventListener("click", funcionCruzFlotante);

}

function funcionCruzFlotante() {
  flotante_animacion.classList = "animate__animated animate__bounceOutRight";
  setTimeout(cerrarFlotante, 300);
}

function cerrarFlotante() {
  flotante.innerHTML = ""
}



function funcionAbout() {
  resume.innerHTML = ""
  works.innerHTML = ""
  contacto.innerHTML = ""
  if (idioma == 0) {

    about.innerHTML = `

            <div class="informacion_contenido">
              <div class="titulo_informacion">
                <h1>About</h1>
                <h2>Me</h2>
              </div>
              <div class="contenedor_1">
                <div class="contenedor2" style='border-right: 1px solid rgb(205, 205, 205);' >
                  <p>I am Patricio Gallo Electronic Engineer graduated from the National University of Tucumán in 2019. I have studies in front-end and back-end programming, with knowledge in HTML, CSS, JAVASCRIPT, MYSQL, PHP, PYTHON, among others.      </p>
                </div>
                <div class="contenedor3">
                  <div class="datos_persona">
                    <h3>Age:</h3>
                    <h4>27</h4>
                  </div>
                  <div class="datos_persona">
                    <h3>Residence:</h3>
                    <h4>Argentina</h4>
                  </div>
                  <div class="datos_persona">
                    <h3>Adress:</h3>
                    <h4>Tucuman</h4>
                  </div>
                  <div class="datos_persona">
                    <h3>Freelance:</h3>
                    <h4>Availible</h4>
                  </div>
                </div>
              </div>


              <div class="titulo_informacion">
                <h1>My</h1>
                <h2>Services</h2>
              </div>
              <div class="contenedor_1">
                <div class="contenedor2" style='border-right: 1px solid rgb(205, 205, 205);'>
                  <img src="media/imagenes/tilde.png" alt="">
                  <h1>WEB DEVOLPMENT</h1>
                  <h2>Modern and mobile-ready website that will help you reach all of your marketing.</h2>
                </div>

                <div class="contenedor2" >
                  <img src="media/imagenes/tilde.png" alt="">
                  <h1>DEVELOPING</h1>
                  <h2>Building web pages from scratch</h2>
                  <br>
                </div>

              </div>

              <div class="contenedor_1">
                <div class="contenedor2" style="border-right: 1px solid rgb(205, 205, 205);">
                  <img src="media/imagenes/tilde.png" alt="">
                  <h1>PERSONALIZED</h1>
                  <h2>100% personalized treatment with the client, and their orders.</h2>
                </div>

                <div class="contenedor2">
                  <img src="media/imagenes/tilde.png" alt="">
                  <h1>OPTIMIZATION</h1>
                  <h2>Code optimization, to improve user experience on web pages.</h2>
                </div>

              </div>
            </div>

    `
  } else if (idioma == 1) {
    about.innerHTML = `

              <div class="informacion_contenido">
                <div class="titulo_informacion">
                  <h1>Sobre</h1>
                  <h2>Mi</h2>
                </div>
                <div class="contenedor_1">
                  <div class="contenedor2" style='border-right: 1px solid rgb(205, 205, 205);' >
                    <p>Soy Patricio Gallo Ingeniero Electrónico egresado de la Universidad Nacional de Tucumán en 2019. Tengo estudios en programación front-end y back-end, con conocimientos en HTML, CSS, JAVASCRIPT, MYSQL, PHP, PYTHON, entre otros. </p>                  </div>
                  <div class="contenedor3">
                    <div class="datos_persona">
                      <h3>Edad:</h3>
                      <h4>27</h4>
                    </div>
                    <div class="datos_persona">
                      <h3>Residencia:</h3>
                      <h4>Argentina</h4>
                    </div>
                    <div class="datos_persona">
                      <h3>Direccion:</h3>
                      <h4>Tucuman</h4>
                    </div>
                    <div class="datos_persona">
                      <h3>Freelance:</h3>
                      <h4>Disponible</h4>
                    </div>
                  </div>
                </div>


                <div class="titulo_informacion">
                  <h1>Mis</h1>
                  <h2>Servicios</h2>
                </div>
                <div class="contenedor_1">
                  <div class="contenedor2" style='border-right: 1px solid rgb(205, 205, 205);'>
                    <img src="media/imagenes/tilde.png" alt="">
                    <h1>DESARROLLO WEB</h1>
                    <h2>Sitio web moderno y listo para dispositivos móviles que lo ayudará a alcanzar todo su marketing.</h2>
                  </div>

                  <div class="contenedor2" >
                    <img src="media/imagenes/tilde.png" alt="">
                    <h1>DESARROLLO</h1>
                    <h2>Contruccion de paginas web desde cero.</h2>
                    <br>
                  </div>

                </div>

                <div class="contenedor_1">
                  <div class="contenedor2" style="border-right: 1px solid rgb(205, 205, 205);">
                    <img src="media/imagenes/tilde.png" alt="">
                    <h1>PERSONALIZACION</h1>
                    <h2>Trato 100% personalizado con el cliente y sus pedidos.</h2>
                  </div>

                  <div class="contenedor2">
                    <img src="media/imagenes/tilde.png" alt="">
                    <h1>OPTMIZACION</h1>
                    <h2>Optimizacion de codigo para mejorar la experiencia del usuario.</h2>
                  </div>

                </div>
              </div>

      `
  }
  about.classList = animacion;
  resume.classList = ""
  btn_about.classList = "colorVerde"
  btn_resume.classList = ""
  btn_works.classList = ""
  btn_contacto.classList = ""
}


function funcionResume() {

  about.innerHTML = ""
  works.innerHTML = ""
  contacto.innerHTML = ""

  if (idioma == 0) {
    resume.innerHTML = `
  <!-- RESUME -->

  <div class="informacion_contenido">

    <div class="titulo_informacion">
      <h1>Resume</h1>
      <h2>of me</h2>
    </div>
    <div class="subtitulo">
      <div class="subtitulo_1" style="border-right: 1px solid rgb(205, 205, 205);">
        <img src="media/imagenes/experiencia.png" alt="">
        <h1>EXPERIENCE</h1>
      </div>
      <div class="subtitulo_1">
        <img src="media/imagenes/book.png" alt="">
        <h1>EDUCATION</h1>
      </div>
    </div>


    <div class="contenedor_1">
      <div class="contenedor4" style=" border-right:  1px solid rgb(205, 205, 205);">
        <div class="tiempo_info">
          <h4>2022 - Present</h4>
        </div>
        <h1>Web developer</h1>
        <h2>Freelancer</h2>
        <h3>Front-end web development in projects as a freelancer.</h3>
      </div>
      <div class="contenedor4">
        <div class="tiempo_info">
          <h4>2013 - 2019</h4>
        </div>
        <h1>Electronic Engineer</h1>
        <h2>UNT</h2>
        <h3>Received from the National University of Tucuman as an electronic engineer in 2019.</h3>
      </div>
    </div>


    <div class="contenedor_1">
      <div class="contenedor4" style=" border-right:  1px solid rgb(205, 205, 205);">
        <div class="tiempo_info">
          <h4>2021 - Present</h4>
        </div>
        <h1>Electrical manteince Chief</h1>
        <h2>TN&Platex</h2>
        <h3>Head in charge of electrical and electronic maintenance of machines for the textile industry.</h3>
      </div>

      <div class="contenedor4">
        <div class="tiempo_info">
          <h4>2021 - 2022</h4>
        </div>
        <h1>Web Development Course</h1>
        <h2>CoderHouse</h2>
        <h3>Completed web development course: HTML, CSS and SASS.</h3>
      </div>
    </div>


    <div class="contenedor_1">
      <div class="contenedor4" style=" border-right:  1px solid rgb(205, 205, 205);">
        <div class="tiempo_info">
          <h4>2021 - Present</h4>
        </div>
        <h1>Teacher</h1>
        <h2>UTN</h2>
        <h3>Head teacher of practical work at the National Technological University</h3>
      </div>
      <div class="contenedor4">
        <div class="tiempo_info">
          <h4>2022- 2022</h4>
        </div>
        <h1>Javascript Course</h1>
        <h2>CoderHouse</h2>
        <h3>Programming course in JAVASCRIPT language finished</h3>
      </div>
    </div>


    <div class="contenedor_1">
      <div class="contenedor4" style=" border-right:  1px solid rgb(205, 205, 205);">
        <div class="tiempo_info">
          <h4>2012 - 2013</h4>
        </div>
        <h1>Technical Support</h1>
        <h2>Discar SA</h2>
        <h3>Manager in the area of telephone and cell phone repair.</h3>
      </div>
      <div class="contenedor4">
        <div class="tiempo_info">
          <h4>2002 - 2009</h4>
        </div>
        <h1>Certification in English</h1>
        <h2>ANGLO</h2>
        <h3>Completed seven-year English courses.</h3>
      </div>
    </div>


    <div class="contenedor_1" style="border-bottom: 0px solid black;">
      <div class="contenedor4" style=" border-right:  1px solid rgb(205, 205, 205);">

        <h1></h1>
        <h2></h2>
        <h3></h3>
      </div>
      <div class="contenedor4">
        <div class="tiempo_info">
          <h4>2007 - 2012</h4>
        </div>
        <h1>Electronic Technician</h1>
        <h2>ITSLM</h2>
        <h3>Received as an electronic technician at the Lorenzo Massa Salesian Technical Institute in 2012.</h3>
      </div>
    </div>





    <div class="titulo_informacion" style="margin-top:30px;">
      <h1>My</h1>
      <h2>Skills</h2>
    </div>
    <div class="subtitulo">
      <div class="subtitulo">
        <div class="subtitulo_1" style="border-right: 1px solid rgb(205, 205, 205);">
          <img src="media/imagenes/coding.png" alt="">
          <h1>CODING</h1>
        </div>
        <div class="subtitulo_1">
          <img src="media/imagenes/lenguages.png" alt="">
          <h1>LENGUAGES</h1>
        </div>
      </div>
    </div>


    <div class="contenedor_1" style="border: 0px solid;">
<!-- CODING           -->
      <div class="contenedor4" style=" border-right:  1px solid rgb(205, 205, 205);">
        <div class="barras">
          <h3>HTML y CSS</h3>
          <div class="barra">
            <div class="barra_90"></div>
          </div>

          <h3>JAVASCRIPT</h3>
          <div class="barra">
            <div class="barra_90"></div>
          </div>

          <h3>PHP y MYSQL</h3>
          <div class="barra">
            <div class="barra_70"></div>
          </div>


          <h3>BOOTSTRAP</h3>
          <div class="barra">
            <div class="barra_80"></div>
          </div>
        </div>
      </div>

<!-- LEANGUAJES -->
      <div class="contenedor4">

        <div class="barras">
          <h3>SPANISH</h3>
          <div class="circulos">
            <div class="circulo_green" style="margin-left:0px;"></div>
            <div class="circulo_green"></div>
            <div class="circulo_green"></div>
            <div class="circulo_green"></div>
            <div class="circulo_green"></div>
            <div class="circulo_green"></div>
            <div class="circulo_green"></div>
            <div class="circulo_green"></div>
            <div class="circulo_green"></div>
            <div class="circulo_green"></div>
          </div>
        </div>

        <div class="barras">
          <h3>ENGLISH</h3>
          <div class="circulos">
            <div class="circulo_green" style="margin-left:0px;"></div>
            <div class="circulo_green"></div>
            <div class="circulo_green"></div>
            <div class="circulo_green"></div>
            <div class="circulo_green"></div>
            <div class="circulo_green"></div>
            <div class="circulo_green"></div>
            <div class="circulo_green"></div>
            <div class="circulo"></div>
            <div class="circulo"></div>
          </div>
        </div>

        <div class="barras">
          <h3>ITALIAN</h3>
          <div class="circulos">
            <div class="circulo_green" style="margin-left:0px;"></div>
            <div class="circulo_green"></div>
            <div class="circulo_green"></div>
            <div class="circulo_green"></div>
            <div class="circulo_green"></div>
            <div class="circulo_green"></div>
            <div class="circulo"></div>
            <div class="circulo"></div>
            <div class="circulo"></div>
            <div class="circulo"></div>
          </div>
        </div>

      </div>

    </div>





  </div>

  `
  } else if (idioma == 1) {
    resume.innerHTML = `
    <!-- RESUME -->

    <div class="informacion_contenido">

      <div class="titulo_informacion">
        <h1>Resumen</h1>
        <h2>De Mi</h2>
      </div>
      <div class="subtitulo">
        <div class="subtitulo_1" style="border-right: 1px solid rgb(205, 205, 205);">
          <img src="media/imagenes/experiencia.png" alt="">
          <h1>EXPERIENCIA</h1>
        </div>
        <div class="subtitulo_1">
          <img src="media/imagenes/book.png" alt="">
          <h1>EDUCACION</h1>
        </div>
      </div>


      <div class="contenedor_1">
        <div class="contenedor4" style=" border-right:  1px solid rgb(205, 205, 205);">
          <div class="tiempo_info">
            <h4>2022 - Presente</h4>
          </div>
          <h1>Desarrollador Web</h1>
          <h2>Freelancer</h2>
          <h3>Desarrollador Front-end en pryoectos como freelancer.</h3>
        </div>
        <div class="contenedor4">
          <div class="tiempo_info">
            <h4>2013 - 2019</h4>
          </div>
          <h1>Ingeniero Electronico</h1>
          <h2>UNT</h2>
          <h3>Recibido en la Universidad Nacional de Tucuman como ingeniero electronico en el 2019.</h3>
        </div>
      </div>


      <div class="contenedor_1">
        <div class="contenedor4" style=" border-right:  1px solid rgb(205, 205, 205);">
          <div class="tiempo_info">
            <h4>2021 - 2022</h4>
          </div>
          <h1>Jefe de mantenimiento Electrico/Electronico</h1>
          <h2>TN&Platex</h2>
          <h3>Jefe a cargo del mantenimiento electrico electronico de maquinas para industria textil.</h3>
        </div>

        <div class="contenedor4">
          <div class="tiempo_info">
            <h4>2021 - 2022</h4>
          </div>
          <h1>Curso de desarrollo web</h1>
          <h2>CoderHouse</h2>
          <h3>Curso de desarrollo web completado: HTML, CSS and SASS.</h3>
        </div>
      </div>


      <div class="contenedor_1">
        <div class="contenedor4" style=" border-right:  1px solid rgb(205, 205, 205);">
          <div class="tiempo_info">
            <h4>2021 - Present</h4>
          </div>
          <h1>Docente</h1>
          <h2>UTN</h2>
          <h3>Jefe de trabajos practicos en la Universidad Tecnologica Nacional.</h3>
        </div>
        <div class="contenedor4">
          <div class="tiempo_info">
            <h4>2022- 2022</h4>
          </div>
          <h1>Curso de JAVASCRIPT</h1>
          <h2>CoderHouse</h2>
          <h3>Curso de programacion en lenguaje JAVASCRIPT finalizado</h3>
        </div>
      </div>


      <div class="contenedor_1">
        <div class="contenedor4" style=" border-right:  1px solid rgb(205, 205, 205);">
          <div class="tiempo_info">
            <h4>2012 - 2013</h4>
          </div>
          <h1>Soporte Tecnico</h1>
          <h2>Discar SA</h2>
          <h3>Encargado en el area de soporte tecnico para celulares.</h3>
        </div>
        <div class="contenedor4">
          <div class="tiempo_info">
            <h4>2002 - 2009</h4>
          </div>
          <h1>Certificacion en ingles</h1>
          <h2>ANGLO</h2>
          <h3>Completado siete años de cursado en ingles.</h3>
        </div>
      </div>


      <div class="contenedor_1" style="border-bottom: 0px solid black;">
        <div class="contenedor4" style=" border-right:  1px solid rgb(205, 205, 205);">

          <h1></h1>
          <h2></h2>
          <h3></h3>
        </div>
        <div class="contenedor4">
          <div class="tiempo_info">
            <h4>2007 - 2012</h4>
          </div>
          <h1>Tecnico Electronico</h1>
          <h2>ITSLM</h2>
          <h3>Recibido de Tecnico Electronico en el Instituto Tecnico Salesiano Lorenzo Massa.</h3>
        </div>
      </div>





      <div class="titulo_informacion" style="margin-top:30px;">
        <h1>Mis</h1>
        <h2>Habilidades</h2>
      </div>
      <div class="subtitulo">
        <div class="subtitulo">
          <div class="subtitulo_1" style="border-right: 1px solid rgb(205, 205, 205);">
            <img src="media/imagenes/coding.png" alt="">
            <h1>CODING</h1>
          </div>
          <div class="subtitulo_1">
            <img src="media/imagenes/lenguages.png" alt="">
            <h1>LENGUAJES</h1>
          </div>
        </div>
      </div>


      <div class="contenedor_1" style="border: 0px solid;">
  <!-- CODING           -->
        <div class="contenedor4" style=" border-right:  1px solid rgb(205, 205, 205);">
          <div class="barras">
            <h3>HTML y CSS</h3>
            <div class="barra">
              <div class="barra_90"></div>
            </div>

            <h3>JAVASCRIPT</h3>
            <div class="barra">
              <div class="barra_90"></div>
            </div>

            <h3>PHP y MYSQL</h3>
            <div class="barra">
              <div class="barra_70"></div>
            </div>


            <h3>BOOTSTRAP</h3>
            <div class="barra">
              <div class="barra_80"></div>
            </div>
          </div>
        </div>

  <!-- LEANGUAJES -->
        <div class="contenedor4">

          <div class="barras">
            <h3>ESPAÑOL</h3>
            <div class="circulos">
              <div class="circulo_green" style="margin-left:0px;"></div>
              <div class="circulo_green"></div>
              <div class="circulo_green"></div>
              <div class="circulo_green"></div>
              <div class="circulo_green"></div>
              <div class="circulo_green"></div>
              <div class="circulo_green"></div>
              <div class="circulo_green"></div>
              <div class="circulo_green"></div>
              <div class="circulo_green"></div>
            </div>
          </div>

          <div class="barras">
            <h3>INGLES</h3>
            <div class="circulos">
              <div class="circulo_green" style="margin-left:0px;"></div>
              <div class="circulo_green"></div>
              <div class="circulo_green"></div>
              <div class="circulo_green"></div>
              <div class="circulo_green"></div>
              <div class="circulo_green"></div>
              <div class="circulo_green"></div>
              <div class="circulo_green"></div>
              <div class="circulo"></div>
              <div class="circulo"></div>
            </div>
          </div>

          <div class="barras">
            <h3>ITALIANO</h3>
            <div class="circulos">
              <div class="circulo_green" style="margin-left:0px;"></div>
              <div class="circulo_green"></div>
              <div class="circulo_green"></div>
              <div class="circulo_green"></div>
              <div class="circulo_green"></div>
              <div class="circulo_green"></div>
              <div class="circulo"></div>
              <div class="circulo"></div>
              <div class="circulo"></div>
              <div class="circulo"></div>
            </div>
          </div>

        </div>

      </div>
    </div>

    `
  }

  about.classList = "";
  resume.classList = animacion;
  works.classList = ""
  contacto.classList = ""

  btn_about.classList = ""
  btn_resume.classList = "colorVerde"
  btn_works.classList = ""
  btn_contacto.classList = ""
}


function funcionWorks() {

  about.innerHTML = ""
  resume.innerHTML = ""
  contacto.innerHTML = ""

  if (idioma == 0) {

    works.innerHTML = `

  <div class="informacion_contenido">
    <div class="titulo_informacion">
      <h1>Recent</h1>
      <h2>Works</h2>
    </div>

    <div class="contenedor_2" id="contenedor_2">

    </div>
  </div>
  `
  } else if (idioma == 1) {
    works.innerHTML = `

    <div class="informacion_contenido">
      <div class="titulo_informacion">
        <h1>Trabajos</h1>
        <h2>Recientes</h2>
      </div>

      <div class="contenedor_2" id="contenedor_2">

      </div>
    </div>
    `
  }

  let contenedor_2 = document.getElementById("contenedor_2");

  for (const lista of worksList) {
    contenedor5 = document.createElement("div")
    contenedor5.classList = "contenedor5";
    contenedor5.innerHTML = `
          <button type="button" name="button" onclick="TF(${lista.id})">
            <img src="media/imagenes/${lista.img}" alt="">
            <h1>${lista.name} </h1>
            <h2>${lista.subtitule}</h2>
          </button>
      `
    contenedor_2.append(contenedor5)

    if (lista.id % 2 == 1) {
      contenedor5.classList = 'contenedor5 bordeLateral'
    }

  }

  about.classList = "";
  resume.classList = "";
  works.classList = animacion;
  contacto.classList = ""

  btn_about.classList = ""
  btn_resume.classList = ""
  btn_works.classList = "colorVerde"
  btn_contacto.classList = ""

}


function funcionContact() {

  about.innerHTML = ""
  resume.innerHTML = ""
  works.innerHTML = ""

  if (idioma == 0) {
    contacto.innerHTML = `
  <div class="informacion_contenido">
    <div class="titulo_informacion">
      <h1>Get</h1>
      <h2>in Touch</h2>
    </div>
    <div class="contenedor_3">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113927.30717384933!2d-65.29263368353908!3d-26.832688473787936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94223792d6c56903%3A0xf88d5b92b5c56527!2sSan%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1659546692209!5m2!1ses-419!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    <div class="contenedor_3">

      <div class="datos_persona">
        <h3>Mail:</h3>
        <h4>patogallo95@gmail.com</h4>
      </div>
      <div class="datos_persona">
        <h3>Residence:</h3>
        <h4>Argentina</h4>
      </div>
      <div class="datos_persona">
        <h3>City:</h3>
        <h4>Tucuman</h4>
      </div>
      <div class="datos_persona">
        <h3>Freelance:</h3>
        <h4>Availible</h4>
      </div>


    </div>



  </div>




  `
  } else if (idioma == 1) {
    contacto.innerHTML = `
    <div class="informacion_contenido">
      <div class="titulo_informacion">
        <h1>Estamos</h1>
        <h2>En Contacto</h2>
      </div>

      <div class="contenedor_3" style="margin-bottom: 10px;">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113927.30717384933!2d-65.29263368353908!3d-26.832688473787936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94223792d6c56903%3A0xf88d5b92b5c56527!2sSan%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1659546692209!5m2!1ses-419!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div class="contenedor_3">

        <div class="datos_persona">
          <h3>Mail:</h3>
          <h4>patogallo95@gmail.com</h4>
        </div>
        <div class="datos_persona">
          <h3>Residencia:</h3>
          <h4>Argentina</h4>
        </div>
        <div class="datos_persona">
          <h3>Ciudad:</h3>
          <h4>Tucuman</h4>
        </div>
        <div class="datos_persona">
          <h3>Freelance:</h3>
          <h4>Disponible</h4>
        </div>


      </div>



    </div>
    `

  }
  about.classList = "";
  resume.classList = "";
  works.classList = "";
  contacto.classList = animacion;

  btn_about.classList = ""
  btn_resume.classList = ""
  btn_works.classList = ""
  btn_contacto.classList = "colorVerde"

}


function TF(id) {

  let item = worksList.find((lista) => lista.id === id);
  if (idioma == 0) {
    informacion_works.innerHTML = `
  <div class="cuerpo_informacion">
    <div class="fondo_informacion">

      <div class="cruz">
        <button type="button" name="button" onclick="cerrarTF()">X</button>
      </div>

      <img src="media/imagenes/${item.img}" alt="">

      <div class="contenido_informacion">
        <h1>${item.name}</h1>
        <p>${item.p1}</p>
        <p>${item.p2}</p>
        <p>${item.p3}</p>
        <div class="botones_informacion">
            <a href="${item.proyectLink}" target="_blank"> <button type="button" name="button">VIEW PROJECT</button> </a>
            <a href="${item.codeLink}" target="_blank"> <button type="button" name="button">VIEW CODE</button> </a>
        </div>
      </div>

    </div>
  </div>
  `
  } else if (idioma == 1) {
    informacion_works.innerHTML = `
    <div class="cuerpo_informacion">
      <div class="fondo_informacion">

        <div class="cruz">
          <button type="button" name="button" onclick="cerrarTF()">X</button>
        </div>

        <img src="media/imagenes/${item.img}" alt="">

        <div class="contenido_informacion">
          <h1>${item.name}</h1>
          <p>${item.p1}</p>
          <p>${item.p2}</p>
          <p>${item.p3}</p>
          <div class="botones_informacion">
              <a href="${item.proyectLink}" target="_blank"> <button type="button" name="button">VER PROYECTO</button> </a>
              <a href="${item.codeLink}" target="_blank"> <button type="button" name="button">VER CODIGO</button> </a>
          </div>
        </div>

      </div>
    </div>
    `
  }
}


function cerrarTF() {
  informacion_works.innerHTML = ""
}
