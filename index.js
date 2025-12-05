let searchValue = "";

function openMenu() {
  document.body.classList += " menu--open";
}

function closeMenu() {
  document.body.classList.remove("menu--open");
}

function onSearchChange(event) {
  searchValue = event.target.value.toLowerCase();
}

function rerouteToArtworkPage() {
  const loading = document.querySelector(".btn__overlay--loading");
  loading.classList.add("btn__overlay--visible");

  window.location.href = `${window.location.origin}/getting-intimate-with-JS/artwork.html?search=${encodeURIComponent(searchValue)}`;
}

function showUserArt() {
  window.location.href = `${window.location.origin}/getting-intimate-with-JS/artwork.html`;
}

function notifyUser() {
  alert("This feature has not been implemented.");
}
