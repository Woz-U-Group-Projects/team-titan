import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';
import { ActivatedRoute, Router} from '@angular/Router';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.css']
})
export class IssueDetailsComponent implements OnInit {

  issues: any =[];

  constructor(public issue: IssueService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.issue.getIssuesId(this.route.snapshot.params['id']).subscribe((data:{}) => {
      console.log(data);
      this.issues = data;
    });
  }

  

}
