import { Component } from '@angular/core';
import { LeftAuth } from '../../shared/left-auth/left-auth';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [
    LeftAuth,
    RouterOutlet
  ],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css'],
})
export class Layout {

}
