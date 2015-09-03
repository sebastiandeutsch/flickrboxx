import React from 'react';
import PhotoItem from './PhotoItem';

class PhotoList extends React.Component
{
  render() {
    const {photos, status} = this.props;

    return (
      <div>{photos.map((photo) => {
        return <PhotoItem key={photo.get('id')} photo={photo} />;
        })}
        { photos.size > 0 && status != 'PENDING' ?
          <div className="text-center">
            <button onClick={this.nextPage.bind(this)}>Next Page</button>
          </div> : null
        }
      </div>
    );
  }

  nextPage() {
    this.props.actions.nextPage();
  }
}

export default PhotoList;
