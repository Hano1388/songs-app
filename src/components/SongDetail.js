import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
  // console.log(props.song);
  if (!song) {
    return <div>Select a song</div>
  } else {
    return (
      <div className="ui raised very padded text container segment">
        <h3 className="ui header">Details for:</h3>
        <p>
          Title: {song.title} <br />
          Duration: {song.duration}
        </p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail);
