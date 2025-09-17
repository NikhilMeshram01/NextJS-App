import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const Glob = () => {

    const globRef = useRef(null)

    useEffect(() => {
        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Set initial position explicitly
        gsap.set(globRef.current, {
            top: 200,
            left: -85,
            x: 0, // Match CSS transform: translate(-50%, -50%)
            y: 0,
            scale: 1.4,
            rotate: 0,
            opacity: 0.8,
            duration: 1
        });

        // Create a timeline for the ball animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: globRef.current,
                start: "top 20%",
                end: "bottom bottom",
                scrub: 1,
                // markers: true,
            },
        });

        // Animation sequence
        tl
            // Move to Hero Section: Center
            .to(globRef.current, {
                top: 300,
                left: -60,
                x: 0,
                y: 0,
                scale: 2,
                rotate: -90,
                duration: 1,
                opacity: 0.6,
                ease: "power1.inOut",
            })
            .to(globRef.current, {
                top: 500,
                left: -100,
                x: 0,
                y: 0,
                scale: 3,
                rotate: -90,
                duration: 1,
                opacity: 1,
                ease: "power1.inOut",
            }).to(globRef.current, {
                top: 800,
                left: -300,
                x: 0,
                y: 0,
                scale: 3,
                rotate: -90,
                duration: 1,
                opacity: 1,
                ease: "power1.inOut",
            })

        // Cleanup ScrollTrigger on component unmount
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <Image
            ref={globRef}
            width={364}
            height={650}
            src="/images/Glob.png"
            alt="Background Element"
            className="w-[364px] h-[650px] object-contain opacity-40 "
            style={{
                position: "absolute",
                top: "200px",
                left: "-85px",
                scale: 1,
                opacity: 0.5
                // transform: "translate(-50%, -50%)",
            }}
        />
    );
};

export default Glob;