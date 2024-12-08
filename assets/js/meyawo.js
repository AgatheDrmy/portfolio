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



document.getElementById('myemail').addEventListener('click', function () {
    // Créer une zone de sélection temporaire
    const range = document.createRange();
    range.selectNode(this); // Sélectionne le contenu du paragraphe
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    // Copier le texte sélectionné
    try {
        const success = document.execCommand('copy');
        if (success) {
            alert("Texte copié : " + this.textContent);
        } else {
            alert("Échec de la copie.");
        }
    } catch (err) {
        console.error("Erreur lors de la tentative de copie : ", err);
    }

    // Désélectionner après la copie
    selection.removeAllRanges();
});