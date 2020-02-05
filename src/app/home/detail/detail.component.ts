import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {

  isPerInfo = true;
  isEduInfo = false;
  isEmeInfo = false;
  isAddress = false;
  isNotes = false;

  constructor() { }

}
