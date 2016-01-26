// I think this should actually be a factory? Then we can use the data
// we get from the get request inside the controllers?
angular.module('foodTruck')
    .factory('foodTruckCoordsCtrl', ['$http', function($http){
        $http.get('https://data.sfgov.org/resource/rqzj-sfat.json')
            .success(function(data) {
                var coords = this.data;
                console.log(coords);
            });
    }]);