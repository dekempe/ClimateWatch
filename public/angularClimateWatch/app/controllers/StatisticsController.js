(function(){
    var statisticsController = function($scope){
    $scope.monthlyStatisticsVisible = "collapse";
    $scope.liveStatisticsVisible = "collapse";
	$scope.updateInterval = 1000;

	//get all locations + All
	$scope.selectOptions = [
		{name: 'All'},
		{name: 'Keuken'},
		{name: 'Faros corner'},
		{name: 'Meeting room blue'}
	];

	var getYearlyTemperatureDataFor = function(selection){
		//GET data for selection

		var series = null;
		if(selection == "all"){
			series = [{
		        name: 'Keuken',
		        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
		    }, {
		        name: 'Meeting room green',
		        data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
		    }, {
		        name: 'Faros corner',
		        data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
		    }, {
		        name: 'Meeting room blue',
		        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
		    }];
		} else if (selection == "Keuken"){
			series = [{
		        name: 'Keuken',
		        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
		    }];
		}
		return series;
	}

	$scope.loadAverageTempYearContainer = function(selection){
	
	};

	$scope.loadAverageTempYearContainer("all");


	$scope.toggleMonthlyVisible = function(){
			if($scope.monthlyStatisticsVisible == "visible"){
				$scope.monthlyStatisticsVisible = "collapse"
			} else {
				$scope.monthlyStatisticsVisible = "visible"
			}	
	};

	$scope.toggleLiveVisible = function(){
			if($scope.liveStatisticsVisible == "visible"){
				$scope.liveStatisticsVisible = "collapse"
			} else {
				$scope.liveStatisticsVisible = "visible"
			}	
	};

	$scope.averagetempYearChart = {
    	chart: {
		 	style: {
            	fontFamily: 'Open Sans'
        	}
    	},
	    title: {
	        text: 'Monthly Average Temperature (C\u00B0)',
	    },
	    xAxis: {
	        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
	            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	    },
	    yAxis: {
	        title: {
	            text: 'Temperature (C\u00B0)'
	        },
	        plotLines: [{
	            value: 0,
	            width: 1,
	            color: '#808080'
	        }]
	    },
	    tooltip: {
	        valueSuffix: 'C\u00B0'
	    },
	    legend: {
	    	enabled: true,
	        layout: 'vertical',
	        align: 'right',
	        verticalAlign: 'middle',
	        borderWidth: 0
	    },

	    series: [{
		        name: 'Keuken',
		        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
		    }, {
		        name: 'Meeting room green',
		        data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
		    }, {
		        name: 'Faros corner',
		        data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
		    }, {
		        name: 'Meeting room blue',
		        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
		    }]
    }

    $scope.averageHumidytyYearChart = {
    	chart: {
		 	style: {
            	fontFamily: 'Open Sans'
        	}
    	},
	    title: {
	        text: 'Monthly Average Humidity (%)',
	    },
	    xAxis: {
	        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
	            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
	    },
	    yAxis: {
	        title: {
	            text: 'Humidity (%)'
	        },
	        plotLines: [{
	            value: 0,
	            width: 1,
	            color: '#808080'
	        }]
	    },
	    tooltip: {
	        valueSuffix: '%'
	    },
	    legend: {
	        layout: 'vertical',
	        align: 'right',
	        verticalAlign: 'middle',
	        borderWidth: 0
	    },

	    //get data from DB
	    series: [{
	        name: 'Keuken',
	        data: [50, 41.9, 41.5, 44.5, 38.2, 31.5, 25.2, 26.5, 33.3, 28.3, 33.9, 33.6]
	    }, {
	        name: 'Meeting room blue',
	        data: [70.2, 70.8, 75.7, 71.3, 77.0, 72.0, 74.8, 74.1, 70.1, 74.1, 80.6, 82.5]
	    }, {
	        name: 'Faros corner',
	        data: [50.9, 50.6, 50.5, 48.4, 53.5, 47.0, 48.6, 47.9, 54.3, 49.0, 53.9, 51.0]
	    }, {
	        name: 'Meeting room green',
	        data: [63.9, 64.2, 65.7, 68.5, 71.9, 75.2, 77.0, 76.6, 84.2, 80.3, 86.6, 89.8]
	    }]
    };

    $('#averagetempYearChart').highcharts($scope.averagetempYearChart);
    $('#averageHumidytyYearChart').highcharts($scope.averageHumidytyYearChart);


   $('#liveContainer').highcharts({
        chart: {
            type: 'spline',
            animation: Highcharts.svg,
            marginRight: 10,
            events: {
                load: function () {
                	//TODO GET CURRENT TEMP FROM DB
                    var series = this.series[0];
                    var series1 = this.series[1];
                    var series2= this.series[2];
                    var series3= this.series[3];

                    setInterval(function () {
                        var x = (new Date()).getTime(), 
                            y =  Math.random() * (25 - 23) + 23
                            y1 =  Math.random() * (30 - 27) + 27
                            y2 =  Math.random() * (24 - 22) + 22
                            y3 =  Math.random() * (20 - 18) + 18
                        series.addPoint([x, y], true, true);
                        series1.addPoint([x, y1], true, true);
                        series2.addPoint([x, y2], true, true);
                        series3.addPoint([x, y3], true, true);                           

                    }, $scope.updateInterval);
                }
            }
        },
        title: {
            text: 'Live temperature'
        },
        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150
        },
        yAxis: {
            title: {
                text: 'Value'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                    Highcharts.numberFormat(this.y, 2);
            }
        },
        legend: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        series: [	{
	                name: 'Keuken',
	                data: (function () {
		                    // TODO GET PREVIOUS X TEMPS FROM DB
		                    var data = [],
		                        time = (new Date()).getTime(),
		                        i;

		                    for (i = -19; i <= 0; i += 1) {
		                        data.push({
		                            x: time + i * $scope.updateInterval,
		                            y: Math.random() * (25 - 23) + 23
		                        });
		                    }
		                    return data;
		                }())
	            	}, 
	            	{
	                name: 'Meeting room blue',
	                data: (function () {
		                    // TODO GET PREVIOUS X TEMPS FROM DB
		                    var data = [],
		                        time = (new Date()).getTime(),
		                        i;

		                    for (i = -19; i <= 0; i += 1) {
		                        data.push({
		                            x: time + i * $scope.updateInterval,
		                            y: Math.random() * (30 - 27) + 27
		                        });
		                    }
		                    return data;
		                }())
	            	}, 
	            	{
	                name: 'Faros corner',
	                data: (function () {
		                    // TODO GET PREVIOUS X TEMPS FROM DB
		                    var data = [],
		                        time = (new Date()).getTime(),
		                        i;

		                    for (i = -19; i <= 0; i += 1) {
		                        data.push({
		                            x: time + i * $scope.updateInterval,
		                            y: Math.random() * (24 - 22) + 22
		                        });
		                    }
		                    return data;
		                }())
	            	}, 
	            	{
	                name: 'Meeting room green',
	                data: (function () {
		                    // TODO GET PREVIOUS X TEMPS FROM DB
		                    var data = [],
		                        time = (new Date()).getTime(),
		                        i;

		                    for (i = -19; i <= 0; i += 1) {
		                        data.push({
		                            x: time + i * $scope.updateInterval,
		                            y: Math.random() * (20 - 18) + 18
		                        });
		                    }
		                    return data;
		                }())
	            	}
        		]
    });

};

    angular.module("app").controller("statisticsController", statisticsController);
})();
