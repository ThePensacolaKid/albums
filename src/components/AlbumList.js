import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetails from './AlbumDetails';

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => response.json())
    .then(data => this.setState({ albums: data }));
}

  renderAlbums () {
    return this.state.albums.map(album =>
      <AlbumDetails key={album.title} album={album}/>
    );
  }

  render () {
    console.log(this.state);
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}

export default AlbumList;
