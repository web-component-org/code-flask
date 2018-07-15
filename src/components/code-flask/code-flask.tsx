import { Component, Prop, Event, EventEmitter, Element } from "@stencil/core";
import _CodeFlask from "codeflask";

let i = 0;

@Component({
  tag: "code-flask",
  styleUrl: "code-flask.css",
  shadow: true
})
export class CodeFlask {
  @Prop() lineNumbers: boolean = false;
  @Prop() rtl: boolean = false;
  @Prop() language: string;
  @Prop() content: string = "const foo = 99;";
  @Element() host: HTMLElement;
  @Event() change: EventEmitter;

  elementId: string = `#code-flask_${i++}`;
  flask: any;

  changeHandler(code: string) {
    this.change.emit(code);
  }

  componentWillLoad() {
    this.flask = new _CodeFlask(this.host, {
      lineNumbers: this.lineNumbers,
      language: this.language,
      rtl: this.rtl
    });

    this.flask.onUpdate(code => {
      console.log("updating", { code });
      this.changeHandler(code);
      // do something with code here.
      // this will trigger whenever the code
      // in the editor changes.
    });
  }

  render() {
    return <slot />;
  }
}
