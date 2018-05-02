  mainNav = document.querySelector(".main-nav");
  navList = document.querySelector(".main-nav__list");
  toggleButton = document.querySelector(".main-nav__button");

  if(mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.add("main-nav--open");
  }

  toggleButton.addEventListener("click", function(evt){
    evt.preventDefault();
    if(mainNav.classList.contains("main-nav--closed")){
      mainNav.classList.remove("main-nav--closed");
      mainNav.classList.add("main-nav--open");
      navList.classList.remove("visually-hidden");
    } else {
      mainNav.classList.add("main-nav--closed");
      navList.classList.add("visually-hidden");
      mainNav.classList.remove("main-nav--open")
    }
  });
