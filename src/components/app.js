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
  // this.searchResults = (videos) => {
  //   this.videos = videos;
  //   this.currentVideo = videos[0];
  // };
  // this.result = (query) => {
  //   console.log('result called');
  //   //console.log(callback);
  //   youTube.search(query, this.searchResults);
  // };

  youTube.search('cats', this.result);
})
.component('app', {
  templateUrl: 'src/templates/app.html', 
  controller: 'appController'
});
