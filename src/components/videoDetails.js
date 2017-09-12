angular.module('video-player')
.controller('videoDetailsController', function() {
  this.renderFromNow = (time) => {
    return moment(time).fromNow();
  };
})
.component('videoDetails', {
  controller: 'videoDetailsController',

  templateUrl: 'src/templates/videoDetails.html',
  
  bindings: {
    comment: '<'
  }
});
