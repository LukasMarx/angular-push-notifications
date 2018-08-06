import { Component } from '@angular/core';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { PushNotificationService } from './pushNotification.service';

const VAPID_PUBLIC = 'BNOJyTgwrEwK9lbetRcougxkRgLpPs1DX0YCfA5ZzXu4z9p_Et5EnvMja7MGfCqyFCY4FnFnJVICM4bMUcnrxWg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-push-notifications';

  constructor(private swPush: SwPush, private pushService: PushNotificationService, private swUpdate: SwUpdate) {
    console.log(swPush.isEnabled);
    if (swPush.isEnabled) {
      swPush
        .requestSubscription({
          serverPublicKey: VAPID_PUBLIC
        })
        .then(subscription => {
          pushService.sendSubscriptionToTheServer(subscription).subscribe();
        })
        .catch(console.error);
    }
  }
}
