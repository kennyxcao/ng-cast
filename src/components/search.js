angular.module('video-player')
.controller('searchController', function(youTube, $scope) {
  this.service = youTube;
  this.debounce = false;

  this.searchYouTube = (query, callback) => {
    if (this.debounce) {
      _.debounce((query, callback) => {
        this.service.search(query, callback);
      }, 500)(query, callback);
    } else {
      this.service.search(query, callback);
      this.debounce = true;
    }
  };
})
.component('search', {
  controller: 'searchController',

  bindings: {
    result: '<',
  },  

  templateUrl: 'src/templates/search.html'  
});
