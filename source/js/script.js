  mainNav = document.querySelector(".main-nav");
  navList = document.querySelector(".main-nav__list");
  toggleButton = document.querySelector(".main-nav__button");
  catProgramBefore = document.querySelector(".slider-elem__before");
  catProgramAfter = document.querySelector(".slider-elem__after");
  buttonIndicator = document.querySelector(".slider-elem__indicator");
  catPro = document.querySelector(".example__cat-pro");
  catSlim = document.querySelector(".example__cat-slim");

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

  catProgramBefore.addEventListener("click", function(evt){
    evt.preventDefault();
    catPro.classList.add("example__block");
    catPro.classList.remove("example__none");
    catSlim.classList.add("example__none");
    buttonIndicator.classList.remove("slider-elem__indicator-after");
  });

  catProgramAfter.addEventListener("click", function(evt){
    evt.preventDefault();
    catPro.classList.remove("example__block");
    catPro.classList.add("example__none");
    catSlim.classList.remove("example__none");
    catSlim.classList.add("example__block");
    buttonIndicator.classList.add("slider-elem__indicator-after");
  });
