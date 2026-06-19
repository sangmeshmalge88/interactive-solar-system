let currentAudio = null;

const planetData = {

    sun: {
        audio: "audio/sun.mp3",
        title: "☀️ Sun",
        facts: [
            "I am a star.",
            "I am at the center of the Solar System.",
            "I provide heat and light to Earth."
        ]
    },

    mercury: {
        audio: "audio/mercury.mp3",
        title: "☿ Mercury",
        facts: [
            "Closest planet to the Sun.",
            "Smallest planet.",
            "A year lasts only 88 Earth days."
        ]
    },

    venus: {
        audio: "audio/venus.mp3",
        title: "♀ Venus",
        facts: [
            "Second planet from the Sun.",
            "Hottest planet.",
            "Often called Earth's twin."
        ]
    },

    earth: {
        audio: "audio/earth.mp3",
        title: "🌍 Earth",
        facts: [
            "Our home planet.",
            "Only known planet with life.",
            "71% covered by water."
        ]
    },

    mars: {
        audio: "audio/mars.mp3",
        title: "♂ Mars",
        facts: [
            "Known as the Red Planet.",
            "Fourth planet from the Sun.",
            "Has two moons."
        ]
    },

    jupiter: {
        audio: "audio/jupiter.mp3",
        title: "♃ Jupiter",
        facts: [
            "Largest planet.",
            "Gas giant.",
            "Has the Great Red Spot storm."
        ]
    },

    saturn: {
        audio: "audio/saturn.mp3",
        title: "♄ Saturn",
        facts: [
            "Famous for its rings.",
            "Second largest planet.",
            "Has many moons."
        ]
    },

    uranus: {
        audio: "audio/uranus.mp3",
        title: "⛢ Uranus",
        facts: [
            "Blue-green planet.",
            "Rotates on its side.",
            "An icy giant."
        ]
    },

    neptune: {
        audio: "audio/neptune.mp3",
        title: "♆ Neptune",
        facts: [
            "Farthest planet from the Sun.",
            "Very cold.",
            "Has powerful winds."
        ]
    }
};

function playPlanet(planet) {

    const data = planetData[planet];

    const player = document.getElementById("audio-player");

    player.pause();

    player.src = data.audio;

    player.load();

    player.play();

    document.getElementById("planet-info").innerHTML = `
        <h2>${data.title}</h2>
        <h3>Interesting Facts</h3>
        <ul>
            <li>${data.facts[0]}</li>
            <li>${data.facts[1]}</li>
            <li>${data.facts[2]}</li>
        </ul>
    `;
}