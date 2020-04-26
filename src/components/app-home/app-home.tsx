import { Component, h, State, Element } from '@stencil/core';
// import * as mobilenet from '@tensorflow-models/mobilenet'
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import { saveAs } from 'file-saver';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  @State() cameraReady = false;
  video = null;
  model = null;
  @State() selectedDevice = null;
  @State() devices: MediaDeviceInfo[];
  @State() doingDetect = false;
  @Element() el: HTMLElement;
  timer: number;  
  canvasBig: HTMLCanvasElement
  canvas: HTMLCanvasElement

  whatToDetect = "bird"


  // init() {
  //   // this.state = Mode.Inactive; // This makes the overlay appear, once the video is setup the overlay with disappear
  //   this.video = this.el.querySelector("#video") as HTMLVideoElement;
  //   // this.canvas = this.el.querySelector("canvas") as HTMLCanvasElement;
  // }

  
  async componentWillLoad() {
    
     // get devices 
     const mediaDevices = await navigator.mediaDevices.enumerateDevices()
     console.log({mediaDevices})
     this.devices = mediaDevices.filter(a=>a.kind === 'videoinput')
     if(this.devices && this.devices.length>0){
      this.selectedDevice = this.devices[0]
     }
     

     this.loadModel()
    

  }

  async loadModel(){
    // this.model = await mobilenet.load();
    this.model = await cocoSsd.load();
    console.log(this.model)
  }

  async snapAndDetect(){
    console.log('snap and detect')
    this.doingDetect = true;
    const context = this.canvas.getContext('2d');
    context.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);

    const context2 = this.canvasBig.getContext('2d');
    context2.drawImage(this.video, 0, 0, this.canvasBig.width, this.canvasBig.height);

    // const predictions = await this.model.classify(this.canvas);
    const predictions = await this.model.detect(this.canvas);
    console.log({predictions})
    if(predictions && predictions.length>0){
      if(predictions.find(a=>a.class===this.whatToDetect)){
        console.log('found a bird!!!')

        this.canvasBig.toBlob(function(blob) {
          console.log('blob', blob)
          saveAs(blob, `bird-${Date.now()}.png`);
      });

      }
    }
        
  }


  async componentDidLoad(){
    this.video = this.el.querySelector("#video") as HTMLVideoElement;
    this.canvas = this.el.querySelector("#canvas") as HTMLCanvasElement;
    this.canvasBig = this.el.querySelector("#canvasBig") as HTMLCanvasElement;
    
    this.startCamera(this.selectedDevice.deviceId)
    
  }

  startCamera(deviceId: string){
    console.log('start cam', deviceId)

    // if(this.video){
    //   this.video.stop();
    // }

    navigator.mediaDevices
    .getUserMedia({ video: {width: { min: 640 },
      height: { min: 280 }, deviceId: { exact: deviceId }}, audio: false  })
    .then(stream => {
      this.video.srcObject = stream //window.URL.createObjectURL(stream);
      return this.video.play();
    })
    // Now the video is ready set this state so it's actually displayed
    .then(_ => {
      console.log('ready!')

      this.cameraReady = true;

    })
    .catch(err => {
      console.error(err);
      // this.state = Mode.Error;
      // this.errorMessage = "There was a problem starting your camera";
    });

  }

  startDetectionTimer(){
    this.timer = window.setInterval(() => {
      this.snapAndDetect()
    }, 2000);
  }

  // TODO: stop button

  componentDidUnload() {
    window.clearInterval(this.timer);
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        {this.doingDetect && <ion-progress-bar type="indeterminate"></ion-progress-bar>}
        <video id="video">Video stream not available.</video>
        {/* <br/> */}
        <canvas style={{display: 'none'}} id="canvas" width="320" height="240"></canvas>
        {/* for the ful size temp */}
        {/* <br/> */}
        <canvas style={{display: 'none'}} id="canvasBig" width="640" height="480"></canvas>

        {this.cameraReady&&<p>Camera Ready</p>}
        {!this.cameraReady&& <p>Camera Loading</p>}
        {this.model&&<p>Model Ready</p>}
        {!this.model&& <p>Model Loading</p>}

        {/* <ion-loading></ion-loading> */}
      {this.devices && this.devices.length>0 &&
        <ion-select onIonChange={(e)=> {
          this.selectedDevice = e.detail.value
          this.startCamera(this.selectedDevice.deviceId)
        }} placeholder="Select One" value={this.selectedDevice} selected-text={this.selectedDevice?this.selectedDevice.label:""} ok-text="Select" cancel-text="Dismiss">
          {this.devices.map(a=><ion-select-option value={a}>{a.label}</ion-select-option>)}
        </ion-select>}

        <ion-button onClick={async ()=>{
          console.log('hey')
          this.snapAndDetect()
          
        }
        } expand="block">Manual Prediction</ion-button>

      <ion-button onClick={async ()=>{
          this.startDetectionTimer()
          
        }
        } expand="block">Start Detection</ion-button>

      </ion-content>
    ];
  }
}
