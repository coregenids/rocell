import { Component, ViewChild } from '@angular/core';
import { SharedModule } from 'src/app/theme/shared/shared.module';


import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexLegend,
  ApexFill,
  ApexGrid,
  ApexPlotOptions,
  ApexTooltip,
  ApexMarkers,
  ApexResponsive,
  ApexTheme,
  NgApexchartsModule
} from 'ng-apexcharts';
import { ChartDB } from 'src/app/fack-db/chartData';
import { ProductSaleComponent } from '../../dashboard/product-sale/product-sale.component';

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  fill: ApexFill;
  responsive: ApexResponsive[];
  grid: ApexGrid;
  markers: ApexMarkers;
  theme: ApexTheme;
};

@Component({
  selector: 'app-sorting',
  standalone: true,
  imports: [SharedModule, NgApexchartsModule, ProductSaleComponent],
  templateUrl: './sorting.component.html',
  styleUrl: './sorting.component.scss'
})
export default class SortingComponent {
  filters = {
    date: '',
    shift: '',
    line: ''
  };

  // public donutChart: Partial<{ series: ApexNonAxisChartSeries; chart: ApexChart; labels: string[]; responsive: ApexResponsive[]; }>;
  // public barChart: Partial<{ series: ApexAxisChartSeries; chart: ApexChart; xaxis: ApexXAxis; plotOptions: ApexPlotOptions; }>;

  
  // public props
  @ViewChild('chart') chart!: ChartComponent;
  @ViewChild('customerChart') customerChart!: ChartComponent;
  chartOptions!: Partial<ChartOptions>;
  chartOptions_1!: Partial<ChartOptions>;
  chartOptions_2!: Partial<ChartOptions>;
  chartOptions_3!: Partial<ChartOptions>;
  
  line1CAC!: Partial<ChartOptions>;
  bar1CAC: Partial<ChartOptions>;
  
  pie1CAC!: Partial<ChartOptions>;
  pie2CAC!: Partial<ChartOptions>;
bar2CAC!: Partial<ChartOptions>;
  chartDB: any;
  // line1CAC!: Partial<ChartOptions>;
  line2CAC!: Partial<ChartOptions>;
  line3CAC: Partial<ChartOptions>;
  area1CAC: Partial<ChartOptions>;
  // bar1CAC: Partial<ChartOptions>;
  chartOptions_11: Partial<ChartOptions>;
  // bar2CAC: Partial<ChartOptions>;
  bar3CAC: Partial<ChartOptions>;
  bar4CAC: Partial<ChartOptions>;
  mixed1CAC: Partial<ChartOptions>;
  mixed2CAC: Partial<ChartOptions>;
  candlestickCAC: Partial<ChartOptions>;
  bubble1CAC: Partial<ChartOptions>;
  bubble2CAC: Partial<ChartOptions>;
  scatter1CAC: Partial<ChartOptions>;
  scatter2CAC: Partial<ChartOptions>;
  heatMap1CAC: Partial<ChartOptions>;
  heatMap2CAC: Partial<ChartOptions>;
  // pie1CAC: Partial<ChartOptions>;
  // pie2CAC: Partial<ChartOptions>;
  radialBar1CAC: Partial<ChartOptions>;
  radialBar2CAC: Partial<ChartOptions>;
  radar1CAC: Partial<ChartOptions>;
  radar2CAC: Partial<ChartOptions>;

  /**
   *
   */
  
  constructor() {
    this.chartDB = ChartDB;
    const {
      line1CAC,
      line3CAC,
      area1CAC,
      bar1CAC,
      chartOptions_11,
      bar2CAC,
      bar3CAC,
      bar4CAC,
      mixed1CAC,
      mixed2CAC,
      candlestickCAC,
      bubble1CAC,
      bubble2CAC,
      scatter1CAC,
      scatter2CAC,
      heatMap1CAC,
      heatMap2CAC,
      pie1CAC,
      pie2CAC,
      radialBar1CAC,
      radialBar2CAC,
      radar1CAC,
      radar2CAC
    } = this.chartDB;

    this.line1CAC = line1CAC;
    this.line3CAC = line3CAC;
    this.area1CAC = area1CAC;
    this.bar1CAC = bar1CAC;
    this.chartOptions_11 = chartOptions_11;
    this.bar2CAC = bar2CAC;
    this.bar3CAC = bar3CAC;
    this.bar4CAC = bar4CAC;
    this.mixed1CAC = mixed1CAC;
    this.mixed2CAC = mixed2CAC;
    this.candlestickCAC = candlestickCAC;
    this.bubble1CAC = bubble1CAC;
    this.bubble2CAC = bubble2CAC;
    this.scatter1CAC = scatter1CAC;
    this.scatter2CAC = scatter2CAC;
    this.heatMap1CAC = heatMap1CAC;
    this.heatMap2CAC = heatMap2CAC;
    this.pie1CAC = pie1CAC;
    this.pie2CAC = pie2CAC;
    this.radialBar1CAC = radialBar1CAC;
    this.radialBar2CAC = radialBar2CAC;
    this.radar1CAC = radar1CAC;
    this.radar2CAC = radar2CAC;

    // this.lastDate = 0;
    // this.data = [];
    // this.getDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, { min: 10, max: 90 });
    this.line2CAC = {
      chart: {
        height: 300,
        type: 'line',
        animations: {
          enabled: true,
          easing: 'linear',
          dynamicAnimation: {
            speed: 2000
          }
        },
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      // series: [
      //   {
      //     // data: this.data
      //   }
      // ],
      colors: ['#4680ff'],
      // title: {
      //   text: 'Dynamic Updating Chart',
      //   align: 'left'
      // },
      markers: {
        size: 0
      },
      xaxis: {
        type: 'datetime',
        range: 777600000
      },
      yaxis: {
        max: 100
      },
      legend: {
        show: false
      }
    };
  }

  

  ngOnInit() {}

  applyFilters() {
    // Implement your filtering logic here.
    console.log(this.filters);
    // You can fetch and update the data based on the selected filters
  }

}
