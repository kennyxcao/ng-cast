angular.module('video-player')
.controller('appController', function($window) {
  this.selectVideo = (video) => {
    console.log('selectVideo');
    this.currentVideo = video;
  };
  this.searchResults = () => {

  };
  this.videos = $window.exampleVideoData;
  this.currentVideo = this.videos[0];
})
.component('app', {
  templateUrl: 'src/templates/app.html', 
  controller: 'appController'
});
