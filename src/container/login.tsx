import * as React from "react";
export interface Props {
  name?: string;
  password?: string;
  repassword?: string;
  type?: number;
}
interface State {
  name: "";
  password: "";
  repassword: "";
  type: 1; // 1，seller 2,customer
}
export default class Login extends React.Component<Props, State> {
  componentDidMount(): void {
    console.warn("ss");
  }

  render() {
    return <div>我是登陆</div>;
  }
}
