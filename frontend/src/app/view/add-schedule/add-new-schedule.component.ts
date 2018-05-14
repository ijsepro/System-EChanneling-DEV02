import { Component, OnInit } from '@angular/core';
import {AmazingTimePickerService} from 'amazing-time-picker';

@Component({
  selector: 'app-add-new-schedule',
  templateUrl: './add-new-schedule.component.html',
  styleUrls: ['./add-new-schedule.component.css']
})
export class AddNewScheduleComponent implements OnInit {
  from: string;
  to: string;

  constructor(private atp: AmazingTimePickerService) {
  }


  ngOnInit() {
  }
  openFrom() {
    const amazingTimePicker = this.atp.open({
      theme: 'material-orange',
    });
    amazingTimePicker.afterClose().subscribe(time => {
      this.from = time;
    });
  }
  openTo() {
    const amazingTimePicker = this.atp.open({
      theme: 'material-purple',
    });
    amazingTimePicker.afterClose().subscribe(time => {
      this.to = time;
    });
  }
}
