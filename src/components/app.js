angular.module('video-player')
.controller('appController', function($window, youTube) {
  // Initial - empty videos
  this.videos = [];
  this.currentVideo = {};

  this.selectVideo = (video) => {
    this.currentVideo = video;
  };

  this.searchResults = youTube.search;
  
  this.result = (videos) => {
    this.videos = videos;
    this.currentVideo = videos[0];
  };  

  this.searchResults('cats', this.result);
})
.component('app', {
  templateUrl: 'src/templates/app.html', 
  controller: 'appController'
});
