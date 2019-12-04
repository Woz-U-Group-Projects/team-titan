import { Component, OnInit, Input } from '@angular/core';
import { IssueService } from '../issue.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  issueForm: FormGroup;
  _id = '';
  title = '';
  description = '';
  responsible = '';
  severity = '';
  status = '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher()
  
  
  constructor( private issue: IssueService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder ) { }

  ngOnInit() {
    this.getIssue(this.route.snapshot.params['id']);
    this.issueForm = this.formBuilder.group({
      'title' : [null, Validators.required],
      'description' : [null, Validators.required],
      'responsible' : [null, Validators.required],
      'severity' : [null, Validators.required],
      'status' : [null, Validators.required]
    })
  };

  getIssue(id: any) {
    this.issue.getIssue(id).subscribe((data: any) => {
      this._id = data._id;
      this.issueForm.setValue({
        title: data.title,
        description: data.description,
        responsible: data.responsible,
        severity: data.severity,
        status: data.status,
      });
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;
    this.issue.updateIssue(this._id, this.issueForm.value)
      .subscribe((res: any) => {
        this.isLoadingResults = false;
        this.router.navigate(['/list'])
      }, (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
      })
  }
  
  issueDetails() {
    this.router.navigate(['/issue-details', this._id]);
  }

  

}
