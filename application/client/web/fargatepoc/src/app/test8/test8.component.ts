import { Component, OnInit } from '@angular/core';
import { Test8Service } from './test8.service';

@Component({
  selector: 'app-test8',
  templateUrl: './test8.component.html',
  styleUrls: ['./test8.component.scss'],
})

export class Test8Component implements OnInit {
    public test8 = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
    }

    constructor (
        private test8Service: Test8Service,
    ) { }

    ngOnInit() {
        this.test8.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.test8Service.GpCreate(this.test8).subscribe(data => {
            this.test8.name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}