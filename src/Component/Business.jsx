import { features } from "../constant"
import styles, {layout} from "../style"
// import { features } from "../constant"
import Button from "./Button"


const FeatureCard = ( {icon, title, content, index} )=>{

  return (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length? "mb-6" : "mb-0"} feature-card `}>
      <div className={`w-[64px] h-[64px]  rounded-full ${styles.flexCenter}  bg-dimBlue`}>

        <img src={icon}  alt="icon"  className="w-[50%] h-[50%] object-contain  "/>
      </div>

      <div className="flex-1 flex flex-col ml-3 ">
        <h4 className={`font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1 `}>
          {title}
        </h4>
        <p className={`font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1 `}>
          {content}
        </p>
      </div>
    </div>
  )
}

const Business = () => {
  return (

    
    <section id="features" className={`${layout.section}`}>

      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          You do the business, <br className="sm:block hidden"/> we'll handle the money.
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
          We examine annual percentage rates, annual fees.
        </p>


        <Button styles="mt-10 rounded hover:bg-transparent  " />
      </div>

      <div className={`${layout.sectionImg} flex-col `}>
        {features.map(
          (feature, index)=>(
            <FeatureCard  key={feature.id}  {...feature} index={index }/>

          ))}

      </div>

    </section>
  )
}

export default Business