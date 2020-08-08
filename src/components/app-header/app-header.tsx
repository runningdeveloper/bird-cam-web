import { Component, ComponentInterface, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.css',
  shadow: false,
})
export class AppHeader implements ComponentInterface {
  @Prop() pageTitle: String;
  render() {
    return (
      <Host>
      <ion-header>
      <ion-toolbar color="primary">
      <ion-buttons slot="secondary">
          <ion-button href="" fill="solid">
            Detector
          </ion-button>
        </ion-buttons>
        <ion-title>{this.pageTitle}</ion-title>
      </ion-toolbar>
    </ion-header>
    </Host>
    );
  }

}
