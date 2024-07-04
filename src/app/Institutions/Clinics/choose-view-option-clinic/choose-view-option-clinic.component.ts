import { Component } from '@angular/core';

@Component({
  selector: 'app-choose-view-option-clinic',
  templateUrl: './choose-view-option-clinic.component.html',
  styleUrls: ['./choose-view-option-clinic.component.css']
})
export class ChooseViewOptionClinicComponent {
  showScanner = false;
  scannedValue: string | null = null;

  openScanner() {
    this.showScanner = true;
  }

  closeScanner() {
    this.showScanner = false;
    this.scannedValue = null; // Reset scanned value when closing the scanner
  }

  handleQrCodeResult(result: any): void {
    this.scannedValue = result;
    this.closeScanner(); // Optionally close the scanner after a successful scan
  }
}
