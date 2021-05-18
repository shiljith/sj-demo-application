## SJ Progress Bar
A fully dynamic progress bar for Angular applications.

## Installation
npm install sj-progress-bar --save
Usage
Import the SJProgressBarModule.

import { SJProgressBarModule } from 'sj-progress-bar';
@NgModule({
  imports: [
    ...
    SJProgressBarModule
  ]
  ...
})
export class AppModule { }
Include sj-progress-bar in your component html file.

<sj-progress-bar></sj-progress-bar>
Customize the the sj-progress-bar for your application

You can use the following properties to customize the sj-progress-bar component in your template:

value - The value of progress bar. Default value is 0.
color - The color of progress bar. Default is green (#2bc253). You can give any color of your choice.
stripes - The flag helps hide and show the animation progress of progress bar. Default value is false.
showPercentage - The flag helps hide and show the percentage value of progress bar. Default value is false.
percentagePosition - The percentagePosition value of the progress bar. This only works when the showPercentage flag is true. Default value is left. Two values left and right
Example:

<sj-progress-bar 
            [value]="100" 
            [stripes]="true" 
            color="blue" 
            [showPercentage]="true"
            percentagePosition="left"
></sj-progress-bar>

## Demo
Simple examples using sj-progress-bar:

Online demo available here

## Author
Shiljith Mp (Angular Developer)

## License
MIT