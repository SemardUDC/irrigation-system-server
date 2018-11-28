import { TestBed, inject } from '@angular/core/testing';

import { MqttService } from './mqtt.service';

describe('MqttService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MqttService]
    });
  });

  it('should be created', inject([MqttService], (service: MqttService) => {
    expect(service).toBeTruthy();
  }));
});
