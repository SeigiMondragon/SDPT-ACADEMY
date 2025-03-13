import Figure from 'react-bootstrap/Figure'
import Logo from '../../assets/SDPT Logo.svg'
import styles from './Home.module.css'

function HomeBody() {
    return (
        <div className={styles.homeBody}>
        <h2 className="text-center text-warning fw-bold">What is SDPT Academy?</h2>
        <hr className={styles.hrCustom} />
        <div className="d-flex align-items-center justify-content-center w-75 mx-auto gap-4 my-5">
          <div>
            <img src={Logo} alt="" className="img-fluid"  width= "200" height="200"/>
          </div>
          <div className="w-50 text-center">
            <p>SDPT Academy is an online platform where in teaches Programming Languages through the use of our own native language - Tagalog. It aims to teach Filipino Programmers who wants to be developers. Ginaya ko lang intro heheh AHHAHAHAHAH bsta ganto ganyan. It is own by SDPT Solutions a Youtube Channel that teachers about Programming.</p>
          </div>
        </div>
        <hr className={styles.hrCustom} />
      </div>
    );
}
export default HomeBody;