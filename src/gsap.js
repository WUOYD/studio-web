import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function doGSAP(){

    gsap.registerPlugin(ScrollTrigger);

    /*window.addEventListener("resize", function(){
        TODO Responsive
    });*/

    /* ---------- Header ---------- */

    let headerWrapper =  document.querySelector('header .header-wrapper');
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger: headerWrapper,
            pin: true,
            scrub: true,
            start: () => "top 0",
            end: () => '+=130%',
            markers: false,
        }
    });

    tl.addLabel('initial');
    tl.to(headerWrapper.querySelectorAll('header div.header-wrapper div.header-item:not(.sp)'), {
        ease: 'none',
        x: 0,
        stagger: 0.0
    }, 'initial');
    tl.to(headerWrapper.querySelectorAll('header div.header-wrapper div.header-item.sp'), {
        ease: 'none',
        x: 0,
        stagger: 0.0
    }, 'initial');

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

    var sections = [
        "section.ip-section",
        "section.dns-section"
    ];

    sections.forEach(function(section){
        var sec = document.querySelector(section);
        setPanelWidths(sec);

        let p = sec.querySelectorAll(".panel");
        let panel = gsap.utils.toArray(p);
        var slideCount = panel.length;
        var x = (slideCount - 1) * window.innerWidth - (slideCount - 1) * getPanelMarginLeft(sec);
        var scrollTween = gsap.to(sec.querySelector('.wrapper'), {
            x: -x,
            ease: "none",
            scrollTrigger: {
                trigger: sec,
                pin: true,
                snap: 1 / (slideCount - 1),
                scrub: 1 / (slideCount + 1),
                start: () => "top top",
                invalidateOnRefresh: true,
                end: () => '+=' + slideCount * 1000 + '%',
            }
        });
    });

    /*gsap.set("#animated-ip", {
        x: 0
    });

    gsap.to("#animated-ip", {
        x: 3000,
        ease: "none",
        scrollTrigger: {
            trigger: "#trigger-ip",
            containerAnimation: scrollTween,
            start: "center 80%",
            end: "center 20%",
            scrub: 1,
            id: "2"
        }
    });*/

}