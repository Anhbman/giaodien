'use strict';

/* Chart.js docs: https://www.chartjs.org/ */

window.chartColors = {
	green: '#75c181', // rgba(117,193,129, 1)
	blue: '#5b99ea', // rgba(91,153,234, 1)
	gray: '#a9b5c9',
	text: '#252930',
	border: '#e7e9ed',
	red: '#ff0000',
	violet: '#bf00ff',
	orange: '#ff8000',
};

/* Random number generator for demo purpose */
var randomDataPoint = function(){ return Math.round(Math.random()*100)};


//Area line Chart Demo

var lineChartConfig = {
	type: 'line',

	data: {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
		
		datasets: [{
			label: 'Dataset',
			backgroundColor: "rgba(117,193,129,0.2)", 
			borderColor: "rgba(117,193,129, 0.8)", 
			data: [
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint()
			],
		}]
	},
	options: {
		responsive: true,		
		
		legend: {
			display: true,
			position: 'bottom',
			align: 'end',
		},

		tooltips: {
			mode: 'index',
			intersect: false,
			titleMarginBottom: 10,
			bodySpacing: 10,
			xPadding: 16,
			yPadding: 16,
			borderColor: window.chartColors.border,
			borderWidth: 1,
			backgroundColor: '#fff',
			bodyFontColor: window.chartColors.text,
			titleFontColor: window.chartColors.text,
            callbacks: {
                label: function(tooltipItem, data) {	                 
	                return tooltipItem.value + '%';   
                }
            },
            

		},
		hover: {
			mode: 'nearest',
			intersect: true
		},
		scales: {
			xAxes: [{
				display: true,
				gridLines: {
					drawBorder: false,
					color: window.chartColors.border,
				},
				scaleLabel: {
					display: false,
				
				}
			}],
			yAxes: [{
				display: true,
				gridLines: {
					drawBorder: false,
					color: window.chartColors.border,
				},
				scaleLabel: {
					display: false,
				},
				ticks: {
		            beginAtZero: true,
		            userCallback: function(value, index, values) {
		                return value.toLocaleString() + '%';  
		            }
		        },
			}]
		}
	}
};



//Bar Chart Demo

var barChartConfig = {
	type: 'bar',

	data: {
		labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
		datasets: [{
			label: 'Dataset 1',
			backgroundColor: "rgba(117,193,129,0.8)", 
			hoverBackgroundColor: "rgba(117,193,129,1)",
			
			
			data: [
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint()
			]
		}, 
		{
			label: 'Dataset 2',
			backgroundColor: "rgba(91,153,234,0.8)", 
			hoverBackgroundColor: "rgba(91,153,234,1)",
			
			
			data: [
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint(),
				randomDataPoint()
			]
		}
		]
	},
	options: {
		responsive: true,
		legend: {
			position: 'bottom',
			align: 'end',
		},

		tooltips: {
			mode: 'index',
			intersect: false,
			titleMarginBottom: 10,
			bodySpacing: 10,
			xPadding: 16,
			yPadding: 16,
			borderColor: window.chartColors.border,
			borderWidth: 1,
			backgroundColor: '#fff',
			bodyFontColor: window.chartColors.text,
			titleFontColor: window.chartColors.text,
			callbacks: {
                label: function(tooltipItem, data) {	                 
	                return tooltipItem.value + '%';   
                }
            },
			

		},
		scales: {
			xAxes: [{
				display: true,
				gridLines: {
					drawBorder: false,
					color: window.chartColors.border,
				},

			}],
			yAxes: [{
				display: true,
				gridLines: {
					drawBorder: false,
					color: window.chartColors.borders,
				},
				ticks: {
		            beginAtZero: true,
		            userCallback: function(value, index, values) {
		                return value + '%';  
		            }
		        },

				
			}]
		}
		
	}
}

let numberDate = (array, jobStatus) => {
	let nb = array.reduce((total, currentValue) => {
		if (currentValue.status == jobStatus) {
			return total + 1;
		}
		return total;
	}, 0);

	return nb;
}

let getValue = async function getData() {

	const datas = await fetch('https://sheetsu.com/apis/v1.0qw/9850d8ec0e05')
		.then(response => response.json())
		.then(data => data);

	return datas;
	// Pie Chart Demo

};

getValue()
	.then(datas => datas)
	.then(datas => {

		let overJob = numberDate(datas, 'O');
		let okJob = numberDate(datas, 'D');
		let nowJob = numberDate(datas, 'W');
		let waitJob = numberDate(datas, 'N');
		let delayedJob = numberDate(datas, 'O');
		let cancelJob = numberDate(datas, 'N');

		console.log("charts awqeqw", datas);

		console.log(overJob, okJob, nowJob);
		var pieChartConfig = {
			type: 'pie',
			data: {
				datasets: [{
					data: [
						delayedJob,
						nowJob,
						waitJob,
						cancelJob,
						okJob,
					],
					backgroundColor: [
						window.chartColors.red,
						window.chartColors.blue,
						window.chartColors.orange,
						window.chartColors.violet,
						window.chartColors.green,
					],
					label: 'Dataset 1'
				}],
				labels: [
					'Tạm hoãn',
					'Đang thực hiện',
					'Chờ phê duyệt',
					'Bị huỷ',
					'Đã hoàn thành'
				]
			},
			options: {
				responsive: true,
				legend: {
					display: true,
					position: 'bottom',
					align: 'center',
				},
	
				tooltips: {
					titleMarginBottom: 10,
					bodySpacing: 10,
					xPadding: 16,
					yPadding: 16,
					borderColor: window.chartColors.border,
					borderWidth: 1,
					backgroundColor: '#fff',
					bodyFontColor: window.chartColors.text,
					titleFontColor: window.chartColors.text,
					
					/* Display % in tooltip - https://stackoverflow.com/questions/37257034/chart-js-2-0-doughnut-tooltip-percentages */
					callbacks: {
						label: function(tooltipItem, data) {
							//get the concerned dataset
							var dataset = data.datasets[tooltipItem.datasetIndex];
							//calculate the total of this data set
							var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
							return previousValue + currentValue;
							});
							//get the current items value
							var currentValue = dataset.data[tooltipItem.index];
							//calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
							var percentage = Math.floor(((currentValue/total) * 100)+0.5);
							
							return percentage + "%";
						},
					},
					
	
				},
			}
		};
	
	
		// Pie1
	
		var pieChartConfig1 = {
			type: 'pie',
			data: {
				datasets: [{
					data: [
						okJob,
						overJob,
					],
					backgroundColor: [
						window.chartColors.green,
						window.chartColors.red,
					],
					label: 'Dataset 1'
				}],
				labels: [
					'Đúng tiến độ',
					'Quá hạn',
				]
			},
			options: {
				responsive: true,
				legend: {
					display: true,
					position: 'bottom',
					align: 'center',
				},
	
				tooltips: {
					titleMarginBottom: 10,
					bodySpacing: 10,
					xPadding: 16,
					yPadding: 16,
					borderColor: window.chartColors.border,
					borderWidth: 1,
					backgroundColor: '#fff',
					bodyFontColor: window.chartColors.text,
					titleFontColor: window.chartColors.text,
					
					/* Display % in tooltip - https://stackoverflow.com/questions/37257034/chart-js-2-0-doughnut-tooltip-percentages */
					callbacks: {
						label: function(tooltipItem, data) {
							//get the concerned dataset
							var dataset = data.datasets[tooltipItem.datasetIndex];
							//calculate the total of this data set
							var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
							return previousValue + currentValue;
							});
							//get the current items value
							var currentValue = dataset.data[tooltipItem.index];
							//calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
							var percentage = Math.floor(((currentValue/total) * 100)+0.5);
							
							return percentage + "%";
						},
					},
					
	
				},
			}
		};
		// Generate charts on load
		// window.addEventListener('load', function(){
			
		// 	var pieChart = document.getElementById('chart-pie').getContext('2d');
		// 	window.myPie = new Chart(pieChart, pieChartConfig);
	
		// 	var pieChart = document.getElementById('chart-pie1').getContext('2d');
		// 	window.myPie = new Chart(pieChart, pieChartConfig1);
		// });	
		var pieChart = document.getElementById('chart-pie').getContext('2d');
			window.myPie = new Chart(pieChart, pieChartConfig);
	
		var pieChart = document.getElementById('chart-pie1').getContext('2d');
		window.myPie = new Chart(pieChart, pieChartConfig1);
	})

// Doughnut Chart Demo


var doughnutChartConfig = {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [
				3,
				4,
				1,
			],
			backgroundColor: [
				window.chartColors.green,
				window.chartColors.blue,
				window.chartColors.gray,

			],
			label: 'Dataset 1'
		}],
		labels: [
			'Green',
			'Blue',
			'Gray',
		]
	},
	options: {
		responsive: true,
		legend: {
			display: true,
			position: 'bottom',
			align: 'center',
		},

		tooltips: {
			titleMarginBottom: 10,
			bodySpacing: 10,
			xPadding: 16,
			yPadding: 16,
			borderColor: window.chartColors.border,
			borderWidth: 1,
			backgroundColor: '#fff',
			bodyFontColor: window.chartColors.text,
			titleFontColor: window.chartColors.text,
			
			animation: {
				animateScale: true,
				animateRotate: true
			},
			
			/* Display % in tooltip - https://stackoverflow.com/questions/37257034/chart-js-2-0-doughnut-tooltip-percentages */
			callbacks: {
                label: function(tooltipItem, data) {
					//get the concerned dataset
					var dataset = data.datasets[tooltipItem.datasetIndex];
					//calculate the total of this data set
					var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
					return previousValue + currentValue;
					});
					//get the current items value
					var currentValue = dataset.data[tooltipItem.index];
					//calculate the precentage based on the total and current item, also this does a rough rounding to give a whole number
					var percentage = Math.floor(((currentValue/total) * 100)+0.5);
					
					return percentage + "%";
			    },
            },
			

		},
	}
	
};

// Connect gg

	
