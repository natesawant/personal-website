import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Card from "./card";

export function Example() {
    const [index, setIndex] = useState(0);

    return (
        <motion.div style={{ width: 400, height: 600, position: "relative" }}>
            <AnimatePresence initial={false}>
                <Card key={index + 1} frontCard={false} />
                <Card
                    key={index}
                    frontCard={true}
                    index={index}
                    setIndex={setIndex}
                    drag="x"
                />
            </AnimatePresence>
        </motion.div>
    );
}