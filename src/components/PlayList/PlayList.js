import React from 'react'
import PlayListItems from './PlayListItems/PlayListItems';
import classes from './PlayList.module.css';
import playlistlogo1 from './../../asset/images/playlistlogo1.jpg';
import playlistlogo2 from './../../asset/images/playlist2.png';

const PlayList = () => {
    return (
        <div className={classes.playListContainer}>
            <div className={classes.platListText}>
                PlayList
            </div>
            <div>
                <PlayListItems imgLogo={playlistlogo1} title="JoeRogan" name="JRE MMA Show #75 with Dan Hardy" description="Joe is joined by former welterweight fighter and UFC commentator, Dan Hardy." likes="84" listen="96"  />
                <PlayListItems imgLogo={playlistlogo2} title="myfavoritemurder" name="MFM Minisode 13" description="This week’s hometowns include serial killer connections and an acid trip discovery." likes="43" listen="87"  />
                <PlayListItems imgLogo={playlistlogo1} title="JoeRogan" name="JRE MMA Show #75 with Dan Hardy" description="Joe is joined by former welterweight fighter and UFC commentator, Dan Hardy." likes="84" listen="96"  />
            </div>
        </div>
    )
}

export default PlayList
