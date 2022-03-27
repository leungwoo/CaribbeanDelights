import { Component, OnInit } from '@angular/core';
import { flyInOut } from 'src/app/animations/animation';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  host: { '[@flyInOut]': 'true', style: 'display:block' },
  animations: [flyInOut()],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
