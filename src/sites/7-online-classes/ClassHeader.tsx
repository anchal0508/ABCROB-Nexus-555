
import cityvisit from './images/cities_visited.jpeg';

function ClassHeader() {

   return (
      <div className="classHeader-page">
         <div className="hero">
            <h1>Build your skills Any time anywhere</h1>
            <div className="image">
               <img src={cityvisit} alt="Cities Visited during Workshop" />
            </div>
         </div>
         <div className="courses">
            <h2>Popular Courses</h2>
         </div>
      </div>
   );
}


export default ClassHeader;