export class CircleProgress {
  _progress: number = 0;
  svg: SVGSVGElement;
  circlePath: SVGPathElement;
  circle: SVGCircleElement;
  innerCircle: SVGPathElement;
  pathLength: number;

  constructor(svg: SVGSVGElement, progress: number) {
    this.svg = svg;
    this.circlePath = this.svg.querySelector("#circle-path") as SVGPathElement;
    this.circle = this.svg.querySelector("#circle") as SVGCircleElement;
    this.innerCircle = this.svg.querySelector(
      "#inner-circle"
    ) as SVGPathElement;
    this.pathLength = this.circlePath.getTotalLength();
    this.progress = progress;
    this.init();
  }

  get progress() {
    return this._progress;
  }

  set progress(value: number) {
    this._progress = value;
    this.updateCircle();
  }

  updateCircle() {
    const { x, y } = this.circlePath.getPointAtLength(
      this.pathLength * this._progress
    );
    this.circle.setAttribute("cx", x.toString());
    this.circle.setAttribute("cy", y.toString());
    this.circlePath.style.strokeDashoffset = `${
      this.pathLength * (1 - this._progress)
    }`;
  }

  createCircle(length: number, index: number, xmln: string) {
    const circle = document.createElementNS(xmln, "circle");
    const { x, y } = this.innerCircle.getPointAtLength((length / 16) * index);
    circle.setAttribute("cx", x.toString());
    circle.setAttribute("cy", y.toString());
    circle.setAttribute("r", "3");
    circle.setAttribute("fill", "#2f49d0");
    this.svg.appendChild(circle);
  }

  createInnerCircles() {
    const xmln = "http://www.w3.org/2000/svg";
    const innerCircleLength = this.innerCircle.getTotalLength();
    for (let i = 0; i <= 16; i++) {
      this.createCircle(innerCircleLength, i, xmln);
    }
  }

  init() {
    this.circlePath.style.strokeDasharray = `${this.pathLength}`;
    this.updateCircle();
    this.createInnerCircles();
  }
}
