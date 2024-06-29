import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchLabs'
})
export class SearchLabsPipe implements PipeTransform {

  transform(labs:any , searchTerm:any): any {
    return labs.filter((lab:any)=>lab.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }

}
