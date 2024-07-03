import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Result } from '@zxing/library';
@Component({
  selector: 'app-qr-code-scanner',
  templateUrl: './qr-code-scanner.component.html',
  styleUrls: ['./qr-code-scanner.component.css']
})
export class QrCodeScannerComponent implements OnInit{
  availableDevices: MediaDeviceInfo[];
  currentDevice: MediaDeviceInfo | undefined;
  hasDevices: boolean;
  hasPermission: boolean;

  constructor() {
    this.availableDevices = [];
    this.hasDevices = false;
    this.hasPermission = false;
  }

  ngOnInit(): void {}

  handleQrCodeResult(result: string): void {
    console.log('QR Code result:', result);
    // Handle the scanned QR code result here
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
    if (this.hasDevices) {
      // Select the first device as default (you can add logic to choose a specific device)
      this.currentDevice = devices[0];
    }
  }

  onHasPermission(has: boolean): void {
    this.hasPermission = has;
  }
}
