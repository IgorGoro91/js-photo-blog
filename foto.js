

const endpoint = `https://lanciweb.github.io/demo/api/pictures/`
const methodFetch = {method: `GET`}

const row = document.querySelector(`.row`)

const overlay = document.querySelector(`.overlay`)
const overlayImg = document.querySelector(`.overlay img`)



fetch(endpoint, methodFetch )
.then(response => response.json() )
.then( data =>{
    console.log(data)

    let arrayCadrs = []

    data.forEach(element => {

        const {date, id, title, url,} = element 

        
        row.innerHTML +=
        `
            <div class="col-ms-12 col-md-6 col-lg-4 cards" data-id="${id}">
                <div class="card my-5 p-3 position-reative">
                    <img src="./img/pin.svg" class=" pin-icon position-absolute top-0 start-50 translate-middle" alt="">
                    <img class="card-omg-top" src='${url}' alt='${title}'>
                    <div class="card-body">
                        <p class="card-titolo">${date}</p>
                        <h3 class="card-text text-uppercase">${title}</h3>
                    </div>
                </div>
            </div>
        `

       arrayCadrs = document.querySelectorAll(`.cadrs`)
        

    });

    arrayCadrs.forEach(element => {
        element.addEventListener(`click`, function(){
            console.log( element.getAttribute(`data-id`) )
            overlay.classList.remove(`d-none`)
            overlayImg.setAttribute(`src`, `https://lanciweb.github.io/demo/api/pictures/${element.getAttribute(`data-id`)}.png`)
        })
    })

    

    document.querySelectorAll(".card").forEach(card => {
        const pinIcon = card.querySelector(".pin-icon")

        card.addEventListener("mouseenter", () => {
            pinIcon.style.display = "none"
        })

        card.addEventListener("mouseleave", () => {
            pinIcon.style.display = "block"
    })
})

})

.catch(error => {
    console.error(error)
})