import React from "react";
import styles from "./IDCard.module.css";

const IDCard = () => {
  return (
    <div className={styles["id-card-container"]}>
      
      {/* Rope */}
      <div className={styles["id-rope"]}></div>

      {/* Rope connector */}
      <div className={styles["id-hook"]}></div>

      {/* Swinging wrapper */}
      <div className={styles["id-card-swing"]}>

        {/* Flip card */}
        <div className={styles["id-card"]} >

          {/* ================= FRONT ================= */}
          <div
            className={`${styles["id-card-face"]} ${styles["id-card-front"]}`}
          >
            <div className={styles["id-hole"]}>
              <span></span>
            </div>

            <div className={styles["id-header"]}>
             <h1 className="text-black">Your Company</h1> 
            </div>

            <div className={styles["id-photo"]}>
              <img
                src="/favicon.ico"
                alt="Sandesh Shrestha"
              />
            </div>

            <h2 className="text-black">Sandesh Shrestha</h2>

            <p>Full Stack Developer</p>

            <div className={styles["id-line"]}></div>

            <span className={styles["id-small"]}>
              <h1 className="text-black">SOFTWARE DEVELOPER</h1>
            </span>
          </div>

          {/* ================= BACK ================= */}
          <div
            className={`${styles["id-card-face"]} ${styles["id-card-back"]}`}
          >
            <div className={styles["id-hole"]}>
              <span></span>
            </div>

            <h2>ABOUT ME</h2>

            <p>
              Building modern web applications
              and backend systems with
              JavaScript, React and Go.
            </p>

            <div className={styles["id-details"]}>
              <span>WEB</span>
              <span>BACKEND</span>
              <span>GO</span>
              <span>REACT</span>
            </div>

            <div className={styles["id-barcode"]}>
              || ||| || |||| | |||
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default IDCard;