const videoConstraints = {
  audio: true,
  video: {width: 1280, height: 720}
};

document.querySelector("#showVideo").addEventListener("click", async (e) => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(videoConstraints);
    window.stream = stream;
    const video = document.querySelector("#gum-local");
    video.srcObject = stream;
  } catch (e) {
    console.log(e);
  }
});







