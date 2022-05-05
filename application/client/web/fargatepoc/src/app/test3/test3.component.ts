import { Component, OnInit } from '@angular/core';
import { Test3Service } from './test3.service';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.scss'],
})

export class Test3Component implements OnInit {
    public test3 = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name3: '',
    }

    constructor (
        private test3Service: Test3Service,
    ) { }

    ngOnInit() {
        this.test3.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.test3Service.GpCreate(this.test3).subscribe(data => {
            this.test3.name3 = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}