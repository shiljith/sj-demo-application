import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'sj-progress-bar',
  templateUrl: 'sj-progress-bar.component.html',
  styleUrls: ['./sj-progress-bar.component.css']
})
export class SjProgressBarComponent implements OnInit, OnChanges {
  @Input('value') width: number = 0;
  @Input('color') color: string = '#1976d2';
  @Input('stripes') stripes: boolean = false;
  @Input('showPercentage') showPercentage: boolean = false;
  @Input('percentagePosition') percentagePosition: string = 'center';
  @Input('percentageColor') percentageColor: string = 'dark';

  error: boolean = false;

  constructor() { }

  ngOnInit(): void {
    
    
  }

  ngOnChanges() {
    if(this.width < 0) {
      this.width = 0;
      this.error = true;
    }else if(this.width > 100){
      this.width = 100;
      this.error = true;
    }else{
      this.error = false;
    }
  }

}
