import { Component, h, State, Host, EventEmitter, Event, Prop, Watch } from "@stencil/core";
import SimplePeer from "simple-peer";
import { DataMessage } from "../../models/data-message";

@Component({
  tag: "app-remote",
  styleUrl: "app-remote.css"
})
export class AppRemote {
  @State() peer: SimplePeer.Instance;
  @State() cam = true; // are we the cam the initiator
  @State() connectionString: string;
  @State() peerConnectionString: string;
  @State() connected = false;
  @State() peerResult = '';

  @Event() recievedMessage: EventEmitter<DataMessage>;
  @Prop() status: String

  @Watch('status')
  watchHandler(newValue: string) {
    if(this.connected){
      const message = new DataMessage()
      message.action = "status"
      message.message = newValue
      message.id = Date.now()
      this.peer.send(JSON.stringify(message))
    }
  }

  async componentWillLoad() {
    console.log("hi");
  }

  async displayConnection(signal: string) {
    this.connectionString = btoa(signal);
  }

  async startPeerShare() {
    console.log("startPeerShare", this.cam);
    this.peer = new SimplePeer({ trickle: false, initiator: this.cam });

    this.peer.on("error", err => console.log("error", err));

    this.peer.on("signal", data => {
      console.log("SIGNAL", JSON.stringify(data));
      this.displayConnection(JSON.stringify(data));
    });
    this.peer.on("connect", () => {
      console.log("CONNECT");
      this.connected = true;
    });

    this.peer.on("data", data => {
      console.log("data", data);
      // this.result = data.toString()
      const result = JSON.parse(data)
      this.peerResult = `${result.id} - ${result.action} - ${result.message}`
      if(result.action === "take-photo"){
        console.log('do an event to take image')
        this.recievedMessage.emit(result)
        const message = new DataMessage()
        message.action = "take-photo-complete"
        message.message = "Taken Photo Sent"
        message.id = Date.now()
        this.peer.send(JSON.stringify(message))
      }

      if(result.action === "toggle-detection"){
        console.log('do an event to toggle-detection')
        this.recievedMessage.emit(result)
        const message = new DataMessage()
        message.action = "toggle-detection-complete"
        message.message = "Toggle Detection Sent"
        message.id = Date.now()
        this.peer.send(JSON.stringify(message))
      }

    });

    this.peer.on("error", data => {
      console.error("peer error", data);
    });
  }

  render() {
    return (
      <Host>
        {/* <app-header pageTitle="Remote"/> */}

        {/* <ion-content class="ion-padding"> */}
        {!this.peer && (
          <div>
            <ion-radio-group
              value={this.cam ? "cam" : "notcam"}
              onIonChange={e => {
                this.cam = e.detail.value === "cam" ? true : false;
              }}
            >
              <ion-list-header>
                <ion-label>What type are you</ion-label>
              </ion-list-header>

              <ion-item>
                <ion-label>Camera</ion-label>
                <ion-radio slot="start" value="cam"></ion-radio>
              </ion-item>

              <ion-item>
                <ion-label>Remote</ion-label>
                <ion-radio slot="start" value="notcam"></ion-radio>
              </ion-item>
            </ion-radio-group>

            <ion-button
              onClick={async () => {
                this.startPeerShare();
              }}
              expand="block"
            >
              Start Peer Thing
            </ion-button>
          </div>
        )}

        {this.peer && (
          <div>
            <ion-item>
              <ion-label>My Connection String:</ion-label>
            </ion-item>
            <ion-item>
              <p style={{ overflowWrap: "anywhere", userSelect: "all" }}>
                {this.connectionString}
              </p>
            </ion-item>

            <ion-item>
              <ion-label>Thier Connection String:</ion-label>
            </ion-item>

            <ion-item>
              <ion-label>Paste:</ion-label>
              <ion-textarea
                clearOnEdit={true}
                value={this.peerConnectionString}
                onIonChange={e => {
                  this.peerConnectionString = e.detail.value;
                }}
              ></ion-textarea>
            </ion-item>

            <ion-button
              disabled={!this.peerConnectionString}
              onClick={async () => {
                this.peer.signal(JSON.parse(atob(this.peerConnectionString)));
              }}
              expand="block"
            >
              Connect To Peer
            </ion-button>

            {this.connected && (
              <div>
                <ion-button
                  onClick={async () => {
                    console.log("send thing");
                    const message = new DataMessage()
                    message.action = "take-photo"
                    message.message = "Take Photo"
                    message.id = Date.now()
                    this.peer.send(
                      JSON.stringify(message)
                    );
                  }}
                  expand="block"
                >
                  Take Photo
                </ion-button>
                <p>Latest Result: <span>{this.peerResult}</span></p>
              </div>
            )}
          </div>
        )}
        {/* </ion-content> */}
      </Host>
    );
  }
}
