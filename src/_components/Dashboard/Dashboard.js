import React, { Component } from 'react';
import '../../assets/bootstrap/css/bootstrap.min.css';
import GrizzLogo from '../../assets/images/grizz-logo.png';
import '../../assets/css/custom.css';

import Navbar from "../Navbar/Navbar";
import UserProfile from '../UserProfile/UserProfile';
import DashOptions from '../DashOptions/DashOptions';

class Dashboard extends Component {

    constructor(props) {
        super(props);
    }

  render() {
    return (
    <div className="container-fluid padding-0 h-100">
       <Navbar />

    <div className="row">
        <UserProfile />
    </div>

           <main className="col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3">
           <DashOptions />

          {/* <section className="row text-center placeholders">
            <div className="col-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle" alt="Generic placeholder thumbnail" />
              <h4>Label</h4>
              <div className="text-muted">Something else</div>
            </div>
            <div className="col-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </div>
            <div className="col-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIABAAJ12AAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </div>
            <div className="col-6 col-sm-3 placeholder">
              <img src="data:image/gif;base64,R0lGODlhAQABAIABAADcgwAAACwAAAAAAQABAAACAkQBADs=" width="200" height="200" className="img-fluid rounded-circle" alt="Generic placeholder thumbnail"/>
              <h4>Label</h4>
              <span className="text-muted">Something else</span>
            </div>
          </section> */}

          </main>

       
       {/* <div class="row justify-content-center h-100">
        <UserProfile />
    <div class="col-lg-10 h-100" Style="background-color:yellow;" id="main">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>
  </div> */}
     </div>
    );
  }
}

export default Dashboard;
