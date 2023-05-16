import React, { useContext } from 'react';
import { ListContext } from '../App';

import '../CSS/home.css';
const moment = require('moment');

export default function Home() {
  const context = useContext(ListContext);
  // let term = context.term;
  let youTube = context.youTube;

  return (
    <div>
      {/* -- All Video Section -- */}

      <div className='all_uploads'>
        <h3>All Videos</h3>
        <div className='recently_added_playlist_videos'>
          {youTube.map((vid, idx) => (
            <div className='iframe_container'>
              <div key={idx}>
                <div className='youtubeLi'>
                  <div className='youtubeInfo'>
                    <iframe
                      width='360'
                      height='215'
                      src={`https://www.youtube.com/embed/${vid.id.videoId}`}
                      title='YouTube video player'
                      frameborder='0'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    ></iframe>
                    <h3 className='ytTitle'>{vid.snippet.title}</h3>
                    <div>
                      <h4 className='channelTitle'>
                        {vid.snippet.channelTitle}
                      </h4>
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
              </div>
            </div>
          ))}
          {/* <div>
            <iframe
              src='https://www.youtube.com/embed/yh9PRTMFWKk'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div> */}

          {/* <div>
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
              src='https://www.youtube.com/embed/bKEovEgodaA'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src='https://www.youtube.com/embed/xFCHrSDrHps'
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
              src='https://www.youtube.com/embed/Ln4h4rscBB4'
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
              src='https://www.youtube.com/embed/wwCLwNW2qlU'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src='https://www.youtube.com/embed/mtKGgE_wO38'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src='https://www.youtube.com/embed/DhE7TEhAfVQ'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>

          <div>
            <iframe
              src='https://www.youtube.com/embed/dikUw0vW4YI'
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
              src='https://www.youtube.com/embed/8OeshEB3PKY'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src='https://www.youtube.com/embed/tbm-izZisbw'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
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
              src='https://www.youtube.com/embed/TUs48KitW6M'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src='https://www.youtube.com/embed/w4cpRWhueCg'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src='https://www.youtube.com/embed/nbQ8in-Gnmg'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>

          <div>
            <iframe
              src='https://www.youtube.com/embed/N7frLe-nQog'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>

          <div>
            <iframe
              src='https://www.youtube.com/embed/hhS8Xj_Rrsc'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src='https://www.youtube.com/embed/F6zvxp1RvWM'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src='https://www.youtube.com/embed/gS5IklxAzVo'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>

          <div>
            <iframe
              src='https://www.youtube.com/embed/aNTJhR_bR1k'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>

          <div>
            <iframe
              src='https://www.youtube.com/embed/YCjy9cU-3NA'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>

          <div>
            <iframe
              src='https://www.youtube.com/embed/In_0659-ckA'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src='https://www.youtube.com/embed/53Y7tQFeesc'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src='https://www.youtube.com/embed/o4Em10wCHzQ'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src='https://www.youtube.com/embed/MOtWK35dgFM'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src='https://www.youtube.com/embed/Q9ojN6WSuSA'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>

          <div>
            <iframe
              src='https://www.youtube.com/embed/MB7Pgg7pcLI'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src='https://www.youtube.com/embed/XPpoI9Bufnc'
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
          </div> */}
        </div>
      </div>
      {/* -- End of All Video section -- */}
    </div>
  );
}
