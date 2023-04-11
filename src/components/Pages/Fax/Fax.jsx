import React from 'react'
import {motion} from "framer-motion"
import styles from "./fax.module.scss";
import { Accordion } from '@chakra-ui/react';
import array from '../../accordion/Accordiondata';
import Disrent from '../../disrent/Disrent';
import AccordionComponent  from '../../accordion/AccordionComponent';
const Fax = () => {
  return (
    <>
    <section className={styles.first}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
           

          
            <h3>Frequently Asked Questions.</h3>
          </div>
          <div className="col-lg-12">
          <motion.div className={styles.text}
          initial={{opacity:0,y:130}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.7}}
          >
            <span>General
              </span>
              <span>RentMarketplace.</span>
              <span>RentSocial.</span>
              <span>RentSocial.</span>
              <span>RentTarget.</span>
              <span>RentEngage.</span>
              <span>RentRep.</span>
          </motion.div>
          </div>
          </div>

          <div className={`row ${styles.second}`}>
          <motion.div
            initial={{opacity:0,y:130}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.5}}
            className={styles.motion}>
              <h3>General</h3>
       
           <Accordion allowMultiple>
           {array.slice(1,6).map((el,index)=>
           (
            <AccordionComponent answer={el.answer} question={el.question}/>
           )

           )}
           </Accordion>
          
          </motion.div>
          
          <motion.div
            initial={{opacity:0,y:130}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.5}}
            className={styles.motion}>
              <h3>RentMarketplace</h3>
       
           <Accordion allowMultiple>
           {array.slice(1,6).map((el,index)=>
           (
            <AccordionComponent answer={el.answer} question={el.question}/>
           )

           )}
           </Accordion>
          
          </motion.div>
          <motion.div
            initial={{opacity:0,y:130}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.5}}
            className={styles.motion}>
              <h3>RentSocial.</h3>
       
           <Accordion allowMultiple>
           {array.slice(1,5).map((el,index)=>
           (
            <AccordionComponent answer={el.answer} question={el.question}/>
           )

           )}
           </Accordion>
          
          </motion.div>
          <motion.div
            initial={{opacity:0,y:130}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.5}}
            className={styles.motion}>
              <h3>RentSearch.</h3>
       
           <Accordion allowMultiple>
           {array.slice(1,4).map((el,index)=>
           (
            <AccordionComponent answer={el.answer} question={el.question}/>
           )

           )}
           </Accordion>
          
          </motion.div>
          </div>

         
      

      </div>

    </section>
  <section className={styles.iki}>
   
            <Disrent>

            </Disrent>
          
  </section>
  </>  )
}

export default Fax