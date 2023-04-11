import React from 'react'
import styles from "./home.module.scss";
import {motion} from "framer-motion"
import headerimg from "../Home/img/headerimg.jpeg"
import onalti from "../Home/img/onalti.jpeg"
import atlanta from "../Home/img/atlanta.jpeg"
import otuzbes from "../Home/img/otuzbes.jpeg"
import { Accordion } from '@chakra-ui/react';
import qirxuc from "../Home/img/qirxuc.jpeg"
import array from '../../Accordionwhite/Accdata';
import Acccomponent  from '../../Accordionwhite/Acccomponent';
import Disrent from '../../disrent/Disrent';

const Home = () => {
  return (
    <>
    <section className={styles.first}>
    <div className={`container    ${styles.solsag}`}>
    <div className={`row    ${styles.bir}`}>
            <div className="col-lg-6 mb-5">
              <motion.div className={styles.text}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                
             
              <div className={styles.left}>
                <h2>Apartment marketing solutions that work as hard as you do. Period.</h2>
                <p><span>Rent. is more than a marketplace.</span> We help you easily attract new renters, engage prospects during their search, and nurture resident relationships.</p>
                <div className={styles.btns}>
                  <a href="#">Learn how</a>
                  <button>Get in touch</button>
                </div>
             
            </div>

              </motion.div>
            </div>
            <motion.div className="col-lg-6 mb-5"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              <div className={styles.rigth}>

            <img src={headerimg} alt="" />
              </div>
            </motion.div>

          </div>
      </div>

    </section>
    <section className={styles.second}>
    <div className={`container    ${styles.solsag}`}>
    <div className={`row    ${styles.bir}`}>
            <div className="col-lg-6 mb-5">
              <motion.div className={styles.text}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                
             
              <div className={styles.left}>
<h2>Attract Qualified Renters</h2>
                <p>Renters are more likely to discover your property first on an online marketplace than your property website. From there, it’s about getting tours booked. </p>
                <p>Attract high-quality leads that are ready to tour–and ultimately sign that lease–with listings that make the most of your budget and time. Rent. connects property owners and managers with close to 50 million home seekers¹ per month through our network of marketplaces. You can even reach in-market renters with search ads, social ads and email marketing solutions that are powered by our marketplace.</p>
                <div className={styles.btns}>
                
                  <button>Start listing</button>
                </div>
             
            </div>
            <motion.div className={styles.fourimg}
       initial={{opacity:0,y:100}}
       whileInView={{opacity:1, y:0}}
       transition={{duration:0.3}}>
<div className={styles.firsts}>
 
<img src="https://solutions.rent.com/wp-content/uploads/2022/05/2-3.png" alt="" /> 
 </div>
  <div className={styles.firsts}>

<img src="https://solutions.rent.com/wp-content/uploads/2022/05/1-1.png" alt="" />
</div>
<div className={styles.firsts}>
 
<img src="https://solutions.rent.com/wp-content/uploads/2022/05/3-1.png" alt="" /> 
 </div>
  <div className={styles.firsts}>
<img src="https://solutions.rent.com/wp-content/uploads/2022/05/4-1.png" alt="" />
</div>
      </motion.div>

              </motion.div>
            </div>
            <motion.div className="col-lg-6 mb-5"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              <div className={styles.rigth}>

            <img src={onalti} alt="" />
              </div>
            </motion.div>

          </div>
      </div>
      </section>
      <section className={styles.third}>
      <div className={`container    ${styles.solsag}`}>
    <div className={`row    ${styles.head}`}>
            
            <motion.div className="col-lg-12 mb-5"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              <div className={styles.rigth}>

           <h4>Meet Your Next Resident</h4>
           <h5>Inspire renters to take action and boost your property’s brand.</h5>
              </div>
            </motion.div>

          </div>
          <div className={`row ${styles.bir}`}>
            <div className="col-lg-6 mb-5">
              <motion.div className={styles.text}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                
             
              <div className={styles.left}>
<h2>Rent<span>Marketplace.</span></h2>
<p>Renter-centric search experiences to find your newest residents.</p>
                  <div className={styles.btns}>
                
                 <ul>
                  <li>Access to nearly 50 million visitors per month.</li>
                  <li>Attract and engage renters with videos, virtual tours, online applications, and included photoshoots.</li>
                  <li>Easily manage listing content, tools and performance reports with the RentHQ. client portal.</li>
                  <li>Stand out to renters in their search with Profile Sync, which effortlessly syndicates property data and images on your Google listing.</li>
                
                 </ul>
                 <button>Learh More</button>

                </div>
             
            </div>
        

              </motion.div>
            </div>
            <motion.div className="col-lg-6 mb-5"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              <div className={styles.rigth}>

            <img src={atlanta} alt="" />
              </div>
            </motion.div>

          </div>
          <div className={`row ${styles.iki}`}>
            <div className="col-lg-6 mb-5">
              <motion.div className={styles.text}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                
             
              <div className={styles.left}>
<h2>Rent<span>Social</span></h2>
<p>Fair-housing compliant social ads that generate high-quality renter leads.</p>                
  <div className={styles.btns}>
                
                 <ul>
                 <li>Rent. reaches 50x more in-market renters than traditional targeting with hyper-targeting powered by our unmatched proprietary data from RentMarketplace. visitors.⁵</li>
                 <li>Choose from turnkey ads that go live in as little as 24 hours or custom strategy based on your specific campaign needs.</li>
                 <li>Reach renters like never before on Facebook, Instagram, Snapchat or TikTok.</li>
                 <li>Deliver in-market renter leads directly to your property management system with campaigns powered by unmatched proprietary data.</li>
                 </ul>
                 <button>Learh More</button>

                </div>
             
            </div>
        

              </motion.div>
            </div>
            <motion.div className="col-lg-6 mb-5"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              <div className={styles.rigth}>

            <img src={otuzbes} alt="" />
              </div>
            </motion.div>

          </div>
          <div className={`row ${styles.search}`}>
            <div className="col-lg-6 mb-5">
              <motion.div className={styles.text}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                
             
              <div className={styles.left}>
<h2>Rent<span>Search.</span></h2>
<p>Award-winning Google search campaigns that keep occupancy rates high.</p>                  <div className={styles.btns}>
                
                 <ul>
                <li>Unparalleled lead quality and website traffic powered by the Rent. marketplace network.</li>
                <li>3X higher click-through rates than the industry average.⁶
</li>
                <li>Simple, transparent pricing.
</li>
                 </ul>
                 <button>Learh More</button>

                </div>
             
            </div>
        

              </motion.div>
            </div>
            <motion.div className="col-lg-6 mb-5"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              <div className={styles.rigth}>

            <img src={qirxuc} alt="" />
              </div>
            </motion.div>

          </div>

      </div>

        </section>
        <section className={styles.fourth}>
        <div className={`container    ${styles.solsag}`}>
        <div className={`row    ${styles.head}`}>
            
            <motion.div className="col-lg-6 mb-5"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              <div className={styles.rigth}>

           <h4>Make Resident Connections Count</h4>
<h5>Simplify communications and automate repetitive tasks for your property team.

</h5> 
             </div>
            </motion.div>

          </div>
        <div className={`row ${styles.iki}`}>
            <div className="col-lg-6 mb-5">
              <motion.div className={styles.text}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                  <motion.div className="images"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              <div className={styles.rigth}>

            <img src="https://solutions.rent.com/wp-content/uploads/2022/05/rent-connect.png" alt="" />
              </div>
            </motion.div>
             
              <div className={styles.left}>
<h2>Rent<span>Engage.</span></h2>
<p>Your leasing team’s key to communicating with renters and residents stress-free.</p> 
 <div className={styles.btns}>
                
                 <ul>
                 <li>24/7 leasing center support handles incoming calls, emails and online chat.</li> 
                 <li>Trusted, FHA-compliant solutions safely answer questions, book appointments and qualify renter leads.</li>
                 <li>Nurture prospects and residents to lease and renewal with automated, two-way text and email messages from a centralized platform.</li>
                 </ul>
                 <button>Learh More</button>

                </div>
             
            </div>
        

              </motion.div>
            </div>
          

          </div>
          <div className={`row ${styles.uc}`}>
            <div className="col-lg-6 mb-5">
              <motion.div className={styles.text}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                  <motion.div className="images"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              <div className={styles.rigth}>

<img src="https://solutions.rent.com/wp-content/uploads/2022/05/Screen-Shot-2022-07-21-at-10.56.43-AM.jpg" alt="" />     
    </div>
            </motion.div>
             
              <div className={styles.left}>
<h2>Rent<span>Rep.</span></h2>
<p>Take control of your online reputation and social presence to boost renter engagement and SEO.</p> 
<div className={styles.btns}>
                
                 <ul>
                <li>Fair Housing-trained experts handle your review responses and social media.</li>
                <li>Effectively manage reviews, social, listings, surveys and more with a best-in-class dashboard powered by Reputation.</li> 
                <li>Deliver fast and personalized responses to resident reviews.</li> 
                <li>Highest-rated reputation management solution available.</li>
                </ul>
                 <button>Learh More</button>

                </div>
             
            </div>
        

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
   <div className={`row ${styles.target}`}>
         
   <motion.div className={`col-lg-6 mb-5   ${styles.head}`}
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              <div className={styles.rigth}>

<h4>Target intelligently</h4>
<motion.h5 initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
                Boost your efforts with hyper-targeted advertising solutions powered by our proprietary in-market renter data.</motion.h5>

             </div>
            </motion.div>
            <div className="col-lg-6 mb-5">
              <motion.div className={styles.text}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                  <motion.div className="images"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              <div className={styles.rigth}>

<img src="https://solutions.rent.com/wp-content/uploads/2022/05/RentTarget-Examples.png" alt="" />    </div>
            </motion.div>
             
              <div className={styles.left}>
<h2>Rent<span>Target.</span></h2>
<p>Reach the right renters with targeted display and email campaigns.</p><div className={styles.btns}>
                
                 <ul>
              <li>Sophisticated targeting that drives 3X more clicks⁷ from in-market renters.
</li>  
<li>Get in front of renters right when they step into your area with geo-fencing technology.</li>
<li>Fair Housing trained experts to safely maximize your reach with in-market renters.</li>
</ul>
                 <button>Learh More</button>

                </div>
             
            </div>
        

              </motion.div>
            </div>
          

          </div>

         

</div>
        </section>

        <section className={styles.acc}>
        <div className={`container    ${styles.acccont}`}>
        <div className={`row ${styles.second}`}>

<div className={`col-lg-6 mb-5 ${styles.sol}`}>
  <h2>
  Frequently Asked Questions
  </h2>
  <h3>Got questions? We have answers.</h3>
</div>


<div className={`col-lg-6 mb-5 ${styles.sag}`}>


<motion.div
initial={{opacity:0,y:130}}
whileInView={{opacity:1, y:0}}
transition={{duration:0.5}}
className={styles.motion}>
  

<Accordion allowMultiple>
{array.slice(0,6).map((el,index)=>
(
<Acccomponent answer={el.answer} question={el.question}/>
)

)}
</Accordion>

</motion.div>
</div>
</div>

<div className={`row ${styles.images}`}>

  <Disrent>

  </Disrent>

</div>
</div>

        </section>
    </>
  )
}

export default Home