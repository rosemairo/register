import React from 'react';
import './../css/home.css';

class Home extends React.Component {
    render() {
        return(
            <div>
  <div className="container-fluid">
    <div className="container">
      <div className="row mt-4">
        <div className="col-4">
          <p className="text-muted small-text">About Membership</p>
        </div>
        <div className="col-4">
          <div className="text-center text-dark">
            <center><h2>Medium</h2></center>
          </div>
        </div>
        <div className="col-4">
          <div className="d-flex justify-content-end">
            <i className="fas fa-search mt-2" />
            <button type="button" className="btn btn-outline-success border-0"> <a href="signin.html">Sign In</a></button>
            <button type="button" className="btn btn-outline-success"> <a href="signup.html">Get started</a></button>
          </div>
        </div>
      </div>
      <div className="row">
        <ul className="nav mt-1 mb-3">
          <li className="nav-item">
            <a className="nav-link customLink text-dark ml-2" href="#">HOME</a>
          </li>
          <li className="nav-item">
            <a className="nav-link customLink text-muted ml-1" href="#">FUTURE HUMAN</a>
          </li>
          <li className="nav-item">
            <a className="nav-link customLink text-muted ml-1" href="#">CULTURE</a>
          </li>
          <li className="nav-item">
            <a className="nav-link customLink text-muted ml-1" href="#">TECH</a>
          </li>
          <li className="nav-item">
            <a className="nav-link customLink text-muted ml-1" href="#">ENTREPRENEURSHIP</a>
          </li>
          <li className="nav-item">
            <a className="nav-link customLink text-muted ml-1" href="#">SELF</a>
          </li>
          <li className="nav-item">
            <a className="nav-link customLink text-muted ml-1" href="#">POLITICS</a>
          </li>
          <li className="nav-item">
            <a className="nav-link customLink text-muted ml-1" href="#">DESIGN</a>
          </li>
          <li className="nav-item">
            <a className="nav-link customLink text-muted ml-1" href="#">SCIENCE</a>
          </li>
          <li className="nav-item">
            <a className="nav-link customLink text-muted ml-1" href="#">POPULAR</a>
          </li>
          <li className="nav-item">
            <a className="nav-link customLink text-muted ml-1" href="#">MORE</a>
          </li>
        </ul> 
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="class">
            <img src="https://cdn-images-1.medium.com/fit/c/416/151/1*DcUzgjchHViNlVh4hIT11A.jpeg" className="img_1" />
            <a href className="title mt-2"><h4>American workers explain their jobs</h4></a>
            <a href><p className=" text-dark">here i am waiting for your coming</p></a>
            <a href><p className="text-dark">Jessica Brown</p></a>
            <span> <p><time>Jul 19.</time></p></span>
            <span><i className="fas fa-star" style={{fontSize: 10}} /></span>
            <span><p>5 mins read </p></span>
          </div>
        </div>
        <div className="col-4">
          <div className="media">
            <img className="mr-3" width={100} height={100} src="https://cdn-images-1.medium.com/focal/100/100/48/31/1*F1Rrm7jS_xt_o1srVVzjxQ.jpeg" />
            <div className="media-body">
              <h5 className="mt-0">Of welfare queens and consecutive lies</h5>
              <span>Jul 19.</span>
              <span><i className="fas fa-star" style={{fontSize: 10}} /></span>
              <span>1 hour read</span>
            </div>
          </div>
          <div className="media">
            <img className="mr-3" width={100} height={100} src="https://cdn-images-1.medium.com/focal/100/100/34/55/1*8BkDeJyQffx9rzFrqWPELA.jpeg" />
            <div className="media-body">
              <h5 className="mt-0">The joys and pains of being a business owner when you are...</h5>
              <span>Jul 19.</span>
              <span><i className="fas fa-star" style={{fontSize: 10}} /></span>
              <span>1 hour read</span>
            </div>
          </div>
          <div className="media">
            <img className="mr-3" width={100} height={100} src="https://cdn-images-1.medium.com/fit/c/100/100/1*DcUzgjchHViNlVh4hIT11A.jpeg" />
            <div className="media-body">
              <h5 className="mt-0">Why France's victory matters</h5>
              <p>Liberalism triumphed ...</p> 
              <span>Jul 19.</span>
              <span><i className="fas fa-star" style={{fontSize: 10}} /></span>
              <span>1 hour read</span>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="class">
            <img src="https://cdn-images-1.medium.com/fit/c/504/222/1*Lj_mY4VunJ5SD6k00pW0Qg.jpeg" className="img_3" />
            <a href className="title"><h5>Nigerian workers explain their jobs</h5></a>
            <div className>
              <a href><p className="text-dark">there she is waiting for your coming</p></a>  
              <a href><p className="text-dark">Red meat is not healthy</p></a>
              <span>Jul 19.</span>
              <span><i className="fas fa-star" style={{fontSize: 10}} /></span>
              <span>1 hour read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="container cont">
      <div className="row">
        <div className="col-6">
          <h1 className="mt-5 ml-4">Welcome to Medium,<br /> where words matter.</h1>
          <p className="ml-4">We’ll deliver the best stories and ideas on the topics you care about most straight to your homepage, app, or inbox.</p>
          <button type="button" className="btn btn-dark ml-4 mt-4">Get started</button>
          <button type="button" className="btn btn-outline-dark mt-4">Learn more</button>
        </div>
        <div className="col-6 con">
        </div>
      </div>
    </div>
  </div>
</div>

        )
    }
}

export default Home;