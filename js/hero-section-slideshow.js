let counter = 1;
const backgroundImages=[{styleCLass:"hero-background-1",waveClolor:"#841508"},
        {styleCLass:"hero-background-2", waveClolor: "#fbeda4"},
        {styleCLass: "hero-background-3", waveClolor:"#1a2e69"},
    ];

setInterval( () => {
    const heroSection = document.getElementById("hero-section")
    const wave = document.getElementById("hero-wave").children[0]
    wave.style.fill = backgroundImages[counter].waveClolor
    heroSection.className = backgroundImages[counter].styleCLass
    counter = counter === 2 ? 0 : counter + 1
},7000);

