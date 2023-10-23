import styles from "./style";
import  * as components from "./Component/index"

const App = () => 
{

  
  return(

    <div className='bg-primary w-full overflow-hidden'> 
    {/* NavBar Section */}
      <div className={`${styles.paddingX}  ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <components.NavBar />
        </div>
      </div>      



{/* Hero section */}
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}> 
        < components.hero />
      </div>
    </div>





{/*  Below Hero section  */}


    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}> 
        < components.status />
        < components.Business />
        < components.Billing />
        < components.CardDeal />
        < components.Testimonials />
        < components.Client />
        < components.CTA />
        < components.Footer />   
      </div>
    </div>


    </div>
  )}


export default App