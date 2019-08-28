import * as React from "react";
import { Button, Input } from "antd";
import "antd/dist/antd.css";

export interface Props {
  name?: string;
  password?: string;
  type?: number;
}
interface State {
  name: string;
  password: string;
  type: number; // 1，seller 2,customer
}
export default class Login extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      type: props.type || 1
    };
  }

  _login() {
    const { name, password } = this.state;

    window.alert(`name${name},password=${password}`);
    console.warn("login");
  }
  _register() {
    console.log("register");
  }
  render() {
    return (
      <div>
        <Input
          placeholder={"please type username"}
          onChange={event => this.setState({ name: event.target.value })}
          size={"large"}
        />
        <Input
          placeholder={"please type password"}
          onChange={event => this.setState({ password: event.target.value })}
          size={"large"}
        />
        <Button type={"primary"} onClick={() => this._login()} size={"large"}>
          login
        </Button>
        <Button
          type={"primary"}
          title={"register"}
          size={"large"}
          onClick={() => this._register()}
        >
          register
        </Button>
      </div>
    );
  }
}
