import AbtPic from "../assets/images/abt-img.png";

function About() {
  return (
    <div id="abt_sec" className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="display-5 fw-bold intro1">Driven by the passion of building your brand!</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione explicabo recusandae
            landitiis consectetur consequuntur delectus fugiat laborum! Dolore, accusamus,
            distinctio, rem doloribus placeat quod blanditiis laboriosam sint ea dignissimos facere
            eos dolorem architecto ipsam perferendis numquam vero commodi et. Earum, fuga.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img src={AbtPic} alt="About" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default About;
