import { ToyReact, Component } from "./ToyReact";

class MyComponent extends Component {
  render() {
    return (
      <div>
        ok<span>123</span>
        <p>good</p>
        <div>{this.children}</div>
      </div>
    );
  }
}
let a = (
  <MyComponent name="a">
    <div>
      <p>component</p>
      son<span></span>
    </div>
  </MyComponent>
);
// let b = (
//   <div name="b">
//     <span>12</span>
//     <span>hah</span>
//     <span>anme</span>
//   </div>
// );
ToyReact.render(a, document.body);
// document.body.appendChild(b);
