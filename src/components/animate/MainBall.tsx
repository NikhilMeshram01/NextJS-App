// app/components/MainBall.jsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function MainBall() {
    const ballRef = useRef(null);

    useEffect(() => {
        // Register ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Set initial position explicitly
        gsap.set(ballRef.current, {
            left: 1350,
            top: 300,
            x: 0, // Match CSS transform: translate(-50%, -50%)
            y: 0,
            scale: 1,
            rotate: 0,
        });

        // Create a timeline for the ball animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'body',
                start: "top top", // Start immediately when scrolling begins
                end: "bottom bottom", // End at the bottom of the page
                scrub: 1, // Slight delay for smoother, slower feel (adjustable)
                // markers: true, // Keep for debugging
            },
        });

        // Animation sequence
        tl
            // Move to Hero Section: Center
            .to(ballRef.current, {
                left: 1100,
                top: 350,
                x: 0,
                y: 0,
                scale: 1,
                rotate: 0,
                duration: 1.5,
                ease: "power1.inOut",
            }).to(ballRef.current, {
                left: 1150,
                top: 350,
                x: 0,
                y: 0,
                scale: 1.5,
                rotate: 0,
                duration: 0.4,
                ease: "power1.in",
            }).to(ballRef.current, {
                left: 1200,
                top: 350,
                x: 0,
                y: 0,
                scale: 1.8,
                rotate: 0,
                duration: 0.4,
                ease: "power1.in",
            }).to(ballRef.current, {
                left: 1300,
                top: -10,
                x: 0,
                y: 0,
                opacity: 0.4,
                scale: 1,
                rotate: 0,
                duration: 1,
                ease: "power1.in",
            })
            .to(ballRef.current, {
                left: 1100,
                top: 300,
                x: 0,
                y: 0,
                opacity: 0.2,
                scale: 1.6,
                rotate: 0,
                duration: 1,
                ease: "power1.in",
            })
            .to(ballRef.current, {
                left: 1100,
                top: 300,
                x: 0,
                y: 0,
                opacity: 0,
                scale: 1.6,
                rotate: 0,
                duration: 0.5,
                ease: "power1.in",
            })

        // Cleanup ScrollTrigger on component unmount
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <Image
            ref={ballRef}
            src="/images/img_image_8.png"
            alt="Ball"
            width={350}
            height={350}
            style={{
                position: "fixed",
                left: "1350px",
                top: "300px",
                transform: "translate(-50%, -50%)",
            }}
        />
    );
}

export default MainBall;