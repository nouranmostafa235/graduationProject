import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Result } from '@zxing/library';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-qr-code-scanner',
  templateUrl: './qr-code-scanner.component.html',
  styleUrls: ['./qr-code-scanner.component.css']
})
export class QrCodeScannerComponent implements OnInit {
  availableDevices: MediaDeviceInfo[] = [];
  currentDevice: MediaDeviceInfo | undefined;
  hasDevices: boolean = false;
  hasPermission: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  handleQrCodeResult(result: string): void {
    if (result) {
      console.log('QR Code result:', result);
      // Handle the scanned QR code result here
      Swal.fire('QR Code Scanned', `Result: ${result}`, 'success');
    } else {
      Swal.fire('Error', 'Failed to scan QR code. Please try again.', 'error');
    }
  }

  onCamerasFound(devices: MediaDeviceInfo[]): void {
    this.availableDevices = devices;
    this.hasDevices = Boolean(devices && devices.length);
    if (this.hasDevices) {
      // Select the first device as default (you can add logic to choose a specific device)
      this.currentDevice = devices[0];
    } else {
      Swal.fire('Warning', 'No cameras found. Please connect a camera and try again.', 'warning');
    }
  }

  onHasPermission(has: boolean): void {
    this.hasPermission = has;
    if (!has) {
      Swal.fire('Permission Denied', 'Camera access was denied. Please allow camera access and try again.', 'error');
    }
  }
}
