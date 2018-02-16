import {
  Component,
  ViewChild,
  trigger,
  transition,
  style,
  state,
  animate,
  keyframes,
  ChangeDetectorRef
} from "@angular/core";
import { NavController, Slides } from "ionic-angular";
import { URL_CONFIG } from "../../app/app.config";
import { LoginPage } from "../login/login";

@Component({
  selector: "page-intro-slider",
  templateUrl: "intro-slider.html",
  animations: [
    trigger("bounce", [
      state(
        "*",
        style({
          transform: "translateX(0)"
        })
      ),
      transition(
        "* => rightSwipe",
        animate(
          "700ms ease-out",
          keyframes([
            style({ transform: "translateX(0)", offset: 0 }),
            style({ transform: "translateX(-65px)", offset: 0.3 }),
            style({ transform: "translateX(0)", offset: 1 })
          ])
        )
      ),
      transition(
        "* => leftSwipe",
        animate(
          "700ms ease-out",
          keyframes([
            style({ transform: "translateX(0)", offset: 0 }),
            style({ transform: "translateX(65px)", offset: 0.3 }),
            style({ transform: "translateX(0)", offset: 1 })
          ])
        )
      )
    ])
  ]
})
export class IntroSliderPage {
  @ViewChild(Slides) slides: Slides;
  displaySkip = true;
  state: string = "x";
  imgPath = URL_CONFIG.IMG_ASSETS_PATH;
  slideStyles: Array<any> = [];
  skipButtonStyles: any = {
    color: ""
  };
  constructor(public navCtrl: NavController, private cdRef: ChangeDetectorRef) {
    this.slideStyles[0] = {
      bgcolor: this.imgPath+'slide-1.svg',
      circle: "#fdd164"
    };
    this.slideStyles[1] = {
      bgcolor: this.imgPath+'slide-2.svg',
      circle: "#7b57af"
    };
    this.slideStyles[2] = {
      bgcolor: this.imgPath+'slide-3.svg',
      circle: "#d1514e"
    };
    this.slideStyles[3] = {
      bgcolor: this.imgPath+'slide-4.svg',
      circle: "#04ca99"
    };
  }

  onClickSkip() {
    console.log("onClickSkip");
    this.slides.slideTo(3, 2000);
  }

  slideChanged() {
    if (this.slides.isEnd()) {
      this.displaySkip = false;
    } else {
      this.displaySkip = true;
    }
    let color="#04ca99"
    if (this.slides.realIndex == 0) {
      color = "#feb914";
    } else if (this.slides.realIndex == 1) {
      color = "#7b57af";
    } else if (this.slides.realIndex == 2) {
      color = "#d1514e";
    }
    this.skipButtonStyles["color"] = color;
    document.getElementsByClassName("swiper-pagination-bullet-active")[0]["style"][
      "background-color"
    ] =
      color;
  }

  slideMoved() {
    if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex())
      this.state = "rightSwipe";
    else this.state = "leftSwipe";
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
  }

  animationDone() {
    this.state = "x";
    this.ngAfterViewChecked();
  }

  onClickGettingStarted() {
    this.navCtrl.push(LoginPage);
  }
}
