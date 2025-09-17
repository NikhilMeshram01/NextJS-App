
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function BlurMainBall() {
    const blurBallRef = useRef(null);

    useEffect(() => {
        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Set initial position explicitly
        gsap.set(blurBallRef.current, {
            left: 1050,
            top: 200,
            x: 0, // Match CSS transform: translate(-50%, -50%)
            y: 0,
            scale: 1.7,
            rotate: 0,
        });

        // Create a timeline for the ball animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: blurBallRef.current,
                start: "top 80%", // Start immediately when scrolling begins
                end: "bottom bottom", // End at the bottom of the page
                scrub: 0.3, // Slight delay for smoother, slower feel (adjustable)
                markers: true, // Keep for debugging
            },
        });

        // Animation sequence
        tl
            .to(blurBallRef.current, {
                left: 900,
                top: -2000,
                x: 0,
                y: 0,
                scale: 1.4,
                rotate: 0,
                duration: 0.1,
                ease: "power1.inOut",
            })


        // Cleanup ScrollTrigger on component unmount
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <Image
            ref={blurBallRef}
            src="/images/img_image_8.png"
            alt="Ball"
            width={350}
            height={350}
            style={{
                position: "absolute",
                left: "1050px",
                top: "200px",
                transform: "translate(-50%, -50%)",
                filter: "blur(6px)",
                zIndex: 0,
                scale: 1.5
            }}
        />
    );
}

export default BlurMainBall;