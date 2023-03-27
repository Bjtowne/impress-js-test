import "./App.css";
import {useEffect, useState} from "react";
import {FirstSlide} from "./FirstSlide";
import {SecondSlide} from "./SecondSlide";
import {ThirdSlide} from "./ThirdSlide";
import {FourthSlide} from "./FourthSlide";

function App() {
  useEffect(() => {
    const win = window as any;
    if (!win.loadImpress) {
      win.loadImpress = () => {
        const impressScript = document.createElement('script');
        impressScript.src = 'https://cdn.jsdelivr.net/gh/impress/impress.js@2.0.0/js/impress.js'
        document.head.appendChild(impressScript)
        win.onload = () => {
          win.impress().init()
          document.addEventListener("impress:init", function (event) {
            console.log('init', event);
          });
          document.addEventListener("impress:stepenter", function (event) {
            console.log('stepenter', event);
          });
        }
      }
      win.loadImpress();
    }
  }, [])

  return (
    <>
      <div id="impress" data-width="1920" data-height="1080">
        <div id="first-slide" key="first-slide" className="step first-slide" data-rel-rotate-y="20">
          <FirstSlide/>
        </div>
        <SecondSlide/>
        <ThirdSlide/>
        <FourthSlide/>
      </div>
    </>
  );
}

export default App;
