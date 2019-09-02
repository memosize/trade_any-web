import * as React from "react";
import { Button, Input } from "antd";
import "antd/dist/antd.css";

export interface Props {
  name?: string;
  password?: string;
  repassword?: string;
  type?: number;
}
interface State {
  name: string;
  password: string;
  repassword: string;
  nickname: string;
  type: number; // 1，seller 2,customer
  email: string;
}
export default class Register extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      repassword: "",
      nickname: "",
      type: 1,
      email: ""
    };
  }

  render() {
    return (
      <div>
        <Input
          placeholder={"please type user name"}
          onChange={event => this.setState({ name: event.target.value })}
        />
        <Input
          placeholder={"please type nick name"}
          onChange={event => this.setState({ nickname: event.target.value })}
        />
        <Input
          placeholder={"please type your password"}
          onChange={event => this.setState({ password: event.target.value })}
        />
        <Input
          placeholder={"please type password again "}
          onChange={event => this.setState({ repassword: event.target.value })}
        />
        <Input
          placeholder={"please type email"}
          onChange={event => this.setState({ name: event.target.value })}
        />

        <Button size={"large"}>register</Button>
      </div>
    );
  }
}
