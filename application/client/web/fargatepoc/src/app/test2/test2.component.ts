import { Component, OnInit } from '@angular/core';
import { Test2Service } from './test2.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss'],
})

export class Test2Component implements OnInit {
    public test2 = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name2: '',
    }

    constructor (
        private test2Service: Test2Service,
    ) { }

    ngOnInit() {
        this.test2.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.test2Service.GpCreate(this.test2).subscribe(data => {
            this.test2.name2 = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}