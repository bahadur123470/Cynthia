const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

let initial ;
function skewCursor(){
    let xScale = 1;
    let yScale = 1;

    let prevX = 0;
    let prevY = 0;
    window.addEventListener("mousemove", (dets)=> {
        clearTimeout(initial)
        xScale = gsap.utils.clamp(.8, 1.2, dets.clientX - prevX);
        yScale = gsap.utils.clamp(.8, 1.2, dets.clientY - prevY);

        prevX = dets.clientX;
        prevY = dets.clientY

        dotCursorFollower(xScale, yScale)

        initial = setTimeout(function () {
        document.querySelector("#cursorfollower").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        }, 100)
    });
}

function dotCursorFollower(xScale, yScale) {
    window.addEventListener("mousemove", function(dets){
        document.querySelector("#cursorfollower").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xScale}, ${yScale})`;
    })
}

function landingPage () {
    let anime = gsap.timeline();

    anime.from("#nav", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    anime.to(".textup", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 1,
        stagger: .2
    })
    anime.from(".textdown, #sub2", {
        y: -10,
        opacity: 0,
        duration: 1,
        ease: Expo.easeInOut
    })
    // anime.from("#sub2", {
    //     y: -10,
    //     opacity: 0,
    //     duration: 1,
    //     ease: Expo.easeInOut
    // })
}

skewCursor();
dotCursorFollower();
landingPage();
