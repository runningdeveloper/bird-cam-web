import { Component, h, State, Element } from "@stencil/core";
// import * as mobilenet from '@tensorflow-models/mobilenet'
import * as cocoSsd from "@tensorflow-models/coco-ssd";
import { saveAs } from "file-saver";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {
  @State() cameraReady = false;
  video = null;
  model = null;
  @State() modelLoaded = false;
  @State() selectedDevice = null;
  @State() devices: MediaDeviceInfo[];
  @State() doingDetect = false;
  @Element() el: HTMLElement;
  timer: number;
  pictureSaveCanvas: HTMLCanvasElement;
  predictionCanvas: HTMLCanvasElement;
  fakeTimer: any
  fakeTimerCount = 0

  @State() whatToDetect = "bird";

  async componentWillLoad() {
    // get devices
    const mediaDevices = await navigator.mediaDevices.enumerateDevices();
    console.log({ mediaDevices });
    this.devices = mediaDevices.filter(a => a.kind === "videoinput");
    if (this.devices && this.devices.length > 0) {
      this.selectedDevice = this.devices[0];
    }

  }

  async loadModel() {
    // this.model = await mobilenet.load();
    try {
      this.model = await cocoSsd.load();
      this.modelLoaded = true
    } catch (error) {
      this.modelLoaded = false
    }    
  }

  // draw the video to the prediction canvas and large canvas for picture saving
  async drawTempCanvas(){
    // small for the prediction not to struggle (assumption)
    const context = this.predictionCanvas.getContext("2d");
    context.drawImage(this.video, 0, 0, this.predictionCanvas.width, this.predictionCanvas.height);

    // same size for the picture snap to be good quality
    const context2 = this.pictureSaveCanvas.getContext("2d");
    context2.drawImage(
      this.video,
      0,
      0,
      this.pictureSaveCanvas.width,
      this.pictureSaveCanvas.height
    );
  }

  async snapAndDetect() {
    console.log("snap and detect");
    this.doingDetect = true;
    this.drawTempCanvas()
    // const predictions = await this.model.classify(this.canvas);
    const predictions = await this.model.detect(this.predictionCanvas);
    console.log({ predictions });
    if (predictions && predictions.length > 0) {
      if (predictions.find(a => a.class === this.whatToDetect)) {
        console.log("found a bird!!!");

        this.pictureSaveCanvas.toBlob((blob) => {
          console.log("blob", blob);
          saveAs(blob, `${this.whatToDetect}-${Date.now()}.png`);
        });
      }
    }
  }

  async stopDetection() {
    this.doingDetect = false
    window.clearInterval(this.timer);
  }

  async triggerFakeDownloads(){
    // to tigger the multiple download thing
    this.fakeTimer = window.setInterval(() => {
      if(this.fakeTimerCount>3){
        window.clearInterval(this.fakeTimer);
        this.fakeTimerCount = 0
      }
      this.fakeTimerCount++
      this.drawTempCanvas()
      this.pictureSaveCanvas.toBlob(function(blob) {
        saveAs(blob, `fake-${Date.now()}.png`);
      });
    }, 500);
    
  }

  async componentDidLoad() {
    this.video = this.el.querySelector("#video") as HTMLVideoElement;
    this.predictionCanvas = this.el.querySelector("#predictionCanvas") as HTMLCanvasElement;
    this.pictureSaveCanvas = this.el.querySelector("#pictureSaveCanvas") as HTMLCanvasElement;
    this.loadModel();
    this.startCamera(this.selectedDevice.deviceId);
  }

  startCamera(deviceId: string) {
    console.log("start cam", deviceId);

    // if(this.video){
    //   this.video.stop();
    // }

    navigator.mediaDevices
      .getUserMedia({
        video: {
          width: { min: 640 },
          height: { min: 480 },
          deviceId: { exact: deviceId }
        },
        audio: false
      })
      .then(stream => {
        this.video.srcObject = stream; 
        return this.video.play();
      })
      // Now the video is ready set this state so it's actually displayed
      .then(_ => {
        console.log("ready!");

        this.cameraReady = true;
      })
      .catch(err => {
        console.error(err);
        // this.state = Mode.Error;
        // this.errorMessage = "There was a problem starting your camera";
      });
  }

  startDetectionTimer() {
    this.timer = window.setInterval(() => {
      this.snapAndDetect();
    }, 2000);
  }

  componentDidUnload() {
    window.clearInterval(this.timer);
    window.clearInterval(this.fakeTimer);
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Detector</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content class="ion-padding">
        {this.doingDetect && (
          <ion-badge style={{display: 'block'}} color="danger">Detecting</ion-badge>
        )}
        <video style={{ width:"320px",
          height:"240px"}} id="video">Video stream not available.</video>
        <canvas
          style={{ display: "none" }}
          id="predictionCanvas"
          width="320"
          height="240"
        ></canvas>
        <canvas
          style={{ display: "none" }}
          id="pictureSaveCanvas"
          width="2000"
          height="1500"
        ></canvas>

          <div>
        {this.cameraReady && <ion-chip color="success"><span>Camera Ready</span></ion-chip>}
        {!this.cameraReady && <ion-chip color="warning"><span>Camera Loading or not working</span></ion-chip>}
        {this.modelLoaded && <ion-chip color="success"><span>Model Ready</span></ion-chip>}
        {!this.modelLoaded && <ion-chip color="warning"><span>Model Loading</span></ion-chip>}
        </div>
        {/* <ion-loading></ion-loading> */}
        {this.devices && this.devices.length > 0 && (
          <ion-select
            onIonChange={e => {
              this.selectedDevice = e.detail.value;
              this.startCamera(this.selectedDevice.deviceId);
            }}
            placeholder="Select One"
            value={this.selectedDevice}
            selected-text={this.selectedDevice ? this.selectedDevice.label : ""}
            ok-text="Select"
            cancel-text="Dismiss"
          >
            {this.devices.map(a => (
              <ion-select-option value={a}>{a.label}</ion-select-option>
            ))}
          </ion-select>
        )}
        
        <span>What to detect: </span>
        <ion-input value={this.whatToDetect} placeholder="Enter like bird or cat" onIonChange={e => {this.whatToDetect = e.detail.value}}></ion-input>

        <ion-button
          onClick={async () => {
            console.log("hey");
            this.snapAndDetect();
          }}
          expand="block"
        >
          Manual Prediction
        </ion-button>

        <ion-button
          onClick={async () => {
            this.startDetectionTimer();
          }}
          expand="block"
          disabled={this.doingDetect}
        >
          Start Detection
        </ion-button>

        <ion-button
          onClick={async () => {
            this.stopDetection();
          }}
          expand="block"
          disabled={!this.doingDetect}
        >
          Stop Detection
        </ion-button>

        <ion-button
          onClick={() => {
            this.triggerFakeDownloads();
          }}
          expand="block"
        >
          Trigger Download Test
        </ion-button>

        
      </ion-content>
    ];
  }
}
