import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PushNotificationService } from './pushNotification.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })],
  providers: [PushNotificationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
