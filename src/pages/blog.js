const Blog = () => {
    return (
        <div className="hey">
            <div className="container">
                <div className="row do">
                    <div className="col-sm-12 col-md-12 col-lg-6">
                        <img src="image/8.png" alt="" width={'100%'} height={'90%'} />

                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 mt-5">
                        <h3 className="fs-2 text-tertiary text-center mb-3">We have the best services.</h3>
                        <p className="fs-6 text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quos, eos deleniti harum nobis illo, perferendis magnam dignissimos modi minus rerum assumenda fuga saepe molestiae inventore nihil dolorem unde provident.</p>
                        <div className="row ms-4">
                           <div className="col">
                           <b className='fs-3 mt-5'>192 <h6 className='fs-3 text-secondary mb-5'>Countries</h6></b>
                           <b className='fs-3'>479 <h6 className='fs-3 text-secondary'>Hotels</h6> </b>
                           </div>
                       
                        <div className="col">
                            <b className='fs-3'>2093 <h6 className='fs-3 text-secondary mb-5'>Rooms</h6></b>
                            <b className='fs-3'>10347 <h6 className='fs-3 text-secondary mb-5'>Workers</h6></b>
                        </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className="container mt-4">
                <div className="row do">
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <h2 className="mb-4 text-gray">Popular Posts</h2>
                        <New
                            img='image/14.png'
                            tips='Tips on how to travel safely in foreign countries'
                            lore='   Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.'
                        />
                        <Im
                            img='image/15.png'
                            name='Charotte Delos'
                            other='Travel Advocate'


                        />

                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4" style={{ marginTop: '60px' }}>
                        <New
                            img='image/16.png'
                            tips='Enjoying the beach life while on a vacation'
                            lore='   Lorem ipsum dolor sit amet, consecteturious adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua now ele.'
                        />
                        <Im
                            img='image/12.png'
                            name='Adam cuppy'
                            other='Vlogger'
                        />
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <h2 className="text-gray mb-4">Recent Posts</h2>

                        <div >
                            <div>
                                <Pro
                                    name='Getting the most out of your vacation'
                                    desc='Aaron patterson'
                                    img='image/9.png'
                                />

                            </div>
                            <div className="mt-3">
                                <Pro
                                    name='Choosing the perfect Safari in Africa'
                                    desc='Sam phipphen'
                                    img='image/17.png'
                                />
                            </div>
                            <div className="mt-3">
                                <Pro
                                    name='Hiking during the monsoon in Asia'
                                    desc='Tony Hawk'
                                    img='image/11.png'
                                />
                            </div>
                            <div className="mt-3">
                                <Pro
                                    name='Must carry items while travelling to Thailand'
                                    desc='Himali Turn'
                                    img='image/10.png'
                                />
                            </div>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    )

}

export default Blog;



const New = (props) => {
    return (
        <div>
            <img src={props.img} alt="" width={'100%'} />
            <h5 className='mt-4'>{props.tips}</h5>
            <h6 className='mt-4 mb-4 text-secondary'>{props.lore}</h6>

        </div>

    )
}

const Im = (props) => {
    return (

        <div className="d-flex">
            <img src={props.img} alt="" />
            <div className="mt-4">
                <h6>{props.name}</h6>
                <h6 className='text-secondary'>{props.other}</h6>

            </div>
        </div>
    )


}

const Pro = (props) => {
    return (
        <div className="row do">
            <div className="col-sm-12 col-md-6 col-lg-6" style={{ marginTop: '20px', paddingLeft: '30px' }}>
                <h6 className="fs-5">{props.name}</h6>
                <span className="fs-5 text-secondary">{props.desc}</span>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
                <img src={props.img} alt={props.name} width={'70%'} style={{ marginLeft: '40px' }} />
            </div>
        </div>

    )
}