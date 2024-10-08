import Pic1 from "../assets/images/hero1.png"
import Pic2 from "../assets/images/hero2.png"
import Pic3 from "../assets/images/hero3.png"
import Pic4 from "../assets/images/hero4.png"
import Pic5 from "../assets/images/hero5.png"
import '../App.css'





function HeroPic() {
    return (
        <>
            <div class="images">
                <div class="two-pics">
                    <div class="pic-one"><img src={Pic1} alt="" /></div>
                    <img className="pic-two" src={Pic2} alt="" />
                </div>
                <div class="third-pic">
                    <img src={Pic3} alt="" />
                </div>
                <div class="forth-pic">
                    <img src={Pic4} alt="" />
                </div>
                <div class="pic-five">
                    <img src={Pic5} alt="" />

                </div>
            </div>
        </>
    );
}
export default HeroPic;