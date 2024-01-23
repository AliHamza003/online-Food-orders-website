import aboutimg from "../assets/images/about-img.jpg";
const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        <span>about</span> us
      </h1>
      <div className="row">
        <div className="img">
          <img src={aboutimg} alt="" />
        </div>
        <div className="content">
          <h3>what makes our food special?</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius
            corporis nesciunt eligendi laborum alias odio officiis, ipsam
            veritatis
            animi eveniet consequatur totam esse officia blanditiis
            qui saepe corrupti assumenda repellat?
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
