angular.module('video-player')
.controller('searchController', function(youTube, $scope) {
  this.result = (query, callback) => {
    //console.log('result');
    youTube.search(query, callback);
  };
})
.component('search', {
  templateUrl: 'src/templates/search.html', 

  bindings: {
    update: '<'
  },

  controller: 'searchController'
});
