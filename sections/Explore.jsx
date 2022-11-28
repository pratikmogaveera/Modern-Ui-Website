'use client';
import { motion } from "framer-motion";
import styles from '../styles'
import { staggerContainer } from '../utils/motion'
import { ExploreCard, TitleText, TypingText } from "../components";
import { useState } from "react";
import { exploreWorlds } from '../constants'

const Explore = () => {
    const [active, setActive] = useState('world-2')

    return (
        <section
            className={`${styles.paddings}`}
            id="explore"
        >
            <motion.div variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
                <TypingText title="| The World" textStyles="text-center" />
                <TitleText
                    title={
                        <>
                            Choose The World You Want
                            <br className="md:block hidden" />
                            To Explore
                        </>}
                    textStyles="text-center"
                />

                <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
                    {exploreWorlds.map((world, i) => (
                        <ExploreCard
                            key={world.id}
                            {...world}
                            i={i}
                            active={active}
                            handleClick={() => setActive(world.id)}
                        />
                    ))}
                </div>
            </motion.div>

        </section>
    )
};

export default Explore;
