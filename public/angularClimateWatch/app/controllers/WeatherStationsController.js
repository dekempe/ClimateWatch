(function(){
    var weatherStationsController = function($scope){

	    //weatherstations
 		$scope.weatherstationsVisible = "collapse";
 		$scope.toggleVisible = function(){
 			if($scope.weatherstationsVisible == "visible"){
 				$scope.weatherstationsVisible = "collapse"
 			} else {
 				$scope.weatherstationsVisible = "visible"
 			}
 		};

	    //get weather stations data
	    $scope.weatherstations = [new WeatherStation(1, "Keuken", 27, 77)
	    						, new WeatherStation(1, 'Meeting room green', 17, 77)
							    , new WeatherStation(1, 'Faros corner', 21, 30)
							    , new WeatherStation(1, 'Peter zijn spot', 23, 50)
							    , new WeatherStation(1, 'Daan', 21, 30)
							    , new WeatherStation(1, 'Lieven', 21, 30)
							    , new WeatherStation(1, 'Johan', 23, 50)
							    , new WeatherStation(1, 'Dimi', 21, 30)
							    , new WeatherStation(1, 'Meeting room blue', 20, 100)];

	   	//statistics
		$scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
		$scope.series = ['Series A', 'Series B'];
		$scope.data = [
			[65, 59, 80, 81, 56, 55, 40],
			[28, 48, 40, 19, 86, 27, 90]
		];   

	};

    angular.module("app").controller("weatherStationsController", weatherStationsController);
})();
