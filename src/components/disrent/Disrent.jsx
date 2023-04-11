import React from 'react'
import styles from "./disrent.module.scss"
import { motion } from "framer-motion"
const Disrent = () => {
    return (
        <>
        <section className={styles.rentbanner1}>

       
            <div className={`container ${styles.rentcont}`}>
                <div className={`row ${styles.rentimg}`}>
                    <div className="col-lg-6">

                        <motion.div className={styles.motion}
                            initial={{ opacity: 0, y: 130 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2>Discover your next resident on our network</h2>
                        </motion.div>
                    </div>
                    <div className="col-lg-6">
                        <div className={styles.opsi}>
                            <div className={styles.ust}>

                            
                            <motion.div className="img"
                                initial={{ opacity: 0, y: 130 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}>
                                    <img src="https://solutions.rent.com/wp-content/uploads/2022/06/BrandRent-TypePrimary-Logo-Saturation1-Color-ColorBlack-1-3.png" alt="" />
                            </motion.div>
                            <motion.div className="img"
                                initial={{ opacity: 0, y: 130 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}>
<img src="https://solutions.rent.com/wp-content/uploads/2022/06/g10-12.png" alt="" />                            </motion.div>
</div>

<div className={styles.alt}>
                            <motion.div className="img"
                                initial={{ opacity: 0, y: 130 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}>
<img src="https://solutions.rent.com/wp-content/uploads/2022/06/g10-13.png" alt="" />
                            </motion.div>
                            <motion.div className="img"
                                initial={{ opacity: 0, y: 130 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}>
<img src="https://solutions.rent.com/wp-content/uploads/2022/06/g10-14.png" alt="" />
                            </motion.div>
                        </div>
                        </div>

                    </div>
                </div>
            </div>

            </section>

        </>
    )
}

export default Disrent