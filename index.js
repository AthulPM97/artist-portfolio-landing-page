TweenMax.to('.left', 2, {
    delay: .8,
    width: '50%',
    ease: Power2.easeInOut
});

TweenMax.to('.right', 2, {
    delay: .6,
    width: '50%',
    ease: Power3.easeInOut,
})

TweenMax.from('.nav', 2, {
    delay: .8,
    opacity: 0,
    ease: Expo.easeInOut,
})

TweenMax.from('.text h1', 2, {
    delay: .6,
    x: 1000,
    ease: Elastic.easeInOut,
})

TweenMax.from('.text p', 2, {
    delay: .7,
    x: 1000,
    ease: Circ.easeInOut,
})

TweenMax.to('.karina', 2, {
    delay: 1.5,
    width: '800px',
    ease: Power2.easeInOut,
})

TweenMax.staggerFrom('.bottomnav ul li', 2, {
    delay: 1,
    x: 1000,
    ease: Circ.easeInOut,
}, 0.08)

TweenMax.from('.name', 2, {
    delay: 1.5,
    opacity: 0,
    ease: Power2.easeInOut,
})
TweenMax.from('.info', 2, {
    delay: 1.5,
    opacity: 0,
    ease: Power2.easeInOut,
})