import React from 'react';
import './css/singleFlat.css'
const SingleFlat = (props) => {
    return (
    <div class="singleFlatOuter">
      <div class="sigleFlatInner">
        <h2> <span className="innerText">{props.title}.</span> </h2>
        <h2> <span className="innerText">${props.price}.</span> </h2>
        <h3> Address: <span className="innerText">{props.city} {props.street} {props.flatNumber} {props.postCode}.</span> </h3>

          <h2>Letting Description:</h2>
          <p>   
              <h3> Date Available: <span className="innerText">{props.dataAvailable}.</span></h3>
              <h3> Deposit: <span className="innerText">${props.deposit}.</span></h3>
              <h3>furnishing: <span className="innerText">{props.furnishing}.</span></h3>
              <h3>lettingType: <span className="innerText">{props.lettingType}.</span></h3>
              <h3>reducedOnWebsite: <span className="innerText">{props.reducedOnWebsite}.</span></h3>
          </p>
           
           <h2>Description:</h2>
           <p> 
              {props.description}
           </p>
        
    
      </div>
     </div> 
    )
}

export default SingleFlat;