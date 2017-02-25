// Closes the sidebar menu
$("#menu-close").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});
// Opens the sidebar menu
$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
});
// Scrolls to the selected menu item on the page
$(function () {
    $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
//#to-top button appears after scrolling
var fixed = false;
$(document).scroll(function () {
    if ($(this).scrollTop() > 250) {
        if (!fixed) {
            fixed = true;
            // $('#to-top').css({position:'fixed', display:'block'});
            $('#to-top').show("slow", function () {
                $('#to-top').css({
                    position: 'fixed',
                    display: 'block'
                });
            });
        }
    } else {
        if (fixed) {
            fixed = false;
            $('#to-top').hide("slow", function () {
                $('#to-top').css({
                    display: 'none'
                });
            });
        }
    }
});


var modal = document.getElementById('myModal');
var img = document.getElementById('myImg1');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var modal2 = document.getElementById('myModal2');
var img2 = document.getElementById('myImg2');
var modalImg2 = document.getElementById("img02");
var captionText2 = document.getElementById("caption2");
img2.onclick = function () {
    modal2.style.display = "block";
    modalImg2.src = this.src;
    captionText2.innerHTML = this.alt;
}

var modal3 = document.getElementById('myModal3');
var img3 = document.getElementById('myImg3');
var modalImg3 = document.getElementById("img03");
var captionText3 = document.getElementById("caption3");
img3.onclick = function () {
    modal3.style.display = "block";
    modalImg3.src = this.src;
    captionText3.innerHTML = this.alt;
}

var modal4 = document.getElementById('myModal4');
var img4 = document.getElementById('myImg4');
var modalImg4 = document.getElementById("img04");
var captionText4 = document.getElementById("caption4");
img4.onclick = function () {
    modal4.style.display = "block";
    modalImg4.src = this.src;
    captionText4.innerHTML = this.alt;
}


var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}