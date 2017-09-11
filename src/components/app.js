angular.module('video-player')
.controller('appController', function($window) {
  this.selectVideo = () => {

  };
  this.searchResults = () => {

  };
  this.videos = $window.exampleVideoData;
  this.currentVideo = this.videos[0];
  console.log(this.videos);
})
.component('app', {
  templateUrl: 'src/templates/app.html', 
  controller: 'appController'
});
