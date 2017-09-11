angular.module('video-player')

.component('app', {
  templateUrl: 'src/templates/app.html', 
  controller: function() {
    // console.log(exampleVideoData);
    this.selectVideo = () => {

    };
    this.searchResults = () => {

    };
    this.videos = exampleVideoData;
    this.currentVideo = this.videos[0];
    console.log(this.videos);
  }
});
