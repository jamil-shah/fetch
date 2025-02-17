fetch('https://msu-webdev.github.io/api/start.json')
    .then(response => response.json())
    .then(json => console.log(json));

    const earthtomoon = 238900;
    const moondiameter = 2159;

    const moons = Math.floor(earthtomoon/moondiameter);

    console.log('Answer:',moons);

    