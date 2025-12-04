// API: "https://api.nookipedia.com/nh/art"
// API KEY: "7383c59c-73ce-46fe-81f4-4c959453c22e"

const artworkListEl = document.querySelector(".artwork__list")
let artData = []

async function main() {
    const loadingPage = document.querySelector(".artwork__loading-state")
    
    loadingPage.classList += " artwork__loading-state--visible"

    const art = await fetch("https://api.nookipedia.com/nh/art", {
    headers: {
        "X-API-KEY": "7383c59c-73ce-46fe-81f4-4c959453c22e",
        "ACCEPT-VERSION": "1.0.0"
    }
})
    artData = await art.json()

    
    setTimeout(() => {
        renderArt(artData)
        loadingPage.classList.remove("artwork__loading-state--visible")
    }, 2000)

}

main()

function renderArt() {
    artworkListEl.innerHTML = artData.map((art) => artHTML(art)).join('')
}

function homePage() {
    window.location.href = "https://tea-eraspillsthecode.github.io/getting-intimate-with-JS/"
}

function filterArt(event) {
    const type = event.target.value

    let filteredArr = artData

    if (type !== 'All') {
        filteredArr = artData.filter(item => item.art_type === type)
    }

    artworkListEl.innerHTML = filteredArr.map(art => artHTML(art)).join("")
}

function onSearchChange(event) {
    const name = (event.target.value).toLowerCase()

    const searchResult = artData.filter(item => item.name.toLowerCase() === name || item.art_name.toLowerCase() === name)

    artworkListEl.innerHTML = searchResult.map(art => artHTML(art)).join("")

    const noResults = document.querySelector(".no-results__page")

    if (searchResult.length === 0) {
        noResults.classList += " no-results__page--visible"
    }
    else {
        noResults.classList.remove("no-results__page--visible")
    }
}

function artHTML(art) {
    return `<div class="art__card">
    <figure class="art__img--wrapper">
        <img class="art__img" src="${art.texture_url || art.image_url}" alt="">
    </figure>
    <div class="art__info">
        <h2 class="art__title"><span class="text--blue">${art.name}</span></h2>
        <h3 class="art__sub-title">"${art.art_name}"</h3>
        <p class="art__introduction">
            <i>Made in ${art.year} by ${art.author}, this is a <span class="text--lowercase">${art.art_style} 
            ${art.art_type}</span>.</i>
        </p>
        <p class="art__description">
            <i><b>Description</b>: ${art.description}</i>
        </p>
        <div class="art__value">
            <button class="btn__art buy__btn">
                <i class="fa-solid fa-sack-dollar"></i>
                BUY: ${art.buy} Bells
            </button>
            <button class="btn__art sell__btn">
                <i class="fa-solid fa-sack-dollar"></i>
                SELL: ${art.sell} Bells
            </button>
        </div>
    </div>
</div>`
}

function openMenu() {
    document.body.classList += (" menu--open")
}

function closeMenu() {
    document.body.classList.remove("menu--open")
}

function notifyUser() {
    alert("This feature has not been implemented.")
}