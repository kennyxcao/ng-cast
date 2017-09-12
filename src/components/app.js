angular.module('video-player')
.controller('appController', function($window, youTube) {
  this.service = youTube;
  this.videos = [];
  this.currentVideo = {};
  this.comments = [];

  this.selectVideo = (video) => {
    this.currentVideo = video;
    this.service.searchComments(this.currentVideo.id.videoId, this.updateComments);
  };
  
  this.result = (videos) => {
    this.videos = videos;
    this.currentVideo = videos[0];
    this.service.searchComments(this.currentVideo.id.videoId, this.updateComments);
  };

  this.updateComments = (comments) => {
    this.comments = comments;
  };

  this.searchResults = this.service.search;

  this.searchResults('cats', this.result);
})
.component('app', {
  controller: 'appController',
  templateUrl: 'src/templates/app.html'
});
