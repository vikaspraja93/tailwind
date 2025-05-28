import React from 'react'
import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className="logo-slider w-full">
        <div className="logo-track">
          {/* Triple the logos for ultra-smooth infinite scroll */}
          {[...Array(3)].map((_, setIndex) => 
            clients.map((c, index) => (
              <div key={`${setIndex}-${index}`} className="logo-item">
                <img 
                  src={c.logo} 
                  alt='logo'
                  className="sm:w-[192px] w-[100px] object-contain"
                />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

export default Clients