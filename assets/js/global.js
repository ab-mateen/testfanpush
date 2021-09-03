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