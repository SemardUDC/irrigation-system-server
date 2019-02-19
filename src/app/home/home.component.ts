import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  IMqttMessage,
  MqttService
} from 'ngx-mqtt';
import { Observable,Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {

  private subscription: Subscription;
  public message: string;
  phType: string = "Gauge"
  phData:Array<Array<any>> = [['Nivel de PH',7]];
  phOptions: {} = {
    width: 400, 
    height: 150,
    max: 14
  }

  tempdata: Object = {
    "chart": {
        "lowerLimit": "50",
        "upperLimit": "0",
        "decimals": "5",
        "numberSuffix": "°C",
        "showhovereffect": "1",
        "thmFillColor": "#008ee4",
        "showGaugeBorder": "1",
        "gaugeBorderColor": "#008ee4",
        "gaugeBorderThickness": "2",
        "gaugeBorderAlpha": "30",
        "thmOriginX": "100",
        "chartBottomMargin": "20",
        "valueFontColor": "#000000",
        "showValue": "1"
    },
    "value": "32",

}

  constructor(private _mqttService: MqttService) {
    this.subscription = this._mqttService.observe('my/topic').subscribe((message: IMqttMessage) => {
      this.message = message.payload.toString();
    });
   }
  
  public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, {qos: 1, retain: true});
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
