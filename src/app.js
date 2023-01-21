function openNav() {
    document.getElementById("home-menu").style.display = "none";
    document.getElementById("close-home-menu").style.display = "block";
    document.getElementsByTagName("nav")[0].style.display = "flex";
    document.getElementsByTagName("h1")[0].style.display = "none";
    document.getElementsByTagName("main")[0].style.display = "none";
}
function closeNav() {
    document.getElementById("home-menu").style.display = "block";
    document.getElementById("close-home-menu").style.display = "none";
    document.getElementsByTagName("nav")[0].style.display = "none";
    document.getElementsByTagName("h1")[0].style.display = "block";
    document.getElementsByTagName("main")[0].style.display = "block";
}
document.addEventListener("DOMContentLoaded", function() {
  var lazyBackgrounds = [].slice.call(document.querySelectorAll(".lazy-background"));
  if ("IntersectionObserver" in window) {
    let lazyBackgroundObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          lazyBackgroundObserver.unobserve(entry.target);
        }
      });
    });
    lazyBackgrounds.forEach(function(lazyBackground) {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  }
});
