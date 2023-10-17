import './index.scss';
import LogoK from '../../../assets/images/logo-k.png';
import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';

const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin)
    
        gsap
          .timeline()
          .to(bgRef.current, {
            duration: 1,
            opacity: 1,
          })
          .from(outlineLogoRef.current, {
            drawSVG: true,
            duration: 10,
          })
    
        gsap.fromTo(
          solidLogoRef.current,
          {
            opacity: 0,
          },
          {
            opacity: 1,
            delay: 4,
            duration: 4,
          }
        )
      }, [])

    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoK} alt="K"/>
            <svg 
                version="1.0" 
                xmlns="http://www.w3.org/2000/svg"
                width="625.000000pt" 
                height="625.000000pt" 
                viewBox="0 0 625.000000 625.000000"
                
            >
                <g 
                    className='svg-container' 
                    transform="translate(0.000000,625.000000) scale(0.100000,-0.100000)"
                    fill='none'
                >
                    <path ref={outlineLogoRef}
                    d="M870 3045 l0 -2655 800 0 800 0 0 764 0 764 352 390 351 391 30 -17
                    c57 -33 171 -148 217 -218 76 -116 126 -244 466 -1178 178 -489 325 -891 327
                    -893 2 -2 366 -2 808 -1 l805 3 -341 957 c-188 526 -368 1021 -401 1100 -174
                    424 -349 693 -573 881 -133 111 -268 185 -454 246 -60 20 -66 25 -55 39 7 9
                    225 251 483 537 259 286 612 677 785 870 173 192 382 422 463 512 l148 163
                    -908 -1 -908 0 -790 -899 c-434 -495 -793 -899 -797 -900 -5 0 -8 405 -8 900
                    l0 900 -800 0 -800 0 0 -2655z m1062 1380 l3 -1224 1079 1224 1079 1225 583 0
                    c321 0 584 -3 584 -6 0 -6 -20 -29 -1059 -1178 -675 -747 -801 -891 -785 -897
                    10 -4 64 -21 119 -39 505 -156 796 -509 1094 -1323 55 -149 469 -1312 581
                    -1630 l49 -137 -506 2 -506 3 -283 780 c-336 925 -371 1019 -437 1150 -61 123
                    -93 170 -160 236 -138 136 -286 207 -526 253 l-71 14 -420 -467 -420 -466 0
                    -752 0 -753 -505 0 -505 0 0 2605 0 2605 505 0 505 0 2 -1225z m488 314 l0
                    -910 -216 -245 c-119 -134 -218 -244 -220 -244 -2 0 -4 520 -4 1155 l0 1155
                    220 0 220 0 0 -911z m3323 889 c-285 -317 -1040 -1155 -1391 -1543 l-460 -510
                    131 -42 c493 -160 756 -455 1041 -1169 45 -114 667 -1847 683 -1906 5 -17 -10
                    -18 -213 -18 l-219 0 -314 883 c-341 958 -417 1159 -520 1372 -127 263 -236
                    420 -398 576 -152 145 -281 224 -488 295 l-106 37 39 41 c21 23 353 390 738
                    816 384 426 783 868 887 983 l188 207 211 0 211 0 -20 -22z m-2794 -2845 c112
                    -29 173 -52 169 -64 -2 -4 -159 -182 -350 -394 l-348 -386 0 -750 0 -749 -220
                    0 -220 0 0 743 1 742 402 447 402 447 35 -5 c19 -3 77 -17 129 -31z"/>
                </g>
            </svg>
        </div>
    )
}

export default Logo

