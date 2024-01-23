
import aboutimg from "../assets/images/about-img.jpeg"
const About=()=>{
    return(
        <section className="about" id="about">
            <h1 className="heading">
                <span>about</span> us
            </h1>
            <div className="row">
                <div className="img">
                    <img src={about-img} alt="" srcset="" />
                </div>
            </div>
        </section>
    );
}

export default About;