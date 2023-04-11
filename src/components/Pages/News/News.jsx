import React from "react";
import { useState } from "react";
import {motion} from "framer-motion";
import styles from "./news.module.scss";
import {BsChevronDown} from "react-icons/bs"

const News = () => {


  const [color,setcolor]=useState(0);
  const [ open, setopen] = useState(false);



  const karam= [
    [
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2023/02/TikTok-News-Header-1.png',
        text: 'Now Available! RentSocial. for TikTok connects properties with renter audiences',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2023/01/Copy-of-square-property-sites-image.jpg',
        text: 'BusinessWire: Rent. announces Property Sites, a website solution for the multifamily industry.',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2023/01/Untitled-design-1000x667-1.jpg',
        text: 'Data Shapes The Future Of Your Property’s Marketing Plan',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/12/onlineengagement.jpg',
        text: 'NAA Units Magazine: Proven Ways to Resonate with Today’s Renters Online',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/12/webinar-images-300-%C3%97-250-px.jpg',
        text: 'The Multifamily Innovation® Show: Nishant Phadnis featured in Meet the Sponsors Series',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/12/3.jpg',
        text: 'New alliance delivers the best of rental reputation management all in one platform',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/11/wordpress-image-marketing-dive-2022.jpg',
        text: 'Marketing Dive: Rent. creates TikTok solutions platform',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/11/OPTECH-Product-Announcement-Blog-Header.png',
        text: 'Industry’s first data-driven TikTok solution and turn-key website builder unveiled at OPTECH 2022',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/10/US-News-World-Report-Blog-header.jpg',
        text: 'Should You Hire a Property Manager?',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/10/2022-NMHC-OpTech-News-Header-2.jpg',
        text: 'Build a better future for your property with Rent. at OPTECH 2022',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/09/RentMarketplace-Sept-2022-updates.jpg',
        text: 'RentMarketplace. goes local, boosts performance, and now syncs to Google',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/09/4.jpg',
        text: 'CCR Magazine: Navigating a company rebrand can be a challenge',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/09/1662129734-GettyImages-1176854253.jpg',
        text: 'Entrepreneur: Property tech is creating an incredible real estate opportunity for entrepreneurs',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/09/169kathheds493342-1170x600-1.jpg',
        text: 'Anatomy of a Rebrand – a Q&A with Kathy Neumann, CMO of Rent.',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/08/WIL-Panel-2022-BLOG-header.jpg',
        text: 'Rent. celebrates Women’s Equality Day 2022',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/09/motley-fool-image-2.jpg',
        text: 'The Motley Fool: What’s going on in the housing market?',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/09/meet-the-sponsors-rent-1168x657-1.jpg',
        text: 'Multifamily Women® Podcast: Interview with Rent. CMO Kathy Neumann',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/08/Screen-Shot-2022-08-04-at-9.46.38-AM.jpg',
        text: 'CBS News: Apartment rents are shooting up in hundreds of cities across the U.S. Here’s why.',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/07/JZ-interview-Goals-2022-.jpg',
        text: 'The Motley Fool: CEO Jon Ziglar talks rental trends and the future of Rent.',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/07/digitalcurbappeal.jpeg',
        text: 'NAA: 4 ways to improve digital curb appeal',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rent-Announcement-News-Header.jpg',
        text: 'Business Wire: RentPath becomes Rent. and simplifies the rentals marketplace',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/07/GettyImages-1127957300.jpg',
        text: 'Why renters move: affordability and how your property can compete',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2023/01/Untitled-design-1000x667-1.jpg',
        text: 'Data Shapes The Future Of Your Property’s Marketing Plan',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/12/onlineengagement.jpg',
        text: 'NAA Units Magazine: Proven Ways to Resonate with Today’s Renters Online',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/12/webinar-images-300-%C3%97-250-px.jpg',
        text: 'The Multifamily Innovation® Show: Nishant Phadnis featured in Meet the Sponsors Series',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/12/3.jpg',
        text: 'New alliance delivers the best of rental reputation management all in one platform',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/11/wordpress-image-marketing-dive-2022.jpg',
        text: 'Marketing Dive: Rent. creates TikTok solutions platform',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/11/OPTECH-Product-Announcement-Blog-Header.png',
        text: 'Industry’s first data-driven TikTok solution and turn-key website builder unveiled at OPTECH 2022',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/10/US-News-World-Report-Blog-header.jpg',
        text: 'Should You Hire a Property Manager?',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/10/2022-NMHC-OpTech-News-Header-2.jpg',
        text: 'Build a better future for your property with Rent. at OPTECH 2022',
        tag: 'Press'
      },
    ],


    [

      {
        img: 'https://solutions.rent.com/wp-content/uploads/2023/01/Untitled-design-1000x667-1.jpg',
        text: 'Data Shapes The Future Of Your Property’s Marketing Plan',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/12/onlineengagement.jpg',
        text: 'NAA Units Magazine: Proven Ways to Resonate with Today’s Renters Online',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2023/02/TikTok-News-Header-1.png',
        text: 'Now Available! RentSocial. for TikTok connects properties with renter audiences',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/12/webinar-images-300-%C3%97-250-px.jpg',
        text: 'The Multifamily Innovation® Show: Nishant Phadnis featured in Meet the Sponsors Series',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/08/Screen-Shot-2022-08-04-at-9.46.38-AM.jpg',
        text: 'CBS News: Apartment rents are shooting up in hundreds of cities across the U.S. Here’s why.',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/07/digitalcurbappeal.jpeg',
        text: 'NAA: 4 ways to improve digital curb appeal',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/07/Rent-Announcement-News-Header.jpg',
        text: 'Business Wire: RentPath becomes Rent. and simplifies the rentals marketplace',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/07/GettyImages-1127957300.jpg',
        text: 'Why renters move: affordability and how your property can compete',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/12/onlineengagement.jpg',
        text: 'NAA Units Magazine: Proven Ways to Resonate with Today’s Renters Online',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2023/02/TikTok-News-Header-1.png',
        text: 'Now Available! RentSocial. for TikTok connects properties with renter audiences',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/12/webinar-images-300-%C3%97-250-px.jpg',
        text: 'The Multifamily Innovation® Show: Nishant Phadnis featured in Meet the Sponsors Series',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/08/Screen-Shot-2022-08-04-at-9.46.38-AM.jpg',
        text: 'CBS News: Apartment rents are shooting up in hundreds of cities across the U.S. Here’s why.',
        tag: 'News'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/07/digitalcurbappeal.jpeg',
        text: 'NAA: 4 ways to improve digital curb appeal',
        tag: 'News'
      },
    ],


    [
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2023/01/Copy-of-square-property-sites-image.jpg',
        text: 'BusinessWire: Rent. announces Property Sites, a website solution for the multifamily industry.',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/12/3.jpg',
        text: 'New alliance delivers the best of rental reputation management all in one platform',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/11/wordpress-image-marketing-dive-2022.jpg',
        text: 'Marketing Dive: Rent. creates TikTok solutions platform',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/11/OPTECH-Product-Announcement-Blog-Header.png',
        text: 'Industry’s first data-driven TikTok solution and turn-key website builder unveiled at OPTECH 2022',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/10/US-News-World-Report-Blog-header.jpg',
        text: 'Should You Hire a Property Manager?',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/10/2022-NMHC-OpTech-News-Header-2.jpg',
        text: 'Build a better future for your property with Rent. at OPTECH 2022',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/09/RentMarketplace-Sept-2022-updates.jpg',
        text: 'RentMarketplace. goes local, boosts performance, and now syncs to Google',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/09/4.jpg',
        text: 'CCR Magazine: Navigating a company rebrand can be a challenge',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/09/1662129734-GettyImages-1176854253.jpg',
        text: 'Entrepreneur: Property tech is creating an incredible real estate opportunity for entrepreneurs',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/09/169kathheds493342-1170x600-1.jpg',
        text: 'Anatomy of a Rebrand – a Q&A with Kathy Neumann, CMO of Rent.',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/08/WIL-Panel-2022-BLOG-header.jpg',
        text: 'Rent. celebrates Women’s Equality Day 2022',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/09/motley-fool-image-2.jpg',
        text: 'The Motley Fool: What’s going on in the housing market?',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/09/meet-the-sponsors-rent-1168x657-1.jpg',
        text: 'Multifamily Women® Podcast: Interview with Rent. CMO Kathy Neumann',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/07/JZ-interview-Goals-2022-.jpg',
        text: 'The Motley Fool: CEO Jon Ziglar talks rental trends and the future of Rent.',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/12/3.jpg',
        text: 'New alliance delivers the best of rental reputation management all in one platform',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/11/wordpress-image-marketing-dive-2022.jpg',
        text: 'Marketing Dive: Rent. creates TikTok solutions platform',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/11/OPTECH-Product-Announcement-Blog-Header.png',
        text: 'Industry’s first data-driven TikTok solution and turn-key website builder unveiled at OPTECH 2022',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/10/US-News-World-Report-Blog-header.jpg',
        text: 'Should You Hire a Property Manager?',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/10/2022-NMHC-OpTech-News-Header-2.jpg',
        text: 'Build a better future for your property with Rent. at OPTECH 2022',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/09/RentMarketplace-Sept-2022-updates.jpg',
        text: 'RentMarketplace. goes local, boosts performance, and now syncs to Google',
        tag: 'Press'
      },
      {
        img: 'https://solutions.rent.com/wp-content/uploads/2022/09/4.jpg',
        text: 'CCR Magazine: Navigating a company rebrand can be a challenge',
        tag: 'Press'
      },
    ]
  ]
  return (
  <>
   <section className={styles.first}>
    <div className="container">
      <div className= { `row    ${styles.bir}`}>
        <div className="col-lg-6 mb-5">
        <motion.div className={styles.text}
 initial={{ opacity: 0, y: 120 }}
 whileInView={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.4 }}
>
          <h2>Rent<span>News</span></h2>
          <h3>Get the latest on renter research, major market trends and technologies that impact the business of renting.</h3>
        
        </motion.div>
        </div>
        <motion.div className="col-lg-6 mb-5"
           initial={{ opacity: 0, y: 150 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}>
              <div className={styles.rcnews_card}
             
              >
                <div className={styles.img_cont}>
                  <img src="https://solutions.rent.com/wp-content/uploads/2023/02/TikTok-News-Header-1.png" alt="" />
                  <div className={styles.img_overlay}></div>
                </div>
<div className={styles.alt}>


                <div className={styles.badges}>
                  <span>02/14/2023</span>
                  
                </div>

                <p>Now Available! RentSocial. for TikTok connects properties with renter audiences</p>
                </div>
                
            </div>
            </motion.div>

      </div>

      <div className= { `row    ${styles.iki}`}>

        <motion.div className={ `col-lg-12   ${styles.btn}`}
          initial={{ opacity: 0, y: 120 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}>
          <div className={styles.sol}>
           
          <button onClick={()=> setcolor(0)} style={{backgroundColor: color===0 ? "white" : "#4561ec" , color:color===0 ? "#4561ec" : "white"} }>All</button>
          <button onClick={()=> setcolor(1)} style={{backgroundColor: color===1 ? "white" : "#4561ec" , color:color===1 ? "#4561ec" : "white"} }>News</button>
          <button onClick={()=> setcolor(2)} style={{backgroundColor: color===2 ? "white" : "#4561ec" , color:color===2 ? "#4561ec" : "white"} }>Press</button>

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
    <div className= { `row  g-4  ${styles.cart}`}>



    
{
  karam[color].map((el,index)=>(
    <motion.div className="col-lg-6" 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}>
    <div className={styles.rcnews_card}
    key={index}
             
    >
      <div className={styles.img_cont}>
<img src={el.img} alt="" />
        <div className={styles.img_overlay}></div>
      </div>
<div className={styles.alt}>


      <div className={styles.badges} >
        <span>02/14/2023</span>
        
      </div>

      <p>{el.text}</p>
      </div>
      
  </div>
  </motion.div>
  
  ))
  
}

        </div>

    
</div>


   </section>
  </>
  )
}

export default News