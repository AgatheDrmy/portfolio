/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

function copy_to_clipboard(clicked_id) {
    var text = document.getElementById(clicked_id).id;
    console.log(text);
    
    navigator.clipboard.writeText(text).then(function() {
        /* clipboard successfully set */
    }, function() {
        /* clipboard write failed */
    });
}

function print_popup1() {
    var popup = document.getElementById("popupcopy1");
    popup.classList.toggle("show");
}

function print_popup2() {
    var popup = document.getElementById("popupcopy2");
    popup.classList.toggle("show");
}

// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close-mine1")[0];
var span2 = document.getElementsByClassName("close-mine2")[0];
var span3 = document.getElementsByClassName("close-mine3")[0];

// When the user clicks the button, open the modal 
btn1.onclick = function() {
  modal1.style.display = "block";
}
btn2.onclick = function() {
    modal2.style.display = "block";
}
btn3.onclick = function() {
    modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modal1.style.display = "none";
}
span2.onclick = function() {
    modal2.style.display = "none";
}
span3.onclick = function() {
    modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}
window.onclick = function(event) {
    if (event.target == modal2) {
      modal2.style.display = "none";
    }
}
window.onclick = function(event) {
    if (event.target == modal3) {
      modal3.style.display = "none";
    }
}