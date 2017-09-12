angular.module('video-player')
.controller('appController', function($window, youTube) {
  this.service = youTube;

  // Initial - empty videos
  this.videos = [];
  this.currentVideo = {};

  this.selectVideo = (video) => {
    this.currentVideo = video;
  };
  
  this.searchResults = this.service.search;
  
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
