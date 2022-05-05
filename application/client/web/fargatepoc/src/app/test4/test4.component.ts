import { Component, OnInit } from '@angular/core';
import { Test4Service } from './test4.service';

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.scss'],
})

export class Test4Component implements OnInit {
    public test4 = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name4: '',
    }

    constructor (
        private test4Service: Test4Service,
    ) { }

    ngOnInit() {
        this.test4.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.test4Service.GpCreate(this.test4).subscribe(data => {
            this.test4.name4 = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}