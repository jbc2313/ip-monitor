import ReactPlayer from 'react-player';

export default function CameraOne() {

    return (
        <div>
            <h1>CAMERA ONE VIEWED HERE</h1>
            <ReactPlayer controls={true} muted={true} url="https://zssd-penguin.hls.camzonecdn.com/CamzoneStreams/zssd-penguin/Playlist.m3u8" />
        </div>

    )

}

//https://zssd-baboon.secureplayer.camzonecdn.com/v1.3/CamzoneStreamPlayer?iframe=yes&channel=zssd-panda&muted=no&mutebutton=no&czlogourl=&toolbar=no&backgroundcolor=000000"
