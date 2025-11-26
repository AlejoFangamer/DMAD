import { animate, splitText, stagger, spring , onScroll, utils } from "animejs";

function pageLoad(){
  const { words } = splitText(".dmad-tit", { words: { wrap: "visible" }, });

  const $secciones = utils.$('.section');

  animate(words, {
    x: [{ to: ["-100%", "0%"] }],
    opacity: [{ to: ["0%", "100%"] }],
    duration: 750,
    ease: spring({ bounce: 0.35 }),
    delay: stagger(100),
    loop: false,
  });

  $secciones.forEach(element => {
  const elementos = element.querySelectorAll('.sEle');

  animate(elementos, {
      y: ["40%","0%"],
      opacity: ["0%","100%"],
      ease: 'outBack',
      delay: stagger(50),
      autoplay: onScroll({
        target: element,
          enter: 'bottom-=200',
          sync: 'play',
      })
    });
  });
}

document.addEventListener("astro:page-load", pageLoad);