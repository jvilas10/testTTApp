import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Pro, AppInfo, DeployInfo } from '@ionic-native/pro';

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
    private pro: Pro
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  // Get app info
await pro.getAppInfo().then((res: AppInfo) => {
  console.log(res)

})

// Get live update info
await pro.deploy.info().then((res: DeployInfo) => {
  console.log(res)
})

  async changeToBetaChannel() {  
  await Deploy.configure({channel: 'production'});
}

}
