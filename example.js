var videoshow = require('videoshow')

var audio = __dirname + '/audio/song.mp3'
var logo = __dirname + '/picture/logo.png'

var logoParams = {
  start: 0,
  end: 20,
  xAxis: 20,
  yAxis: 20
}

var audioParams = {
  fade: true,
  //delay: 2 // seconds
}

var images = [{
      path: __dirname + '/picture/step_1.png',
      transition: true,
      disableFadeOut: true,
      disableFadeIn: true,
      caption: '測試'
      //filters: [ "pad=640:480:0:40:violet" ]
    },
    {
      path: __dirname + '/picture/step_2.png',
      disableFadeOut: true,
      disableFadeIn: true,
      caption: '測試2'
    },
    {
      path: __dirname + '/picture/step_3.png',
      disableFadeOut: true,
      disableFadeIn: true,
      caption: '測試7'
    },
    {
      path: __dirname + '/picture/step_4.png',
      disableFadeOut: true,
      disableFadeIn: true,
      caption: '測試5'
    },
    {
      path: __dirname + '/picture/step_5.png',
      disableFadeOut: true,
      disableFadeIn: true,
      caption: '測試4'
    }
]

var filters = []
filters.push('scale=1920:1080')
videoshow(images)
  .audio(audio, audioParams)
  .logo(logo, logoParams)
  .save('video.mp4')
  .on('start', function (command) {
    console.log('ffmpeg process started:', command)
  })
  .on('error', function (err) {
    console.error('Error:', err)
  })
  .on('end', function (output) {
    console.log('Video created in:', output)
  })
