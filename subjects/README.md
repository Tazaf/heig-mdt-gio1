# MDT | Géoinformatique opérationnelle : Développement avancé d’outils (GIO1)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Program](#program)
- [Evaluation](#evaluation)
- [Plan](#plan)
- [Additional Subjects](#additional-subjects)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

The goal of this course is to discover concepts and tools to organize the front-end side of a web application and enrich the user interface/experience according to current good practices.

You will:

- learn the basics concepts of code architecture for front-end application
- use modern web development tools (git, VS Code, ...)
- develop a web application using a JavaScript framework (VueJS)
- integrate third-party cartographical libraries (leaflet, openlayers, cesium,...)



## Introduction

**Lecturers:**
- Mathias Oberson, Square Services
- Jens Ingensand, HEIG-VD
- Thibaud Chassin, HEIG-VD / EPFL

## Prerequisites

**Knowledge:**
- Basics of HTML, CSS and [JavaScript][js-bas]
- Basics of Object Oriented Programming [OOP][oop]
- Utilization of geodata
- Use of [command line][cli]

**Tools:**
- Latest [LTS version of NodeJS][node] (12.X.X)
- Latest version of [Git][git-install] (2.28.X)
- Latest version of [VS Code][vs-code] (1.48.X)

## Program
**Expectations:**
- What is your experience?
- What are your expectations?

**Contents - advanced web development: **
**Why web development?**
- Utilization of web tools is increasing
- Increasing processing power on the client (more memory, faster cpu's) -> server side programming decreasing
- Mobile development (using [Apache Cordova][cordova])
- Increasing possibilities for visualization and processing: WebGL, WebGPU

**Goals**
- Learn to structure code: Design patterns, model-view-controller (MVC)
- Versioning tools: GIT
- Utilization of a web framework with geodata (!= symply using a web cartography framework)

**Program:**
| Week # | #Lessons | Date       | Subject                                                      |
|----------|----------|------------|--------------------------------------------------------------|
| 1        | 2        | 17.9.2020  | Introduction, program                                        |
| 2        | 2        | 24.9.2020  | Code structure, design patterns, Model-View-Controller (MVC) |
| 3        | 2        | 1.10.2020  | Code structure, design patterns, Model-View-Controller (MVC) |
|          |          | 8.10.2020  | Field work DRP                                               |
| 4        | 6        | 15.10.2020 | Versioning tools : GIT                                       |
|          |          | 22.10.2020 | Holidays                                                     |
|          |          | 29.10.2020 | Field work DRP                                               |
| 5        | 2        | 5.11.2020  | Understanding a web framework                                |
| 6        | 2        | 12.11.2020 | Utilization of a web framework                               |
| 7        | 2        | 19.11.2020 | Utilization of a web framework                               |
| 8        | 2        | 26.11.2020 | Utilization of a web framework with geodata                  |
| 9        | 2        | 3.12.2020  | Project                                                      |
| 10       | 2        | 10.12.2020 | Project                                                      |
| 11       | 2        | 17.12.2020 | Project                                                      |
| 12       | 2        | 7.1.2020   | Project presentation                                         |




## Evaluation

**Project requirements - Developing a small geo-portal web application:**
- Developed with VueJS framework
- Add internal navigation with vue-router
- Integrate and use [one UI Componants library][vue-ui-lib]
- A (home)page with geocoding feature ; the use should be able to display the results in 2D or 3D, and your app should use the [GeoAdmin Search REST API][geo-admin-search]
- A page displaying geographical data in 2D (using either [leaflet][leaflet] or [openlayers][openlayers])
- A page displaying geographical data in 3D (using [cesium][cesium])
- A static page that describe the project, the tool and the team behind it (yourselves)
- Project must be version controlled with Git and stored on [GitHub][github]
(- Final application should be deployed on Heroku)




## Plan

- Setting up your environment

- Git
  - [Git Introduction][git]
  - [Git Branching][git-branching]
  - [Collaborating with Git][git-collab]

- Code Architecture & Design Patterns
  - [Basic principles][basic-principles]
  - TODO: On the good usage of functions
  - TODO: Separation of concerns

- JavaScript
  - [JavaScript ES6 Classes][js-classes]
  - [Basic Promises][js-prom-basic] (TODO: Practice?)
  - [Modular JavaScript][js-modules] (TODO: Practice))
  - [Node Package Manager (npm)][npm]

- Understanding Web Frameworks
  - TODO: Frontend VS Backend
  - TODO: Single Page Applications
  - TODO: MVVM Architectural pattern
  - TODO: Web Frameworks

- Web Framework Hands-On
  - [VueJS Introduction][vue-intro]
  - [RESTful APIs][rest]

- VueJS and Cartographical Libraries
  - [Leaflet][leaflet]/[OpenLayers][openlayers]
  - [Cesium][cesium]

## Additional Subjects

- [JavaScript Closures][js-clos]
- [JavaScript Prototypes][js-prot]
- [Advanced Promises][js-prom]

_2020-2021 - [Jens Ingensand](mailto:jens.ingensand@heig-vd.ch), [Mathias Oberson](mailto:mathias.oberson@heig-vd.ch) & [Thibaud Chassin](thibaud.chassin@heig-vd.ch)_

_This course uses subjects from or based on [COMEM+][comem] [architecture & deployment][comem-archidep], [web-oriented architecture][comem-archioweb] and [mobile development][comem-devmobil] courses taught to students of [Media Engineering][im] at [HEIG-VD][heig], as well as [advanced frontend development][dfa] course taught to students of [MAS-RAD CAS-DAR][masrad-casdar] at [HE-ARC][he-arc]._

[cli]: https://mediacomem.github.io/comem-archidep/latest/subjects/cli/?home=https://tazaf.github.io/heig-mdt-gio1/
[dfa]: https://mediacomem.github.io/comem-masrad-dfa/latest/
[heig]: http://www.heig-vd.ch
[im]: https://heig-vd.ch/formations/bachelor/filieres/ingenierie-des-medias
[comem]: http://www.heig-vd.ch/comem
[comem-archioweb]: https://mediacomem.github.io/comem-archioweb/latest/
[comem-archidep]: https://mediacomem.github.io/comem-archidep/latest/
[comem-devmobil]: https://mediacomem.github.io/comem-devmobil/latest/
[masrad-casdar]: https://www.he-arc.ch/ingenierie/mas-rad-cas-dar
[he-arc]: https://www.he-arc.ch/
[node]: https://nodejs.org/en/
[git-install]: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[vs-code]: https://code.visualstudio.com/
[js-bas]: https://mediacomem.github.io/comem-masrad-dfa/latest/subjects/js/?home=https://tazaf.github.io/heig-mdt-gio1/
[git]: https://mediacomem.github.io/comem-archidep/2019-2020/subjects/git/?home=https://tazaf.github.io/heig-mdt-gio1/
[git-branching]: https://mediacomem.github.io/comem-archidep/2019-2020/subjects/git-branching/?home=https://tazaf.github.io/heig-mdt-gio1/
[git-collab]: https://mediacomem.github.io/comem-archidep/2019-2020/subjects/git-collaborating/?home=https://tazaf.github.io/heig-mdt-gio1/
[js-modules]: https://mediacomem.github.io/comem-devmobil/latest/subjects/js-modules/?home=https://tazaf.github.io/heig-mdt-gio1/
[rest]: https://mediacomem.github.io/comem-archioweb/latest/subjects/rest/?home=https://tazaf.github.io/heig-mdt-gio1/
[js-prom-basic]: https://mediacomem.github.io/comem-devmobil/latest/subjects/js-promises-basics/?home=https://tazaf.github.io/heig-mdt-gio1/
[npm]: https://mediacomem.github.io/comem-archioweb/2019-2020/subjects/npm/?home=https://tazaf.github.io/heig-mdt-gio1/
[vue-intro]: https://vuejs.org/v2/guide/
[leaflet]: https://leafletjs.com/
[openlayers]: https://openlayers.org/
[cesium]: https://cesium.com/cesiumjs/
[js-clos]: https://mediacomem.github.io/comem-devmobil/latest/subjects/js-closures/?home=https://tazaf.github.io/heig-mdt-gio1/
[js-prot]: https://mediacomem.github.io/comem-devmobil/latest/subjects/js-prototypes/?home=https://tazaf.github.io/heig-mdt-gio1/
[js-prom]: https://mediacomem.github.io/comem-devmobil/latest/subjects/js-promises/?home=https://tazaf.github.io/heig-mdt-gio1/
[vue-ui-lib]: https://github.com/vuejs/awesome-vue#responsive
[github]: https://github.com
[js-classes]: https://mediacomem.github.io/comem-devmobil/latest/subjects/js-classes/?home=https://tazaf.github.io/heig-mdt-gio1/
[basic-principles]: ./subjects/basic-principles
[oop]: https://www.datacamp.com/community/tutorials/python-oop-tutorial
[cordova]: https://cordova.apache.org/
