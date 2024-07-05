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
  nfcError: string | null = null;
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

  async startNfcScan() {
    this.nfcError = null; // Reset the error message
    if ('NDEFReader' in window) {
      try {
        const ndef = new (window as any).NDEFReader();
        console.log('NDEFReader initialized.');

        await ndef.scan();
        console.log('NFC scan started.');

        ndef.onreading = (event: any) => {
          console.log('NFC reading event:', event);
          const message = event.message;
          console.log('NFC message:', message);

          for (const record of message.records) {
            console.log('NFC record:', record);
            if (record.recordType === 'text') {
              const textDecoder = new TextDecoder(record.encoding);
              const userId = textDecoder.decode(record.data);
              console.log('NFC tag read:', userId);
              this.route.navigate(['/clinic/viewUser'], { queryParams: { id: userId } });
            } else {
              console.warn('Unsupported NFC record type:', record.recordType);
            }
          }
        };

        ndef.onreadingerror = (event: any) => {
          console.error('NFC reading error:', event);
          this.nfcError = 'Error reading NFC tag. Please try again.';
        };
      } catch (error: any) {
        console.error('NFC scanning error:', error);
        if (error.name === 'NotAllowedError') {
          this.nfcError = 'Permission to use NFC was denied. Please allow NFC access and try again.';
        } else if (error.name === 'NotSupportedError') {
          this.nfcError = 'NFC is not supported on this device or browser.';
        } else {
          this.nfcError = 'NFC scanning failed. Please ensure NFC is enabled and try again.';
        }
      }
    } else {
      console.error('Web NFC is not supported by this browser.');
      this.nfcError = 'Web NFC is not supported by this browser.';
    }

  
}
}
