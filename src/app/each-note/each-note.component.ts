import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-each-note',
  templateUrl: './each-note.component.html',
  styleUrls: ['./each-note.component.css']
})
export class EachNoteComponent implements OnInit {

  @Input() perNote: string

  constructor() { }

  ngOnInit(): void {
  }

}
