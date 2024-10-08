import Ser1 from "../assets/images/serv1.png";
import Ser2 from "../assets/images/serv2.png";
import Ser3 from "../assets/images/serv3.png";

function Cards() {
  return (
    <>
      <div id="svc_sec" className=" py-5 text-start cadz">
        <div className="txt_svc ">
          <h1 className="display-4 mb-4">Our Services To<br />Deliver Amazing Products</h1>
        </div>
        <div className=" container row">
          <div className="col-md-4 mb-4">
            <div className="card border-0">
              <img src={Ser1} alt="Service 1" className="card-img-top img-fluid" />
              <div className="card-body">
                <h2 className="h5">Service 1</h2>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                  excepturi porro odit ullam accusamus saepe voluptatum quasi sequi
                  distinctio quod.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0">
              <img src={Ser2} alt="Service 2" className="card-img-top img-fluid" />
              <div className="card-body">
                <h2 className="h5">Service2</h2>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                  excepturi porro odit ullam accusamus saepe voluptatum quasi sequi
                  distinctio quod.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card border-0">
              <img src={Ser3} alt="Service 3" className="card-img-top img-fluid" />
              <div className="card-body">
                <h2 className="h5">Service 3</h2>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                  excepturi porro odit ullam accusamus saepe voluptatum quasi sequi
                  distinctio quod.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
