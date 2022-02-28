
function Card(props){
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src={`https://robohash.org/${props.id}?200x200`} alt='robots image'/>
			{/*<h2>Jane Doe</h2>
			<p>jane.doe@gmail.com</p>*/}
			<h2>{props.name}</h2>
			<p>{props.email}</p>
		</div>

	);
}

export default Card;