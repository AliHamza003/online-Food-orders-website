import { review } from "../Data";

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
                        <div className="box"></div>
                    ))
                }
            </div>
        </section>
        </>
    );
};

export default Review;
