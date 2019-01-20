import React from 'react';

const Rank = ({name, entries}) => {
	return(
		<div>
			<div className='grey f3'>
				{`${name}, your current rank is ...`}
			</div>
			<div className='grey f1'>
				{entries}
			</div>		
		</div>
		
	);
}

export default Rank;