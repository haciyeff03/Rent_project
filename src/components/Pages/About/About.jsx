import {motion} from "framer-motion";
import styles from "./about.module.scss";
import React from 'react';
import { useDisclosure } from '@chakra-ui/react'
import Disrent from '../../disrent/Disrent';
import {MdLocationPin} from "react-icons/md"


import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react'


const About = () => {

  const card_karam = [
    {
      name:'Jon Ziglar',
      work:'Chief Executive Officer',
      img:'https://solutions.rent.com/wp-content/uploads/2022/05/jon-ziglar-211207_1.jpg'
    },
    {
      name:'Nishant Phadnis',
      work:'Chief Product Officer',
      img:'https://solutions.rent.com/wp-content/uploads/2022/05/nishant-phadnis-211207_1-e1654878031471.jpg'

    },
    {
      name:'Kathy Neumann',
      work:'Chief Marketing Officer',
      img:'https://solutions.rent.com/wp-content/uploads/2022/05/kathy_neumann_220322_v2-web-e1654878009283.jpg'
    },
    {
      name:'David Sommers',
      work:'Chief Technology Officer',
      img:'https://solutions.rent.com/wp-content/uploads/2022/05/david-sommers-_1_.jpg'
    },
    {
      name:'Sheila Dehdashti',
      work:'Chief People Officer',
      img:'https://solutions.rent.com/wp-content/uploads/2022/05/sheila_dehdashti_resized.jpg'
    },
    {
      name:'Jamie Graves',
      work:'General Counsel',
      img:'https://solutions.rent.com/wp-content/uploads/2022/10/jamie_graves_220928-2.jpg'
    },
    {
      name:'Arlene Mayfield',
      work:'Senior Vice President of Sales',
      img:'https://solutions.rent.com/wp-content/uploads/2022/06/arlene-mayfield-211201.jpg'
    },
    {
      name:'Rob Kocerha',
      work:'Senior Vice President, Client Experience',
      img:'https://solutions.rent.com/wp-content/uploads/2022/11/rob_kocerha_221027.jpg'
    }
  ]

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
   
    <section className={styles.bannerhead}>
<div className={`container  ${styles.container}`}>
  <div className="row">
    <div className="col-lg-12"
      
    >
      <motion.h1
      initial={{opacity:0,y:130}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.7}}
      >About Us.</motion.h1>
      <motion.h2
      initial={{opacity:0,y:130}}
      whileInView={{opacity:1, y:0}}
      transition={{duration:0.7}}>
        Our mission is to simplify the experience of connecting people & properties. </motion.h2>
      <motion.h2
       initial={{opacity:0,y:130}}
       whileInView={{opacity:1, y:0}}
       transition={{duration:0.7}}>We do this by delivering integrated solutions that bring together the right renter, with the right property, at the right time, eliminating friction and driving efficiency.</motion.h2>
    </div>
  </div>
  <div className={`row  ${styles.rowiki}`}>
    <div className={`col-lg-6  ${styles.total}`}>
      <motion.div className={styles.leftimg}
       initial={{opacity:0,y:130}}
       whileInView={{opacity:1, y:0}}
       transition={{duration:0.7}}>
<img src="https://solutions.rent.com/wp-content/uploads/2022/06/still_1-610x391.jpg" alt="" />

      </motion.div>
      <motion.div className={styles.fourimg}
       initial={{opacity:0,y:100}}
       whileInView={{opacity:1, y:0}}
       transition={{duration:0.3}}>
<div className={styles.first}>
 
  <img src="https://solutions.rent.com/wp-content/uploads/2022/05/2-2.png" alt="" />
  </div>
  <div className={styles.first}>

<img src="https://solutions.rent.com/wp-content/uploads/2022/05/1-2.png" alt="" />
</div>
<div className={styles.first}>
 
  <img src="https://solutions.rent.com/wp-content/uploads/2022/05/3-2.png" alt="" />
  </div>
  <div className={styles.first}>
  <img src="https://solutions.rent.com/wp-content/uploads/2022/05/4-2-1.png" alt="" />
</div>
      </motion.div>
    </div>
    <div className="col-lg-6">
      <motion.div className={styles.sagimg}
       initial={{opacity:0,y:130}}
       whileInView={{opacity:1, y:0}}
       transition={{duration:0.7}}>
<img src="https://solutions.rent.com/wp-content/uploads/2022/06/P1111508-610x714.jpg" alt="" />

      </motion.div>
    </div>
   
  </div>
  <div className="row line">
  <motion.div className={`col-lg-12  ${styles.line}`}
    initial={{opacity:0,y:100}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.3}}>
      
      </motion.div>
     
  </div>
</div>
<div className={`container  ${styles.cards}`}>
  <motion.div className="row"
   initial={{opacity:0,y:130}}
   whileInView={{opacity:1, y:0}}
   transition={{duration:0.7}}>
    <div className="col-lg-6">
      <h1>Our Core Values</h1>
    </div>
    <div className="col-lg-6">
      <h2>At Rent. our mission is driven by eight values that guide every decision we make.</h2>
    </div>

  </motion.div>

  <motion.div className={`row g-3 ${styles.second}`}
  initial={{opacity:0,y:130}}
  whileInView={{opacity:1, y:0}}
  transition={{duration:0.7}}>
<div className="col-lg-3 md-4 ">
  <div className={styles.card}>
    <div className={styles.opsi}>
      <img src="https://solutions.rent.com/wp-content/uploads/2023/01/1-Core-Values_Experience-SM.png
      " alt="" />
      <p>Obsessed with Experience</p>
    </div>

    <div className={styles.overlay}>
      <h2>Good is never enough. For our renters, clients, and people, we strive to deliver the best experience in everything we do and everything we deliver. We sweat the small stuff.</h2>
    </div>
   
  </div>

</div>
<div className="col-lg-3 md-4">
  <div className={styles.card}>
    <div className={styles.opsi}>
      <img src="https://solutions.rent.com/wp-content/uploads/2023/01/2-Core-Values_Integrity-SM.png" alt="" />
      <p>Act with Integrity</p>
    </div>
    <div className={styles.overlay}>
      <h2>Good is never enough. For our renters, clients, and people, we strive to deliver the best experience in everything we do and everything we deliver. We sweat the small stuff.</h2>
    </div>
  </div>
  

</div>
<div className="col-lg-3 md-4">
  <div className={styles.card}>
    <div className={styles.opsi}>
    <img src="https://solutions.rent.com/wp-content/uploads/2023/01/3-Core-Values_Grit-SM-2.png" alt="" />
      <p>Have Grit</p>
    </div>
    <div className={styles.overlay}>
      <h2>Good is never enough. For our renters, clients, and people, we strive to deliver the best experience in everything we do and everything we deliver. We sweat the small stuff.</h2>
    </div>
   
  </div>

</div>
<div className="col-lg-3 md-4">
  <div className={styles.card}>
    <div className={styles.opsi}>
     <img src="https://solutions.rent.com/wp-content/uploads/2023/01/4-Core-Values_We-SM.png" alt="" />
  <p>“We” not “Me”</p>
    </div>
    <div className={styles.overlay}>
      <h2>Good is never enough. For our renters, clients, and people, we strive to deliver the best experience in everything we do and everything we deliver. We sweat the small stuff.</h2>
    </div>  
   
  </div>

</div>
<div className="col-lg-3 md-4">
  <div className={styles.card}>
    <div className={styles.opsi}>
<img src="https://solutions.rent.com/wp-content/uploads/2023/01/5-Core-Values_Matter-SM.png" alt="" /> 
 <p>Do Think that mattwer</p>
    </div>
    <div className={styles.overlay}>
      <h2>Good is never enough. For our renters, clients, and people, we strive to deliver the best experience in everything we do and everything we deliver. We sweat the small stuff.</h2>
    </div>  
   
  </div>

</div>
<div className="col-lg-3 md-4">
  <div className={styles.card}>
    <div className={styles.opsi}>
<img src="https://solutions.rent.com/wp-content/uploads/2023/01/6-Core-Values_Forward-SM.png" alt="" />  
<p>Keep moving forward</p>
    </div>
    <div className={styles.overlay}>
      <h2>Good is never enough. For our renters, clients, and people, we strive to deliver the best experience in everything we do and everything we deliver. We sweat the small stuff.</h2>
    </div>  
   
  </div>

</div>
<div className="col-lg-3 md-4">
  <div className={styles.card}>
    <div className={styles.opsi}>
<img src="https://solutions.rent.com/wp-content/uploads/2023/01/7-Core-Values_Why-SM.png" alt="" />  
<p>Understand the “Why?”</p>
    </div>
    <div className={styles.overlay}>
      <h2>Good is never enough. For our renters, clients, and people, we strive to deliver the best experience in everything we do and everything we deliver. We sweat the small stuff.</h2>
    </div>  
   
  </div>

</div>
<div className="col-lg-3 md-4">
  <div className={styles.card}>
    <div className={styles.opsi}>
<img src="https://solutions.rent.com/wp-content/uploads/2023/01/8-Core-Values_Support-SM.png" alt="" />  
<p>Support our People & Community</p>
    </div>
    <div className={styles.overlay}>
      <h2>Good is never enough. For our renters, clients, and people, we strive to deliver the best experience in everything we do and everything we deliver. We sweat the small stuff.</h2>
    </div>  
   
  </div>

</div>
  </motion.div>
</div>

<div className={`container  ${styles.images}`}>
<motion.div className={`row  ${styles.header}`}
 initial={{opacity:0,y:130}}
 whileInView={{opacity:1, y:0}}
 transition={{duration:0.5}}>
  <div className="col-lg-12">
    <h2>Our Leaders</h2>
    <h4>Meet our leadership team</h4>
  </div>

</motion.div>


<div  className={`row  ${styles.images}`}>

  
{
  card_karam.map((el,index)=>(
    <div  className={`col-lg-3 col-md-6  ${styles.amil}`} key={index}>
<div className={styles.head} >
<img src={el.img} alt=""  />
</div>
<div className={styles.alt} >
 
  <h2> {el.name}</h2>
  <h4>{el.work}</h4>
</div>


 </div>
  ))
  
}
<div className="row line">
  <motion.div className={`col-lg-12  ${styles.line}`}
    initial={{opacity:0,y:100}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.3}}>
      
      </motion.div>
     
  </div>


 
</div>
</div>

<div className={`container  ${styles.join}`}>
  <div className="row">
    <motion.div className="col-lg-5"
    initial={{opacity:0,y:150}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:0.8}}>
      <div className={styles.ust}>
        <h3>

        Join the Rent. team
        </h3>
        <h4>
          Feel at home in your career. Our offices are a place where people and performance take precedence. We thrive in a welcoming, collaborative environment where individuals are inspired to do their best work day in and day out.

 
     </h4>
     <h4>
     Join us in our mission to make finding an ideal place to live intuitive and stress-free for all.
     </h4>
      </div>

      <div className={styles.btn}>
<button>Explore Careers</button>
      </div>
    </motion.div>
    <motion.div className="col-lg-7"
     initial={{opacity:0,y:150}}
     whileInView={{opacity:1, y:0}}
     transition={{duration:0.8}}>
      <div className={styles.txts}>
<div className={styles.txt}>
  <div className={styles.sol}>
    <h2>Treasury Specialist</h2>
    <div className={styles.asagi}>
<MdLocationPin>

</MdLocationPin>
   
    <h3> Atlanta, GA</h3>
  </div>
   </div>
   <div className={styles.sag}>
    <button>Show details</button>
 </div>
</div>
<div className={styles.txt}>
  <div className={styles.sol}>
    <h2>Sr. Manager, Advanced Analytics</h2>
    <div className={styles.asagi}>
<MdLocationPin>

</MdLocationPin>
   
    <h3> Remote</h3>
  </div>
   </div>
   <div className={styles.sag}>
    <button>Show details</button>
 </div>
</div>
<div className={styles.txt}>
  <div className={styles.sol}>
    <h2>Paid Media and Performance Marketing </h2>
    <div className={styles.asagi}>
<MdLocationPin>

</MdLocationPin>
   
    <h3> Atlanta, GA</h3>
  </div>
   </div>
   <div className={styles.sag}>
    <button>Show details</button>
 </div>
</div>
      </div>

      
    </motion.div>
  </div>
</div>

<div className={`container  ${styles.grid}`}>
<div className="row">
  <div className="col-lg-12">
<h3>Life at Rent.</h3>
  </div>
</div>
<div className={`row  ${styles.imgs}`}>
  <div className={`col-lg-6 g-4 ${styles.img}`}>
    <img src="https://solutions.rent.com/wp-content/uploads/2022/11/IMG_8684.jpg" alt="" />
  </div>
  <div className={`col-lg-6 g-4 ${styles.img}`}>
    <img src="https://solutions.rent.com/wp-content/uploads/2022/11/billboard_sample.jpg" alt="" />
  </div>
  <div className={`col-lg-4 g-4 ${styles.img}`}>
    <img src="https://solutions.rent.com/wp-content/uploads/2022/11/35EPAA-2022.jpeg" alt="" />
</div>
<div className={`col-lg-8 g-4 ${styles.img}`}>
  <img src="  https://solutions.rent.com/wp-content/uploads/2022/06/company_photo_georgia_aquarium_2022.jpg
" alt="" />

</div>
<div className={`col-lg-8  g-4 ${styles.img}`}>
  <img src="  https://solutions.rent.com/wp-content/uploads/2022/11/image-2.jpg
" alt="" />

</div>
<div className={`col-lg-4 g-4  ${styles.img}`}>
 <img src="https://solutions.rent.com/wp-content/uploads/2022/11/image-1-e1667348622341.jpg" alt="" />
</div>
<div className={`col-lg-6 g-4  ${styles.img}`}>
<img src="  https://solutions.rent.com/wp-content/uploads/2022/11/IMG_3410.jpg
" alt="" />
</div>
<div className={`col-lg-6  g-4 ${styles.img}`}>
<img src="https://solutions.rent.com/wp-content/uploads/2022/11/generalsession_day2_still_25.jpg
" alt="" />
</div>
<div className={`col-lg-4 g-4 ${styles.img}`}>

<img src="  https://solutions.rent.com/wp-content/uploads/2022/11/image-3.jpg
" alt="" />
</div>
<div className={`col-lg-8  g-4 ${styles.img}`}>
<img src="https://solutions.rent.com/wp-content/uploads/2022/11/Image-from-iOS-3.jpg
" alt="" />

</div>
<div className={`col-lg-8 g-4 ${styles.img}`}>

<img src=" https://solutions.rent.com/wp-content/uploads/2022/11/IMG_0222.jpg
" alt="" />
</div>
<div className={`col-lg-4 g-4 ${styles.img}`}>

<img src="https://solutions.rent.com/wp-content/uploads/2022/11/IMG_2646.jpg" alt="" />
</div>
<div className={`col-lg-4 g-4 ${styles.img}`}>

<img src="https://solutions.rent.com/wp-content/uploads/2022/11/IMG_0452-redo-e1667348656164.jpg" alt="" /></div>
<div className={`col-lg-4 g-4 ${styles.img}`}>

<img src="https://solutions.rent.com/wp-content/uploads/2022/06/072A0336-e1667348876884.jpg" alt="" /></div>
<div className={`col-lg-4  g-4 ${styles.img}`}>

<img src="https://solutions.rent.com/wp-content/uploads/2022/06/P1111552-e1667348838993.jpg" alt="" /></div>

  </div>
  <div className={`row  ${styles.tiktok}`}>
  <div className="col-lg-6 mb-5">
              <motion.div className={styles.rcnews_card}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className={styles.img_cont}>
                  <img src="https://solutions.rent.com/wp-content/uploads/2023/02/TikTok-News-Header-1.png" alt="" />
                  <div className={styles.img_overlay}></div>
                </div>

                <div className={styles.badges}>
                  <span>Rent.</span>
                  <span>Feb 14, 2023</span>
                </div>

                <p>Now Available! RentSocial. for TikTok connects properties with renter audiences</p>
              </motion.div>
            </div>


            <div className="col-lg-6 mb-5">
              <motion.div className={styles.rcnews_card}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className={styles.img_cont}>
                  <img src="https://solutions.rent.com/wp-content/uploads/2023/01/Copy-of-square-property-sites-image.jpg" alt="" />
                  <div className={styles.img_overlay}></div>
                </div>

                <div className={styles.badges}>
                  <span>Business Wire</span>
                  <span>Jan 20, 2023</span>
                </div>

                <p>BusinessWire: Rent. announces Property Sites, a website solution for the multifamily industry.</p>
              </motion.div>
            </div>



  </div>



  
</div>
    </section>
    <Disrent>
      
      </Disrent>
    </>


   
  )
}

export default About