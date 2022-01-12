import React, {useState, useEffect} from 'react';
import Card from '../components/Card';

const List = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(async () => {
    const response = await fetch('assets/data.json');
    const dataJson = await response.json();
    if(dataJson){
      setData(dataJson);
      setLoading(false);
    }
    
  }, []);

  if(loading){
    return (
      <h3>Loading ...</h3>
    )
  }
  
  return (
<div className="row">

{data.map(movie => (<div key={movie.id} className="col-sm-2">
    <Card movie={movie}  />
    </div>)
    )}
</div>

  )

   
    



  
     
     




  
   
 
}

export default List;