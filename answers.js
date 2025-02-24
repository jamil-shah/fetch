fetch('https://msu-webdev.github.io/api/start.json')
    .then(response => response.json())
    .then(json => {
        console.log('Step 1 data:',json);

    const earthtomoon = 238900;
    const moondiameter = 2159;

    const moons = Math.floor(earthtomoon/moondiameter);

    console.log('Answer:',moons);

    const nexturl = 'https://msu-webdev.github.io/api/110.json';
    return fetch(nexturl);
    })

    .then(response => response.json())
    .then(data => {
        console.log('Step 2 data:',data);

        const enroll2023 = 51289;
        const enroll2024 = 52089;

        const difference = enroll2024 - enroll2023;
        const percentChange = (difference / enroll2023) * 100;

        const step2Answer = Math.round(percentChange);

        console.log('Answer to Step 2:', step2Answer);

        const nexturl2 = 'https://msu-webdev.github.io/api/15.json'
        return fetch(nexturl2)
})

    .then(data => {
        console.log('Step 3 data:',data);

        const nintendoBits = 8;
        const superNintendoBits = 16;
        const step3Answer = nintendoBits * superNintendoBits;

        console.log('Answer to Step 3:', step3Answer);

        const nexturl3 = 'https://msu-webdev.github.io/api/128.json';
        return fetch(nexturl3);
    })

    .then(response => response.json())
    .then(finalData => {
        console.log('Final step data:', finalData);
    })
    
 