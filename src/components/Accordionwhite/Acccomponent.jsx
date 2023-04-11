import React, { useState } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    
  } from '@chakra-ui/react'

  import {BsArrowUpCircle} from "react-icons/bs"
import styles from "./accwhite.module.scss"

 
 const AccordionComponent = ({question,answer}) => {
    const [amil,setamil]=useState(false);
    return (
   
    <AccordionItem className={styles.karam}
    >
      <h2>
        <AccordionButton className={styles.btn} onClick={()=> setamil(!amil)}>
          <Box as="span" flex='1' textAlign='left' className={styles.box}>
          <h2>{question}</h2>
          </Box>
          <BsArrowUpCircle style={{transform: amil ?'rotate(180deg)' : 'rotate(0deg)'}} />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4} className={styles.open}>
      {answer}
      </AccordionPanel>
    </AccordionItem>
  
    
  
   )
 }
 
 export default AccordionComponent

