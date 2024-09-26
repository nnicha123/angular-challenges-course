import { Component, OnInit } from '@angular/core';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';
import { SnackbarService } from '../snackbar/snackbar.service';

@Component({
  selector: 'app-services-documentation',
  templateUrl: './services-documentation.component.html',
  styleUrl: './services-documentation.component.css'
})
export class ServicesDocumentationComponent implements OnInit {
  public user = new User();
  constructor(public userService: UserService, public snackbarService:SnackbarService) { }

  ngOnInit(): void {
      this.userService.getUserById(1).subscribe({
        next: (response:any) => {
          this.user = response
        },
        error: (error) => {
          console.log(error)
        },
        complete: () => {
          console.log('DONE!')
        }
      })
  }

  callSnackbar():void{
    this.snackbarService.callSnackbar('Snackbar service example');
  }

}
