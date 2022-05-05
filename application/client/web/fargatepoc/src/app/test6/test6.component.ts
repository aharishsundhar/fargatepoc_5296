import { Component, OnInit } from '@angular/core';
import { Test6Service } from './test6.service';

@Component({
  selector: 'app-test6',
  templateUrl: './test6.component.html',
  styleUrls: ['./test6.component.scss'],
})

export class Test6Component implements OnInit {
    public test6 = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
    }

    constructor (
        private test6Service: Test6Service,
    ) { }

    ngOnInit() {
        this.test6.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.test6Service.GpCreate(this.test6).subscribe(data => {
            this.test6.name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}