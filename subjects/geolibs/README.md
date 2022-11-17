<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [OpenLayers / Leaflet / Cesium](#openlayers--leaflet--cesium)
  - [Leaflet](#leaflet)
  - [OpenLayers](#openlayers)
  - [Cesium JS](#cesium-js)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# OpenLayers / Leaflet / Cesium

## Leaflet

Leaflet is an open source JavaScript library used to build web mapping applications. First released in 2011, it supports most mobile and desktop platforms, supporting HTML5 and CSS3. Among its users are FourSquare, Pinterest and Flickr

Advantages:

- Easy to use
- Nice visualization capabilities (e.g. clustering, plugins)

Disadvantages:

- Less geomatics-friendly (e.g. support for projections)

[https://leafletjs.com/](https://leafletjs.com/)

Tutorials & Examples
[https://leafletjs.com/examples.html](https://leafletjs.com/examples.html)

## OpenLayers

OpenLayers makes it easy to put a dynamic map in any web page. It can display map tiles, vector data and markers loaded from any source. OpenLayers has been developed to further the use of geographic information of all kinds. It is completely free, Open Source JavaScript, released under the 2-clause BSD License (also known as the FreeBSD). It is used by e.g. map.geo.admin.ch

Advantages:

- Large support for different formats
- Support for projection systems

Disadvantages:

- A bit less user-friendly than Leaflet

[https://openlayers.org/](https://openlayers.org/)

Tutorials & Examples
[https://openlayers.org/en/latest/examples/](https://openlayers.org/en/latest/examples/)

## Cesium JS

CesiumJS is an open source JavaScript library for creating 3D globes. Developers across industries, from aerospace to smart cities to drones, use CesiumJS to create interactive web apps for sharing dynamic geospatial data. It is used by smapshot.heig-vd.ch and map.geo.adminc.ch

Advantages:

- Use a virtual globe -> 3D data (buildings, terrain model), e.g. data from map.geo.admin.ch
- Display 3D Data

Disadvantages:

- Creation of custom terrain models complicated (quantized mesh)
- Only some specific formats supported (e.g. GLTF)

[https://cesium.com/platform/cesiumjs/](https://cesium.com/platform/cesiumjs/)

Tutorials & Examples
[https://cesium.com/learn/cesiumjs-sandcastle/](https://cesium.com/learn/cesiumjs-sandcastle/)

Other
GLTF can be written with FME

##Seed VueJS - Carto 2D - 3D

Integration of Leaflet/OpenLayers/Cesium in Vue JS

[https://github.com/thibaud-c/seed-vuejs3.0-carto2D-3D](https://github.com/thibaud-c/seed-vuejs3.0-carto2D-3D)
