angular.module('video-player')
.controller('appController', function($window, youTube) {
  this.videos = $window.exampleVideoData;
  this.currentVideo = this.videos[0];

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
