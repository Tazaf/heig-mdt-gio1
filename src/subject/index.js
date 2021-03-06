import subject from "courses-md/dist/client";

window.subject = subject;

import { RunkitController } from "./runkit";

import "font-awesome/css/font-awesome.css";

import "tippy.js/dist/tippy.css";
import "./assets/fonts/DroidSerif/DroidSerif.css";
import "./assets/fonts/UbuntuMono/UbuntuMono.css";
import "./assets/fonts/YanoneKaffeesatz/YanoneKaffeesatz.css";
import "./assets/slides.css";
import "./assets/micromodal.css";
import "./assets/runkit.css";

import logo from "./assets/hes_so_logo.png";

subject.setLogo({
  url: "https://heig-vd.ch/formations/master/filieres/developpement-territorial",
  imageUrl: logo,
  height: 30,
});

subject.afterStart(() => RunkitController.start()).start();
