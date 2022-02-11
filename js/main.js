$(document).ready(function() {
$('.owl-carousel').owlCarousel({
    loop:true,
    items:4,
    margin:24,
    nav: true,
    smartSpeed:1500,
    navigationText: ['',''],
    responsive : {
        1280 : {
            items:4,
            margin:24,
        },
        970 : {
            items:3,
            margin:24,
        },
        540 : {
            items:2,
            margin:24,
        },
        310 : {
            items:1,
            margin:24,
        },
       
    }
       
    
});

    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }
 
    $('.accordion-section-title').click(function(e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');
 
        if($(e.target).is('.active')) {
            close_accordion_section();
        }else {
            close_accordion_section();
 
            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
        }
        e.preventDefault();
    });
});