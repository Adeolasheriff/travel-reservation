import { Bell, Cust, Micro } from "../icons"

const Home = () => {
    return (
        <div className="bg-light home">
            <div className="container">
                <div className="row n">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <div style={{ marginTop: '80px' }}>
                            <h1>Find perfect Hotels</h1>
                            <b>anywhere in thee world</b>
                            <h6 style={{ marginBottom: '40px', marginTop: '10px' }}>We've been in the hotels business across <br />
                                the world for 5 years now.
                                ssure you that you will <br /> always enjoy your stay with us.</h6>
                            <div style={{ marginTop: '20px' }}>
                                <a href="/" className="btn text-white" style={{ background: 'purple', padding: '14px', width: '30%' }}>Sign up</a>
                                <a href="/" className="btn " style={{ background: 'gray', padding: '14px', width: '38%', marginLeft: '30px' }}>Search for hotels</a>
                            </div>
                        </div>

                    </div>


                    <div className="col-sm-12 col-md-12 col-lg-6">

                        <img src="image/1.png" alt="imag" height={'550px'} width={'100%'} />
                    </div>
                </div>

            </div>

            <div className="first-heading " style={{ marginTop: '150px' }}>
                <div className="container">
                    <div className="row n">
                        <div className="col-sm-12 col-md-6 col-lg-4">


                            <Bell />
                            <h4>secure</h4>
                            <h6>we strictly only deal with vendors <br /> that provide top notch security</h6>
                            <a href="q" style={{ color: 'purple', fontSize: '20px', textDecoration: 'none' }}>learn more &rarr;</a>

                        </div>
                        <div className="col-lg-4 col-sm-12 col-md-6">


                            <Micro />
                            <h4>24/7 support</h4>
                            <h6>Lorem ipsum dolor  iure nemo similique <br />modimus tenetur commodi cum.</h6>
                            <a href="q" style={{ color: 'purple', fontSize: '20px', textDecoration: 'none' }}>learn more &rarr;</a>

                        </div>
                        <div className="col-lg-4 col-sm-12 col-md-6">

                            <Cust />
                            <h4>Customizable</h4>
                            <h6>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. Const omnis quasi. Modi.</h6>
                            <a href="q" style={{ color: 'purple', fontSize: '20px', textDecoration: 'none' }}>learn more &rarr;</a>
                        </div>

                    </div>


                </div>
            </div>

        </div>
    )
}
export default Home