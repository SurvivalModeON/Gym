
// MOBILE HEADER START 

// mobile dropdown icon rotation
$("#dropdown-button, #mobile-nav-overlay").click(function() { 
    $('.rotate-delay').toggleClass('turn-ower-button'); 
});
  
  // open and close mobile nav bar
  
  const mobileDropdownNav = document.getElementById("mobile-dropdown-nav");
  
  const dropDownBtn = document.getElementById("dropdown-button");
  const mobileNavOverlay = document.getElementById("mobile-nav-overlay");
  dropDownBtn.onclick = function myFunctin() {
    if (mobileDropdownNav.style.opacity !== "0") {
      mobileDropdownNav.style.opacity = "0";
      mobileDropdownNav.style.pointerEvents = "none";
      mobileNavOverlay.style.opacity = "0";
      mobileNavOverlay.style.pointerEvents = "none";
  } else {
      mobileDropdownNav.style.opacity = "1";
      mobileDropdownNav.style.pointerEvents = "all";
      mobileNavOverlay.style.opacity = "1";
      mobileNavOverlay.style.pointerEvents = "all";
    }
  };
  
  mobileNavOverlay.onclick = dropDownBtn.onclick
  
  // UL open and close on click
  
  $('li.mobile-dropdown-list').click(function () {
    $(this).find('ul').toggle();
    $(this).siblings('li').find('ul').hide();
  });
  // MOBILE HEADER END
  