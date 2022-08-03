//https://preview.themeforest.net/item/ryan-vcard-resume-cv-template/full_screen_preview/21584603?clickid=3ncSjs0lExyNWjhyfISPvwJDUkD1tTUvd057yI0&iradid=275988&iradtype=ONLINE_TRACKING_LINK&irgwc=1&irmptype=mediapartner&irpid=369282&mp_value1=&utm_campaign=af_impact_radius_369282&utm_medium=affiliate&utm_source=impact_radius

//Variables

let btn_about = document.getElementById("btn_about");
let btn_resume = document.getElementById("btn_resume");
let btn_works = document.getElementById("btn_works");
let btn_contacto = document.getElementById("btn_contacto");


btn_about.addEventListener("click",funcionAbout);
btn_resume.addEventListener("click",funcionResume);
btn_works.addEventListener("click",funcionWorks);
btn_contacto.addEventListener("click",funcionContact);

//funciones


function funcionAbout(){
    resume.innerHTML=""
    works.innerHTML=""
    contacto.innerHTML=""
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
    btn_about.classList = "colorVerde"
    btn_resume.classList=""
    btn_works.classList=""
    btn_contacto.classList=""

}

function funcionResume(){

  about.innerHTML=""
  works.innerHTML=""
    contacto.innerHTML=""
  resume.innerHTML=`
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
  btn_about.classList = ""
  btn_resume.classList="colorVerde"
  btn_works.classList=""
  btn_contacto.classList=""
}


function funcionWorks(){

  about.innerHTML=""
  resume.innerHTML=""
  contacto.innerHTML=""
  works.innerHTML= `

  <div class="informacion_contenido">
    <div class="titulo_informacion">
      <h1>Recent</h1>
      <h2>Works</h2>
    </div>

    <div class="contenedor_2" id="contenedor_2">

    </div>
  </div>
  `

  let contenedor_2 = document.getElementById("contenedor_2");

  for(const lista of worksList ){
    contenedor5 = document.createElement("div")
    contenedor5.classList="contenedor5";
    contenedor5.innerHTML=`
          <button type="button" name="button" onclick="TF(${lista.id})">
            <img src="media/imagenes/${lista.img}" alt="">
            <h1>${lista.name} </h1>
            <h2>${lista.subtitule}</h2>
          </button>
      `
  contenedor_2.append(contenedor5)

  if(lista.id%2 == 1){
    contenedor5.classList = 'contenedor5 bordeLateral'
  }

  }

  btn_about.classList = ""
  btn_resume.classList= ""
  btn_works.classList="colorVerde"
  btn_contacto.classList=""

}


function funcionContact(){

  about.innerHTML=""
  resume.innerHTML=""
  works.innerHTML=""
  contacto.innerHTML= `
  <div class="informacion_contenido">
    <div class="titulo_informacion">
      <h1>Get</h1>
      <h2>in Touch</h2>
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

  btn_about.classList = ""
  btn_resume.classList= ""
  btn_works.classList=""
  btn_contacto.classList="colorVerde"

}


function TF(id){

  let item = worksList.find((lista) => lista.id === id);
  informacion_works.innerHTML=`
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


function cerrarTF(){
  informacion_works.innerHTML=""
}


//programa
 console.log(worksList);
