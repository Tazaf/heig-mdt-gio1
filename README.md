# Master Développement Territorial | Géoinformatique opérationnelle : Développement avancé d’outils (GIO1)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Prerequisite](#prerequisite)
- [Evaluation](#evaluation)
- [Plan](#plan)
- [Documentation](#documentation)
- [Additional Subjects](#additional-subjects)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

The goal of this course is to discover concepts and tools to organize the front-end side of a web application and enrich the user interface/experience according to current good practices.

You will:

- learn the basics concepts of code architecture for front-end application
- use modern web development tools (git, VS Code, ...)
- develop a web application using a JavaScript framework (VueJS)
- integrate third-party cartographical libraries (leaflet, openlayers, cesium,...)

_This course uses subjects from or based on [COMEM+][comem] [architecture & deployment][comem-archidep], [web-oriented architecture][comem-archioweb] and [mobile development][comem-devmobil] courses taught to students of [Media Engineering][im] at [HEIG-VD][heig], as well as [advanced frontend development][dfa] course taught to students of [MAS-RAD CAS-DAR][masrad-casdar] at [HE-ARC][he-arc]._

## Prerequisite

**Knowledge:**

- Basics of HTML, CSS and [JavaScript][js-bas]
- Basics of Object Oriented Programming [OOP][oop]
- Utilization of geodata
- Use of [command line][cli]

**Tools:**

- Latest [LTS version of NodeJS][node] (14.X.X)
- Latest version of [Git][git-install] (2.33.X)
- Latest version of [VS Code][vs-code] (1.60.X)

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

## Plan

- [Introduction][intro]

- Code Architecture & Design Patterns

  - [Code and architectural principles][basic-principles]
  - [Modular JavaScript][js-modules]
  - [Node Package Manager (npm)][npm]

  - Additional resources (a.k.a. "You Should Read That"):
    - [Writing Good Functions][write-functions] (article)
    - [Design Patterns][design-patterns] (article)

- Git

  - [Git Introduction][git]
  - [Git Branching][git-branching]
  - [Collaborating with Git][git-collab]

- Advanced JavaScript

  - [JavaScript ES6 Classes][js-classes]
  - [Basic Promises][js-prom-basic]

- [Practice][practice]

- [Understanding Web Frameworks][web-frameworks]

- Web Framework Hands-On
  - [Starting with vueJS][vue-intro-course]
  - [Vuejs External Libraries][vue-ext-lib-course]
  - [RESTful APIs][rest]

## Documentation

- [VueJS Introduction][vue-intro]
- [Leaflet][leaflet]
- [OpenLayers][openlayers]
- [Cesium][cesium]

## Additional Subjects

- [JavaScript CheatSheet][js-cheat]
- [JavaScript Closures][js-clos]
- [JavaScript Prototypes][js-prot]
- [Advanced Promises][js-prom]

_2022 - [Jens Ingensand](mailto:jens.ingensand@heig-vd.ch), [Mathias Oberson](mailto:mathias.oberson@heig-vd.ch) & ([Thibaud Chassin](thibaud.chassin@heig-vd.ch))_

[cli]: https://mediacomem.github.io/comem-archidep/latest/subjects/cli/?home=https://tazaf.github.io/heig-mdt-gio1/latest/
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
[js-bas]: https://mediacomem.github.io/comem-masrad-dfa/latest/subjects/js/?home=https://tazaf.github.io/heig-mdt-gio1/latest/
[git]: https://mediacomem.github.io/comem-archidep/2019-2020/subjects/git/?home=https://tazaf.github.io/heig-mdt-gio1/latest/
[git-branching]: https://mediacomem.github.io/comem-archidep/2019-2020/subjects/git-branching/?home=https://tazaf.github.io/heig-mdt-gio1/latest/
[git-collab]: https://mediacomem.github.io/comem-archidep/2019-2020/subjects/git-collaborating/?home=https://tazaf.github.io/heig-mdt-gio1/latest/
[js-modules]: https://mediacomem.github.io/comem-devmobil/latest/subjects/js-modules/?home=https://tazaf.github.io/heig-mdt-gio1/latest/
[rest]: https://mediacomem.github.io/comem-archioweb/latest/subjects/rest/?home=https://tazaf.github.io/heig-mdt-gio1/latest/
[js-prom-basic]: https://mediacomem.github.io/comem-devmobil/latest/subjects/js-promises-basics/?home=https://tazaf.github.io/heig-mdt-gio1/latest/
[npm]: https://mediacomem.github.io/comem-archioweb/2019-2020/subjects/npm/?home=https://tazaf.github.io/heig-mdt-gio1/latest/
[vue-intro]: https://vuejs.org/v2/guide/
[leaflet]: https://leafletjs.com/reference-1.7.1.html
[openlayers]: https://openlayers.org/en/latest/doc/
[cesium]: https://cesium.com/docs/cesiumjs-ref-doc/
[js-clos]: https://mediacomem.github.io/comem-devmobil/latest/subjects/js-closures/?home=https://tazaf.github.io/heig-mdt-gio1/latest/
[js-prot]: https://mediacomem.github.io/comem-devmobil/latest/subjects/js-prototypes/?home=https://tazaf.github.io/heig-mdt-gio1/latest/
[js-prom]: https://mediacomem.github.io/comem-devmobil/latest/subjects/js-promises/?home=https://tazaf.github.io/heig-mdt-gio1/latest/
[vue-ui-lib]: https://github.com/vuejs/awesome-vue#responsive
[github]: https://github.com
[js-classes]: https://mediacomem.github.io/comem-devmobil/latest/subjects/js-classes/?home=https://tazaf.github.io/heig-mdt-gio1/latest/
[basic-principles]: ./subjects/basic-principles
[oop]: https://www.datacamp.com/community/tutorials/python-oop-tutorial
[intro]: ./subjects/introduction
[write-functions]: https://hackernoon.com/dont-be-that-guy-write-better-functions-f5423aa01c1f
[design-patterns]: https://fr.wikipedia.org/wiki/Patron_de_conception
[practice]: https://github.com/Tazaf/mdt-gio1-practice/
[js-cheat]: https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-introduction/cheatsheet
[web-frameworks]: ./subjects/web-frameworks
[vue-intro-course]: ./subjects/vuejs
[vue-ext-lib-course]: ./subjects/vue-external-libraries
[geo-admin-search]: https://api3.geo.admin.ch/services/sdiservices.html
