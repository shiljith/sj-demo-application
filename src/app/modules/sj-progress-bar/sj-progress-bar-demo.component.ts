import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sj-progress-bar',
  templateUrl: './sj-progress-bar-demo.component.html',
  styleUrls: ['./sj-progress-bar-demo.component.scss']
})
export class SjProgressBarDemoComponent implements OnInit {
  
  progressvalue: number = 10;
  isStripes: boolean = true;
  color: string = '#1976d2';
  isShowPercentage: boolean = false;
  percentagePosition: string = 'center';
  percentageColor: string = 'dark';

  positions: string[] = ['left', 'center', 'right'];
  percentageColors: string[] = ['dark', 'light'];

  constructor() { }

  ngOnInit(): void {

  }

  incrementValue(){
    this.progressvalue += 10;
  }

  decrementValue(){
    this.progressvalue -= 10;
  }

  onPositionChange(position: any){
    console.log(position.value);
    this.percentagePosition = position.value;
  }
  onPercentageColorChange(color: any){
    console.log(color.value);
    this.percentageColor = color.value;
  }

}
