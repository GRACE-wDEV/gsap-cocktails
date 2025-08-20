import React from 'react'
import { featureLists, goodLists } from '../../constants/index.js'
import { useGSAP } from '@gsap/react'
import { useMediaQuery } from 'react-responsive'
import gsap from 'gsap'

const Art = () => {
  const isMobile = useMediaQuery({maxWidth: 767});
  useGSAP(()=>{
    const start = isMobile ? "top 20%":"top top";
    const maskTimeline = gsap.timeline({
      scrollTrigger:{
        trigger: '#art',
        start: start,
        end: 'bottom center',
        scrub: 1.5,
        pin: true,
      }
    })
    maskTimeline
    .to('.will-fade', {
      opacity: 0,
      stagger: .2,
      ease: 'power1.inOut'
    })
    .to('.masked-img', {
      scale: 1.3,
      maskSize: '400%',
      duration: 1,
      ease: 'power1.inOut'
    })
    .to('#masked-content', { opacity: 1, duration: 1, ease: 'power1.inOut'})
  })
  return (
    <section
    id="art"
    className="min-h-screen bg-black text-white radial-gradient flex-center flex-col relative mt-20 p-5"
  >
    <div className="container px-4 py-2 mx-auto md:pt-0">
      <h1 className="will-fade text-[#505050] mb-8 text-8xl md:text-[20vw] text-center font-modern-negra text-nowrap">
        The ART
      </h1>

      <div className="content gap-10 flex flex-col md:flex-row md:justify-between md:mt-0">
        <ul className="space-y-4 will-fade">
          {goodLists.map((feature, i)=>(
            <li key={i} className='flex items-center gap-2'>
              <img src="/images/check.png"
              className="w-6"
              alt="check"
              />
              <p>{feature}</p>
            </li>
          ))}
        </ul>

        <div className="overflow-hidden  cocktail-img w-[90%] md:w-[60vw] rounded-4xl h-[50vh] md:h-[70vh] absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2">
          <img
            className="object-contain masked-img size-full"
            src="/images/under-img.jpg"
            alt=""
          />
        </div>

       <ul className="space-y-4 will-fade">
          {featureLists.map((feature, i)=>(
            <li key={i} className='flex items-center gap-2'>
              <img src="/images/check.png"
              className="w-6"
              alt="check"
              />
              <p>{feature}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="masked-container">
        <h2 className="will-fade">Sip-Worthy Perfection</h2>
        <div id="masked-content">
          <h3>Made with Craft, Poured with Passion</h3>
          <p>This isn’t just a drink. It’s a carefully crafted moment made just for you.</p>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Art
