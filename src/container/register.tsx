import * as React from "react";
import { Button, Input } from "antd";
import "antd/dist/antd.css";
import { connect } from "react-redux";
import { register } from "../redux/user.redux";
export interface Props {
  user?: string;
  pwd?: string;
  repwd?: string;
  type?: number;
  dispatch: any;
  register: (state: any) => void;
}
interface State {
  user: string;
  pwd: string;
  repwd: string;
  type: number; // 1，seller 2,customer
  email: string;
  nick: string;
}
class Register extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      user: "",
      pwd: "",
      repwd: "",
      type: 1,
      email: "",
      nick: ""
    };
  }

  render() {
    return (
      <div>
        <Input
          placeholder={"please type user name"}
          onChange={event => this.setState({ user: event.target.value })}
        />
        <Input
          placeholder={"please type nick name"}
          onChange={event => this.setState({ nick: event.target.value })}
        />
        <Input
          placeholder={"please type your password"}
          onChange={event => this.setState({ pwd: event.target.value })}
        />
        <Input
          placeholder={"please type password again "}
          onChange={event => this.setState({ repwd: event.target.value })}
        />
        <Input
          placeholder={"please type email"}
          onChange={event => this.setState({ email: event.target.value })}
        />

        <Button
          size={"large"}
          onClick={() => this.props.dispatch(register(this.state))}
        >
          register
        </Button>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => state.user;

export default connect(mapStateToProps)(Register);
