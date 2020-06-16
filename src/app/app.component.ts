import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { User } from './models/user';
import { Role } from './models/role';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Table',
      url: '/table',
      icon: 'grid'
    },
    {
      title: 'Menu',
      url: '/menu',
      icon: 'list'
    },
    {
      title: 'Discount',
      url: '/discount',
      icon: 'card'
    },
    {
      title: 'Anouncement',
      url: '/anouncement',
      icon: 'megaphone'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    }
  ];

  get user() {
    const userJson = sessionStorage.getItem('user');
    return userJson ? JSON.parse(userJson) as User : undefined;
  }

  get role() {
    const roleJson = sessionStorage.getItem('role');
    return roleJson ? JSON.parse(roleJson) as Role : undefined;
  }

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() { }
}
