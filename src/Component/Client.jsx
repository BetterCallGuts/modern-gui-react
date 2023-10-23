import { clients } from "../constant"
import styles from "../style"



const Client = () => {
  return (
    <section className={`${styles.flexCenter} my-4 `}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((cli) =>(
          <div key={cli.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img src={cli.logo} alt="client"  className="sm:w-[192px] w-[100px] object-contain  hover:translate-y-2 transition-all delay-75"/>
          </div>
        ))}
      </div>
    </section>
    )
}

export default Client