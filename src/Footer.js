import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <img
                    className="footer__albumLogo"
                    src="data:image/jpeg;base64,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"
                    alt=""
                    
                />

                <div className="footer__songInfo">
                    <h4>Numb</h4>
                    <p>LP</p>
                </div>
            </div>

            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>

        </div>
    )
}

export default Footer;
