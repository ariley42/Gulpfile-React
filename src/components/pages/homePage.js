import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';


class Homepage extends Component {
  render() {
  
  return (
      
          <div className="container-fluid">
              <div class="row">
                  <div class="col-sm-4">
                      <h2>About me</h2>
                      <h5>Photo of me: </h5>
                      <div class="fakeimg">Fake image</div>
                      <p>Some text about my image</p>
                      <h3>Some Links</h3>
                      <p>Lorem ipsum etc etc etc</p>
                      <hr class="hidden-sm hidden-md hidden-lg"></hr>
                  </div>
                  <div class="col-sm-8">
                      <h2>Title Heading</h2>
                      <h5>Title description</h5>
                      <div class="fakeimg">
                          <img src="./catpic.jpg" class="img-fluid" alt="Responsive image" />
                      </div>
                      <p>Some text...</p>
                      <p>Hello I am a fun website!!!</p>
                      <br></br>
                      <h2>Title Heading 3</h2>
                      <h5>Title description just for fun!!!</h5>
                      <div class="fakeimg">Fake image</div>
                      <p> Some tetx</p>
                      <p>The news is talking about the hurricane</p>
                  </div>
              </div>
        
          </div>
          
    
    

    );
  }
}
export default Homepage;
