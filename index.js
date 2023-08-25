
function test(){
  console.log('hello world')
}

var count = 3
function incCounter(){
  counter++
}

const createAudioPlayer = () => {
    console.log('CreateAudioPlayer')
};
const AudioPlayer = function () {
    console.log('new')
    this.createAPlayer = createAudioPlayer
}

module.exports = {
  count,incCounter,test,AudioPlayer
}
