import { Component, OnInit } from '@angular/core';
import { Test9Service } from './test9.service';

@Component({
  selector: 'app-test9',
  templateUrl: './test9.component.html',
  styleUrls: ['./test9.component.scss'],
})

export class Test9Component implements OnInit {
    public test9 = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
    }

    constructor (
        private test9Service: Test9Service,
    ) { }

    ngOnInit() {
        this.test9.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.test9Service.GpCreate(this.test9).subscribe(data => {
            this.test9.name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}