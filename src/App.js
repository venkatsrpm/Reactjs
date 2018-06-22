import React, { Component } from 'react';


class Car extends React.Component {
  render() {
    return (
      <div className="car">
         <div className="car-image">
           <img src={'https://www.ford.com/cmslibs/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2019/collections/highlights/3-2/19mst_highlights_profile_31.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg'}/>
         </div>
         <h4 className="car-name"> {'Mustang'}</h4>
         <h4 className="car-price"> {'Price: $33350'}</h4>
         <div className="cardetails-action">
            <button className="cardDeails" type="button">Card details</button>
            <form action="" className="form-info">
              <label>
               <div className="cardNumber">
                  Credit Card Number:

                    <input className="inputCard" type="number" min="1000" max="9999" name="creditCard1"  required/>
                    -
                    <input className="inputCard" type="number" min="1000" max="9999" name="creditCard2" required/>
                    -
                    <input className="inputCard" type="number" min="1000" max="9999" name="creditCard3"  required/>
                    -
                    <input className="inputCard" type="number" min="1000" max="9999"  name="creditCard4"  required/>
                </div>
              </label>
                  <br />
              <label>
                  <div className="cardNumber">
                     Card Holder Name:
                     <input type="name" className="HolderName" name="HolderName" />
                   </div>
               </label>
               <br />
              <label>
                <div className="carinfo">
                  Card Expiry:
                  <input className="inputCard"  name="expiry" type="month" required/> &nbsp;
                  cvv:
                  <input className="cvv" type="number" min="100" max="999"  name="cvvname"  required/>
               </div>
              </label>
                <br />
              <label>
                <input className="submitInfo" type="submit" />
              </label>
            </form>
         </div>
      </div>
    );
  }
}


class App extends React.Component {
  render() {
    return (
      <div className="Cars">
         <Car/>
         <Car/>
         <Car/>

      </div>
    );
  }
}

export default App;
