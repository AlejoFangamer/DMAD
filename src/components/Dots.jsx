import { useState } from "react";

export default function Dots({ count }) {
  const [current, setCurrent] = useState(0);

  const goTo = (i) => {
    setCurrent(i);
    const slides = document.getElementById("slides");
    slides.style.transform = `translateX(-${i * 100}%)`;
  };

  return (
    <div id="puntos" class="flex justify-evenly h-10 p-10">
      {Array.from({ length: count }).map((_, i) => (
        <a
          key={i}
          onClick={() => goTo(i)}
          className={`opacity-0 aspect-square w-10 inline-block rounded-[0.5em] text-lima transition-all trans ease-[cubic-bezier(.42,1.95,.56,.98)] duration-500 sEle cursor-pointer
            ${i === current ? "scale-100 bg-lima" : "scale-50 bg-blanco"}`
          }
        />
      ))}
    </div>
  );
}