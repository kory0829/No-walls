import GetPic from "../assets/images/geintouch.png";
import "../App.css";

function Get() {
  return (
    <>
      <section id="Get-in-touch" className=" my-5 py-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <img src={GetPic} alt="Get In Touch" className="img-fluid" />
          </div>

          <div className="col-md-6">
            <h1 className="title-get-in-touch">Get In Touch With Us</h1>
            <p className="mb-3 get-in-touch-p">
              Lorem ipsum dolor sit amet consectetur <br />
              adipisicing elit. Qui pariatur impedit non?
            </p>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Phone Number"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Message"
                />
              </div>
              <button type="submit" className="baton btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Get;
