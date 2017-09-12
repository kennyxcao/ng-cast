angular.module('video-player')
.controller('appController', function($window, youTube) {
  this.videos = $window.exampleVideoData;
  this.currentVideo = this.videos[0];

  this.selectVideo = (video) => {
    this.currentVideo = video;
  };
  this.searchResults = (videos) => {
    this.videos = videos;
    this.currentVideo = videos[0];
  };
  this.submitSearch = (query) => {
    console.log(query);
    youTube.search(query, this.searchResults);    
  };

  youTube.search('cats', this.searchResults);
})
.component('app', {
  templateUrl: 'src/templates/app.html', 
  controller: 'appController'
});
