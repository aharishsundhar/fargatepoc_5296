import { Component, OnInit } from '@angular/core';
import { Test10Service } from './test10.service';

@Component({
  selector: 'app-test10',
  templateUrl: './test10.component.html',
  styleUrls: ['./test10.component.scss'],
})

export class Test10Component implements OnInit {
    public test11 = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
    }

    constructor (
        private test10Service: Test10Service,
    ) { }

    ngOnInit() {
        this.test11.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.test10Service.GpCreate(this.test11).subscribe(data => {
            this.test11.name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}