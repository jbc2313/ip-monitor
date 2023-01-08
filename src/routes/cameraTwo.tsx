import ReactPlayer from 'react-player';

export default function CameraTwo() {

    return (
        <div>
            <h1>CAMERA ONE VIEWED HERE</h1>
            <ReactPlayer controls={true} muted={true} url="https://www.youtube.com/watch?v=86YLFOog4GM" />
        </div>

    )

}
