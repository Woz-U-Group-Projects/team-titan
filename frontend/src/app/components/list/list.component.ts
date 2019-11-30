import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';
import { ActivatedRoute, Router} from '@angular/Router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  issues: any =[];

  constructor(public issue: IssueService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getIssues();
  }

  getIssues() {
    this.issues =[];
    this.issue.getIssues().subscribe((data:{}) => {
      console.log(data);
      this.issues = data;
    })
  }

  add() {
    this.router.navigate(['/create']);
  }

  delete(id) {
    this.issue.deleteIssue(id)
    .subscribe(res => {
      this.getIssues();
    }, (err) => {
      console.log(err);
    }
   );
  }

}
