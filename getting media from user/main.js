document.querySelector('#showVideo').addEventListener("click", (e) => {
    streamVideo(e);
})

const constraints = window.constraints = {
    video: true,
    audio: false
}

async function streamVideo(e) {
    try{
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        showVideo(stream);
        e.target.disabled = true;
    }
    catch(error){
        console.log(error);
    }
}

function showVideo(stream) {
    const video = document.querySelector('video');
    const videoTracks = stream.getVideoTracks();
    console.log(videoTracks);
    window.stream = stream;
    video.srcObject = stream;
}