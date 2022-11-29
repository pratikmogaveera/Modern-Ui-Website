'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import { TitleText, TypingText } from '../components';
import { exploreWorlds } from '../constants';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People Around The World" textStyles="text-center" />
      <TitleText
        title={(
          <>
            Track friends around you and invite them to play together in the same world
          </>
)}
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-cover"
        />
        <div className="absolute right-20 bottom-20 h-[70px] w-[70px] p-[6px] rounded-full bg-[#5d66a0]">
          <img
            src="/people-01.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute top-1/3 left-[62%] h-[70px] w-[70px] p-[6px] rounded-full bg-[#5d66a0]">
          <img
            src="/people-02.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute left-20 top-20 h-[70px] w-[70px] p-[6px] rounded-full bg-[#5d66a0]">
          <img
            src="/people-03.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
        <div className="absolute blur-3xl left-[30%] bottom-[40%] h-[110px] w-[126px] p-[3px]">
          <img
            src={exploreWorlds[0].imgUrl}
            alt="people"
            className="w-full h-full rounded-2xl"
          />
        </div>
        <div className="absolute glassmorphism rounded-3xl left-[30%] bottom-[40%] h-[80px] w-[126px] p-[1px]">
          <img
            src={exploreWorlds[0].imgUrl}
            alt="people"
            className="w-full h-full rounded-3xl"
          />

          <div className="absolute bottom-7 left-7">
            <img
              src="/people-01.png"
              className="h-[20px] w-[20px]"
            />
          </div>
          <div className="absolute bottom-7 left-5">
            <img
              src="/people-03.png"
              className="h-[20px] w-[20px]"
            />
          </div>
          <div className="absolute bottom-7 left-3">
            <img
              src="/people-02.png"
              className="h-[20px] w-[20px]"
            />
          </div>
          <p className="absolute text-white font-semibold text-xs bottom-2 left-3 ">{exploreWorlds[0].title}</p>
        </div>

        <div className="absolute blur-3xl right-[10%] top-[10%] h-[80px] w-[126px] p-[3px] ">

          <img
            src={exploreWorlds[1].imgUrl}
            alt="people"
            className="w-full h-full rounded-2xl"
          />
        </div>
        <div className="absolute glassmorphism rounded-3xl opacity-85 right-[10%] top-[10%] h-[80px] w-[126px] p-[1px] ">

          <img
            src={exploreWorlds[1].imgUrl}
            alt="people"
            className="w-full h-full rounded-2xl"
          />
          <div className="absolute bottom-7 left-7">
            <img
              src="/people-01.png"
              className="h-[20px] w-[20px]"
            />
          </div>
          <div className="absolute bottom-7 left-5">
            <img
              src="/people-03.png"
              className="h-[20px] w-[20px]"
            />
          </div>
          <div className="absolute bottom-7 left-3">
            <img
              src="/people-02.png"
              className="h-[20px] w-[20px]"
            />

          </div>
          <p className="absolute text-white font-semibold text-xs bottom-2 left-3 ">{exploreWorlds[1].title}</p>

        </div>
      </motion.div>

    </motion.div>

  </section>
);

export default World;
