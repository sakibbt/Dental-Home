// Owl Carousel Active
$('.hero-carousel').owlCarousel({
    loop:true,
    nav:true,
    autoplay:false,
    autoplaytimeout:4000,
    anitmateIn:true,
    anitmateOut:true,
    smartSpeed:500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


// OWL Carousel Brand Logo
    $('.brand-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        autoplay:true,
        autoplayTimeout:4000,
        smartSpeed:750,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })