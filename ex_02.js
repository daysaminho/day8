
const map = L.map('map').setView([46.6034, 1.8883], 5); 


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

const schools = [
    { name: "Bordeaux", coords: [44.8378, -0.5792] },
    { name: "Lille", coords: [50.6292, 3.0573] },
    { name: "Lyon", coords: [45.7640, 4.8357] },
    { name: "Marseille", coords: [43.2965, 5.3698] },
    { name: "Nantes", coords: [47.2184, -1.5536] },
    { name: "Paris", coords: [48.8566, 2.3522] },
    { name: "Strasbourg", coords: [48.5734, 7.7521] },
];

schools.forEach(school => {
    const marker = L.marker(school.coords).addTo(map);
    marker.bindPopup(`${school.name} rocks!`); 
});
