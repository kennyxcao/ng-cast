angular.module('video-player')
.controller('searchController', function(youTube, $scope) {
  this.service = youTube;
})
.component('search', {
  controller: 'searchController',

  bindings: {
    result: '<',
    searchResults: '<'
  },  

  templateUrl: 'src/templates/search.html'  
});
