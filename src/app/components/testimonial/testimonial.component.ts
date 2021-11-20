import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/be-connection/services/users.service';
import { PageObj, User } from '../../be-connection/models/user.model';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  public usersloaded = false;
  public usersArray: User[] = [];
  constructor(private _usersService: UsersService) { }

  private paged: PageObj = {
    page: 1,
    per_page: 1,
  }

  ngOnInit(): void {
    this.usersloaded = false
    this._usersService.getUsers(this.paged).subscribe(
      (res: { data: User[]; }) => {
        this.usersloaded = true;
        this.usersArray = res.data
      },
      (err: any) => {
        this.usersloaded = true;
        alert('Something went wrong!')
      }
    );
  }

}
