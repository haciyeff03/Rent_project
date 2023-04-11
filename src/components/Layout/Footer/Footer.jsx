import React from "react";
import {motion} from "framer-motion"
import styles from "./footer.module.scss";
import { Link } from "react-router-dom";
import {FaFacebookF,FaTwitter,FaLinkedinIn,FaInstagram} from "react-icons/fa"
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="container">
          <motion.div className="row first"
          initial={{opacity:0,y:130}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.7}}
          
          
          >
            <div className="col-lg-6">
              <div className={styles.img}>
                <img src="https://solutions.rent.com/wp-content/themes/rent/assets/images/svg/Logo.svg" alt="" />
              </div>
              <p className={styles.p1}>
                Solutions that work as hard as you do.Period.</p>
            </div>
            <div className="col-lg-2">
              <ul>
                <li ><Link to="/home"> Home</Link></li>
                <li ><Link to="/home"> Sollutions</Link></li>
                <li ><Link to="/about"> About</Link></li>
                <li ><Link to="/home"> Contact</Link></li>
                <li ><Link to="/fax"> Fax</Link></li>
                <li ><Link to="/home"> Team</Link></li>
                <li ><Link to="/home"> Careers</Link></li>
              </ul>

            </div>
            <div className="col-lg-4">
              <ul>
                <li>Accessibility</li>
                <li>Notice of Collection</li>
                <li>Do Not Sell My Personal Information</li>
                <li>IRS Form 8937</li>
                <li>Sitemap</li>
              </ul>

            </div>
          </motion.div>

          <div className="row second">
            <div className="col-lg-6">
              <motion.div className={styles.icons}
              initial={{opacity:0,y:90}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.4}}
              >
                <div className={styles.bir}>
                  <FaFacebookF></FaFacebookF>
                </div>
                <div className={styles.bir}>
                  <FaTwitter></FaTwitter>
                </div>
                <div className={styles.bir}>
                  <FaLinkedinIn></FaLinkedinIn>
                </div>
                <div className={styles.bir}>
                  <FaInstagram></FaInstagram>
                </div>

              </motion.div>
              <motion.div className={styles.text}
              initial={{opacity:0,y:180}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.7}}>
                <h2>Stay in touch.</h2>
           <input type="email" placeholder="Email Address*" />
           <p>This site is protected by reCAPTCHA and the Google <span> Privacy Policy </span>  and  <span>Terms of Service  </span> apply.</p>
              </motion.div>

            </div>
            <motion.div className="col-lg-6"
            initial={{opacity:0,y:110}}
            whileInView={{opacity:1, y:0}}
            transition={{duration:0.5}}>
              <div className={styles.sag}>
              <p>© 2023 Rent Group Inc. All photos, videos, text, and other content are the property of Rent Group Inc. APARTMENT GUIDE, RENT.COM and RENTALS.COM and the APARTMENT GUIDE, RENT.COM and RENTALS.COM Trade Dress are registered trademarks of Rent Group Inc. All rights reserved.</p>
             <p>If you are using a screen reader, or are having difficulty reading this website, please email accessibilityfeedback@rent.com.</p>
             <span>Privacy Policy |
Terms of Service |
Patent Notice</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;