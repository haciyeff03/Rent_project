import React, { useState } from "react";
import styles from "./navbar.module.scss";
import {RiArrowDropDownLine} from "react-icons/ri"
import{Link} from "react-router-dom"
import {AiOutlineClose} from "react-icons/ai"
import {FiMenu} from "react-icons/fi"
import {motion, transform} from "framer-motion"
import {BsArrowRightCircle,BsArrowDownCircle ,BsArrowRightShort } from "react-icons/bs"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  transition,
} from '@chakra-ui/react'



const Navbar = () => {

  const [amil,setamil] = useState(false);  
  const [amil1,setamil1] = useState(false);  
  const [amil12,setamil12] = useState(false);  

  const [amil13,setamil13] = useState(false);  

  
  return (
    <nav className={styles.nav}>
      <div className={`container  ${styles.compnav}`}>
      <div className="row">
        <div className="col-lg-2">
         <Link to="/home" className={styles.logo}>
         <img src="https://solutions.rent.com/wp-content/uploads/2022/06/2x-res.png" alt="" />

         </Link>
        </div>
        <div className="col-lg-6">
          <ul>
            <li> <Link to="/home">Home</Link></li>
            <li className=".sltn"> Solutions <RiArrowDropDownLine/>
            <motion.div className={styles.solutions}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="container">
                                        <div className="row g-5 align-items-start">
                                            <h3>Solutions</h3>
                                            <div className={`col-lg-6 ${styles.colm0}`}>
                                                <div className={styles.sol_left}>
                                                    <div className={styles.sol_list}>
                                                        <div className={styles.list_side}>
                                                            <ul>
                                                                <li>Rent<span>Marketplace.</span></li>
                                                                <li>Rent<span>Social.</span></li>
                                                                <li>Rent<span>Engage.</span></li>
                                                            </ul>
                                                        </div>
                                                        <div className={styles.list_side}>
                                                            <ul>
                                                                <li>Rent<span>Search.</span></li>
                                                                <li>Rent<span>Target.</span></li>
                                                                <li>Rent<span>Rep.</span></li>
                                                            </ul>
                                                        </div>

                                                        <div className={styles.line}></div>
                                                    </div>

                                                    <button className={styles.btn_primary}>Explore all</button>
                                                </div>
                                            </div>
                                            <div className={`col-lg-6 ${styles.colm0}`}>
                                                <div className={styles.sol_right}>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className={styles.imgcont}>
                                                                <img src="https://solutions.rent.com/wp-content/uploads/2022/09/budget-season-1-header-image.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className={styles.right_top}>
                                                                <span>Featured</span>
                                                                <h6>09/14/2022</h6>
                                                            </div>
                                                            <p>3 ways to get more from your property’s marketing budget</p>
                                                            <h5>Explore <BsArrowRightShort /></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
            
            </li>
            <li className={styles.amil}>Company <RiArrowDropDownLine/>
            <motion.div className={styles.companies}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className={styles.list}>
                                        <ul>
                                            <li><Link to={'/about'}>About</Link></li>
                                            <li><Link to={'/news'}>News</Link></li>
                                        </ul>
                                        <ul>
                                            <li><Link to={'/'}>Careers</Link></li>
                                            <li><Link to={'/faq'}>FAQ</Link></li>
                                        </ul>
                                    </div>
                                </motion.div></li>
            <li> <Link to="/blog">Blog</Link> </li>
            <li>Resources <RiArrowDropDownLine/>
            <motion.div className={styles.resources}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <div className="container">
                                        <div className="row g-5 align-items-start">
                                            <h3>Resources</h3>
                                            <div className={`col-lg-6 ${styles.colm0}`}>
                                                <div className={styles.sol_left}>
                                                    <div className={styles.sol_list}>
                                                        <div className={styles.list_side}>
                                                            <ul>
                                                                <li><span>Webinars</span></li>
                                                                <li><span>Checklists</span></li>
                                                            </ul>
                                                        </div>
                                                        <div className={styles.list_side}>
                                                            <ul>
                                                                <li><span>Reports</span></li>
                                                                <li><span>Assessments</span></li>
                                                            </ul>
                                                        </div>

                                                        <div className={styles.line}></div>
                                                    </div>

                                                    <h5>Explore All Resources <BsArrowRightShort /></h5>
                                                </div>
                                            </div>
                                            <div className={`col-lg-6 ${styles.colm0}`}>
                                                <div className={styles.sol_right}>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className={styles.imgcont}>
                                                                <img src="https://solutions.rent.com/wp-content/uploads/2022/12/Great-Resigation-Webinar-Thumbnail-image.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className={styles.right_top}>
                                                                <span>Featured</span>
                                                                <h6>12/21/2022</h6>
                                                            </div>
                                                            <p>How Property Teams Can Overcome Staff Turnover</p>
                                                            <h5>Explore <BsArrowRightShort /></h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div></li>
          </ul>
        </div>
        <div className="col-lg-4 amil">
          <div className={styles.btns}>

          
          <button className={styles.btn}>Client Login</button>
          <button className={styles.btn2}>Get in touch</button>
         
        </div>
        </div>
      </div>
      </div>

      <div className={styles.mobile_nav}>
        <div className="mob_logo">
        <Link to="/home" className={styles.logo}>
         <img src="https://solutions.rent.com/wp-content/uploads/2022/06/2x-res.png" alt="" />

         </Link>
        </div>

        <div className={styles.menu_icon}  >
          {amil? <AiOutlineClose onClick={()=>{
          setamil(!amil)}}/>:
      <FiMenu onClick={()=>{
          setamil(!amil)}} />
           }
      
        </div>

        <div className={styles.menu_nav} 

        style={{transform: !amil ? `translate(100%,0)` : `translate(0,0)`,
        display: !amil ?  `none` : `block`}
      
      }
        
        >
       
        <Accordion  allowMultiple>
  <AccordionItem className={styles.item}>
    <h2>
      <AccordionButton className={styles.bg}>
        <Box as="span" flex='1' textAlign='left' classname={styles.box}
        

 onClick={()=>{
          setamil1(!amil1)}}>
          Solutions
        </Box>
        {
          <BsArrowDownCircle
          style={
            {transform: !amil1 ? `rotate(270deg)` : `rotate(0deg)`,
          color: !amil1 ? 'white' : `blue`
          }
          }>

          </BsArrowDownCircle>
             }
             
        
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     <ul>
      <li>RentMarketPlace</li>
      <li>RentSearch</li>
      <li>RentSocial</li>
      <li>RentTarget</li>
      <li>RentEngage</li>
     </ul>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem className={styles.item}>
    <h2>
      <AccordionButton className={styles.bg}>
        <Box as="span" flex='1' textAlign='left' classname={styles.box}
         onClick={()=>{
          setamil12(!amil12)}}>
          Company
        </Box>
        <BsArrowDownCircle
          style={{transform: !amil12 ? `rotate(270deg)` : `rotate(0deg)`,
          color: !amil12 ? 'white' : `blue`
          }}>
            </BsArrowDownCircle>
      
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
     <ul>
     <li onClick={()=>{
          setamil(!amil)}}> <Link to="/about" >About</Link></li>
     <li onClick={()=>{
          setamil(!amil)}}> <Link to="/fax">Fax</Link></li>
     <li onClick={()=>{
          setamil(!amil)}}> <Link to="/news">News</Link></li>
     </ul>
     
    </AccordionPanel>
  </AccordionItem>
  <AccordionItem className={styles.item}>
    <h2>
      <AccordionButton className={styles.bg}>
        <Box as="span" flex='1' textAlign='left' classname={styles.box}>
        <Link to="/blog" onClick={()=>{
          setamil(!amil)}} className={styles.linkblog}> Blog</Link>  
        </Box>
        
      </AccordionButton>
    </h2>
    
  </AccordionItem>
  <AccordionItem className={styles.item}>
    <h2>
      <AccordionButton className={styles.bg}>
        <Box as="span" flex='1' textAlign='left' classname={styles.box}
         onClick={()=>{
          setamil13(!amil13)}}>
          Resources
        </Box>

        <BsArrowDownCircle
          style={{transform: !amil13 ? `rotate(270deg)` : `rotate(0deg)`,
          color: !amil13 ? 'white' : `blue`
          }}>
            </BsArrowDownCircle>
                 </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      <ul>
        <li>Webinars</li>
        <li>Reports</li>
        <li>Checklists</li>
        <li>Assessments</li>
      </ul>
    </AccordionPanel>
  </AccordionItem>
</Accordion>
<div className={styles.btns1}
>

          
<button className={styles.btn}>Client Login</button>
<button className={styles.btn2}>Get in touch</button>

</div>


      </div>
      </div>
      


    </nav>

   

  );
};

export default Navbar;