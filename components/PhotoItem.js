import React from 'react';
import Styles from 'stylesheets/components/PhotoItem.css'

class PhotoItem extends React.Component
{
  render() {
    const imageStyle = {
      width: '150px',
      height: '150px',
      margin: 5
    };

    const photo = this.props.photo;
    const photoSrc = 'https://farm' + photo.get('farm') + '.staticflickr.com/' + photo.get('server') + '/' + photo.get('id') + '_' + photo.get('secret') + '_q.jpg'
    const photoUrl = 'https://www.flickr.com/photos/'+ photo.get('owner') + '/' + photo.get('id');

    return (
      <a href={photoUrl} target="_blank" className={Styles.photoItem}>
        <img style={imageStyle} src={photoSrc} />
      </a>
    );
  }
}


export default PhotoItem;
