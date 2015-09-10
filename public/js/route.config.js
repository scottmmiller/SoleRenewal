(function() {
   angular
      .module('soleRenewal')
      .config(config);

   function config($routeProvider) {
      $routeProvider
         .when('/', {
            templateUrl: '',
            controller: '',
            controllerAs:
         })
         .otherwise('/');
   };

})();
