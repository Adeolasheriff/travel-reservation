export const Movies = (props) => {
  return (
      <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6" style={{marginTop:'8rem'}}>
              <p className="fs-4"><i className="color">  </i>{props.paragraph}<i className="color"> </i></p>
              <div className="d-flex">
                  <img src={props.author} alt={props.authoralt} />
                  <div className="mt-3">
                      <h2 className="color fs-4">{props.name}</h2>
                      <p>{props.occupation}</p>
                  </div>
              </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6">
              <img className="test-height" src={props.img} alt={props.alt} width={'150%'} height={'80%'} />
          </div>
      </div>
  )}

  
                
                
           