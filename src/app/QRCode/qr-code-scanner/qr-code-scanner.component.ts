import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { Result } from '@zxing/library';
import { NgxScannerQrcodeComponent, ScannerQRCodeResult } from 'ngx-scanner-qrcode';
import { Router } from '@angular/router';
@Component({
  selector: 'app-qr-code-scanner',
  templateUrl: './qr-code-scanner.component.html',
  styleUrls: ['./qr-code-scanner.component.css']
})
export class QrCodeScannerComponent{
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
          this.route.navigate(['/clinic/viewUser'], { queryParams: { id: id } })
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
