import { Icon } from "@chakra-ui/react";
import {BsFacebook, BsTwitter, BsInstagram, BsLinkedin, BsGithub, BsGoogle} from "react-icons/bs";

const Footer = ()=>{
    const backedUp = {backgroundColor:"rgba(0, 0, 0, 0.05)"};
    const twoBackedUp = {width: "60px", backgroundColor: "#7c4dff", height: "2px"};
    const threeBackedUp = {width: "60px", backgroundColor: "#7c4dff", height: "2px"};
    const fourBackedUp = {width: "60px", backgroundColor: "#7c4dff" ,height: "2px"};
    const fiveBackedUp = {width: "60px", backgroundColor: "#7c4dff", height: "2px"};
 return(
      <footer
              class="text-center text-lg-start text-white"
              style={{backgroundColor: "#1c2331",marginTop:"20px"}}
              >

        <section
                 class="d-flex justify-content-between p-4"
                 style={{backgroundColor: "#6351ce"}}
                 >

          <div class="me-5">
            <span>Get connected with us on social networks:</span>
          </div>

    

          <div>
            <a href="/" class="text-white me-4">
            <Icon as={BsFacebook} w={8} h={8} color='#491A89'/>
            </a>
            <a href="/" class="text-white me-4">
            <Icon as={BsTwitter} w={8} h={8} color='#491A89'/>
            </a>
            <a href="/" class="text-white me-4">
            <Icon as={BsGoogle} w={8} h={8} color='#491A89'/>
            </a>
            <a href="/" class="text-white me-4">
            <Icon as={BsInstagram} w={8} h={8} color='#491A89'/>
            </a>
            <a href="/" class="text-white me-4">
            <Icon as={BsLinkedin} w={8} h={8} color='#491A89'/>
            </a>
            <a href="/" class="text-white me-4">
              <i class="fab fa-github"></i>
            </a>
          </div>

        </section>

    

        <section class="">
          <div class="container text-center text-md-start mt-5">

            <div class="row mt-3">

              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <h6 class="text-uppercase fw-bold">Roboway Technologies</h6>
                <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={fiveBackedUp}
                    />
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>

    

              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 class="text-uppercase fw-bold">Products</h6>
                <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={fourBackedUp}
                    />
                <p>
                  <a href="#!" class="text-white">MDBootstrap</a>
                </p>
                <p>
                  <a href="#!" class="text-white">MDWordPress</a>
                </p>
                <p>
                  <a href="#!" class="text-white">BrandFlow</a>
                </p>
                <p>
                  <a href="#!" class="text-white">Bootstrap Angular</a>
                </p>
              </div>

    

              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 class="text-uppercase fw-bold">Useful links</h6>
                <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={threeBackedUp}
                    />
                <p>
                  <a href="#!" class="text-white">Your Account</a>
                </p>
                <p>
                  <a href="#!" class="text-white">Become an Affiliate</a>
                </p>
                <p>
                  <a href="#!" class="text-white">Shipping Rates</a>
                </p>
                <p>
                  <a href="#!" class="text-white">Help</a>
                </p>
              </div>

    

              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 class="text-uppercase fw-bold">Contact</h6>
                <hr
                    class="mb-4 mt-0 d-inline-block mx-auto"
                    style={twoBackedUp}
                    />
                <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                <p><i class="fas fa-envelope mr-3"></i> info@example.com</p>
                <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
              </div>
            </div>
          </div>
        </section>
        <div
             class="text-center p-3"
             style={backedUp}
             >
          © 2020 Copyright:
          <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
        </div>
    
      </footer>

    
)
 }
export default Footer;