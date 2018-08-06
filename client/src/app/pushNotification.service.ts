import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const SERVER_URL = 'http://localhost:3000/subscription';

@Injectable()
export class PushNotificationService {
  constructor(private http: HttpClient) {}

  public sendSubscriptionToTheServer(subscription: PushSubscription) {
    return this.http.post(SERVER_URL, subscription);
  }
}
