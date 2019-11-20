import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

=======
import {IssueService} from '../../issue.service';
>>>>>>> 3cea2f9849c7e2f480d2988d8aaebc57945948d9
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit() {
=======
  constructor(private issueService: IssueService) { }

  ngOnInit() {
    this.issueService.getIssues().subscribe((issues) => {
      console.log(issues);
    });
>>>>>>> 3cea2f9849c7e2f480d2988d8aaebc57945948d9
  }

}
