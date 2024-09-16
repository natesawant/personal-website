"use client";

import { useMotionValue, useTransform, motion, Variants } from "framer-motion";
import { useState } from "react";
import Introduction from "./sections/introduction";
import Experience from "./sections/experience";
import Fidelity from "./sections/fidelity";
import BabelStreet from "./sections/babelstreet";
import RegameXR from "./sections/regamexr";
import Thanks from "./sections/thanks";

const RANKS = ["2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K", "A"]
const SUITS = ["D", "H", "S", "C"]

function getIconPath(suit: string) {
    switch (suit) {
        case "C":
            return "club.png"
        case "S":
            return "spade.png"
        case "H":
            return "heart.png"
        case "D":
            return "diamond.png"
    }
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}

const pages = [<Introduction key={0} />, <Experience key={1} />, <Fidelity key={2} />, <BabelStreet key={3} />, <RegameXR key={4} />, <Thanks key={5} />]

export default function Card(props: { setIndex?: (index: number) => void; index?: number; drag?: "x" | "y" | boolean; frontCard: boolean; }) {
    const [exitX, setExitX] = useState(0);

    const width = 400;
    const height = 600;

    const rank = RANKS[getRandomInt(RANKS.length)]
    const suit = SUITS[getRandomInt(SUITS.length)]
    const color = suit == "C" || suit == "S" ? "black" : "red-500";
    const icon = getIconPath(suit)

    const x = useMotionValue(0);
    const scale = useTransform(x, [-width, 0, width], [0.5, 1, 0.5]);
    const rotate = useTransform(x, [-width, 0, width], [-45, 0, 45], {
        clamp: false
    });

    const variantsFrontCard: Variants = {
        animate: { scale: 1, y: 0, opacity: 1 },
        exit: (custom: number) => ({
            x: custom,
            opacity: 0,
            scale: 0.5,
            transition: { duration: 0.2 }
        })
    };
    const variantsBackCard: Variants = {
        initial: { scale: 0, y: 105, opacity: 0 },
        animate: { scale: 0.75, y: 30, opacity: 0.5 }
    };

    function handleDragEnd(_: unknown, info: { offset: { x: number; }; }) {
        if (info.offset.x < -100) {
            setExitX(-width - 100);
            if (props.setIndex && props.index != undefined) props.setIndex(props.index + 1);
        }
        if (info.offset.x > 100) {
            setExitX(width + 100);
            if (props.setIndex && props.index != undefined) props.setIndex(props.index + 1);
        }
    }

    return (
        <motion.div
            style={{
                width: width,
                height: height,
                position: "absolute",
                top: 0,
                x,
                rotate,
                cursor: "grab"
            }}
            whileTap={{ cursor: "grabbing" }}
            // Dragging
            drag={props.drag}
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            onDragEnd={handleDragEnd}
            // Animation
            variants={props.frontCard ? variantsFrontCard : variantsBackCard}
            initial="initial"
            animate="animate"
            exit="exit"
            custom={exitX}
            transition={
                props.frontCard
                    ? { type: "spring", stiffness: 300, damping: 20 }
                    : { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
            }
            onClick={() => { if (props.setIndex && props.index != undefined) props.setIndex(props.index + 1) }}
        >
            <div className=" absolute text-black w-[400px] h-[600px]">
                <p className={` absolute text-6xl top-4 left-5 text-${color} font-staatliches`}>{rank}</p>
                <img className=" absolute top-20 left-2 h-12" src={icon} />
                <p className={` absolute text-6xl bottom-4 right-5 text-${color} rotate-180 font-staatliches`}>{rank}</p>
                <img className=" absolute bottom-20 right-2 h-12 rotate-180" src={icon} />
                <div className=" p-16 w-full h-full">
                    <div className=" p-4 w-full h-full rounded-sm outline outline-offset-1 outline-3 outline-black">
                        {pages[props.index ? props.index % pages.length : 0]}
                    </div>
                </div>
            </div>
            <motion.div
                style={{
                    width: width,
                    height: height,
                    backgroundColor: "#fff",
                    borderRadius: 5,
                    scale,
                    boxShadow: "4px 4px"
                }}
            />
        </motion.div>
    );
}