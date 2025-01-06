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