// Multi step Forms jQuery
$(document).ready(function() {
    $('#givTip .close').click(function() {
        $('.tip-payment').show('3000');
        $('.tip-success').hide('3000');
    });
    $('.multi-step-form .success-msg').hide();
    $('.multi-step-form .form-next-msg').click(function() {
        $('.multi-step-form .js-form-container').hide('3000');
        $('.multi-step-form .success-msg').show('3000');
    });
});
// Stop AutoSlide post slider 
$('.carousel').carousel({
    interval: false,
});
// Hide Post Slider controls on first item
$(document).ready(function() {
    checkslideitem();
});
$('#postPopupSlider').on('slid.bs.carousel', checkslideitem);

function checkslideitem() {
    var $this = $('#postPopupSlider');
    if ($('.carousel-inner .carousel-item:first').hasClass('active')) {
        // Hide left arrow
        $this.children('.carousel-control-prev').hide();
    } else if ($('.carousel-inner .carousel-item:last').hasClass('active')) {
        // Hide left arrow
        $this.children('.carousel-control-next').hide();
    } else {
        $this.children('.carousel-control-next, .carousel-control-prev').show();
    }
}