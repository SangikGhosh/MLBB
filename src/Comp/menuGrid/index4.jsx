import React, { useEffect, useId, useRef, useState } from "react";
// import img from "next/image";
import "./index.css";
import { Box, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../Hooks/use-outside-click";
import img1 from "../Scroll3Dgrid/img/1.jpg";
import img2 from "../Scroll3Dgrid/img/2.jpg";
import img3 from "../Scroll3Dgrid/img/3.jpg";
import img4 from "../Scroll3Dgrid/img/4.jpg";
import img5 from "../Scroll3Dgrid/img/5.jpg";
import img6 from "../Scroll3Dgrid/img/6.jpg";
import img7 from "../Scroll3Dgrid/img/7.jpg";
import img8 from "../Scroll3Dgrid/img/8.jpg";
import img9 from "../Scroll3Dgrid/img/9.jpg";
import { easePoly } from "d3-ease";
import CloseIcon from "@mui/icons-material/Close";
import AnimatedShinyText from "../ShineText/ui";

import { SplashScreen } from "../splash-screen";
export function ExpandableCardDemo4() {
  const [active, setActive] = useState(null);
  const [smallIconActive, setSmallIconActive] = useState(false);
  const [loader, setLoader] = useState(true);
  // useEffect(() => {
  //   // setLoader(true)

  // }, []);
  const handleOnlick = (card) => {
    setActive(card);
    const loaderTimer = setTimeout(() => {
      setLoader(false);
    }, 1000);

    // Clean up the timer when the component is unmounted or when the effect is re-executed
    return () => clearTimeout(loaderTimer);
  };

  // console.log(loader);
  const ref = useRef(null);
  const id = useId();
  const titleVariants = {
    initial: {
      opacity: 0.5,
      scale: 1.2,
    },
    hover: {
      scale: 1.4,
      
    
    },
    tap: {
      scale: 0.95,
    },
    active: {
      opacity: 1,
      scale: 1.4,
      transition: {
        duration: 0.5,
      },
    },
  };
  // const titleVariants = {
  //   initial: { scale: 1 },
  //   hover: { scale: 1.1, transition: { duration: 0.3 } },
  // };
  const imageVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };
  const descriptionVariants = {
    initial: { opacity: 1 },
    hover: { opacity: 0.8, transition: { duration: 0.3 } },
  };
  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));
  // console.log(smallIconActive);
  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
        {/* <img src={img1} alt="" /> */}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              {/* <CloseIcon /> */}
              {/* <CloseIcon/> */}
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`} //
              ref={ref}
              className="w-full relative  h-full items-center flex flex-col dark:bg-neutral-900 bg-white gap-y-8  sm:rounded-3xl overflow-hidden justify-center"
            >
              <Box
                className="absolute top-4 right-4"
                sx={{
                  display: "inline-block",
                  "&:hover .icon": {
                    transform: "rotate(180deg)", // Rotate 180 degrees on hover
                    transition: "transform 0.3s ease-in-out",
                  },
                  // top:'30px',
                }}
                onClick={() => setActive(null)}
              >
                <CloseIcon
                  className="icon"
                  fontSize="large"
                  sx={{ color: "white" }}
                />
              </Box>
              <Typography sx={{ fontSize: "3em", color: "white" }}>
                Skins
              </Typography>
              {loader ? (
                <SplashScreen />
              ) : (
                <>
                  <motion.div
                    className="flex justify-center gap-x-10 items-center"
                    // layoutId={`image-${active.title}-${id}`}
                  >
                  <iframe
                  className="rounded-xl"
                  width="320"
                  height="220"
                  src="https://www.youtube.com/embed/EoulV5sexl8?si=XWECKGBIxRyCaG2c"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <iframe
                  className="rounded-xl"
                  width="320"
                  height="220"
                  src="https://www.youtube.com/embed/mshFLZ5cVdQ?si=HNTIcqPUXJ_dvH5h"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <iframe
                  className="rounded-xl"
                  width="320"
                  height="220"
                  src="https://www.youtube.com/embed/8F0FG70-h6s?si=k2LYb3dKmMYFAsGQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                  </motion.div>

                  <motion.div
                    className="flex justify-center gap-x-10 items-center"
                    // layoutId={`image-${active.title}-${id}`}
                  >
                    <iframe
                  className="rounded-xl"
                  width="320"
                  height="220"
                  src="https://www.youtube.com/embed/2UNn8I6V8Fw?si=PDGrsNdBQYEAz6R_"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <iframe
                  className="rounded-xl"
                  width="320"
                  height="220"
                  src="https://www.youtube.com/embed/D4wq_yKCmZU?si=jxWFe030gGdR3row"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                <iframe
                  className="rounded-xl"
                  width="320"
                  height="220"
                  src="https://www.youtube.com/embed/ly3yxHQTNZI?si=FLY3lfqxIJFfOubS"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
                  </motion.div>
                </>
              )}
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="mx-auto w-full gap-2">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => handleOnlick(card)}
            onHoverStart={() => setSmallIconActive(true)}
            onHoverEnd={() => setSmallIconActive(false)}
            className="p-8 flex md:flex-row justify-between gap-12 items-center  rounded-xl cursor-pointer ease-in-out	duration-300"
          >
            <div className="flex gap-4 justify-center md:flex-row ">
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left p-3 pl-10 tracking-[10px]"
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  // onHoverEnd={() => console.log("Mouse left")}
                  animate={smallIconActive ? "active" : "initial"}
                  variants={titleVariants}
                >
                 <AnimatedShinyText>
                  {card.title}
                  </AnimatedShinyText>
                </motion.h3>
                {/* <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  onHoverEnd={() => console.log("Mouse left")}
                  // Define your variants
                  variants={{
                    // initial: { opacity: 0, y: 20 },
                    hover: { opacity: 1, y: 0 },
                    tap: { scale: 0.95 },
                  }}
                >
                  {card.description}
                </motion.p> */}
              </div>
            </div>
            {/* <motion.button */}
            {/* // layoutId={`button-${card.title}-${id}`}
              // className="p-2"
            > */}
            {smallIconActive && (
              <motion.div
                className="h-4 flex gap-8 items-center"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2 },
                  },
                  exit: {
                    opacity: 0,
                    transition: { staggerChildren: 0.2 },
                  },
                }}
              >
                 <motion.img
                  src={'https://img.youtube.com/vi/EoulV5sexl8/sddefault.jpg'}
                  alt=""
                  className="override-img"
                  variants={imageVariants}
                />
                <motion.img
                  src={'https://img.youtube.com/vi/mshFLZ5cVdQ/sddefault.jpg'}
                  alt=""
                  className="override-img"
                  variants={imageVariants}
                />
                <motion.img
                  src={'https://img.youtube.com/vi/8F0FG70-h6s/sddefault.jpg'}
                  alt=""
                  className="override-img"
                  variants={imageVariants}
                />
                <motion.img
                  src={'https://img.youtube.com/vi/D4wq_yKCmZU/sddefault.jpg'}
                  alt=""
                  className="override-img"
                  variants={imageVariants}
                />
                
              </motion.div>
            )}
            {/* </motion.button> */}
          </motion.div>
        ))}
      </ul>
    </>
  );
}


const cards = [
  {
    description: "Lana Del Rey",
    title: "SKINS",
    src: { img1 },
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
        </p>
      );
    },
  },
  
];
