import { review } from "../Data";
import qoutImg from "../assets/images/quote-img.png";

const Review = () => {
  return (
    <>
      <section className="review" id="review">
        <h1 className="heading">
          customers <span>review</span>
        </h1>
        <div className="box-container">
          {review.map((item, index) => (
            <div className="box">
              <img src={qoutImg} alt="" className="qoute" />

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut
                amet
                nisi dignissimos, non velit reprehenderit qui tempora, quo
                rerum exercitationem ipsam molestiae cum! Neque,
                beatae!
                Provident aperiam?
              </p>
              <img src={item.img} alt="" className="user"/>
              <h3>Ali Hamza</h3>
              <div className="stars">
                <i className="fas fa-star"/>
                <i className="fas fa-star"/>
                <i className="fas fa-star"/>
                <i className="fas fa-star"/>
                <i className="fas fa-star-half-alt"/>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Review;
