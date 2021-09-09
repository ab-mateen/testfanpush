// Multi step Forms jQuery
$(document).ready(function() {
    $('#givTip .close').click(function() {
        $('.tip-payment').show('3000');
        $('.tip-success').hide('3000');
    });
    // MUlti Step Forms Like click and come a Thanks msg
    // Controling with simple data target
    $('.multi-step-form .success-msg').hide('3000');
    $('.js-form-next').on('click', function() {
        var targetId = $(this).data('target')
        $('.multi-step-form .js-form-container').hide('3000');
        $('#' + targetId).show('3000');
    });

    // For Adding Payment Method on Profile
    $('[class*="bank-account-"]').hide();
    $('.js-bank-sub').on('click', function() {
        var targetId = $(this).data('target');
        $(targetId).show('3000', function() {
            $(targetId).addClass('is-show');
            if ($(targetId).hasClass('is-show')) {
                $('#tabBancarios .alert').hide('1000')
            }
            if ($('#detailsMercado').hasClass('is-show')) {
                $('#mercadoFields').addClass('is-disabled');
            } else {
                $('#mercadoFields').removeClass('is-disabled');
            }
            if ($('#detailsBanco').hasClass('is-show')) {
                $('#bancoFields').addClass('is-disabled');
            } else {
                $('#bancoFields').removeClass('is-disabled');
            }
        });
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
// For Input Country Select
//test for getting url value from attr
// var img1 = $('.test').attr("data-thumbnail");
// console.log(img1);

//test for iterating over child elements
var langArray = [];
$('.vodiapicker option').each(function() {
    var img = $(this).attr("data-thumbnail");
    var text = this.innerText;
    var value = $(this).val();
    var item = '<li><img src="' + img + '" alt="" value="' + value + '"/><span>' + text + '</span></li>';
    langArray.push(item);
})

$('#a').html(langArray);

//Set the button value to the first el of the array
$('.btn-select').html(langArray[0]);
$('.btn-select').attr('value', 'en');

//change button stuff on click
$('#a li').click(function() {
    var img = $(this).find('img').attr("src");
    var value = $(this).find('img').attr('value');
    var text = this.innerText;
    var item = '<li><img src="' + img + '" alt="" /><span>' + text + '</span></li>';
    $('.btn-select').html(item);
    $('.btn-select').attr('value', value);
    $(".b").toggle();
    //console.log(value);
});

$(".btn-select").click(function() {
    $(".b").toggle();
});

//check local storage for the lang
var sessionLang = localStorage.getItem('lang');
if (sessionLang) {
    //find an item with value of sessionLang
    var langIndex = langArray.indexOf(sessionLang);
    $('.btn-select').html(langArray[langIndex]);
    $('.btn-select').attr('value', sessionLang);
} else {
    var langIndex = langArray.indexOf('ch');
    // console.log(langIndex);
    $('.btn-select').html(langArray[langIndex]);
    //$('.btn-select').attr('value', 'en');
}