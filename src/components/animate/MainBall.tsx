'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Props = {
    itemWidth: number;
    itemHeight: number;
    startTop: string;
    startLeft: string;
    endTop: string;
    endLeft: string;
    itemRotate: number;
};

const MainBall = ({
    itemWidth,
    itemHeight,
    startTop,
    startLeft,
    endTop,
    endLeft,
    itemRotate,
}: Props) => {
    const ballRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ball = ballRef.current;

        if (!ball) return;

        // Convert string values to numbers
        const startTopNum = parseFloat(startTop);
        const startLeftNum = parseFloat(startLeft);
        const endTopNum = parseFloat(endTop);
        const endLeftNum = parseFloat(endLeft);

        const deltaX = endLeftNum - startLeftNum;
        const deltaY = endTopNum - startTopNum;

        console.log('deltaX', deltaX)
        console.log('deltaY', deltaY)

        gsap.to(ball, {
            x: deltaX,
            y: deltaY,
            rotation: itemRotate,
            ease: 'none',
            scrollTrigger: {
                trigger: ball,
                start: 'top center',
                end: 'bottom top',
                scrub: true,
                // markers: true,
            },
        });
    }, [startTop, startLeft, endTop, endLeft, itemRotate]);

    return (
        <div
            ref={ballRef}
            style={{
                width: itemWidth,
                height: itemHeight,
                position: 'absolute',
                top: startTop,
                left: startLeft,
            }}
        >
            <Image
                src="/images/img_image_8.png"
                alt="ball"
                layout="fill"
                objectFit="contain"
                className="opacity-80"
            />
        </div>
    );
};

export default MainBall;


// 'use client'; // for Next.js App Router (if using it)

// import React, { useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// type Proptype = {
//     itemWidth: number,
//     itemHeight: number,
//     startTop: string,
//     startLeft: string,
//     endTop: string,
//     endLeft: string,
//     itemRotate: number
// }

// const MainBall = (props: Proptype) => {

//     const { itemWidth, itemHeight, startTop, startLeft, endTop, endLeft, itemRotate } = props

//     const ballRef = useRef(null);

//     useEffect(() => {
//         const ball = ballRef.current;
//         gsap.to(ball, {
//             x: endLeft, // Move 500px to the right
//             y: endTop,
//             rotation: itemRotate, // Rotate full circle
//             ease: "none",
//             scrollTrigger: {
//                 trigger: ball,
//                 start: "top center", // Start when the ball hits the center of the viewport
//                 end: "bottom top", // End when it leaves the top
//                 scrub: true, // Makes animation tied to scroll
//                 // markers: true, // Uncomment for debugging
//             },
//         });
//     }, []);

//     return (
//         <div style={{ height: '200vh' }}> {/* Make page scrollable */}
//             <div
//                 ref={ballRef}
//                 style={{
//                     width: itemWidth,
//                     height: itemHeight,
//                     position: 'absolute',
//                     top: startTop,
//                     left: startLeft
//                 }}
//             >
//                 <Image
//                     src="/images/img_image_8.png"
//                     alt="ball"
//                     layout="fill"
//                     objectFit="cover"
//                     className="absolute top-[80px] sm:top-[98px] right-0 w-[150px] sm:w-[250px] md:w-[350px] h-[150px] sm:h-[250px] md:h-[350px] object-contain opacity-80"
//                 />
//             </div>
//         </div>
//     );
// };

// export default MainBall;
