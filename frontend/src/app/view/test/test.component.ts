import {Component, OnInit} from '@angular/core';
import {AmazingTimePickerService} from 'amazing-time-picker';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  selectedTime: string;

  constructor(private atp: AmazingTimePickerService) {
  }

  ngOnInit() {
  }

  open() {
    const amazingTimePicker = this.atp.open({
      theme: 'material-orange',
    });
    amazingTimePicker.afterClose().subscribe(time => {
      this.selectedTime = time;
    });
  }
}
