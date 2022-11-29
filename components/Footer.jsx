'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { socials } from '../constants';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-warp gap-5">
        <h4 className="text-white font-bold md:text-[64px] text-[44px]">
          Enter the Metaverse
        </h4>
        <button type="button" className="flex items-center h-fit py-4 px-8 bg-[#25618b] rounded-[32px] gap-8">
          <img
            src="/headset.svg"
            alt="button"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="text-[16px] text-white font-normal pr-4 lg:px-0">
            ENTER METAVERSE
          </span>
        </button>
      </div>
      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="text-[24px] text-white font-extrabold">METAVERSES</h4>
          <p className="text-[14px] font-normal text-white opacity-50">Copyright © 2021 - 2022 Metaversus. All rights reserved.</p>
          <div className="flex flex-row gap-4">
            {socials.map((site) => (

              <img key={site.name} src={site.url} alt={site.name}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
                        ))}
          </div>
        </div>
      </div>
    </div>

  </motion.footer>
);

export default Footer;
