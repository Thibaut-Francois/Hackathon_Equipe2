import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import logo from './img/logo.png';
import btn from './img/btn.png';
import celile from './img/cecile.jpg';
import bienvenue from './img/bienvenue.png';
import logfoot from './img/Capturelogobpce.JPG';
import './App.css';

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "./map/Build/Build3.loader.js",
    dataUrl: "./map/Build/Build3.data",
    frameworkUrl: "./map/Build/Build3.framework.js",
    codeUrl: "./map/Build/Build3.wasm",
  });

 // let btn = document.querySelector(".App-logo");
 //let window_test = document.querySelector(".window");
//let onScreen = false;
//btn.addEventListener("click", function () {
    //if (onScreen == true) {
     // window_test.style.display = "none";
     // onScreen = false;
    //} else {
    //  window_test.style.display = "flex";
     // onScreen = true;
   // }
  //});
  

  return (
    <div className="App">
      <header>
        <section>
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div>
                <button>Déconnexion</button>
            </div>
        </section>
        <menu>
            <a href="/">Accueil</a>
            <a href="">Mon entreprise</a>
            <a href="">BPCE et moi</a>
            <a href="">Mes documents</a>
            <a href="">Mes actions</a>
            <a href="/integration">Mon intégration</a>
        </menu>
    </header>
    <main>
        <section>
            <div className="btn_window">
                <img src={btn} className="App-logo" alt="button paramètres" />
            </div>

            <div className="window animate">
                <button>Glaucome</button>
                <button>Daltonisme</button>
                <button>Flou</button>
                <button>Aveugle</button>
            </div>
        </section>
        <div>
        <img src={bienvenue} className="App-logo" alt="logo" />
        </div>
        <section className="text">
            <div className="left">
                <h3>TASK LISTS</h3>
                <div className="progressbar-wrapper">
                    <div class="progressbar mp3"></div>
                </div>
            </div>
            <div className="right">
                <h2>Bienvenue Sara</h2>

                <p className="myParagraph">Lorem ipsum dolor sit amet. Et veniam excepturi At </p>
                <p>architecto dolor ut quam officia ut corporis voluptatum! </p>
                <p>Qui nobis voluptas aut amet debitis cum possimus  </p>
                <p>eaque. Ut voluptas praesentium et quia eveniet et enim </p>
                <p>recusandae sit officia nostrum rem nostrum nesciunt sit </p>
                <p>odit porro 33 molestiae dolorem.</p>


                <p className="myParagraph">Et ipsum eaque eum ullam internos sit animi eveniet. Id</p>
                <p>voluptas velit ut enim laboriosam sit architecto </p>
                <p>voluptates ut galisum nihil qui sunt assumenda est </p>
                <p>deleniti officia est dolore rerum ut commodi dolores.</p>
                <p>Id asperiores magni nam ipsum tempora ut voluptatem </p>
                <p>dignissimos vel consectetur fuga ex dolores harum vel </p>

                <p>cumque vitae ea totam assumenda? Quo distinctio </p>
                <p>pariatur id porro voluptatem non quis molestias eos amet </p>

                <p>deserunt eos esse rerum est dolorum illo rem doloribus  </p>
                <p>nihil. </p>

                
            </div>
        </section>
        <div className='presidente'>
        <img src={celile} className="App-logo" alt="logo" />
        <div className='presentation'>
            <p className='nom-pres'>Cécile Tricon-Bossard</p>
            <p className='fonction-pres'>DRH de la communauté BPCE</p>
        </div>
        </div>
        
    </main>
    <script>
        
    </script>

    <footer>
        <div>
        <img src={logfoot} className="App-logo" alt="logo footer" />
            <p>Plan du site</p>
        </div>
        <div>
            <a>@ BPCE 2023</a>
            <a>|</a>
            <a>Mentions légales</a>
        </div>
    </footer>
    </div>
  );
}

export default App;
