import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  
  dona1: Label[] = ['Crema', 'Chocolate', 'Maní'];
  dona1Data: MultiDataSet = [[100, 100, 100]];

  dona2: Label[] = ['Crema', 'Chocolate', 'Maní'];
  dona2Data: MultiDataSet = [[200, 50, 50]];

  dona3: Label[] = ['Crema', 'Chocolate', 'Maní'];
  dona3Data: MultiDataSet = [[250, 25, 25]];

  dona4: Label[] = ['Crema', 'Chocolate', 'Maní'];
  dona4Data: MultiDataSet = [[290, 10, 10]];

}
