import { Facebook, Mail, Twitter, Youtube } from "../icons";
import { Button, Flex } from 'antd';

const Login = () => {
  return (
    <div>
      <div className="b">
        <div className="container">
          <div className="row do">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="d-flex">
                <Mail />
                <div>

                  <h4 className='fs-1 text-light '>NewsLetter</h4>
                  <h6 className="text-light">Subscribe now to get our latest blog posts.</h6>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <Flex gap="small" wrap>
                <Button type="primary" className="p-4">Email address</Button>
                <Button type="dashed" className="bg-success p-4 text-light">Subscribe now</Button>
              </Flex>

            </div>

          </div>
        </div>
      </div>


      <div className="bg-dark o">
        <div className="container">
          <h1 className="text-light text-center mb-4 ">Treact</h1>
          <div className="p">
            <ul className="text-light i" >
              <li>Home</li>
              <li>About</li>
              <li>Contact us</li>
              <li>Blog</li>
              <li>Reviews</li>
            </ul>

          </div>
          <div className="p">
            <Facebook />
            <Twitter />
            <Youtube />

          </div>

          <p className="text-center text-white mt-5">&copy; copyright 2020, Treanch inc.All right reserved</p>


        </div>
      </div>
    </div>


  );


}

export default Login;