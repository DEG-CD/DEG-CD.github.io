const carousel = new bootstrap.Carousel('#myCarousel', {
    interval: 2000,
    keyboard: true,
    pause: 'hover',
    ride: 'carousel',
    touch: true,
    wrap: true   
});

carousel.cycle();