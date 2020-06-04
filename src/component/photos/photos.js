class Photo {
  constructor(id, authorName, photoUrl, title) {
    this.id = id;
    this.title = title;
    this.photoUrl = photoUrl;
    this.authorName = authorName;
  }
}

export let photoList = getListPhotoFromUrl();

function getListPhotoFromUrl() {
  let url = 'https://api.unsplash.com/photos/';
  let userKey =
    'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9';
  let photoList = [];
  let request = new XMLHttpRequest();
  request.open('GET', url + '?client_id=' + userKey);
  request.responseType = 'json';
  request.send();
  request.onload = function () {
    let response = request.response;
    for (let i = 0; i < response.length; i++) {
      let photo = new Photo(
        response[i]['id'],
        response[i]['user']['username'],
        response[i]['urls']['full'],
        response[i]['alt_description'],
      );
      photoList.push(photo);
    }
  };
  return photoList;
}

export function getList() {
  return getListPhotoFromUrl();
}
