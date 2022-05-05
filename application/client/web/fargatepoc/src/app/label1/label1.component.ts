import { Component, OnInit } from '@angular/core';
import { Label1Service } from './label1.service';

@Component({
  selector: 'app-label1',
  templateUrl: './label1.component.html',
  styleUrls: ['./label1.component.scss'],
})

export class Label1Component implements OnInit {
    public test1 = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name1: '',
    }

    constructor (
        private label1Service: Label1Service,
    ) { }

    ngOnInit() {
        this.test1.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.label1Service.GpCreate(this.test1).subscribe(data => {
            this.test1.name1 = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}