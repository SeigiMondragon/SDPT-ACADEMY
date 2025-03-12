
import ads from "../../assets/StiBist.svg"

function IntroductionHome(){

  return(
      <div className="container">
      
        <div className="row gx-5 ">
         
          <div className="col ">
            <img src={ads} alt="" />
          </div>

          <div className="col  position-relative ">

            <p className="text-light text-end position-absolute top-50 end-0 fs-1 fw-bold">
                Passionate <br/>
                Individuals that aims <br/>
                to teach Filipinos <br/>
                Programming in our own <br/>
                 language and Glorify God.

            </p>
             
          </div>
        </div>
      </div>

  )

}

export  default IntroductionHome