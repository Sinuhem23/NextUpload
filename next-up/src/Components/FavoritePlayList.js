import React from 'react';
import '../CSS/favoriteplaylist.css';

function FavoritePlayList() {
  return (
    <div>
      {/* -- Playlist Section -- */}

      <div className='fav_playlist_uploads'>
        <div className='main_Favorite_Video'>
          <iframe
            className='main_iframe'
            src='https://www.youtube.com/embed/FuSOd0VApQs'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </div>
        <div className='fav_playlist_text'>
          <h3>Favorite Playlists</h3>

          <button>Add to Playlist</button>
        </div>
        <div className='recently_added_playlist_videos'>
          <div>
            <iframe
              src='https://www.youtube.com/embed/FuSOd0VApQs'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src='https://www.youtube.com/embed/Cpy4cJzTqr8'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src='https://www.youtube.com/embed/TUs48KitW6M'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src='https://www.youtube.com/embed/2iQFnl3gjTk'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src='https://www.youtube.com/embed/CqxjzfudGAc'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src='https://www.youtube.com/embed/bKEovEgodaA'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src='https://www.youtube.com/embed/XP_--KthFMI'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src='https://www.youtube.com/embed/Ln4h4rscBB4'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      {/* -- End of Airplane Videos section -- */}
    </div>
  );
}

export default FavoritePlayList;
