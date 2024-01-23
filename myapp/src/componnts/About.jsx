import aboutimg from "../assets/images/about-img.jpg";
const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        <span>about</span> us
      </h1>
      <div className="row">
        <div className="img">
          <img src={aboutimg} alt="" srcset="" />
        </div>
        <div className="content">
            <h3>what makes our food special</h3>
        </div>
      </div>
    </section>
  );
};

export default About;
