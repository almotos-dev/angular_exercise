var phonecatApp = angular.module('phonecatApp', ['ngRoute', 'phonecatControllers', 'phonecatFilters', 'phonecatServices', 'phonecatAnimations']);

phonecatApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/phones',{
		templateUrl: 'partials/phone_list.html',
		controller: 'PhoneListCtrl'
	}).when('/phones/:phoneId', {
		templateUrl: 'partials/phone_detail.html',
		controller: 'PhoneDetailCtrl'
	}).otherwise({
		redirectTo: '/phones'
	})
}]);