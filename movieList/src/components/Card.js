import React from 'react';

const Card = ({movie}) => {
  console.log(movie);
  const {title, img, year, distributor, ranking, amount} = movie;
  return(
    <div className="card">
    <img src={img.src} alt={img.alt} className="mt-3" />
    
    <div className="card-body">
    <h3 className="card-title"> {`#${ranking} - ${title} (${year})`}</h3>
    <p>Distributor: {distributor}</p>
    <p>{`Amount: $${amount}`}</p>
    </div>
    
    </div>
  )
}

export default Card;