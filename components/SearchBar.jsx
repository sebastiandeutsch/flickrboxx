import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <br/>
        <div className="row">
          <div className="col-sm-4 col-sm-offset-3 text-right">
            <input ref="searchInput" className="form-control input-lg" type="text" placeholder="search ..." />
          </div>
          <div className="col-sm-4">
            <button className="btn btn-default btn-lg" onClick={this.search.bind(this)}>Search</button>
          </div>
        </div>
        <br/>
      </div>
    );
  }

  search() {
    this.props.searchPhotos(React.findDOMNode(this.refs.searchInput).value);
  }
}

export default SearchBar;
