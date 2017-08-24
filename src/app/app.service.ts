import {Injectable} from '@angular/core';
import { CloudData, CloudOptions } from 'angular-tag-cloud-module';

@Injectable()
export class AppService {
  private data: Array<CloudData> = [
    { text: 'TagCloudModule', weight: 10, color: '#65CA27' },
    { text: 'Angular', weight: 9 },
    { text: 'NodeJS', weight: 9 },
    { text: 'Mongo DB', weight: 5 },
    { text: 'MySQL', weight: 4 },
    { text: 'JavaScript', weight: 8 },
    { text: 'TypeScript', weight: 9 },
    { text: 'REST Services', weight: 8 },
    { text: 'WebRTC', weight: 6 },
    { text: 'Webpack', weight: 4 },
    { text: 'Gulp', weight: 4 },
    { text: 'Monitoring', weight: 6 },
    { text: 'LaTeX', weight: 7 },
    { text: 'PHP', weight: 4 },
    { text: 'Shell Scripting', weight: 4 },
    { text: 'RxJS', weight: 7 },
    { text: 'Wireshark', weight: 7 },
    { text: 'Customizing', weight: 6 },
    { text: 'CSS', weight: 7 },
    { text: 'jQuery', weight: 4 },
    { text: 'Apple', weight: 7 },
    { text: 'Microsoft', weight: 5 },
    { text: 'Ubuntu', weight: 7 },
    { text: 'Debian', weight: 6 },
    { text: 'Linux', weight: 7 },
    { text: 'Minifizierung', weight: 5 },
    { text: 'Netzwerkmanagement', weight: 6 },
    { text: 'Lua', weight: 4 },
    { text: 'HTML', weight: 8 },
  ];

  /*private data: Array<CloudData> = [
    { text: 'TagCloudModule', weight: 10, color: '#65CA27' },
    { text: 'Angular', weight: this.getRandomOne2Ten() },
    { text: 'NodeJS', weight: this.getRandomOne2Ten() },
    { text: 'Mongo DB', weight: this.getRandomOne2Ten() },
    { text: 'MySQL', weight: this.getRandomOne2Ten() },
    { text: 'JavaScript', weight: this.getRandomOne2Ten() },
    { text: 'TypeScript', weight: this.getRandomOne2Ten() },
    { text: 'REST Services', weight: this.getRandomOne2Ten() },
    { text: 'WebRTC', weight: this.getRandomOne2Ten() },
    { text: 'Webpack', weight: this.getRandomOne2Ten() },
    { text: 'Gulp', weight: this.getRandomOne2Ten() },
    { text: 'Monitoring', weight: this.getRandomOne2Ten() },
    { text: 'LaTeX', weight: this.getRandomOne2Ten() },
    { text: 'PHP', weight: this.getRandomOne2Ten() },
    { text: 'Shell Scripting', weight: this.getRandomOne2Ten() },
    { text: 'RxJS', weight: this.getRandomOne2Ten() },
    { text: 'Wireshark', weight: this.getRandomOne2Ten() },
    { text: 'Customizing', weight: this.getRandomOne2Ten() },
    { text: 'CSS', weight: this.getRandomOne2Ten() },
    { text: 'jQuery', weight: this.getRandomOne2Ten() },
    { text: 'Apple', weight: this.getRandomOne2Ten() },
    { text: 'Microsoft', weight: this.getRandomOne2Ten() },
    { text: 'Ubuntu', weight: this.getRandomOne2Ten() },
    { text: 'Debian', weight: this.getRandomOne2Ten() },
    { text: 'Linux', weight: this.getRandomOne2Ten() },
    { text: 'Minifizierung', weight: this.getRandomOne2Ten() },
    { text: 'Netzwerkmanagement', weight: this.getRandomOne2Ten() },
    { text: 'Lua', weight: this.getRandomOne2Ten() },
    { text: 'HTML', weight: this.getRandomOne2Ten() },
  ];*/

  getCloudData() {
    return this.data;
  }
  
  getRandomOne2Ten(){
    return Math.floor((Math.random() * 10) + 1);
  }


}
