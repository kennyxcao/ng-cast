angular.module('video-player')
.service('youTube', function($http, $window) {
  
  this.search = (query, callback) => {
    console.log('search called');

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

});
