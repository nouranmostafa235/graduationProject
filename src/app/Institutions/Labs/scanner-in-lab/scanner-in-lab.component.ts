import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxScannerQrcodeComponent, ScannerQRCodeResult } from 'ngx-scanner-qrcode';

@Component({
  selector: 'app-scanner-in-lab',
  templateUrl: './scanner-in-lab.component.html',
  styleUrls: ['./scanner-in-lab.component.css']
})
export class ScannerInLabComponent {
  @ViewChild('action', { static: true }) 
  action!: NgxScannerQrcodeComponent;
  qrCodeValue!: string;
  previousQrCodeValue!: string;
  constructor(private route:Router){}

  ngAfterViewInit() {
    this.action.data.subscribe((data: ScannerQRCodeResult[]) => {
      if (data.length > 0) {
        const newQrCodeValue = data[0].value;
        if (newQrCodeValue !== this.previousQrCodeValue) {
          this.qrCodeValue = newQrCodeValue;
          this.previousQrCodeValue = newQrCodeValue;
          const url = new URL(this.qrCodeValue);
          const id = url.searchParams.get('id');
          this.route.navigate(['/lab/viewUser'], { queryParams: { id: id } })
        }
      }
    });
  }
  toggleScanner() {
    if (this.action.isStart) {
      this.action.stop();
    } else {
      this.action.start();
    }
  }


}
