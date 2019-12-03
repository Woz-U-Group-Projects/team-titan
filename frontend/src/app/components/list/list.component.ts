import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';
import { Router} from '@angular/Router';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  issues: any;
  displayedColums = ['Title', 'Description', 'Severity', 'Responsible', ' Status', 'Id'];
  dataSource = new IssueDataSource(this.issues);


  constructor(public issue: IssueService, private router: Router) { }

  ngOnInit() {
    this.getIssues();
  }

  getIssues() {
    this.issue.getIssues()
      .subscribe(res => {
      console.log(res);
      this.issues = res;
    }, err => {
      console.log(err);
    });
  }

}

export class IssueDataSource extends DataSource<any> {
  constructor(private issue: IssueService) {
    super()
  }

  connect(){
    return this.issue.getIssues();
  }

  disconnect(){
    
  }
}
