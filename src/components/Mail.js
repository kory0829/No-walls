import MailPic from "../assets/images/mail-listing.png";
import "../App.css";

function Mail() {
  return (
    <>
      <section id="mail" className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0 ">
            <h1 className="display-5 px-5 intro1">
              Let’s create brands & products People will love!
            </h1>
            <button className=" btn-primary mt-4 m-5 px-5 p-3 specialClass">Subscribe To Mail listing</button>
          </div>

          <div className="col-md-6 text-center px-5 ">
            <img src={MailPic} alt="Mail Listing" className="img-fluid" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Mail;
