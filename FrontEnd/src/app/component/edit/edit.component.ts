import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

=======
import {IssueService} from '../../issue.service';
>>>>>>> 3cea2f9849c7e2f480d2988d8aaebc57945948d9
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  constructor(private issueService: IssueService) { }
>>>>>>> 3cea2f9849c7e2f480d2988d8aaebc57945948d9

  ngOnInit() {
  }

}
