import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';
import { ActivatedRoute, Router} from '@angular/router';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { issue } from '../../../../../backend/models/issues.js'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  
  displayedColumns: string[] = ['title', 'severity', 'status'];
  data: issue []= [];
  //dataSource = new IssueDataSource(this.issue);
  isLoadingResults = true;


  constructor(public issue: IssueService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getIssues();
  }

  getIssues() {
    this.issue.getIssues()
      .subscribe((res: any) => {
      this.data = res;
      console.log(this.data);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }

}

//export class IssueDataSource extends DataSource<any> {
  //constructor(private issue: IssueService) {
    //super()
  //}

  //connect(){
    //return this.issue.getIssues();
 // }

  //disconnect(){
    
  //}
//}
