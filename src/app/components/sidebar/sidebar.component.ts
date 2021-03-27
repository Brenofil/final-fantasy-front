import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/bazaar",
    title: "Bazaar",
    icon: "icon-paper",
    class: "",
  },
  {
    path: "/raregames",
    title: "Raregames",
    icon: "icon-shape-star",
    class: ""
  },
  {
    path: "/icons",
    title: "Icons",
    icon: "icon-atom",
    class: "",
  },
  {
    path: "/maps",
    title: "Maps",
    icon: "icon-pin",
    class: "",
  },
  {
    path: "/about",
    title: "About",
    icon: "icon-alert-circle-exc",
    class: "",
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}