let appid = '10207dcb3a245bc5201ad3e3a6420064';

fetch(`https://api.openweathermap.org/data/2.5/weather?q=irvine&appid=${appid}`)
.then(r => r.json())
    .then(response => {
        console.log(response)
      document.getElementById('city').innerHTML = `
            ${response.name}
      `
    })
    .catch(e => console.error(e))

