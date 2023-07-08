// $(function(){
//     $("#for-header").load("/pages/header-footer/header.html"); 
//   });
// $(function(){
//     $("#for-footer").load("/pages/header-footer/footer.html"); 
//   });
// MOBILE HEADER START 

// mobile dropdown icon rotation
$("#dropdown-button").click(function() {
  $('.rotate-delay').toggleClass('turn-ower-button');
});

$("#mobile-nav-overlay").click(function() {
    $('.rotate-delay').toggleClass('turn-ower-button');
  });

// open and close mobile nav bar

const mobileDropdownNav = document.getElementById("mobile-dropdown-nav");

const dropDownBtn = document.getElementById("dropdown-button");
const mobileNavOverlay = document.getElementById("mobile-nav-overlay");
dropDownBtn.onclick = function myFunction() {
  if (mobileDropdownNav.style.opacity !== "0") {
    mobileDropdownNav.style.opacity = "0";
    mobileNavOverlay.style.display = "none";
  } else {
    mobileDropdownNav.style.opacity = "1";
    mobileNavOverlay.style.display = "block";
  }
};

mobileNavOverlay.onclick = dropDownBtn.onclick

// UL open and close on click

$('li.mobile-buiucani').click(function () {
  $(this).find('ul').toggle();
  $(this).siblings('li').find('ul').hide();
});

$(' li.mobile-ciocana').click(function () {
  $("html, body").animate({
      scrollTop: 0
  }, "fast");
  $(this).find('ul').toggle();
  $(this).siblings('li').find('ul').hide();
});
$('li.mobile-postaveche').click(function () {
  $("html, body").animate({
      scrollTop: 0
  }, "fast");
  $(this).find('ul').toggle();
  $(this).siblings('li').find('ul').hide();
});
$('li.mobile-botanica').click(function () {
  $("html, body").animate({
      scrollTop: 0
  }, "fast");
  $(this).find('ul').toggle();
  $(this).siblings('li').find('ul').hide();
});
$('li.mobile-cricova').click(function () {
  $("html, body").animate({
      scrollTop: 0
  }, "fast");
  $(this).find('ul').toggle();
  $(this).siblings('li').find('ul').hide();
});
$('li.mobile-sculeanca').click(function () {
  $("html, body").animate({
      scrollTop: 0
  }, "fast");
  $(this).find('ul').toggle();
  $(this).siblings('li').find('ul').hide();
});

// MOBILE HEADER END


// galllery start

$(document).ready(mySlider);

function mySlider() {
    let imgNumber, 
        sliderContainerWidth, 
        imgContainer,
        index,
        flag = true,
        speed = 600,
        bullets = true,
        auto = true ,
        time = 10000 ;
        
    construction();
    $(window).resize(construction);
    if(auto){
     let handle = setInterval(slideRight, time) ; 
    }

    function construction() {
        index = 1;
        imgNumber = $('.images-container li').length;
        sliderContainerWidth = Math.round($('#slider-container').width());
        imgContainer = sliderContainerWidth * imgNumber;
        $('.images-container').css("width", imgContainer);
        $('.images-container li').css("width", sliderContainerWidth);
        $('.images-container').css("margin-left", 0);
        if (bullets == true) {
            $('.bullets-container').html("");
            for (i = 1; i <= imgNumber; i++) {
                $('.bullets-container').append("<span class='bullet'></span>");
            }
            $('.bullet').eq(0).addClass('active');
        }
        $(".bullet").click(pagers);
        $('.a-right').click(slideRight);
        $('.a-left').click(slideLeft);
    }

    function pagers() {
        if (!$(this).hasClass('active')) {
            let bulletIndex = $(".bullets-container span").index(this) + 1;
            index = bulletIndex;
            $(".bullets-container").find(".bullet").removeClass("active").eq(bulletIndex - 1).addClass("active");
            $('.images-container').animate({
                marginLeft: -sliderContainerWidth * (bulletIndex - 1)
            }, speed);
        }
    }

    function slideRight() {
        let imgContainerLeft = parseInt($('.images-container').css('margin-left'));
        if (flag) {
            if (imgContainerLeft == -sliderContainerWidth * (imgNumber - 1)) {
                index = 1;
                $('.images-container').animate({
                    marginLeft: 0
                }, speed, function() {
                    flag = true;
                })
            } else {
                index++;
                $('.images-container').animate({
                    marginLeft: '-=' + sliderContainerWidth
                }, speed, function() {
                    flag = true;
                })
            }
            flag = false;
            $(".bullets-container").find(".bullet").removeClass("active").eq(index - 1).addClass("active");
        }
    }

    function slideLeft() {
        let imgContainerLeft = parseInt($('.images-container').css('margin-left'));
        clearInterval(slideRight, 10000);
        if (flag) {
            if (imgContainerLeft == 0 ) {
                index = index + (imgNumber - 1);
                $('.images-container').animate({
                    marginLeft: -sliderContainerWidth * (imgNumber - 1) + 'px'
                }, speed, function() {
                    flag = true;
                })
            } else {
                index--;
                $('.images-container').animate({
                    marginLeft: '+=' + sliderContainerWidth
                }, speed, function() {
                    flag = true;
                })
            }
            flag = false;
            $(".bullets-container").find(".bullet").removeClass("active").eq(index - 1).addClass("active");
        }

    }
    $("#slider-container .arrow , .bullets-container").click(function(){
      clearInterval(handle);
    },function(){
      handle = setInterval(slideRight, time) ;
    })
  
};

// galllery end




//dfghdzxfgzdfgzfdghbzdgzd

// dropDownBtn.onclick = function myFunction() {
//   mobileDropdownNav.style.opacity !== "0"
// };


//fhsxdhdx b

// const mobileDropdownNav = document.getElementById("mobile-dropdown-nav");

// const dropDownBtn = document.getElementById("dropdown-button");
// const dropDownBtn1 = document.getElementById("dropdown-button1");
// dropDownBtn.onclick = function myFunction() {
//   if (mobileDropdownNav.style.opacity !== "0") {
//     mobileDropdownNav.style.opacity = "0";
//     dropDownBtn1.style.display = "none";
//   } else {
//     mobileDropdownNav.style.opacity = "1";
//     dropDownBtn1.style.display = "block";
//   }
// };
