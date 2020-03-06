import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';

export default class ScenarioCard extends Component {
    state = {
        scenario:[
            {
                id: uuid(),
                img: ""
            }
        ]
    }
    render() {
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-body">
                        <h6 className="card-title text-uppercase text-muted mb-2">
                            Scenario
                        </h6>
                        <div className="text-center" >{/*style="transform: scale(0.8);"}*/}
                            {/*<!--?xml version="1.0" encoding="UTF-8" standalone="no" ?-->*/}
                            {/*<!-- Created with Inkscape (http://www.inkscape.org/) -->*/}

                            {/*<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="565.10004" height="356.4942" viewBox="0 0 149.51605 94.322425" version="1.1" id="svg8" inkscape:version="0.92.4 (5da689c313, 2019-01-14)" sodipodi:docname="scenario1.svg">
                            <defs id="defs2"></defs>
                            <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="3.0156775" inkscape:cx="138.60536" inkscape:cy="94.509953" inkscape:document-units="mm" inkscape:current-layer="layer1" showgrid="false" units="px" inkscape:window-width="4384" inkscape:window-height="2314" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="1" fit-margin-top="10" fit-margin-left="10" fit-margin-right="10" fit-margin-bottom="10"></sodipodi:namedview>
                            <metadata id="metadata5">
                                <rdf:rdf>
                                    <cc:work rdf:about="">
                                        <dc:format>image/svg+xml</dc:format>
                                        <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type>
                                        <dc:title></dc:title>
                                    </cc:work>
                                </rdf:rdf>
                            </metadata>
                            <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(-10.232358,-185.58766)">
                                <g id="g3915" transform="matrix(0.56885418,0,0,0.56885417,73.613296,249.41365)">
                                    <path id="path3877" d="M 20,38.5 C 9.799,38.5 1.5,30.201 1.5,20 1.5,9.799 9.799,1.5 20,1.5 30.201,1.5 38.5,9.799 38.5,20 38.5,30.201 30.201,38.5 20,38.5 Z" inkscape:connector-curvature="0" style="fill:#bae0bd"></path>
                                    <path id="path3879" d="m 20,2 c 9.925,0 18,8.075 18,18 0,9.925 -8.075,18 -18,18 C 10.075,38 2,29.925 2,20 2,10.075 10.075,2 20,2 M 20,1 C 9.507,1 1,9.507 1,20 1,30.493 9.507,39 20,39 30.493,39 39,30.493 39,20 39,9.507 30.493,1 20,1 Z" inkscape:connector-curvature="0" style="fill:#5e9c76"></path>
                                    <path id="path3881" d="m 19,9 h 2 v 7 h -2 z" inkscape:connector-curvature="0" style="fill:#ffffff"></path>
                                    <path id="path3883" d="m 15,11 5,-5 5,5 z" inkscape:connector-curvature="0" style="fill:#ffffff"></path>
                                    <path id="path3885" transform="rotate(-180,20,27.5)" d="m 19,24 h 2 v 7 h -2 z" inkscape:connector-curvature="0" style="fill:#ffffff"></path>
                                    <path id="path3887" d="m 25,29 -5,5 -5,-5 z" inkscape:connector-curvature="0" style="fill:#ffffff"></path>
                                    <path id="path3889" transform="rotate(-90,31.5,20)" d="m 30.5,16.5 h 2 v 7 h -2 z" inkscape:connector-curvature="0" style="fill:#ffffff"></path>
                                    <path id="path3891" d="m 30,25 -5,-5 5,-5 z" inkscape:connector-curvature="0" style="fill:#ffffff"></path>
                                    <path id="path3893" transform="rotate(90,8.5,20)" d="m 7.5,16.5 h 2 v 7 h -2 z" inkscape:connector-curvature="0" style="fill:#ffffff"></path>
                                    <path id="path3895" d="m 10,15 5,5 -5,5 z" inkscape:connector-curvature="0" style="fill:#ffffff"></path>
                                </g>
                                <g id="g3931" transform="matrix(0.56885417,0,0,0.56885417,42.498646,184.25151)">
                                    <path id="path3917" d="M 6.537,32.5 6.346,32.492 C 3.067,32.409 0.5,29.776 0.5,26.5 0.5,24.038 1.979,21.854 4.267,20.934 L 4.634,20.787 4.574,20.396 C 4.523,20.059 4.5,19.774 4.5,19.5 c 0,-3.309 2.691,-6 6,-6 0.517,0 1.045,0.072 1.571,0.215 l 0.504,0.137 0.114,-0.509 C 13.467,9.903 16.473,7.5 20,7.5 c 2.698,0 5.2,1.464 6.53,3.82 l 0.166,0.293 0.334,-0.043 c 0.318,-0.042 0.64,-0.07 0.97,-0.07 3.792,0 6.99,2.837 7.441,6.601 l 0.029,0.251 0.22,0.125 c 2.35,1.333 3.81,3.832 3.81,6.524 0,4.136 -3.364,7.5 -7.5,7.5 H 6.537 Z" inkscape:connector-curvature="0" style="fill:#c2e8ff"></path>
                                    <path id="path3919" d="m 20,8 c 2.517,0 4.853,1.366 6.095,3.566 l 0.331,0.586 0.668,-0.086 C 27.443,12.021 27.73,12 28,12 c 3.538,0 6.524,2.648 6.944,6.16 l 0.06,0.502 0.44,0.249 C 37.637,20.154 39,22.488 39,25 c 0,3.86 -3.14,7 -7,7 H 6.677 L 6.358,31.992 C 3.354,31.916 1,29.503 1,26.5 1,24.244 2.355,22.241 4.453,21.398 L 5.187,21.103 5.07,20.321 C 5.022,20.008 5,19.747 5,19.5 5,16.467 7.467,14 10.5,14 c 0.471,0 0.956,0.067 1.441,0.198 l 1.007,0.273 0.23,-1.018 C 13.903,10.242 16.708,8 20,8 M 20,7 C 16.19,7 13.008,9.666 12.202,13.233 11.659,13.086 11.09,13 10.5,13 6.91,13 4,15.91 4,19.5 4,19.831 4.033,20.153 4.08,20.47 1.69,21.431 0,23.766 0,26.5 c 0,3.534 2.821,6.402 6.333,6.492 V 33 H 32 c 4.418,0 8,-3.582 8,-8 0,-2.986 -1.639,-5.585 -4.063,-6.959 C 35.462,14.076 32.093,11 28,11 27.649,11 27.305,11.03 26.966,11.074 25.593,8.644 22.99,7 20,7 Z" inkscape:connector-curvature="0" style="fill:#7496c4"></path>
                                </g>
                                <g id="g3974" transform="matrix(0.56885418,0,0,0.56885417,12.309337,249.41365)">
                                    <path id="path3933" d="M 4,27.5 C 2.621,27.5 1.5,26.378 1.5,25 V 4 C 1.5,2.622 2.621,1.5 4,1.5 h 32 c 1.379,0 2.5,1.122 2.5,2.5 v 21 c 0,1.378 -1.121,2.5 -2.5,2.5 z" inkscape:connector-curvature="0" style="fill:#e1ebf2"></path>
                                    <path id="path3935" d="m 36,2 c 1.103,0 2,0.897 2,2 v 21 c 0,1.103 -0.897,2 -2,2 H 4 C 2.897,27 2,26.103 2,25 V 4 C 2,2.897 2.897,2 4,2 H 36 M 36,1 H 4 C 2.343,1 1,2.343 1,4 v 21 c 0,1.657 1.343,3 3,3 h 32 c 1.657,0 3,-1.343 3,-3 V 4 C 39,2.343 37.657,1 36,1 Z" inkscape:connector-curvature="0" style="fill:#66798f"></path>
                                    <path id="path3937" d="M 4,38.5 C 2.621,38.5 1.5,37.378 1.5,36 v -6 c 0,-1.378 1.121,-2.5 2.5,-2.5 h 32 c 1.379,0 2.5,1.122 2.5,2.5 v 6 c 0,1.378 -1.121,2.5 -2.5,2.5 z" inkscape:connector-curvature="0" style="fill:#e1ebf2"></path>
                                    <path id="path3939" d="m 36,28 c 1.103,0 2,0.897 2,2 v 6 c 0,1.103 -0.897,2 -2,2 H 4 C 2.897,38 2,37.103 2,36 v -6 c 0,-1.103 0.897,-2 2,-2 h 32 m 0,-1 H 4 c -1.657,0 -3,1.343 -3,3 v 6 c 0,1.657 1.343,3 3,3 h 32 c 1.657,0 3,-1.343 3,-3 v -6 c 0,-1.657 -1.343,-3 -3,-3 z" inkscape:connector-curvature="0" style="fill:#66798f"></path>
                                    <path id="path3941" d="m 5.5,5.5 h 29 v 18 h -29 z" inkscape:connector-curvature="0" style="fill:#8bb7f0"></path>
                                    <path id="path3943" d="M 34,6 V 23 H 6 V 6 H 34 M 35,5 H 5 v 19 h 30 z" inkscape:connector-curvature="0" style="fill:#4e7ab5"></path>
                                    <path id="path3945" d="m 5,32 h 16 v 1 H 5 Z" inkscape:connector-curvature="0" style="fill:#66798f"></path>
                                    <path id="path3947" d="M 15,32.667 C 15,32.667 14.37,34 12.5,34 10.63,34 10,32.667 10,32.667 L 12.442,32 Z" inkscape:connector-curvature="0" style="fill:#66798f"></path>
                                    <g id="g3953">
                                        <path id="path3949" d="m 33,31.5 a 1.5,1.5 0 1 0 0,3 1.5,1.5 0 1 0 0,-3 z" inkscape:connector-curvature="0" style="fill:#bae0bd"></path>
                                        <path id="path3951" d="m 33,32 c 0.551,0 1,0.449 1,1 0,0.551 -0.449,1 -1,1 -0.551,0 -1,-0.449 -1,-1 0,-0.551 0.449,-1 1,-1 m 0,-1 c -1.105,0 -2,0.895 -2,2 0,1.105 0.895,2 2,2 1.105,0 2,-0.895 2,-2 0,-1.105 -0.895,-2 -2,-2 z" inkscape:connector-curvature="0" style="fill:#5e9c76"></path>
                                    </g>
                                </g>
                                <g id="g3974-3" transform="matrix(0.56885419,0,0,0.56885417,134.91726,249.41365)">
                                    <path id="path3933-6" d="M 4,27.5 C 2.621,27.5 1.5,26.378 1.5,25 V 4 C 1.5,2.622 2.621,1.5 4,1.5 h 32 c 1.379,0 2.5,1.122 2.5,2.5 v 21 c 0,1.378 -1.121,2.5 -2.5,2.5 z" inkscape:connector-curvature="0" style="fill:#e1ebf2"></path>
                                    <path id="path3935-7" d="m 36,2 c 1.103,0 2,0.897 2,2 v 21 c 0,1.103 -0.897,2 -2,2 H 4 C 2.897,27 2,26.103 2,25 V 4 C 2,2.897 2.897,2 4,2 H 36 M 36,1 H 4 C 2.343,1 1,2.343 1,4 v 21 c 0,1.657 1.343,3 3,3 h 32 c 1.657,0 3,-1.343 3,-3 V 4 C 39,2.343 37.657,1 36,1 Z" inkscape:connector-curvature="0" style="fill:#66798f"></path>
                                    <path id="path3937-5" d="M 4,38.5 C 2.621,38.5 1.5,37.378 1.5,36 v -6 c 0,-1.378 1.121,-2.5 2.5,-2.5 h 32 c 1.379,0 2.5,1.122 2.5,2.5 v 6 c 0,1.378 -1.121,2.5 -2.5,2.5 z" inkscape:connector-curvature="0" style="fill:#e1ebf2"></path>
                                    <path id="path3939-3" d="m 36,28 c 1.103,0 2,0.897 2,2 v 6 c 0,1.103 -0.897,2 -2,2 H 4 C 2.897,38 2,37.103 2,36 v -6 c 0,-1.103 0.897,-2 2,-2 h 32 m 0,-1 H 4 c -1.657,0 -3,1.343 -3,3 v 6 c 0,1.657 1.343,3 3,3 h 32 c 1.657,0 3,-1.343 3,-3 v -6 c 0,-1.657 -1.343,-3 -3,-3 z" inkscape:connector-curvature="0" style="fill:#66798f"></path>
                                    <path id="path3941-5" d="m 5.5,5.5 h 29 v 18 h -29 z" inkscape:connector-curvature="0" style="fill:#8bb7f0"></path>
                                    <path id="path3943-6" d="M 34,6 V 23 H 6 V 6 H 34 M 35,5 H 5 v 19 h 30 z" inkscape:connector-curvature="0" style="fill:#4e7ab5"></path>
                                    <path id="path3945-2" d="m 5,32 h 16 v 1 H 5 Z" inkscape:connector-curvature="0" style="fill:#66798f"></path>
                                    <path id="path3947-9" d="M 15,32.667 C 15,32.667 14.37,34 12.5,34 10.63,34 10,32.667 10,32.667 L 12.442,32 Z" inkscape:connector-curvature="0" style="fill:#66798f"></path>
                                    <g id="g3953-1">
                                        <path id="path3949-2" d="m 33,31.5 a 1.5,1.5 0 1 0 0,3 1.5,1.5 0 1 0 0,-3 z" inkscape:connector-curvature="0" style="fill:#bae0bd"></path>
                                        <path id="path3951-7" d="m 33,32 c 0.551,0 1,0.449 1,1 0,0.551 -0.449,1 -1,1 -0.551,0 -1,-0.449 -1,-1 0,-0.551 0.449,-1 1,-1 m 0,-1 c -1.105,0 -2,0.895 -2,2 0,1.105 0.895,2 2,2 1.105,0 2,-0.895 2,-2 0,-1.105 -0.895,-2 -2,-2 z" inkscape:connector-curvature="0" style="fill:#5e9c76"></path>
                                    </g>
                                </g>
                                <g id="g3931-0" transform="matrix(0.56885417,0,0,0.56885417,104.94031,184.25151)">
                                    <path id="path3917-9" d="M 6.537,32.5 6.346,32.492 C 3.067,32.409 0.5,29.776 0.5,26.5 0.5,24.038 1.979,21.854 4.267,20.934 L 4.634,20.787 4.574,20.396 C 4.523,20.059 4.5,19.774 4.5,19.5 c 0,-3.309 2.691,-6 6,-6 0.517,0 1.045,0.072 1.571,0.215 l 0.504,0.137 0.114,-0.509 C 13.467,9.903 16.473,7.5 20,7.5 c 2.698,0 5.2,1.464 6.53,3.82 l 0.166,0.293 0.334,-0.043 c 0.318,-0.042 0.64,-0.07 0.97,-0.07 3.792,0 6.99,2.837 7.441,6.601 l 0.029,0.251 0.22,0.125 c 2.35,1.333 3.81,3.832 3.81,6.524 0,4.136 -3.364,7.5 -7.5,7.5 H 6.537 Z" inkscape:connector-curvature="0" style="fill:#c2e8ff"></path>
                                    <path id="path3919-3" d="m 20,8 c 2.517,0 4.853,1.366 6.095,3.566 l 0.331,0.586 0.668,-0.086 C 27.443,12.021 27.73,12 28,12 c 3.538,0 6.524,2.648 6.944,6.16 l 0.06,0.502 0.44,0.249 C 37.637,20.154 39,22.488 39,25 c 0,3.86 -3.14,7 -7,7 H 6.677 L 6.358,31.992 C 3.354,31.916 1,29.503 1,26.5 1,24.244 2.355,22.241 4.453,21.398 L 5.187,21.103 5.07,20.321 C 5.022,20.008 5,19.747 5,19.5 5,16.467 7.467,14 10.5,14 c 0.471,0 0.956,0.067 1.441,0.198 l 1.007,0.273 0.23,-1.018 C 13.903,10.242 16.708,8 20,8 M 20,7 C 16.19,7 13.008,9.666 12.202,13.233 11.659,13.086 11.09,13 10.5,13 6.91,13 4,15.91 4,19.5 4,19.831 4.033,20.153 4.08,20.47 1.69,21.431 0,23.766 0,26.5 c 0,3.534 2.821,6.402 6.333,6.492 V 33 H 32 c 4.418,0 8,-3.582 8,-8 0,-2.986 -1.639,-5.585 -4.063,-6.959 C 35.462,14.076 32.093,11 28,11 27.649,11 27.305,11.03 26.966,11.074 25.593,8.644 22.99,7 20,7 Z" inkscape:connector-curvature="0" style="fill:#7496c4"></path>
                                </g>
                                <text xml:space="preserve" style="font-style:normal;font-weight:normal;font-size:10.58333302px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332" x="43.708122" y="207.74187" id="text4047">
                                    <tspan sodipodi:role="line" id="tspan4045" x="43.708122" y="207.74187" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.52777767px;font-family:'Cerebri Sans';-inkscape-font-specification:'Cerebri Sans';fill:#12263F;stroke-width:0.26458332">Internal Net</tspan>
                                </text>
                                <text xml:space="preserve" style="font-style:normal;font-weight:normal;font-size:10.58333302px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332" x="43.416496" y="211.39626" id="text4047-7">
                                    <tspan sodipodi:role="line" id="tspan4045-7" x="43.416496" y="211.39626" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.82222223px;font-family:'Cerebri Sans';-inkscape-font-specification:'Cerebri Sans';fill:#95AAC9;stroke-width:0.26458332">192.168.1.0/24</tspan>
                                </text>
                                <text xml:space="preserve" style="font-style:normal;font-weight:normal;font-size:10.58333302px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332" x="106.03259" y="207.63556" id="text4047-2">
                                    <tspan sodipodi:role="line" id="tspan4045-3" x="106.03259" y="207.63556" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.52777767px;font-family:'Cerebri Sans';-inkscape-font-specification:'Cerebri Sans';fill:#12263F;stroke-width:0.26458332">External Net</tspan>
                                </text>
                                <text xml:space="preserve" style="font-style:normal;font-weight:normal;font-size:10.58333302px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332" x="106.79929" y="211.28995" id="text4047-7-7">
                                    <tspan sodipodi:role="line" id="tspan4045-7-2" x="106.79929" y="211.28995" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.82222223px;font-family:'Cerebri Sans';-inkscape-font-specification:'Cerebri Sans';fill:#95AAC9;stroke-width:0.26458332">172.16.1.0/24</tspan>
                                </text>
                                <text xml:space="preserve" style="font-style:normal;font-weight:normal;font-size:10.58333302px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332" x="13.412517" y="277.18082" id="text4047-5">
                                    <tspan sodipodi:role="line" id="tspan4045-37" x="13.412517" y="277.18082" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.52777767px;font-family:'Cerebri Sans';-inkscape-font-specification:'Cerebri Sans';fill:#12263F;stroke-width:0.26458332">Web Server</tspan>
                                </text>
                                <text xml:space="preserve" style="font-style:normal;font-weight:normal;font-size:10.58333302px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332" x="79.269714" y="277.21429" id="text4047-5-1">
                                    <tspan sodipodi:role="line" id="tspan4045-37-3" x="79.269714" y="277.21429" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.52777767px;font-family:'Cerebri Sans';-inkscape-font-specification:'Cerebri Sans';fill:#12263F;stroke-width:0.26458332">Router</tspan>
                                </text>
                                <text xml:space="preserve" style="font-style:normal;font-weight:normal;font-size:10.58333302px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332" x="136.68834" y="277.18082" id="text4047-5-6">
                                    <tspan sodipodi:role="line" id="tspan4045-37-4" x="136.68834" y="277.18082" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:3.52777767px;font-family:'Cerebri Sans';-inkscape-font-specification:'Cerebri Sans';fill:#12263F;stroke-width:0.26458332">Web Client</tspan>
                                </text>
                                <path style="fill:none;stroke:#12263F;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 27.832134,248.24728 49.517413,212.74295" id="path4151" inkscape:connector-curvature="0"></path>
                                <path style="fill:none;stroke:#12263F;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="m 58.168934,213.21216 19.565117,36.49816" id="path4168" inkscape:connector-curvature="0"></path>
                                <path style="fill:none;stroke:#12263F;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="M 92.385956,250.32447 113.26711,212.86122" id="path4170" inkscape:connector-curvature="0"></path>
                                <path style="fill:none;stroke:#12263F;stroke-width:0.26458332px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" d="m 119.40863,212.86122 22.63588,35.884" id="path4172" inkscape:connector-curvature="0"></path>
                                <rect style="fill:#ffffff;stroke-width:0.26458332" id="rect879" width="116.42561" height="5.2641568" x="25.267954" y="229.1801"></rect>
                                <text xml:space="preserve" style="font-style:normal;font-weight:normal;font-size:10.58333302px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332" x="60.006214" y="232.5531" id="text4047-7-6-3">
                                    <tspan sodipodi:role="line" id="tspan4045-7-8-5" x="60.006214" y="232.5531" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.82222223px;font-family:'Cerebri Sans';-inkscape-font-specification:'Cerebri Sans';fill:#95AAC9;stroke-width:0.26458332">192.168.1.1</tspan>
                                </text>
                                <text xml:space="preserve" style="font-style:normal;font-weight:normal;font-size:10.58333302px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332" x="93.521347" y="232.81631" id="text4047-7-6-8">
                                    <tspan sodipodi:role="line" id="tspan4045-7-8-50" x="93.521347" y="232.81631" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.82222223px;font-family:'Cerebri Sans';-inkscape-font-specification:'Cerebri Sans';fill:#95AAC9;stroke-width:0.26458332">172.16.1.1</tspan>
                                </text>
                                <text xml:space="preserve" style="font-style:normal;font-weight:normal;font-size:10.58333302px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332" x="124.05346" y="232.8163" id="text4047-7-6-9">
                                    <tspan sodipodi:role="line" id="tspan4045-7-8-9" x="124.05346" y="232.8163" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.82222223px;font-family:'Cerebri Sans';-inkscape-font-specification:'Cerebri Sans';fill:#95AAC9;stroke-width:0.26458332">172.16.1.2</tspan>
                                </text>
                                <text xml:space="preserve" style="font-style:normal;font-weight:normal;font-size:10.58333302px;line-height:1.25;font-family:sans-serif;letter-spacing:0px;word-spacing:0px;fill:#000000;fill-opacity:1;stroke:none;stroke-width:0.26458332" x="29.704216" y="232.66403" id="text4047-7-6">
                                    <tspan sodipodi:role="line" id="tspan4045-7-8" x="29.704216" y="232.66403" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:2.82222223px;font-family:'Cerebri Sans';-inkscape-font-specification:'Cerebri Sans';fill:#95AAC9;stroke-width:0.26458332">192.168.1.2</tspan>
                                </text>
                            </g>
                        </svg>*/}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
