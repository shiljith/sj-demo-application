# SJ Progress Bar
A fully dynamic progress bar for Angular applications.

## Installation
```sh
npm install sj-progress-bar --save
```
## Usage
Import the SJProgressBarModule.
```ts
import { SJProgressBarModule } from 'sj-progress-bar';
@NgModule({
  imports: [
    ...
    SJProgressBarModule
  ]
  ...
})
export class AppModule { }
```
Include sj-progress-bar in your component html file.
```html
<sj-progress-bar></sj-progress-bar>
```
Customize the the sj-progress-bar for your application

You can use the following properties to customize the **sj-progress-bar** component in your template:

#### Options
|   Option| Default  | Values |Description  |
| ------------ | ------------| ------------| ------------ |
|   value | 0   | 0-100 |The value of the progress bar between 0-100.  |
| color | #1976d2 | Any color | The color of the progress bar. You can give any color of your choice|
| stripes | false | true/false| It is a boolean value which can enable or disable the stripes animation  |
| showPercentage | false | true/false|This flag helps to hide and show the percentage value of the progress bar. |
| percentagePosition | center | left/center/right |This attribute can positioning the pecentage value |
| percentageColor| dark| dark/light| This can change the percentage color to dark or light|

#### Example:
```html
<sj-progress-bar 
            [value]="100" 
            [stripes]="true" 
            color="blue" 
            [showPercentage]="true"
            percentagePosition="left"
></sj-progress-bar>
```
## Demo
Simple examples using sj-progress-bar:

Online demo available [here](http://https://sj-demo-application.herokuapp.com "here")

## Author
[Shiljith Mp](http://shiljith.com "Shiljith Mp") (Angular Developer)

## License
[MIT](https://github.com/shiljith/sj-demo-application/blob/dev/LICENCE "MIT")