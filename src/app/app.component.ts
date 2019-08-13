import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  myVar: string = "Hola Mundo";
  saludo: string = "Buenos días Camila";
  users: User[] = [];

  constructor(private userService: UserService){

  }

  ngOnInit(){
    this.getUsers();
  }

  par(numero: number): boolean{
    return numero%2 === 0 ? true: false;
  }

  getUsers(){
    this.userService.getAll().subscribe(users => {
      this.users = users;
      console.log(this.users);
    });
  }


}
