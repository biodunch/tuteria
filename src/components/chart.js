import React, { Component } from 'react';

class TestChart extends Component {

	render() {
		const data = {
			labels: ['Salt and Vinegar', 'Ready Salted', 'Cheese & Onions', 'Prawn Cocktail', 'Bacon', 'Roast Chicken', 'Other'],
			series: [
			   	[9, 4, 6, 2, 1, 3, 5]
			]
		}

		const type = 'Bar';

		return(
			<ChartistGraph data={data} type={type} />
		)
	}
	
}

export default TestChart;
