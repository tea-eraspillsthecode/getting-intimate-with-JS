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
    window.location.href = `${window.location.origin}/artwork.html`
}

function notifyUser() {
    alert("This feature has not been implemented.")
}