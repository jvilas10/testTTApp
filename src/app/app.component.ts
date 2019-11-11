import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
//import { Pro, AppInfo, DeployInfo } from '@ionic-native/pro';
import { Pro} from '@ionic/pro';
import { Deploy } from 'cordova-plugin-ionic';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private pro: Pro,
  
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

//   // Get app info
//  pro.getAppInfo().then((res: AppInfo) => {
//   console.log(res)

// })

// // Get live update info
//  pro.deploy.info().then((res: DeployInfo) => {
//   console.log(res)
// })

async changeToBetaChannel() {
  alert('production');
  await Deploy.configure({channel: 'production'});
  //Deploy.info().then
}

}
