import React from 'react'
import { motion } from "framer-motion"
import styles from "./detail.module.scss"
const Detail = () => {
  return (
<>
<section className={styles.text}>


<motion.div className={`container    ${styles.first}`}
   initial={{ opacity: 0, y: 150 }}
   whileInView={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.7 }}>
<div className={`row g-0   ${styles.head}`}>
    <div className={`col-lg-6    ${styles.left}`}>

        <div className={styles.img}>
<img src="https://solutions.rent.com/wp-content/uploads/2023/03/Facebook-Marketplace-Banner.jpg" alt="" />        </div>
    </div>
    <div className={`col-lg-6    ${styles.rigth}`}>
      

     
<h4>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</h4>   
   <div className={styles.alt}>
        <div className={styles.sol}>
          <img src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp" alt="" />
        </div>
        <div className={styles.sag}>
          <h5>by <span> Rachel Richardson</span></h5>
          <h6>Content Manager, Demand Generation</h6>
      
        </div>
      </div>
    </div>
</div>
</motion.div>
<motion.div className={`container    ${styles.line}`}
 initial={{ opacity: 0, y: 150 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.7 }}>
<div className="row">
  <div className="col-lg-12">
    <div className={styles.xet}>

    </div>
  </div>
</div>
  </motion.div>

<motion.div className={`container    ${styles.second}`}
 initial={{ opacity: 0, y: 150 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.7 }}>

<div className="row">
  <div className="col-lg-8">
  <ul>

    <li>The multifamily market is starting to soften: high rates of apartment completions and new construction, declining rent rates and changing renter needs.</li>
    <li>This year, there are 943,000 units of multifamily housing under construction. This is an almost 50-year record high.</li>
    <li>Rental vacancies in the last quarter of 2022 were up 5.8% nationwide compared to 5.6% in Q4 of 2021.</li>
         
     <li>Pivot away from less effective tactics and find channels that bring in new traffic and nurture leads.</li>
         
                   </ul>
  </div>
  <div className={ `col-lg-8 ${styles.line}`}>
    <div className={styles.xet}>

    </div>

  </div>
 
</div>

<div className="row">
  <div className="col-lg-8">
    <div className={styles.ust}>
      <motion.h2
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}>The rental market slowdown is now here. What’s next for owners and operators?

      </motion.h2>
    <motion.h3
    initial={{ opacity: 0, y: 150 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}>With softening marketing conditions, multifamily owners and operators are under pressure to maintain occupancy and generate demand. Here are the major market trends that impact a property’s day-to-day operations and what you can do about them.

    </motion.h3>
    
    </div>
    <div className={styles.ust}>
      <motion.h2
      initial={{ opacity: 0, y: 150 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}>What’s changed this year?

      </motion.h2>
    <motion.h3
    initial={{ opacity: 0, y: 150 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}>The rental market looks a lot different than it did last year, and multifamily is adjusting after years of historically high demand and rate increases. Market analysts are seeing softening market conditions with high rates of apartment completions and new construction, higher vacancy rates compared to last year, and declining rent rates. These changes are also clear in renters’ online search activity. Demand for rental-related keywords on Google steadily declined from July 2022 to December 2022.1

    </motion.h3>
    
    </div>

  </div>
</div>

<div className="row">


<motion.div
 initial={{ opacity: 0, y: 150 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.7 }}>
<div className={styles.law}>
  <div className="col-lg-6">
    <div className={styles.img}>
      <img src="https://solutions.rent.com/wp-content/uploads/2023/03/1-1-1-768x192.png" alt="" />
    </div>
  </div>
  <div className="col-lg-7">
    <h2>Growing supply of new properties entering the market gives renters more options and heats up competition for established property teams. This year, there are 943,000 units of multifamily housing under construction

<span>Actions you can take: </span>  See how your community stacks up against new properties, and prepare for future competition.</h2>
  </div>
</div>
</motion.div>
<motion.div
 initial={{ opacity: 0, y: 150 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.7 }}>
<div className={styles.law}>
  <div className="col-lg-6">
    <div className={styles.img}>
<img src="https://solutions.rent.com/wp-content/uploads/2023/03/2-1-768x192.png" alt="" />
    </div>
  </div>
  <div className="col-lg-9">
    <h2>During what is historically the busiest leasing period, apartment demand unexpectedly fell in the third quarter of 2022.4 The U.S. Census Bureau reported rental vacancies in the last quarter of 2022 up 5.8% 

<span> Rising inflation rates,  </span>mass layoffs and high costs all contribute to a broader sentiment of economic uncertainty. In response, many renters have paused on moving or are combining households to save costs. </h2>  </div>
</div>
</motion.div>
<motion.div
 initial={{ opacity: 0, y: 150 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.7 }}>
<div className={styles.law}>
  <div className="col-lg-6">
    <div className={styles.img}>
<img src="https://solutions.rent.com/wp-content/uploads/2023/03/3-1-768x192.png" alt="" />    </div>
  </div>
  <div className="col-lg-9">
  <h2>Rent rates nationwide have also started to cool. Analysts across the board expect this pattern to continue in 2023, with effective rent growth projected to drop by as much as 4.3%.6
 
<span>Actions you can take: </span>  Explore ways to maximize efficiency in your operations.</h2> </div>
</div>
</motion.div>
<motion.div
 initial={{ opacity: 0, y: 150 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.7 }}>
<div className={styles.law}>
  <div className="col-lg-6">
    <div className={styles.img}>
<img src="https://solutions.rent.com/wp-content/uploads/2023/03/4-1-768x192.png" alt="" />    </div>
  </div>
  <div className="col-lg-9">
<h2>The cost to reach renters is increasing for advertisers. Compared to 2021, Meta’s cost per thousand shot up 61%, TikTok’s CPM came in at 185% higher and Google’s programmatic display CPMs rose 75%.7 These rising prices have been attributed to a variety of factors.

<span>Actions you can take: </span>  Refine targeting strategies to reach relevant audiences and cut unnecessary costs in your marketing budget.</h2> </div>
</div>
</motion.div>
<motion.div
 initial={{ opacity: 0, y: 150 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.7 }}>
<div className={styles.law}>
  <div className="col-lg-6">
    <div className={styles.img}>
<img src="https://solutions.rent.com/wp-content/uploads/2023/03/5-1-768x192.png" alt="" />    </div>
  </div>
  <div className="col-lg-9">
 <h2><span> Where many renters used to be “digital-preferred,” they are now digital first. </span> Trusted sources used in buying decisions have shifted due to online influencers and expanding media consumption. More than half of consumers (51%) say an influencer endorsement caused them to purchase in the past two years.8


 Pew Research Center found that 53% of households that rent are headed by people under 45 years old.9 Social media channels like TikTok and streaming services such as YouTube are now the largest awareness channels for reaching these audiences. For Gen Z, TikTok almost acts as a search engine for them to research topics and products. </h2> </div>
</div>
</motion.div>
</div>








</motion.div>
</section>

<section className={styles.tiktoktm}>
  <div className='container'>
    <div className="row">
   
<div className={`row  ${styles.tiktok}`}>
  <div className="col-lg-6 mb-5">
              <motion.div className={styles.rcnews_card}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className={styles.img_cont}>
<img src="https://solutions.rent.com/wp-content/uploads/2022/07/GettyImages-1277400719.webp" alt="" />             
   </div>

                <div className={styles.badges}>
                  <span>Rent.</span>
                  <span>#Onsite Teams</span>
                </div>

<p>
                                            How Outsourcing Can Ease The Burden Off Your Onsite Staff                                        </p>              </motion.div>
            </div>


            <div className="col-lg-6 mb-5">
              <motion.div className={styles.rcnews_card}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className={styles.img_cont}>
<img src="https://solutions.rent.com/wp-content/uploads/2022/07/Renter-communication.jpeg" alt="" />                </div>

                <div className={styles.badges}>
                  <span>Business Wire</span>
                  <span>#Great Resignation</span>
                </div>

<p>
                                            How to Use Renter Communication to Improve Leasing & Retention                                        </p>              </motion.div>
            </div>



  </div>
</div>
    </div>
  
</section>
</>
  )
}

export default Detail