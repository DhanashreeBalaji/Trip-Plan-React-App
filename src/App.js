import React, {useState} from "react";

import data from './Components/data'
import Tours from './Components/Tours';


function App() {
  
 const[tourdetails , setTours] = useState(data);
 //console.log(tourdetails);

//Removing not interested tours from UI. tourdetails varaible is re filled
   function removeTour(id){
    const newTours = tourdetails.filter(tour => tour.id !== id);
    setTours(newTours);
   }
  
 //If all tours are removed from The list in UI, show this code
   if(tourdetails.length === 0){
    return(
      <div className="refresh">
      <h2>No Tours left</h2>
     <button onClick={ () => setTours(data)}>
 
      Refresh
     </button>
      </div>
    );
   }


  return (
   <div>
    <Tours tours = {tourdetails} removeTour={removeTour}> </Tours>
   </div>
  );
}

export default App;
