import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { MediaPlugin } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //media: MediaPlugin = new MediaPlugin('../Library/NoCloud/recording.wav');
  media: MediaPlugin;  
    
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  }

  ionViewWillEnter() {
    // this.media = new MediaPlugin('../Library/NoCloud/recording.wav')
  }  
  
  ionViewDidEnter() {
    this.media = new MediaPlugin('../Library/NoCloud/recording.wav')
  }  
  
  startRecording() {  
    try {      
        //let media = new MediaPlugin('../Library/NoCloud/recording.wav');
      this.media.startRecord();
    }
    catch (e) {
      this.showAlert('Could not start recording.');
    }
  }

  stopRecording() {
    try {
      this.media.stopRecord();
    }
    catch (e) {
      this.showAlert('Could not stop recording.');
    }
  }  

  startPlayback() {
    try {
      this.media.play();
    }
    catch (e) {
      this.showAlert('Could not play recording.');
    }
  }  
  
  stopPlayback() {
    try {
      this.media.stop();
    }
    catch (e) {
      this.showAlert('Could not stop playing recording.');
    }
  }  
  
  showAlert(message) {
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }
}
