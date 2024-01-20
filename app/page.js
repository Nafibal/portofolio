"use client";
import React, { useEffect, useRef } from "react";
import "./page.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const title = useRef();
  const about = useRef();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    gsap.to(title.current, {
      clipPath: "inset(0% 0 0 0)",
      duration: 0.75,
      delay: 0.75,
      // opacity: 1,
    });

    gsap.to(title.current, {
      scrollTrigger: {
        trigger: about.current,
        start: "top 90%",
        end: "top 55%",
        scrub: true,
      },
      opacity: 0,
      yPercent: -300,
    });

    let images = gsap.utils.toArray(".image");

    gsap.to(images, {
      clipPath: "inset(0% 0 0 0)",
      delay: 1.5,
    });

    images.forEach((image) => {
      ScrollTrigger.create({
        trigger: image,
        scrub: 2,
        start: "top bottom",
        end: "bottom start",
        onUpdate: (self) => {
          gsap.to(image, {
            backgroundPosition: `50% ${self.progress * 40 + 30}%`,
          });
        },
      });
    });

    let aboutText = gsap.utils.toArray(".about_text");
    gsap.fromTo(
      aboutText,
      {
        opacity: 0,
        y: 100,
      },
      {
        scrollTrigger: {
          trigger: ".about_text",
          start: "top 75%",
        },
        opacity: 1,
        duration: 0.5,
        stagger: 0.25,
        y: 0,
      }
    );

    let offerList = gsap.utils.toArray(".offer_list");
    let offerTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".offer",
        start: "30% 75%",
      },
    });
    offerTl
      .fromTo(
        ".offer_image",
        {
          clipPath: "inset(100% 0 0 0)",
        },
        {
          clipPath: "inset(0% 0 0 0)",
        }
      )
      .fromTo(
        ".offer_title",
        {
          clipPath: "inset(100% 0 0 0)",
        },
        {
          clipPath: "inset(0% 0 0 0)",
        }
      )
      .fromTo(
        offerList,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.25,
          stagger: 0.1,
        }
      );

    let certificationList = gsap.utils.toArray(".certification_list");
    let certificationTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".certification",
        start: "top 75%",
      },
    });
    certificationTl
      .fromTo(
        ".certification_title",
        {
          clipPath: "inset(100% 0 0 0)",
        },
        {
          clipPath: "inset(0% 0 0 0)",
        }
      )
      .fromTo(
        certificationList,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 2,
          stagger: 0.1,
        },
        ">"
      );
  });

  return (
    <>
      <div className="about_main" id="smooth-content">
        <section className="hero">
          <h1 className="title" ref={title}>
            NAFI<span>BAL</span>
          </h1>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
        </section>
        <section className="about" ref={about}>
          <div className="text_container">
            <p className="about_text">
              Hello! I'm Nafi, a passionate frontend web developer with a keen
              eye for design and a commitment to creating engaging user
              experiences. I have a strong foundation in HTML, CSS, and
              JavaScript, along with proficiency in popular frontend frameworks
              such as React.
            </p>
            <p className="about_text">
              My journey into web development started with a curiosity about how
              websites are built. Over the years, I've honed my skills through
              hands-on projects and continuous learning. I enjoy turning ideas
              into reality by crafting clean and efficient code that brings
              designs to life.
            </p>
            <p className="about_text">
              I enjoy solving technical problem and learning new things. I am a
              quick learner and excel in my ability to work under pressure and
              handle stressful situations.
            </p>
          </div>
          <div className="offer">
            <div className="offer_image"></div>
            <div className="text">
              <h2 className="offer_title">Certification</h2>
              <ul>
                <li className="offer_list">
                  <a
                    target="blank"
                    href="https://drive.google.com/file/d/1B1rA2H64OZq01JX8UK57JzQRYjwbGMk5/view"
                  >
                    2023 Complete Front-End Engineer Career With ReactJS,
                    Alterra Academy
                  </a>
                </li>
                <li className="offer_list">
                  <a
                    target="blank"
                    href="https://www.udemy.com/certificate/UC-7331c103-f12c-4aae-a56f-203ad4debda4/"
                  >
                    JavaScript Tutorial and Projects Course, Udemy
                  </a>
                </li>
                <li className="offer_list">
                  <a
                    target="blank"
                    href="https://freecodecamp.org/certification/nafibal/responsive-web-design"
                  >
                    Responsive Web Design, FreeCodeCamp
                  </a>
                </li>
                <li className="offer_list">
                  <a
                    target="blank"
                    href="https://www.dicoding.com/certificates/N9ZOE6NQ6XG5"
                  >
                    Belajar Membuat Front-End Web untuk Pemula, Dicoding
                    Indonesia
                  </a>
                </li>
                <li className="offer_list">
                  <a
                    target="blank"
                    href="https://www.dicoding.com/certificates/RVZK1ORQ4PD5"
                  >
                    Belajar Dasar Pemrograman Web, Dicoding Indonesia
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="certification">
            <h2 className="certification_title">Project</h2>
            <ul className="certification_container">
              <li className="certification_list">WORK IN PROGRESS</li>
              {/* <li className="certification_list">Project B</li>
            <li className="certification_list">Project C</li>
            <li className="certification_list">Project D</li>
            <li className="certification_list">Project E</li>
            <li className="certification_list">Project F</li> */}
            </ul>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
