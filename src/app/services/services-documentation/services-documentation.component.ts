import { Component, OnInit } from '@angular/core';
import { User } from '../user/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-services-documentation',
  templateUrl: './services-documentation.component.html',
  styleUrl: './services-documentation.component.css'
})
export class ServicesDocumentationComponent implements OnInit {
  public user = new User();
  constructor(public userService: UserService) { }

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

}
