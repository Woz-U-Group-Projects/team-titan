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
    const txt = "The bug was not removed";
<<<<<<< HEAD
    const r = confirm ("Selecting OK will remove the bug from the database!");
    if (r == true) {
=======
    const r = confirm("Clicking OK will remove this bug from the database and list of bugs!");
      if (r == true){
>>>>>>> 408e9537b5b8ab21c3132c8d9a5924dde28cd7c5
    this.issue.deleteIssue(id)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/list']);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
<<<<<<< HEAD
      })
=======
      });
>>>>>>> 408e9537b5b8ab21c3132c8d9a5924dde28cd7c5
  } else {
    console.log(txt);
    this.isLoadingResults = false;
  }
 }
}
