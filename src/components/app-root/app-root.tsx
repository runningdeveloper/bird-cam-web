import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/_prefix_/" component="app-home" />
          {/* <ion-route url="/_prefix_/remote" component="app-remote" /> */}

        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
