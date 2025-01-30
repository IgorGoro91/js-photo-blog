

const endpoint = `https://lanciweb.github.io/demo/api/pictures/`
const methodFetch = {method: `GET`}

const row = document.querySelector(`row`)

fetch(endpoint, methodFetch )
.then(resposse => response.json() )
.then( data =>{
    console.log(data)


    data.forEach(element => {

        const {date, id, title, url,} = element 

        
        row.innerHTML =
        `
        <div class="card p-3 position-reative">
                    <img src="./img/pin.svg" class="position-absolute top-0 start-50 translate-middle" alt="">
                    <img class="card-omg-top" src='${url}' alt='${title}'>
                    <div class="card-body">
                        <p class="card-titolo">${date}</p>
                        <h3 class="card-text text-uppercase">${title}</h3>
                    </div>
                </div>
        `
    });

} )
.catch(error => {
    console.error(error)
})