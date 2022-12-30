import { Icon } from "@chakra-ui/react";
import {BsFacebook, BsTwitter, BsInstagram, BsLinkedin, BsGoogle} from "react-icons/bs";

const Footer = ()=>{
    const backedUp = {backgroundColor:"rgba(0, 0, 0, 0.05)"};
    const twoBackedUp = {width: "60px", backgroundColor: "#7c4dff", height: "2px"};
    const threeBackedUp = {width: "60px", backgroundColor: "#7c4dff", height: "2px"};
    const fourBackedUp = {width: "60px", backgroundColor: "#7c4dff" ,height: "2px"};
    const fiveBackedUp = {width: "60px", backgroundColor: "#7c4dff", height: "2px"};
 return(
      <footer
              className="text-center text-lg-start text-white"
              style={{backgroundColor: "#1c2331",marginTop:"20px"}}
              >

        <section
                 className="d-flex justify-content-between p-4"
                 style={{backgroundColor: "#4A0390"}}
                 >

          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>

    

          <div>
            <a href="/" className="text-white me-4">
            <Icon as={BsFacebook} w={8} h={8} color='#fafafa'/>
            </a>
            <a href="/" className="text-white me-4">
            <Icon as={BsTwitter} w={8} h={8} color='#fafafa'/>
            </a>
            <a href="/" className="text-white me-4">
            <Icon as={BsGoogle} w={8} h={8} color='#fafafa'/>
            </a>
            <a href="/" className="text-white me-4">
            <Icon as={BsInstagram} w={8} h={8} color='#fafafa'/>
            </a>
            <a href="/" className="text-white me-4">
            <Icon as={BsLinkedin} w={8} h={8} color='#fafafa'/>
            </a>
            <a href="/" className="text-white me-4">
              <i className="fab fa-github"></i>
            </a>
          </div>

        </section>

    

        <section className="">
          <div className="container text-center text-md-start mt-5">

            <div className="row mt-3">

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold">Roboway Technologies</h6>
                <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={fiveBackedUp}
                    />
                <p>
                  Our work is to create safety and automation through robotics. If you have any concern, feel free to contact us.
                </p>
              </div>

    

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={fourBackedUp}
                    />
                <p>
                  <a href="#!" className="text-white">Home Safety</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Fire Safety</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Vehicle Safety</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Custom Service</a>
                </p>
              </div>

    

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={threeBackedUp}
                    />
                <p>
                  <a href="#!" className="text-white">Your Account</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Become an Affiliate</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Shipping Rates</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Help</a>
                </p>
              </div>

    

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={twoBackedUp}
                    />
                <p><i className="fas fa-home mr-3"></i> Mohakhali, Dhaka-1212</p>
                <p><i className="fas fa-envelope mr-3"></i> Roboway@Tech.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>
        <div
             className="text-center p-3"
             style={backedUp}
             >
          <a href="/"> <img src="Assets/footer.png" alt="footer logo"/></a>
        </div>
    
      </footer>

    
)
 }
export default Footer;