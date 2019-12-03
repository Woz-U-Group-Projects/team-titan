import { Component, OnInit, Input } from '@angular/core';
import { IssueService } from '../issue.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() issueData: any = { title:'', description: '', severity: '', responsible: '', status: '' };
  
  constructor( public issue: IssueService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.issue.getIssuesId(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.issueData = data;
    });
  }

  //updateIssue() {
   // this.issue.updateIssue(this.route.snapshot.params['id'], this.issueData).subscribe((result) => {
     // this.router.navigate(['/issue-details/'+result._id]);
   // }, (err) => {
     // console.log(err);
    //});
 // }

}
