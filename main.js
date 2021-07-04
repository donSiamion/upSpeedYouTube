// timeout because need time to render player
setTimeout( setUpSpeedComponents(), 1000)

function setUpSpeedComponents() {
  let player = document.getElementById('player-container-outer')
  let upSpeedButtons = document.getElementById('up-speed-buttons')

  if (upSpeedButtons) {
    return
  }

  if (player) {
    let playerWidth = player.offsetWidth

    // todo out styles in css file
    let newElement = `
      <div id="up-speed-buttons"
        clas="up-sped-buttons-element"
        style="
          height: 40px;
          padding: 20px; 
          background: rgba(255, 0, 0, 0.2);
          color: black;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        "
      >
        <button style=" width: 100%; background: red; color: white; border-color: red; font-size: 20px; border-radius: 8px;"> x 1 </button>
        <button style=" width: 100%; margin-left: 20px; background: red; color: white; border-color: red; font-size: 20px; border-radius: 8px;"> x 2 </button>
        <button style=" width: 100%; margin-left: 20px; background: red; color: white; border-color: red; font-size: 20px; border-radius: 8px;"> x 2.5 </button>
        <button style=" width: 100%; margin-left: 20px; background: red; color: white; border-color: red; font-size: 20px; border-radius: 8px;"> x 3 </button>
        <button style=" width: 100%; margin-left: 20px; background: red; color: white; border-color: red; font-size: 20px; border-radius: 8px;"> x 3.5 </button>
        <button style=" width: 100%; margin-left: 20px; background: red; color: white; border-color: red; font-size: 20px; border-radius: 8px;"> x 4 </button>
      </div>
    `
    let info = document.getElementById('info')
    info.insertAdjacentHTML('beforebegin', newElement)

    player.onresize = () => {
      let buttons = document.getElementById('up-speed-buttons')
      buttons.style.width = playerWidth + 'px'
    }

    let startSpeed = 1
    for (let button of document.getElementById('up-speed-buttons').children) {
      // not have 1.5 speed, only 1/2/2.5/...
      let speed = startSpeed == 1.5 ? 2 : startSpeed
      button.addEventListener('click', () => { console.log('set',speed);document.getElementsByClassName('video-stream html5-main-video')[0].playbackRate = speed })
      startSpeed = speed + 0.5
    }

    document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate = 2; 
  } else {
    // if window opnen in new tab and then focused
    // need make more best
    // setTimeout(setUpSpeedComponents(), 2000)
    window.onfocus = () => {setUpSpeedComponents()}
  }
}