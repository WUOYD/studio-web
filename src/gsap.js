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
            end: () => '+=100%',
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

    var sections = [
        "section.ip-section",
        "section.dns-section"
    ];

    /* function 100vw sections
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
    });*/


    sections.forEach(function(section){
        var sec = document.querySelector(section);
        let p = sec.querySelectorAll(".panel");
        var panelWidths = 0;
        p.forEach(function(pa, i){
            if(i != 0){
                console.log(i);
                console.log(pa.outerWidth, pa);
                panelWidths = panelWidths + pa.outerWidth;
            }
        });
        console.log("---------");

        let panel = gsap.utils.toArray(p);
        var slideCount = panel.length;
        var scrollTween = gsap.to(panel, {
            x: -panelWidths,
            ease: "none",
            scrollTrigger: {
                trigger: sec,
                pin: true,
                scrub: 1,
                start: () => "top top",
                invalidateOnRefresh: true,
                end: () => '+=' + slideCount * 1000 + '%',
            }
        });

        gsap.set("#ip-adress", {
            x: 0
        });

        gsap.to("#ip-adress", {
            x: sec.offsetWidth + document.querySelector(".section4").offsetWidth / 2 - document.querySelector("#ip-adress").offsetWidth / 2,
            ease: "none",
            scrollTrigger: {
                trigger: "#ip-adress",
                containerAnimation: scrollTween,
                start: "left left",
                end: "right right",
                marker: true,
                scrub: 3,
                id: "2"
            }
        });
    });


}