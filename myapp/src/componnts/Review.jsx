import { review } from "../Data";
import qoutImg from "../assets/images/quote-img.png"

const Review=()=>{
    return(
        <>
        <section >
            <h1 className="heading">
                sustomers's <span>review</span>
            </h1>
            <div className="box-container">
                {
                    review.map((item, index)=>(
                        <div className="box">
                            <img src={qoutImg} alt=""  />
                        </div>
                    ))
                }
            </div>
        </section>
        </>
    );
};

export default Review;
