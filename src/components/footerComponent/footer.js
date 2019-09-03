import React, { Component } from 'react';


class Footer extends Component {
  render() {
  
  return (

    <footer class="page-footer font-small blue fixed-bottom">
        <div class="container-fluid text-center text-md-left">
            <div class="row">
                <div class="col-md-6 mt-md-0 mt-3">
                    <h5 class="text-uppercase font-weight-bold">Footer Text 1</h5>
                    <p>Cat lorem ipsum is really a lot of fun.</p>
                </div>
                <hr class="clearfix w-100 d-md-none pb-3"></hr>
                
                <div class="col-md-6 mb-md-0 mb-3">
                    <h5 class="text-uppercase font-weight-bold">Footer text 2</h5>
                    <p>Hello my awesome cat friends we all love lorem ipsum!!!</p>

                </div>
            </div>
        </div>
    </footer>
    
    

    );
  }
}
export default Footer;
