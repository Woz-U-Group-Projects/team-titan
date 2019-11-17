import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {IssueService} from '../../issue.service';
=======

>>>>>>> 50a72b6e5ce678c58e215d04090b56f77cf47d86
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

<<<<<<< HEAD
  constructor(private issueService: IssueService) { }

  ngOnInit() {
    this.issueService.getIssues().subscribe((issues) => {
      console.log(issues);
    });
=======
  constructor() { }

  ngOnInit() {
>>>>>>> 50a72b6e5ce678c58e215d04090b56f77cf47d86
  }

}
