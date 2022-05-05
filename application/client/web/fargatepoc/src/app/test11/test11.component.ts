import { Component, OnInit } from '@angular/core';
import { Test11Service } from './test11.service';

@Component({
  selector: 'app-test11',
  templateUrl: './test11.component.html',
  styleUrls: ['./test11.component.scss'],
})

export class Test11Component implements OnInit {
    public test10 = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
    }

    constructor (
        private test11Service: Test11Service,
    ) { }

    ngOnInit() {
        this.test10.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.test11Service.GpCreate(this.test10).subscribe(data => {
            this.test10.name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}