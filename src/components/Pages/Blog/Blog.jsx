import React from 'react'
import { motion } from "framer-motion"
import styles from "./blog.module.scss"
import { useState } from 'react'
import {BsChevronDown} from "react-icons/bs"
import {Link} from "react-router-dom"

const Blog = () => {

const data=[
  [
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2023/03/Facebook-Marketplace-Banner.jpg',
      text: 'Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.',
      tag: 'Articles',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2023/01/property-sites-blog.jpg',
      text: 'Top 4 mistakes property marketers make with websites',
      tag: 'Videos',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2023/01/shutterstock_1495929368.jpg',
      text: 'Run a property marketing wellness check to boost performance this year',
      tag: 'Articles',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2023/01/shutterstock_1264777678.jpg',
      text: '3 times more critical maintenance issues resolved during winter storm',
      tag: 'Articles',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
   
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/11/tik-tok-blog.jpg',
      text: 'Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.',
      tag: 'Articles',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/10/amazon-blog-header-image.jpg',
      text: 'Renter experience: What properties can learn from e-commerce giants',
      tag: 'Videos',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/10/shutterstock_2007206966.jpg',
      text: 'Money, Effort, Time: Building a better property marketing budget',
      tag: 'Articles',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/10/shutterstock_1041104380.jpg',
      text: '3 time-saving wins for busy property teams',
      tag: 'Articles',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/09/budget-season-2-image-header.jpg',
      text: 'Budget planning tips to bounce back from property staffing challenges',
      tag: 'Articles',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/09/budget-season-1-header-image.jpg',
      text: '3 ways to get more from your property’s marketing budget',
      tag: 'Articles',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/08/shutterstock_1697959045.jpg',
      text: 'How to create exceptional renter experiences across every property in your portfolio',
      tag: 'Videos',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/08/shutterstock_1519392692.jpg',
      text: 'Learn the secrets to winning, serving, and retaining top talent in the multifamily industry',
      tag: 'Videos',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/08/shutterstock_1517082941.jpg',
      text: 'Should you be on Snapchat? A property marketer’s guide to maximizing social presence.',
      tag: 'Videos',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/08/spark-better-conversations-with-fha-best-practices-blog.jpg',
      text: 'Spark better conversations and avoid risk with FHA best practices',
      tag: 'Resources',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/07/shutterstock_1463711015.jpg',
      text: 'FHA Refresher: Avoid common mistakes in your property marketing',
      tag: 'Articles',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/07/dont-risk-it.jpg',
      text: 'Don’t Risk It: Fair Housing Considerations for Property Digital Advertising',
      tag: 'Videos',
      author: 'Nicole Booth',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Nicole-Booth.webp'
    },
    
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/07/GettyImages-1062950258-header-e1658015176908.jpg',
      text: 'How Outsourcing Can Ease The Burden Off Your Onsite Staff',
      tag: 'Videos',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/07/WestCorp-Blog-Graphic-Rent.jpg',
      text: 'How WestCorp Management Group Achieved 99% Occupancy With RentSearch.',
      tag: 'Resources',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/07/GettyImages-1334322908.webp',
      text: '5 Reasons Why Your Search Ads Aren’t Showing',
      tag: 'Resources',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },

    {
      img: 'https://solutions.rent.com/wp-content/uploads/2023/03/Facebook-Marketplace-Banner.jpg',
      text: 'Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.',
      tag: 'Resources',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
   
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2023/01/shutterstock_1495929368.jpg',
      text: 'Run a property marketing wellness check to boost performance this year',
      tag: 'Videos',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2023/01/shutterstock_1264777678.jpg',
      text: '3 times more critical maintenance issues resolved during winter storm',
      tag: 'Resources',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/10/shutterstock_2007206966.jpg',
      text: 'Money, Effort, Time: Building a better property marketing budget',
      tag: 'Resources',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2023/01/property-sites-blog.jpg',
      text: 'Top 4 mistakes property marketers make with websites',
      tag: 'Articles',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/12/2085720871-Edited-4star.jpg',
      text: '3 Smart Ways to Manage Your Property’s Ratings and Reviews',
      tag: 'Articles',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
   
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/10/amazon-blog-header-image.jpg',
      text: 'Renter experience: What properties can learn from e-commerce giants',
      tag: 'Articles',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
   
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/11/tik-tok-blog.jpg',
      text: 'Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.',
      tag: 'Videos',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/10/shutterstock_1041104380.jpg',
      text: '3 time-saving wins for busy property teams',
      tag: 'Videos',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
  ],
  [
  
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/08/spark-better-conversations-with-fha-best-practices-blog.jpg',
      text: 'Spark better conversations and avoid risk with FHA best practices',
      tag: 'Resources',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/07/WestCorp-Blog-Graphic-Rent.jpg',
      text: 'How WestCorp Management Group Achieved 99% Occupancy With RentSearch.',
      tag: 'Resources',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/07/GettyImages-1334322908.webp',
      text: '5 Reasons Why Your Search Ads Aren’t Showing',
      tag: 'Resources',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },

    {
      img: 'https://solutions.rent.com/wp-content/uploads/2023/03/Facebook-Marketplace-Banner.jpg',
      text: 'Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.',
      tag: 'Resources',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2023/01/shutterstock_1264777678.jpg',
      text: '3 times more critical maintenance issues resolved during winter storm',
      tag: 'Resources',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/10/shutterstock_2007206966.jpg',
      text: 'Money, Effort, Time: Building a better property marketing budget',
      tag: 'Resources',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
  ],
  [
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2023/03/Facebook-Marketplace-Banner.jpg',
      text: 'Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.',
      tag: 'Articles',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/07/shutterstock_1463711015.jpg',
      text: 'FHA Refresher: Avoid common mistakes in your property marketing',
      tag: 'Articles',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2023/01/shutterstock_1495929368.jpg',
      text: 'Run a property marketing wellness check to boost performance this year',
      tag: 'Articles',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2023/01/shutterstock_1264777678.jpg',
      text: '3 times more critical maintenance issues resolved during winter storm',
      tag: 'Articles',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/11/tik-tok-blog.jpg',
      text: 'Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.',
      tag: 'Articles',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/10/shutterstock_2007206966.jpg',
      text: 'Money, Effort, Time: Building a better property marketing budget',
      tag: 'Articles',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/10/shutterstock_1041104380.jpg',
      text: '3 time-saving wins for busy property teams',
      tag: 'Articles',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/09/budget-season-2-image-header.jpg',
      text: 'Budget planning tips to bounce back from property staffing challenges',
      tag: 'Articles',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/09/budget-season-1-header-image.jpg',
      text: '3 ways to get more from your property’s marketing budget',
      tag: 'Articles',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2023/01/property-sites-blog.jpg',
      text: 'Top 4 mistakes property marketers make with websites',
      tag: 'Articles',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/12/2085720871-Edited-4star.jpg',
      text: '3 Smart Ways to Manage Your Property’s Ratings and Reviews',
      tag: 'Articles',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
   
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/10/amazon-blog-header-image.jpg',
      text: 'Renter experience: What properties can learn from e-commerce giants',
      tag: 'Articles',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    
  ],
  [
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2023/01/property-sites-blog.jpg',
      text: 'Top 4 mistakes property marketers make with websites',
      tag: 'Videos',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/10/amazon-blog-header-image.jpg',
      text: 'Renter experience: What properties can learn from e-commerce giants',
      tag: 'Videos',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/08/shutterstock_1697959045.jpg',
      text: 'How to create exceptional renter experiences across every property in your portfolio',
      tag: 'Videos',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/08/shutterstock_1519392692.jpg',
      text: 'Learn the secrets to winning, serving, and retaining top talent in the multifamily industry',
      tag: 'Videos',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/08/shutterstock_1517082941.jpg',
      text: 'Should you be on Snapchat? A property marketer’s guide to maximizing social presence.',
      tag: 'Videos',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/07/dont-risk-it.jpg',
      text: 'Don’t Risk It: Fair Housing Considerations for Property Digital Advertising',
      tag: 'Videos',
      author: 'Nicole Booth',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Nicole-Booth.webp'
    },
    
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/07/GettyImages-1062950258-header-e1658015176908.jpg',
      text: 'How Outsourcing Can Ease The Burden Off Your Onsite Staff',
      tag: 'Videos',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/11/tik-tok-blog.jpg',
      text: 'Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.',
      tag: 'Videos',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    },
    {
      img: 'https://solutions.rent.com/wp-content/uploads/2022/10/shutterstock_1041104380.jpg',
      text: '3 time-saving wins for busy property teams',
      tag: 'Videos',
      author: 'Rachel Richardson',
      auth_img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp'
    }
    
  ]
]

  const [color,setcolor]=useState(0);
  const [ open, setopen] = useState(false);


  return (
    <>

      <section>
        <div className={`container    ${styles.first}`}>

          <div className={`row    ${styles.bir}`}>
            <div className="col-lg-6 mb-5">
              <motion.div className={styles.text}
                initial={{ opacity: 0, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h2>Rent<span>İnsights</span></h2>
                <h3>Get the latest multifamily marketing insights, guides, trends and tips here.</h3>
                <div className={styles.btn}>
                  <button>
                    Explore
                  </button>

                  <p>Stay in touch!</p>
                  <input type="email" placeholder='Email Address*' />

                  <h4>This site is protected by reCAPTCHA and the Google
                    <span>Privacy Policy</span>  and <span>Terms of Service</span>  apply.
                  </h4>
                  <button className={styles.sumbit}>Sumbit</button>
                </div>

              </motion.div>
            </div>
            <motion.div className="col-lg-6 mb-5"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}>
              <div className={styles.rcnews_card}

              >
                <div className={styles.img_cont}>
                  <img src="https://solutions.rent.com/wp-content/uploads/2023/03/Facebook-Marketplace-Banner.jpg" />

                </div>
                <div className={styles.alt}>


                  <div className={styles.badges}>
                    <span>02/14/2023</span>

                  

                  <p>Posting your property’s listing to Facebook just got harder. Here’s how Rent. can help.</p>                </div>

                  <div className={styles.tag}>
                    <div className={styles.sol}>
                      <img src="https://solutions.rent.com/wp-content/uploads/2022/07/Rachel-Richardson-CIRCLE-150x150-1.webp" alt="" />
                      <h2> Rachel Richardson</h2>
                      </div>

                      <div className={styles.sag}>
                        <span>#Facebook</span>
                        <span>#Social Media Advertising
                          </span>
                          <span>
                          #facebook marketplace
                            </span>
                            <span>
#paid ads
                            </span>

                      </div>
                    </div>
                  </div>
              </div>
            </motion.div>

          </div>

          
          <div className={`row    ${styles.head}`}>
          <motion.div className={ `col-lg-12   ${styles.btn}`}
          initial={{ opacity: 0, y: 120 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}>
          <div className={styles.sol}>
           
          <button className='all' onClick={()=> setcolor(0)} style={{backgroundColor: color===0 ? "white" : "#4561ec" , color:color===0 ? "#4561ec" : "white"} }>All</button>
          <button className='res' onClick={()=> setcolor(1)} style={{backgroundColor: color===1 ? "white" : "#4561ec" , color:color===1 ? "#4561ec" : "white"} }>Resources</button>
          <button  className='art' onClick={()=> setcolor(2)} style={{backgroundColor: color===2 ? "white" : "#4561ec" , color:color===2 ? "#4561ec" : "white"} }>Articles</button>
          <button className='vid' onClick={()=> setcolor(3)} style={{backgroundColor: color===3 ? "white" : "#4561ec" , color:color===3 ? "#4561ec" : "white"} }>Videos</button>


          </div>
          <div className={styles.sag}>
            <div className={styles.text} >
             <span onClick={() => setopen(!open)} >Sort by Date
          
            <BsChevronDown/>
            <ul style={{ display: open ? "block" : "none" }}>

            
            <li>Date(Newest)</li>
            <li>Date(Oldest)</li>
            <li>A-Z</li>
            <li>Z-A</li>
            </ul>

            </span>

            </div>
        </div>

      </motion.div>
        </div>
        <Link to="/detail">
       
        <div className= { `row  g-4  ${styles.cart}`}
        >



    
{
  data[color].map((el,index)=>(
    <motion.div className="col-lg-12" 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}>
    <div className={styles.rcnews_card}

>
  <div className={styles.img_cont}>
    <img src={el.img}/>

  </div>
  <div className={styles.alt}>


    <div className={styles.badges}>
      <span>02/14/2023</span>

    

<p>{el.text}</p>
           </div>

    <div className={styles.tag}>
      <div className={styles.sol}>
<img src={el.auth_img} alt="" />    
    <h2>{el.author}</h2>
        </div>

        <div className={styles.sag}>
          <span>#Facebook</span>
          <span>#Onsite Teams
            </span>
            <span>
            #Google
              </span>
              <span>#Search ads</span>
              <span>
#paid ads
              </span>

        </div>
      </div>
    </div>
</div>
  </motion.div>
  
  ))
  
}

        </div>
        </Link>

        </div>
      </section>
    </>
  )
}

export default Blog