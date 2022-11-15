function openNav() {
    document.getElementById("home-menu").style.display = "none";
    document.getElementById("close-home-menu").style.display = "block";
    document.getElementsByTagName("nav")[0].style.display = "flex";
    document.getElementsByTagName("h1")[0].style.display = "none";
}
function closeNav() {
    document.getElementById("home-menu").style.display = "block";
    document.getElementById("close-home-menu").style.display = "none";
    document.getElementsByTagName("nav")[0].style.display = "none";
    document.getElementsByTagName("h1")[0].style.display = "block";
}