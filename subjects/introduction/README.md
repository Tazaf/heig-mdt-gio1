# Introduction

<!-- slide-front-matter class: center, middle -->

## Summary

Learn more about this course

<!-- slide-include ../../BANNER.md -->

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Lecturers](#lecturers)
- [Prerequisite](#prerequisite)
- [Expectations](#expectations)
- [Web development?](#web-development)
- [Goals](#goals)
- [Program](#program)
- [Group project](#group-project)
- [<div align="center">**Design a 2D&3D geoportal**</div>](#div-aligncenterdesign-a-2d3d-geoportaldiv)
- [Functionalities](#functionalities)
- [<div align="center"> **Be creative!**</div>](#div-aligncenter-be-creativediv)
- [Technologies](#technologies)
- [Cesium](#cesium)
- [2D functionality examples](#2d-functionality-examples)
- [3D functionality examples](#3d-functionality-examples)
- [@Todo](#todo)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Lecturers

- Mathias Oberson, Square Services
- Jens Ingensand, HEIG-VD
- (Thibaud Chassin, HEIG-VD / EPFL)

## Prerequisite

- Basics of HTML, CSS and JavaScript
- Basics of Object Oriented Programming [OOP][oop]
- Experience with geodata
- Use of command line

[oop]: https://www.datacamp.com/community/tutorials/python-oop-tutorial/

## Expectations

- What is your experience? (e.g. programming languages, use at work)
- What are your expectations?

## Web development?

- Utilization of web tools in the field of geomatics is increasing (e.g. geoportals, etc)
- Increasing processing power on the client (more memory, faster cpu's)
- Mobile development (e.g. using [Apache Cordova][cordova])

## Goals

- Learn to structure code: Code principles, Design patterns, Architectural patterns
  -> Easy to apply to other programming languages
- Versioning tools: GIT
  -> Working together on code; create branches, etc
- Utilization of a web framework with geodata (!= simply using a web cartography framework)
  -> Web frameworks increasingly important (e.g. Angular, Vue JS, etc)

[cordova]: https://cordova.apache.org/

## Program

| #   | #Lessons | Date       | Subject                                                                    |
| --- | -------- | ---------- | -------------------------------------------------------------------------- |
| 1   | 2        | 22.9.2022  | Introduction, program                                                      |
| 2   | 2        | 29.9.2022  | Code structure, design patterns, architectural patterns, forming groups    |
| 3   | 2        | 6.10.2022  | Code structure, design patterns, architectural patterns, oral presentation |
| 4   | 2        | 13.10.2022 | Versioning tools : GIT                                                     |
| 5   | 2        | 20.10.2022 | Utilization of a web framework (VueJS)                                     |
| 6   | 2        | 27.10.2022 | Utilization of a web framework (VueJS)                                     |
| 7   | 2        | 3.11.2022  | Utilization of a web framework (VueJS)                                     |
| 8   | 2        | 10.11.2022 | Utilization of a web framework (VueJS)                                     |
| 9   | 2        | 17.11.2022 | Utilization of a web framework with geodata                                |
| 10  | 2        | 24.11.2022 | Project                                                                    |
| 11  | 2        | 1.12.2022  | Project                                                                    |
| 12  | 2        | 8.12.2022  | Project                                                                    |
| 13  | 2        | 15.12.2022 | Project                                                                    |
| 14  | 2        | 22.12.2022 | Project presentation                                                       |

## Group project

### Design a 2D&3D geoportal

Example: [geoportail.gouv.fr](https://www.geoportail.gouv.fr)

### Functionalities

- _Landing page_:
  - Menu
  - Landing information
  - Location search
- _Map page_:
  - A 2D view page
    - Advanced 2D functionality (of your choice)
    - 2D Layers visualization
  - A 3D view page
    - Advanced 3D functionality (of your choice)
    - 3D Layers visualization
- _Additional components/pages_:
  - Team description
  - Documentation

**Be creative!**

## Technologies

- Vuejs v3+ [vuejs.org](https://www.vuejs.org)
- Leaflet v1.7+ [leafletjs.com](https://leafletjs.com/) or Openlayers v6.7+ [openlayers.org](https://openlayers.org/)
- Cesium v1.85+ [cesium.com](https://cesium.com/cesiumjs/)

## Cesium

- A WebGL virtual globe for visualizing dynamic data
- Open source
- Updated every month

## 2D functionality examples

- Real-time geolocated tweets: [demo](https://onemilliontweetmap.com/?center=25.505,-0.09&zoom=2&search=&timeStep=0&timeSelector=0&hashtag1=&hashtag2=sad&sidebar=yes&hashtagBattle=0&timeRange=0&timeRange=25&heatmap=0&sun=0&cluster=1)
- Live SBB trains localization visualization: [demo](http://maps.vasile.ch/transit-sbb/)
- Instragram filters on maps: [demo](http://humangeo.github.io/leaflet-tilefilter/demo.html)
- Data filtering: [demo](https://dvorak.shinyapps.io/college_explorer/)

## 3D functionality examples

- Replay drone flight: [demo](https://logs.px4.io/3d?log=7adce484-e6ce-4537-804f-0b386092032b)
- Flight simulator: [demo](https://www.geo-fs.com/geofs.php)
- Underground point clouds: [demo](https://cesium.com/blog/2020/08/25/national-security-hackathon/)

Cesium gallery example with code: [sandcastle](https://sandcastle.cesium.com)

## Last Year projects

![MVC Application](./images/project_2.png)

Planning hicking routes

## Last Year projects

![MVC Application](./images/project_3.png)

Real-time parking occupancy

## Last Year projects

<p align="center">
  <img src='./images/project_1_1.png' class='w70' />
</p>
<p align="center">
  <img src='./images/project_1_2.png' class='w70' />
</p>

Cadastral constraints

## @Todo

- **06.10**: Select your groups (3x3)
- **13.10**: 3 min oral presentation of your geoportal mock-up & fonctionalities
