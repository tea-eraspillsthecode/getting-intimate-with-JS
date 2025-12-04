function openMenu() {
    document.body.classList += (" menu--open")
}

function closeMenu() {
    document.body.classList.remove("menu--open")
}

function loadingState() {
    const loading = document.querySelector(".btn__overlay--loading")
    loading.classList.add("btn__overlay--visible")
}

function showUserArt() {
    window.location.href = "https://tea-eraspillsthecode.github.io/getting-intimate-with-JS/artwork.html"
}

function notifyUser() {
    alert("This feature has not been implemented.")
}