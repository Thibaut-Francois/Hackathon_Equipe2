import React ,{component} from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';
import logo from '../img/logo.png';
import btn from '../img/btn.png';
import bienvenue from '../img/bienvenue.png';
import logfoot from '../img/Capturelogobpce.JPG';

import '../App.css';

function Action() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "./map/Build/Build3.loader.js",
    dataUrl: "./map/Build/Build3.data",
    frameworkUrl: "./map/Build/Build3.framework.js",
    codeUrl: "./map/Build/Build3.wasm",
  });

  const unityStyle = {
    width: '80%', 
    height: '80%', 
    marginTop: '-25vh',
    marginLeft: '15%',
    //justify-content: center,
    // Add more styles as needed
  };
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
            <img src={btn} className="App-logo" alt="logo" />
            </div>

            <div className="window">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, minima at obcaecati placeat sit quos cupiditate laudantium possimus facere labore animi dolores velit illo ipsam repellat repellendus unde. Doloribus, adipisci!</p>
            </div>
        </section>
        <section className="text">
            <div className="lefty">
                <h3>TASK LISTS</h3>
                <div className="progressbar-wrapper">
                    <div class="progressbar mp3"></div>
                </div>
            </div>
            <div className="righty">
                <h2>Mon intégration</h2>
                <p className="myParagraphone">Lorem ipsum dolor sit amet. Et </p>
                <p>dolor ut quam officia ut corporis</p>
                <p>voluptatum! Qui nobis voluptas aut </p>
                <p>amet debitis cum possimus eaque.</p>
                <p>Ut voluptas praesentium et quia</p>
                <p>oeveniet et enim recusandae sit</p>
                <p>officia nostrum rem nostrum</p>
                <p>Ut voluptas praesentium et quia</p>
                <p>dolorem</p>
            </div>
        </section>
        <Unity unityProvider={unityProvider} style={unityStyle} />
    </main>

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
export default Action;

