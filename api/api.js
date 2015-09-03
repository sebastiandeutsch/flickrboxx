export default {
  getPhotos(searchText, page = 1, cb) {
    fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a37fe4f029f8de2cdc645aea2041e370&text=' + encodeURIComponent(searchText) + '&format=json&nojsoncallback=1&per_page=40&page=' + page)
      .then(function(response) {
        return response.json();
      }).then(function(json) {
        cb(null, json.photos.photo);
      }).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }
};
