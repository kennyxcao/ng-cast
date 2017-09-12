angular.module('video-player')
.controller('searchController', function(youTube, $scope) {
  this.service = youTube;
  this.searchYouTube = function(query) {
    this.service.search(query, this.result);
  };
})
.component('search', {
  controller: 'searchController',

  bindings: {
    result: '<',
  },  

  templateUrl: 'src/templates/search.html'  
});
