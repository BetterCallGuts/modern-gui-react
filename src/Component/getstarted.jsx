import styles from "../style";
import {arrowUp} from "../assets";

  const Getstarted = () => {
    // console.log("we are in")
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
          <div className={`${styles.flexCenter} flex-row`}>
            <p className="font-poppins font-medium text-[18px] flex mr-2 leading-[23px] " >
              <span className="text-gradient ">
                Get
              </span>
              <img src={arrowUp} className="w-[23px] h-[23px] object-contain" alt="arrow-up" />
            </p>
          </div>
          {/*  */}
          <p className="font-poppins font-medium text-[18px] leading-[23px] " >
              <span className="text-gradient ">
                Started
              </span>
            </p>
      </div>

    </div>
  )
}

export default Getstarted