import NavBarBorder from "../AboutUsPage/NavBarBorder"
import '../../global.css';


function Courses (){
  
  return (
    <>
      <NavBarBorder />
            {/* <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="..." class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..."/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>

        <div>
            Featured Courses
        </div>

        <div>
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
            Courses
        </div>
        </div> */}
        <div>
            <div class = "container d-flex justify-content-center">
            <button type="button" class="btn btn-outline-warning">Buy Courses</button>
            <button type="button" class="btn btn-outline-warning">Owned Courses</button>
            </div>

            <div class = "container">
                <div class = "row">
                    <div class = "col-5">
                        <div class = "embed-responsive">
                        <iframe src="https://www.youtube.com/embed/TqHvIYjyOnQ?si=hkm_A-8E-zjY9RnQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </div>
                    </div>

                    <div class = "col-5">
                        <div>
                            <div class>
                                <ul class = "d-flex align-items-start list-unstyled">
                                    <li class = "flex-sm-fill">18 Lessons</li>
                                    <li class = "flex-sm-fill">4h 20m</li>
                                    <li class = "flex-sm-fill">69 Students</li>
                                    <li class = "flex-sm-fill">4.45</li>
                                </ul>

                                <h2>Advanced Java Tutorial</h2>

                                <p>Learn different programming languages through the use of our Filipino Language which is Tagalog using the Java Language.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div class = "container d-flex justify-content-center">

                </div>
            </div>
        </div>
    </>
  )
}

export default Courses