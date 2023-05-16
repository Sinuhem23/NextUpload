import React, { useState, useEffect } from 'react';
import '../CSS/trendingmotorcycles.css';
import SearchBar from './SearchBar';
const moment = require('moment');

function TrendingVideo({ term, title }) {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    // YOUTUBE API SECTION ////////////
    const YT_API = `${process.env.REACT_APP_YOUTUBE_BASE_QUERY}${term}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;

    fetch(YT_API)
      .then((resp) => resp.json())
      .then((res) => setVideos(res.items || []))
      .catch((error) => console.log(error));
  }, [term]);
  return (
    <div>
      <SearchBar />
      {/* -- Motorcycle Videos Section -- */}

      <div className='motorcycle_uploads'>
        <h3>{title}</h3>
        <div className='recently_added_playlist_videos'>
          {videos.map((vid, idx) => (
            <div className='iframe_container'>
              <div key={idx}>
                <iframe
                  width='360'
                  height='215'
                  src={`https://www.youtube.com/embed/${vid.id.videoId}`}
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
                <div>
                  <h3 className='ytTitle'>{vid.snippet.title}</h3>

                  <h4 className='channelTitle'>{vid.snippet.channelTitle}</h4>
                  <p className='ytDescription'>{vid.snippet.description}</p>
                  <p className='ytDate'>
                    {' '}
                    {moment(vid.snippet.publishedAt).format(
                      'dddd, MMMM Do YYYY'
                    )}
                  </p>

                  <a
                    className='youtubeLink'
                    target='_blank'
                    rel='noreferrer'
                    href={`https://www.youtube.com/watch?v=${vid.id.videoId}`}
                  >
                    Youtube Link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* -- End of Motorcycle Videos section -- */}
    </div>
  );
}

export default TrendingVideo;
