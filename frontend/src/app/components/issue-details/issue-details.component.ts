import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';
import { ActivatedRoute, Router} from '@angular/router';
import { issue } from '../../../../../backend/models/issues.js';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.css']
})
export class IssueDetailsComponent implements OnInit {

  issueDetails: issue = { _id: '', title: '', description: '', severity: '', responsible: '', status: '' };
  isLoadingResults = true;

  constructor(private issue: IssueService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getIssueDetails(this.route.snapshot.params['id']);
  }

  getIssueDetails(id: any) {
    this.issue.getIssue(id)
        .subscribe((data: any) => {
        this.issueDetails = data;
        console.log(this.issueDetails);
        this.isLoadingResults = false;
      });
    }
  
  deleteIssue(id: any) {
    this.isLoadingResults = true;
    this.issue.deleteIssue(id)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/list']);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }
}
