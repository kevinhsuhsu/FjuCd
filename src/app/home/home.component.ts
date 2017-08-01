import { Component, OnInit } from '@angular/core';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  typed: string;
  ngOnInit() {
    this.typed = new Typed('.typed', {
      strings: ['歡迎來到輔大崇德志工社', '最新消息都在這裡', '可以網路報名參加活動'],
      typeSpeed: 100,
      backDelay: 900,
      loop: true
    });
  }
}
