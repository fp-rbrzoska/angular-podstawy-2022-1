import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'fp-home',
  templateUrl: './home.component.html',
  //template: `<div>HOME</div>`,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myTitle = '';
  @Output() uppercase = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
  }

  clickHandler(ev: MouseEvent) {
    console.log(ev)
    this.uppercase.emit(this.myTitle.toUpperCase())
  }

}
