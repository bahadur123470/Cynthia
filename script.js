// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function circleMouseFollower (){
    window.addEventListener("mousemove", function(det){
        document.querySelector("#mousefollower").style.transform = `translate(${det.clientX}px, ${det.clientY}px)`;
    })
}

circleMouseFollower();
