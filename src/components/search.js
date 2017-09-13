angular.module('video-player')
.controller('searchController', function() {
  this.debounce = false;
  this.searchYouTube = () => {
    if (this.debounce) {
      _.debounce((query, callback) => {
        this.service.search(this.query, this.result);
      }, 500)(this.query, this.result);
    } else {
      this.service.search(this.query, this.result);
      this.debounce = true;
    }
  };
})
.component('search', {
  controller: 'searchController',

  bindings: {
    result: '<',
    service: '<'
  },  

  templateUrl: 'src/templates/search.html'  
});
