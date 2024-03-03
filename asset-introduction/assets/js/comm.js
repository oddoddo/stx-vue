// sec_slide
var swiper = new Swiper('.sec_slide', {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

var swiper = new Swiper('.major-swiper', {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

$(function () {
    AOS.init({
        offset: 500,
        delay: 0,
        duration: 1000,
        easing: 'ease',
        once: false,
    })

    gsap.registerPlugin(ScrollTrigger)
    // gsap.fromTo(
    //     '.sec_slide',
    //     { scale: 1 },
    //     {
    //         scrollTrigger: {
    //             trigger: '.sec_slide',
    //             start: 'top 50%',
    //             end: 'bottom 50%',
    //             toggleActions: 'play none none none',
    //         },
    //         scale: 0.7,
    //         duration: 1,
    //     }
    // )

    // 스크롤 트리거를 이용해서 스크롤 위치에 따라 스케일 마이너스로 줄이기

    gsap.fromTo(
        '.video-header',
        { scale: 1 },
        {
            scrollTrigger: {
                trigger: '.video-header-wrap',
                // pin: true,
                scrub: true,
                start: '50% 50%',
                end: 'bottom 50%',
                toggleActions: 'play none none none',
            },
            scale: 0.76,
            borderRadius: '50px',
            duration: 1,
        }
    )

    // .bg-header의 background 색상을 scrolltrigger를 이용해 #1b244b에서 #fff로 변경
    gsap.to(
        '.bg-header',
        { backgroundColor: '#1b244b' },
        {
            scrollTrigger: {
                trigger: '.wrap',
                start: 'top 50%',
                end: 'bottom 50%',
                toggleActions: 'play none none none',
            },
            backgroundColor: '#fff',
            duration: 1,
        }
    )
})

// horizontal scroll
const horizontalSections = gsap.utils.toArray('section.horizontal')

horizontalSections.forEach(function (sec, i) {
    var thisPinWrap = sec.querySelector('.pin-wrap')
    var thisAnimWrap = thisPinWrap.querySelector('.animation-wrap')

    var getToValue = () => -(thisAnimWrap.scrollWidth - window.innerWidth)

    gsap.fromTo(
        thisAnimWrap,
        {
            x: () => (thisAnimWrap.classList.contains('to-right') ? 0 : getToValue()),
        },
        {
            x: () => (thisAnimWrap.classList.contains('to-right') ? getToValue() : 0),
            ease: 'none',
            scrollTrigger: {
                trigger: sec,
                start: 'top top',
                end: () => '+=' + (thisAnimWrap.scrollWidth - window.innerWidth),
                pin: thisPinWrap,
                invalidateOnRefresh: true,
                //anticipatePin: 1,
                scrub: true,
                //markers: true,
            },
        }
    )
})
