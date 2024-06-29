import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchClinic'
})
export class SearchClinicPipe implements PipeTransform {

  transform(clinics:any , searchTerm:any): any {
    return clinics.filter((clinic:any)=>clinic.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }

}
