import { Component, OnInit } from '@angular/core';
import { flyInOut } from 'src/app/animations/animation';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
  host: { '[@flyInOut]': 'true', style: 'display:block' },
  animations: [flyInOut()],
})
export class AboutusComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
