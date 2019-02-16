import { Component, OnInit } from '@angular/core';
import {
  IMqttMessage,
  MqttService,
  IMqttServiceOptions
} from 'ngx-mqtt';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private subscription: Subscription;
  public message: string;

  constructor(private _mqttService: MqttService) {
    this.subscription = this._mqttService.observe('my/topic').subscribe((message: IMqttMessage) => {
      this.message = message.payload.toString();
    });
   }

  ngOnInit() {
  }

}
