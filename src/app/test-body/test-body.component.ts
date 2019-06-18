import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-test-body",
  templateUrl: "./test-body.component.html",
  styleUrls: ["./test-body.component.scss"]
})
export class TestBodyComponent implements OnInit {
  @Input() testString: string;
  constructor() {}

  ngOnInit() {}
}
