import { Component, OnInit, ViewChild } from "@angular/core";
import { IImage } from "ng-simple-slideshow";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  imageSources: (string | IImage)[] = [
    {
      url: "assets/img/img1.jpg",
      backgroundSize: "contain",
      backgroundPosition: "center",
    },
    {
      url: "assets/img/img2.jpg",
      backgroundSize: "contain",
      backgroundPosition: "center",
    },
    {
      url: "assets/img/img3.jpg",
      backgroundSize: "contain",
      backgroundPosition: "center",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
