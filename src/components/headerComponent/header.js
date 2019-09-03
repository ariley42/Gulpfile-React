import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';


class Header extends Component {
  render() {
  
  return (
      <header> <div class="jumbotron">
          <h1>Clever Techie</h1>
          <p>Let's learn web development

          </p>
      </div>
          
          <nav className ="navbar navbar-expand-md navbar-dark bg-dark">
              
              <ul className="navbar-nav">
                  <li className="nav-item">
                      <Link className="nav-link" to="/">Home</Link></li>
                  <li className="nav-item">
                      <Link className="nav-link" to ="/Products">Products</Link>
                    </li>
                  <li className="nav-item"><Link className="nav-link" to="/">Contact
                  </Link>
                  </li>
              </ul>
          </nav>
         

      </header>
    
    

    );
  }
}
export default Header;
