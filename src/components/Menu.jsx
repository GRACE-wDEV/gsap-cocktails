import { useRef, useState } from "react";
import { sliderLists } from "../../constants"
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import gsap from "gsap";

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  function setIndex(index){
    const nextIndex = (index + sliderLists.length) % sliderLists.length;
    setCurrentIndex(nextIndex)
  }
  const getCocktailAt = (indexOffset)=>{
    const cocktailIndex = (currentIndex + indexOffset + sliderLists.length) % sliderLists.length;
    return sliderLists[cocktailIndex];
  }
  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);
  const contentRef = useRef(null);
  useGSAP(()=>{ 
    gsap.fromTo('#title', {opacity: 0}, {opacity: 1, duration: 1});
    gsap.fromTo('.details p', {yPercent: 100}, {yPercent: 0, ease: 'power2.inOut'})
    gsap.fromTo('.details h2', {yPercent: 100}, {yPercent: 0, ease: 'power2.inOut'})
    gsap.fromTo('.content img', {xPercent:-100, opacity: 0},{opacity: 1, xPercent: 0, ease: 'power2.inOut', duration:1})
  }, [currentIndex])
  useGSAP(()=>{
    gsap.timeline({
      scrollTrigger:{
        trigger: '#menu',
        start: 'top 40%',
        end: 'bottom top',
        scrub: true
      }
    })
    .to('#m-right-leaf', {y:400}, 0)
    .to('#m-left-leaf', {y:-400}, 0);
  }, [])
  return (
    <section id='menu' aria-labelledby="menu-heading">
      <img src="/images/slider-left-leaf.png" alt="left-leaf" id="m-left-leaf" />
      <img src="/images/slider-right-leaf.png" alt="right-leaf" id="m-right-leaf" />

      <h2 id="menu-heading" className="sr-only">Cocktail Menu</h2>

      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {sliderLists.map((cocktail, index)=>{
          const isActive = index === currentIndex;
          return (
            <button key={cocktail.id} className={`${isActive? 'text-white border-white':
              'text-white/50 border-white/50'}`}
              onClick={()=>setIndex(index)}
              >
                {cocktail.name}
              </button>
          )
        })}
      </nav>
      <div className="content">
        <div className="arrows">
          <button className="text-left" onClick={()=>{setIndex(currentIndex - 1)}}>
            <span>{prevCocktail.name}</span>
            <img className="cursor-pointer" src="/images/right-arrow.png" alt="right-arrow" />
          </button>
          <button className="text-right" onClick={()=>{setIndex(currentIndex + 1)}}>
            <span>{nextCocktail.name}</span>
            <img className="cursor-pointer" src="/images/left-arrow.png" alt="left-arrow" />
          </button>
        </div>
        <div className="cocktail">
          <img src={currentCocktail.image} className="object-contain pointer-events-none" alt="" />
        </div>

        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>
          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Menu
