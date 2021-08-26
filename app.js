window.addEventListener("load", function () {
  baguetteBox.run(".gallery");
});

let searchBar = document.querySelector("#search-bar");
let captions = document.querySelectorAll("a");

searchBar.addEventListener("keyup", () => {
  for (let i = 0; i < captions.length; i++) {
    if (
      captions[i].dataset.caption.includes(searchBar.value.toLowerCase()) ||
      searchBar.value == 0
    ) {
      captions[i].style.display = "initial";
    } else {
      captions[i].style.display = "none";
    }
  }
});
