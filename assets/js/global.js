// Multi step Forms jQuery
$(document).ready(function() {
    // Subscription Enable or disbale
    if ($('#subsPermit').prop('checked') === false) {
        $('.monthly_subscription').addClass('disabled');
    };
    $('#subsPermit').change(function() {
        if (this.checked) {
            $('.monthly_subscription').removeClass('disabled');
        } else {
            $('.monthly_subscription').addClass('disabled');
        }
    });
    $('.soporte_tab .nav-link').click(function() {
        $('.ticket_tabs .tab-pane').removeClass('active');
        // $('#tabActivos').addClass('active');
    });
    // Tickets
    $('.ticket_content .nav-link').click(function() {
        var itTarget = $(this).attr('href');
        $('#tabActivos').removeClass('active');
        $(itTarget).addClass('active show');
    });

    $('#givTip .close').click(function() {
        $('.tip-payment').show('3000');
        $('.tip-success').hide('3000');
    });
    // Hide On click Close
    $('.js-close-btn').on('click', function() {
        var targetDismiss = $(this).data('dismiss');
        $(targetDismiss).hide('3000', function() {
            $(targetDismiss).removeClass('is-show');
            $('.js-form-container').show('3500');
        });
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


// Telephone INput Select
// you Can Find the Options Here
// https://github.com/jackocnr/intl-tel-input
$("#telNumber").intlTelInput({
    autoHideDialCode: false,
    separateDialCode: true,
    initialCountry: "ar",
});