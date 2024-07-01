import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUsers'
})
export class SearchUsersPipe implements PipeTransform {

  transform(users:any , email:any): any {
    return users.filter((user:any)=>user.email.toLocaleLowerCase().includes(email.toLocaleLowerCase()));
  }

}
