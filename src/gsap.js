import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as ScrollToPlugin from "gsap/ScrollToPlugin";

var tlGlobe;

export function doGSAP(){

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    function checkMediaQuery() {
        if (window.innerWidth < 991.98) {
        }else{
            initGlobeGSAP();
        }
    }

    checkMediaQuery();

    window.addEventListener('resize', checkMediaQuery);

    /* ---------- Header ---------- */

    let tl= gsap.timeline()
.to(".wide",{x:0, duration:2},"<")
.to(".web",{x:0, duration:2},"<")
.to(".wide",{y:-100, duration:2},"<")
.to(".web",{y:-200, duration:2},"<")
.to("#hworld",{opacity:0, duration:1},"<")
.to("#hwide",{opacity:0, delay:0.3},"<")



ScrollTrigger.create({
    trigger: ".header-wrapper",
    start:"top top",
    end:"bottom top",
    scrub:1,
    animation:tl,
    markers:true,
    pin: true,
       
  })


    function initGlobeGSAP() {
        tlGlobe = gsap.timeline({
            scrollTrigger:{
                trigger: document.querySelector("#globe-wrapper"),
                pin: true,
                scrub: 0.3,
                start: () => "0% 0",
                end: () => '+=100%',
                markers: true,
            }
        });
    }
}

export function unPinGLobe(){
    if (typeof tlGlobe !== 'undefined') {
        tlGlobe.kill(true);
        gsap.set("#globe-wrapper", {clearProps: true});
    }
}


/* ---------- Sliders ---------- */
function setPanelWidths(section){
    var width = section.querySelector(".panel:first-of-type").offsetWidth;
    var panels = section.querySelectorAll(".panel:not(:first-of-type)");
    panels.forEach((panel, i) => {
        panel.style.minWidth  = width+"px";
        panel.style.maxWidth  = width+"px";
        panel.style.marginLeft = getPanelMarginLeft(section) + "px";
    });
}

function getPanelMarginLeft(section){
    var width = section.querySelector(".panel:first-of-type").offsetWidth;
    var windowWidth = window.innerWidth;
    return ((windowWidth - width) / 2);
}

Object.defineProperty(Element.prototype, 'outerWidth', {
    'get': function(){
        var width = this.clientWidth;
        var computedStyle = window.getComputedStyle(this); 
        width += parseInt(computedStyle.marginLeft, 10);
        width += parseInt(computedStyle.marginRight, 10);
        width += parseInt(computedStyle.borderLeftWidth, 10);
        width += parseInt(computedStyle.borderRightWidth, 10);
        return width;
    }
});

function getPanelMarginLeft2(section){
    var width = section.querySelector(".title-section").offsetWidth;
    var windowWidth = window.innerWidth;
    return ((windowWidth - width) / 2);
}

function setSectionBGSize(section){
    var width = section.offsetWidth;
    var windowWidth = window.innerWidth;
    section.querySelector(".bg").style.left = "-"+(windowWidth - width) / 2+"px";
    section.querySelector(".bg").style.width = windowWidth+"px";
}

export function gsapSliders(){
    var sections = [
        "section.ip-section",
        "section.dns-section",
        "section.routing-section"
    ];

    sections.forEach(function(section){
        var sec = document.querySelector(section);

       // setSectionBGSize(sec);

        sec.querySelector(".section1.panel").style.marginLeft = getPanelMarginLeft2(sec) + "px";

        let p = sec.querySelectorAll(".panel");
        var panelWidths = 0;
        p.forEach(function(pa, i){
            if(i != 0){
                panelWidths = panelWidths + pa.outerWidth;
            }
        });

        let panel = gsap.utils.toArray(p);
        var slideCount = panel.length;
        var scrollTween = gsap.to(panel, {
            x: -panelWidths,
            ease: "none",
            scrollTrigger: {
                trigger: sec,
                pin: true,
                scrub: 0.3,
                start: () => "top top",
                invalidateOnRefresh: true,
                end: () => '+=' + panelWidths + 'px',
            }
        });

        gsap.set("#ip-adress", {
            x: 0
        });

        gsap.to("#ip-adress", {
            x: sec.offsetWidth,
            ease: "none",
            scrollTrigger: {
                trigger: "#ip-adress",
                containerAnimation: scrollTween,
                start: "left left",
                end: "right right",
                scrub: 4,
            }
        });

    });
    /*document.querySelectorAll("aside a").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const targetElem = document.querySelector(e.target.getAttribute("href"));
            console.log(targetElem);
            const containerOffsetY = $(targetElem).offset().top;
            const containerOffsetX = $(targetElem).offset().left;
            //console.log(e.target.getAttribute("href"));
            console.log(targetElem.parentElement);
            gsap.to(targetElem.parentElement, {
                scrollTo: {
                    x: containerOffsetX,
                    y: containerOffsetY
                },
                duration: 1
            });

        });
    });*/
}