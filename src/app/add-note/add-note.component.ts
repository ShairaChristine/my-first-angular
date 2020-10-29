import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  note:string = ''
  isAddNoteClick = false
  isHeaderRed = false
  storedNotes = ['Don\'t forget to smile today', 'Dinner with friends @ 8pm']

  constructor() { }

  ngOnInit(): void {
  }

  addNote(event: Event){
    this.isAddNoteClick = true
    console.log('this.isAddNoteClick : ', this.isAddNoteClick );
    if(!this.note){
      this.isAddNoteClick = false
    } else{
      this.storedNotes.push(this.note)
    }
  }

}
 