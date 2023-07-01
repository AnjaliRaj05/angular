import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getAllUser() {

    return[
      
    {name:'mani',email:'mani@gmail.com',phone:'123'},
    {name:'Anjali',email:'anjali@gmail.com',phone:'123'},
    {name:'payal',email:'payal@gmail.com',phone:'123'},
    {name:'kushal',email:'kushal@gmail.com',phone:'123'}


    ]
  }


}
