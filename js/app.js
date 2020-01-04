const particlesJSON = {
    "particles": {
        "number": {
            "value": 10,
            "density": {
                "enable": true,
                "value_area": 1250
            }
        },
        "color": {
            "value": "#06CDF4"
        },
        "shape": {
            "type": "polygon",
            "stroke": {
                "width": 2,
                "color": "#224B8B"
            },
            "polygon": {
                "nb_sides": 6
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.1,
            "random": true
        },
        "size": {
            "value": 10,
            "random": true
        },
        "line_linked": {
            "enable": false,
            "distance": 200,
            "color": "#3BABFD",
            "opacity": 0.5,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 5,
            "direction": "bottom",
            "random": true,
            "straight": true,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": [
                    "grab",
                    "bubble"
                ]
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 0.2
                }
            },
            "bubble": {
                "distance": 600,
                "size": 12,
                "duration": 1,
                "opacity": 0.2,
                "speed": 2
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 10
            },
            "remove": {
                "particles_nb": 5
            }
        }
    },
    "retina_detect": true
}

particlesJS("particles-js", particlesJSON);
