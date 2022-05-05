import { Component, OnInit } from '@angular/core';
import { Test7Service } from './test7.service';

@Component({
  selector: 'app-test7',
  templateUrl: './test7.component.html',
  styleUrls: ['./test7.component.scss'],
})

export class Test7Component implements OnInit {
    public test7 = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
    }

    constructor (
        private test7Service: Test7Service,
    ) { }

    ngOnInit() {
        this.test7.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.test7Service.GpCreate(this.test7).subscribe(data => {
            this.test7.name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}