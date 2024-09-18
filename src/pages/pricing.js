import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import { Star, Location, Dollar, Arro, Clock, Loca } from "../icons";


function Arrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", marginRight: '20px', marginLeft: '7px' }}
      onClick={onClick}
    />
  );
}


const Pricing = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,

        }
      },

      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1
        }
      }

    ]
  };




  return (
    <div className="">

      <div className="container">
        <Slider {...settings}>
          <div>
            <div class="card col " style={{ width: '96%', borderRadius: '10px 0px 0px 0px' }}>
              <img src="image/3.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <div className="m">
                  <h5 class="card-title mb-4">Hudas Home</h5>
                  <div className="d-flex">
                    <Star />
                    <h6 className="ms-1">4.5</h6>
                  </div>

                </div>
                <div className="d-flex" >
                  <Location />
                  <h6 className="ms-2">Arizona Rak </h6>
                  <div className="m" style={{ marginLeft: '50px' }} >
                    <Dollar />
                    <h6 className="ms-3">Usd 99/Day</h6>

                  </div>
                </div>
                <p class="card-text mt-4 mb-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ex ut perferendis aliquid veritatis culpa venearum iste iusto ut esse laudantium?</p>
                <a href="m" class="btn text-light" style={{ width: '100%', padding: '22px 15px', background: 'purple' }}>Book Now</a>
                {/* <Button type="text">Text Button</Button> */}
              </div>
            </div>
          </div>

          <div>
            <div class="card" style={{ width: '96%', borderRadius: '10px 0px 0px 0px' }}>
              <img src="image/2.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <div className=' m'>
                  <h5 class="card-title mb-4">Wyatt residency</h5>
                  <div className="d-flex">
                    <Star />
                    <h6 className="ms-2">4.5</h6>
                  </div>
                </div>

                <div className="d-flex">
                  <Location />
                  <h6 className="ms-2">Rome,Italy</h6>
                  <div className="d-flex" style={{ marginLeft: '50px' }}>
                    <Dollar />
                    <h6 className="ms-3">Usd 39 / day</h6>

                  </div>
                </div>
                <p class="card-text mb-4 mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ex ut perferendis aliquid veritatis culpa venearum iste iusto ut esse laudantium?</p>
                <a href="m" class="btn text-light" style={{ width: '100%',padding: '22px 15px', background: 'purple' }}>Book Now</a>
              </div>
            </div>
          </div>
          <div>
            <div class="card" style={{ width: '96%', borderRadius: '10px 0px 0px 0px' }}>
              <img src="image/5.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <div className="m">
                  <h5 class="card-title mb-4">Soho paradise</h5>
                  <div className="d-flex">
                    <Star />
                    <h6 className="ms-2">4.9</h6>
                  </div>

                </div>
                <div className="d-flex">
                  <Location />
                  <h6 className="ms-2">ibiza spain</h6>
                  <div className="d-flex" style={{ marginLeft: '50px' }}>
                    <Dollar />
                    <h6 className="ms-3">Usd 50/Day</h6>

                  </div>
                </div>
                <p class="card-text mb-4 mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ex ut perferendis aliquid veritatis culpa venearum iste iusto ut esse laudantium?</p>
                <a href="m" class="btn text-light" style={{ width: '100%', padding: '22px 15px', background: 'purple' }}>Book Now</a>
              </div>
            </div>
          </div>
          <div>
            <div class="card" style={{ width: '96%', borderRadius: '10px 0px 0px 0px' }}>
              <img src="image/4.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <div className="m">
                  <h5 class="card-title mb-4">Hotel Baja</h5>
                  <div className="d-flex">
                    <Star />
                    <h6 className="ms-3">5.0</h6>

                  </div>
                </div>
                <div className="d-flex">
                  <Location />
                  <h6 className="ms-2">palo Alto ,CA</h6>
                  <div className="d-flex" style={{ marginLeft: '50px' }}>
                    <Dollar />
                    <h6 className="ms-3">Usd  19/Day</h6>

                  </div>
                </div>
                <p class="card-text mb-4 mt-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium ex ut perferendis aliquid veritatis culpa venearum iste iusto ut esse laudantium?</p>
                <a href="m" class="btn text-light" style={{ width: '100%', padding: '22px 15px', background: 'purple' }}>Book Now</a>

              </div>
            </div>
          </div>
        </Slider>
      </div>
      ;
      <div style={{ marginTop: '99px' }}>
        <div className="container">
          <div className="row p">
            <div className="col-sm-12 col-lg-md-12 col-lg-4 " style={{ marginTop: '1.2rem' }}>
              <h3 className="text-secondary fs-1 mt-2">Trending Tours</h3>
              <h6 className="text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ratione delectus praesentium <br
              />velit magnam repellendus ad blanditiis earum simil <br />
              </h6>
              <a href="e" style={{ fontSize: '19px', textDecoration: 'none', color: 'purple' }}>View All tours &rarr;</a>

            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <Abt
                img='image/6.png'
                name='Beachfront'
                span='$99 per day'

                details='A Trip to the Bahamas and the Carribean Ocean'
                trend='trend'
                tour='7days'
                Location='Africa'
              />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <Abt
                img='image/7.png'
                name='Criuse'
                span='$169 per day'

                details='Cruise to the Mariana Trench and the Phillipines'
                trend='trend'
                tour='15 days'
                Location='Nigeria'

              />

            </div>
          </div>




        </div>
      </div>


    </div>
  )
}
export default Pricing;


const Abt = (props) => {
  return (
    <div>
      <img src={props.img} alt={props.name} width={'100%'} />
      <div className="d">
        <h6 className="text-info">{props.name} </h6>
        <span>{props.span}</span>
      </div>

      <div className="ms-4">
        <h5 style={{ fontStyle: 'italic', color: 'gray', marginTop: '10px', marginBottom: '18px' }}>{props.details}</h5>
        <div className="row do">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <Arro />
            <span className="ms-2">{props.trend}</span>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4">
            <Clock />
            <span className="ms-2">{props.tour}</span>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4">
            <Loca />
            <span className="ms-2">{props.Location}</span>
          </div>


        </div>
      </div>

    </div>
  )
}