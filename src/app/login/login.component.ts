import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from '../sign-in.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router:Router, private _service:SignInService){}
  login:FormGroup = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.minLength(8)]),
  })

  nfcError: string | null = null;

  // constructor(private router: Router) {}

  async startNfcScan() {
    if ('NFCReader' in window) {
      try {
        const ndef = new (window as any).NDEFReader();
        await ndef.scan();

        ndef.onreading = (event: any) => {
          const message = event.message;
          for (const record of message.records) {
            if (record.recordType === "text") {
              const textDecoder = new TextDecoder(record.encoding);
              const userId = textDecoder.decode(record.data);
              console.log('NFC tag read:', userId);
              this.router.navigate(['/clinic/viewUser'], { queryParams: { id: userId } });
            }
          }
        };

        ndef.onreadingerror = (event: any) => {
          console.error('NFC reading error:', event);
          this.nfcError = 'Error reading NFC tag. Please try again.';
        };
      } catch (error) {
        console.error('NFC scanning error:', error);
        this.nfcError = 'NFC scanning failed. Please ensure NFC is enabled and try again.';
      }
    } else {
      this.nfcError = 'Web NFC is not supported by this browser.';
    }
  }


  handle(reg:FormGroup){
    this._service.login(reg.value).subscribe({
      next:(response)=>{
       
        if(response.message === "Sign in successful"){
          localStorage.setItem('Authorization',"Bearer "+response.token)
          this._service.decodeToken()
          this.router.navigate(['/UserProfile/profile'])
        }
        },
      error:(err)=>console.log(err),
    })
}


}
