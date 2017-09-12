angular.module('video-player')
.service('youTube', function($http, $window) {
  
  this.search = (query, callback) => {
    if (!query) {
      return;
    } 
    var params = {
      'q': query,
      'maxResults': 5,
      'part': 'snippet',
      'type': 'video',
      'key': $window.YOUTUBE_API_KEY,
      'videoEmbeddable': 'true'
    };
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: params,
    }).then(function(response) {
      console.log('Successful AJAX request');
      callback(response.data.items);
    }, function(error) {
      console.log('AJAX request failed: ' + error);
    });
  };

  this.searchComments = (id, callback) => {
    if (!id) {
      return;
    } 
    var params = {
      'videoId': id,
      'maxResults': 20,
      'part': 'snippet',
      'textFormat': 'html',
      'key': $window.YOUTUBE_API_KEY,
    };
    $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/commentThreads',
      params: params,
    }).then(function(response) {
      console.log('Successful AJAX request');
      callback(response.data.items);
    }, function(error) {
      console.log('AJAX request failed: ' + error);
    });
  };

});
