import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    animations: [routerTransition()]
})
export class BlankPageComponent implements OnInit {
    constructor() {}

    ngOnInit() {}

    onSubmit() {
        
      }
}
