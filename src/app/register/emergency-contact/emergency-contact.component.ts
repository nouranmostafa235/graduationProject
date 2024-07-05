// import { Component } from '@angular/core';
// import { FormArray, FormGroup } from '@angular/forms';
// import { Router } from '@angular/router';
// import { RegisterationFormService } from 'src/app/registeration-form.service';
// import Swal from 'sweetalert2';
// @Component({
//   selector: 'app-emergency-contact',
//   templateUrl: './emergency-contact.component.html',
//   styleUrls: ['./emergency-contact.component.css']
// })
// export class EmergencyContactComponent {
  
//   emergencyContacts = [
//     { address: '', firstName: '', lastName: '', phone: '' },
//     { address: '', firstName: '', lastName: '', phone: '' }
//   ];
// formData:any;
// constructor(private _reg: RegisterationFormService, private router: Router) {
//   // this.formData=this._reg.getFormData();
//  }
//  addItem() {
//   this._reg.addToArray(this.emergencyContacts);
//   this.emergencyContacts = [
//     { address: this.emergencyContacts[0].address, firstName: this.emergencyContacts[0].firstName, lastName: this.emergencyContacts[0].lastName, phone: this.emergencyContacts[0].phone },
//     { address: this.emergencyContacts[1].address, firstName: this.emergencyContacts[1].firstName, lastName:this.emergencyContacts[1].lastName, phone: this.emergencyContacts[1].phone }
//   ];
// }
// submitForm() {
//   this._reg.setFormData({
//     emergencyContacts:this.emergencyContacts
//   })
//   this.formData=this._reg.getFormData();
//   const formDataa = new FormData();
//   for (const key in this.formData) {
//     if (this.formData.hasOwnProperty(key) && key !== 'profile_images') {
//       if (key === 'emergencyContacts' || key ==='personalAllergiesHistory' || key ==='familyMedicalHistory' || key==='personalMedicalHistory' || key==='personalSurgicalHistory') {
//         formDataa.append(key, JSON.stringify(this.formData[key]));
        
//       } else {
//         formDataa.append(key, this.formData[key]);
//       }
//     }
//   }

//   if (this.formData.profile_images) {          
//     formDataa.append('profile_images', this.formData.profile_images, this.formData.profile_images.name);
//   }

 
//   this._reg.handleRegister(formDataa).subscribe({
//     next:(response)=>{ console.log(response)
//       Swal.fire({
//         title: 'Success!',
//         text: 'You have successfully signed up!',
//         icon: 'success',
//         confirmButtonText: 'OK'
//       }).then((result) => {
//         if (result.isConfirmed) {
//           this.router.navigate(['/login']);
//         }
//       });
//     },
//     error: (err) => {
//       console.error('Error:', err);
//       Swal.fire({
//         title: 'Error!',
//         text: 'There was an error during sign up. Please try again.',
//         icon: 'error',
//         confirmButtonText: 'OK'
//       });
//     }
//   })  
// }
 
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterationFormService } from 'src/app/registeration-form.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: ['./emergency-contact.component.css']
})
export class EmergencyContactComponent implements OnInit {
  emergencyContactsForm: FormGroup=new FormGroup({});
  formData: any;

  constructor(
    private fb: FormBuilder,
    private _reg: RegisterationFormService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.emergencyContactsForm = this.fb.group({
      emergencyContacts: this.fb.array([
        this.createEmergencyContactFormGroup(),
        this.createEmergencyContactFormGroup()
      ])
    });
  }

  get emergencyContacts() {
    return this.emergencyContactsForm.get('emergencyContacts') as FormArray;
  }

  createEmergencyContactFormGroup(): FormGroup {
    return this.fb.group({
      address: ['', Validators.required],
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      phone: ['', [Validators.required, Validators.pattern('^01[0-9]{9}$')]]
    });
  }

  addItem() {
    this.emergencyContacts.push(this.createEmergencyContactFormGroup());
  }

  submitForm() {
    if (this.emergencyContactsForm.invalid) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill in all required fields correctly.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return;
    }

    this._reg.setFormData({
      emergencyContacts: this.emergencyContactsForm.value.emergencyContacts
    });

    this.formData = this._reg.getFormData();
    const formDataa = new FormData();
    for (const key in this.formData) {
      if (this.formData.hasOwnProperty(key) && key !== 'profile_images') {
        if (
          key === 'emergencyContacts' ||
          key === 'personalAllergiesHistory' ||
          key === 'familyMedicalHistory' ||
          key === 'personalMedicalHistory' ||
          key === 'personalSurgicalHistory'
        ) {
          formDataa.append(key, JSON.stringify(this.formData[key]));
        } else {
          formDataa.append(key, this.formData[key]);
        }
      }
    }

    if (this.formData.profile_images) {
      formDataa.append('profile_images', this.formData.profile_images, this.formData.profile_images.name);
    }

    this._reg.handleRegister(formDataa).subscribe({
      next: (response) => {
        console.log(response);
        Swal.fire({
          title: 'Success!',
          text: 'You have successfully signed up!',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            this.router.navigate(['/login']);
          }
        });
      },
      error: (err) => {
        console.error('Error:', err);
        Swal.fire({
          title: 'Error!',
          text: 'There was an error during sign up. Please try again.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    });
  }
}

