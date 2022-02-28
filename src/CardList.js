import { robots } from './robots';
import Card from './Card';

function CardList(){
	
	const cardComponent = robots.map((user, i)=>{
		return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} key={i}/>
	})
	return(
	<div>
	    {cardComponent}
    </div>
	);
}
// I added the key={i} because of the error Warning: Each child in a list should have a unique "key" prop.

export default CardList;