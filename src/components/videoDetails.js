angular.module('video-player')
.controller('videoDetailsController', function() {
  this.renderFromNow = () => {
    var time = this.comment.snippet.topLevelComment.snippet.publishedAt;
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
