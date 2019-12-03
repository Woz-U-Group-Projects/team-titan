import { Component, OnInit, Input } from '@angular/core';
import { IssueService } from '../issue.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @Input() issueData = {title:'', description:'', severity: ''};

  constructor(public issue: IssueService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit() {
  }

  addIssue() {
    this.issue.addIssues(this.issueData).subscribe((result) => {
        this.router.navigate(['/create']);
      //this.router.navigate(['/issue-details/'+result._id]);
    }, (err) => {
      console.log(err);
    })
  }

}
