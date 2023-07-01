// import { Component } from '@angular/core';
// import { UsersService } from './users.service';

// @Component({
// selector: 'app-root',
// templateUrl: './app.component.html',
// // styleUrls: ['./app.component.css']
// })
// export class AppComponent {
    
//  title ='angularApp';
// // currentDate = new Date();
// // js={name:'Alex',age:'20',address:{a1:'paris',a2:'london',a3:'bihar'}};
 
// //courses=['Html', 'bootstrap', 'css', 'node', 'angular'];

// //Employee = [

// //{
// //"id":"1","employee_name": "harshita","employee_salary": "100k", "employee_age":"20","profile_image":""
// //},
// //{
// //"id":"1","employee_name": "kirtika","employee_salary": "100k", "employee_age":"20","profile_image":""
// //},
// //{
// //"id":"1","employee_name": "Yuvi","employee_salary": "100k", "employee_age":"20","profile_image":""
// //},
// //]
// //}
// allUsers;
// constructor(private users:UsersService)
// {
// this.allUsers = users.getAllUser();
// }
// }

import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    preserveWhitespaces:false,
 styleUrls: ['./app.component.scss']
})
export class AppComponent {
   title='angular tutorial';
  YT='Anjalicoder';
    // getData (){
    //     return "ok"
    // }
    // obj={
    //     name:'anjali',age:'22'
    // }
    a=300;
    b=500;
    currentUrl=window.location.href;

    getYt(name:any)
    {
        alert(name);
    }
   // data binding
   name: string = 'John Doe';

     sayHello(): void {
    console.log('Hello!');
  }
// pipe example
  currentdate=new Date();
  mynumber:number=0.124657683334;

  ttitle='basic form  tutorial';
  userData:any = {

  };
  getData(data:NgForm)

  {
    console.warn(data)
    this.userData=data;
  }
}
