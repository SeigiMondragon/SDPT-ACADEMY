
import ads from "../../assets/StiBist.svg"

function IntroductionHome(){

  return(
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={ads} alt="" />
          </div>
          <div className="col ">

            <p className="text-light" style="border : 1px solid red">
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