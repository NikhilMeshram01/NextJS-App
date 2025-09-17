'use client'

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'

const Triangle = () => {

    const triangleRef = useRef(null);

    useEffect(() => {
        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Set initial position explicitly
        gsap.set(triangleRef.current, {
            left: -390,
            top: 438,
            x: 0, // Match CSS transform: translate(-50%, -50%)
            y: 0,
            scale: 1,
            rotate: 0,
            opacity: 1
        });

        // Create a timeline for the ball animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "body",
                start: "top top", // Start immediately when scrolling begins
                end: "bottom bottom", // End at the bottom of the page
                scrub: 1, // Slight delay for smoother, slower feel (adjustable)
                markers: true, // Keep for debugging
            },
        });

        // Animation sequence
        tl
            // Move to Hero Section: Center
            .to(triangleRef.current, {
                left: -130,
                top: 72,
                x: 0,
                y: 0,
                scale: 0.6,
                rotate: 0,
                duration: 0.2,
                opacity: 1,
                ease: "power1.inOut",
            }).to(triangleRef.current, {
                left: -45,
                top: 245,
                x: 0,
                y: 0,
                scale: 0.3,
                rotate: 0,
                duration: 0.2,
                opacity: 1,
                ease: "power1.inOut",
            }).to(triangleRef.current, {
                left: -160,
                top: 277,
                x: 0,
                y: 0,
                scale: 0.6,
                rotate: 0,
                duration: 0.2,
                opacity: 1,
                ease: "power1.inOut",
            }).to(triangleRef.current, {
                left: -490,
                top: 240,
                x: 0,
                y: 0,
                scale: 1.2,
                rotate: 0,
                duration: 0.2,
                opacity: 1,
                ease: "power1.inOut",
            }).to(triangleRef.current, {
                left: -100,
                top: 200,
                x: 0,
                y: 0,
                scale: 0.5,
                rotate: 0,
                duration: 0.2,
                opacity: 0,
                ease: "power1.inOut",
            })

        // Cleanup ScrollTrigger on component unmount
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <Image
            ref={triangleRef}
            src="/images/Triangle.png"
            alt="Triangle"
            width={669}
            height={669}
            className="opacity-80 bg-[#151a2c] blur-custom bg-blend-hard-light"
            style={{
                position: "fixed",
                left: "-390px",
                top: "438px",
                transform: "translate(-50%, -50%)",
            }}
        />
    )
}

export default Triangle