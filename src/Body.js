import React from 'react'
import './Body.css';
import Header from './Header';
import { useDataLayerValue } from "./DataLayer";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';

function Body({ spotify }) {

    const [{ hot_hits_srilanka }, dispatch] = useDataLayerValue();


    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
                <img src={hot_hits_srilanka?.images[0].url} alt="" />
                <div className="body__infoText" >
                    <strong>PLAYLIST</strong>
                    <h2>Hot Hits SriLanka</h2>
                    <p>{hot_hits_srilanka?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons" >
                    <PlayCircleFilledIcon className="body__shuffle" />
                    <FavoriteIcon fontSize="large" className="" />
                    <MoreHorizIcon />

                </div>
                {hot_hits_srilanka?.tracks.items.map(item => (
                    <SongRow track={item.track} />
                ))}
            </div>
        </div>
    );
}

export default Body;
