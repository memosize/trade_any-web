import * as React from "react";
import { Button, Input } from "antd";
import "antd/dist/antd.css";
import {connect} from 'react-redux'
import {register} from "../redux/user.redux";
export interface Props {
  user?: string;
  pwd?: string;
  repwd?: string;
  type?: number;
}
interface State {
  user: string;
  pwd: string;
  repwd: string;
  nickname: string;
  type: number; // 1，seller 2,customer
  email: string;
}
 class Register extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      user: "",
      pwd: "",
      repwd: "",
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
          onChange={event => this.setState({ user: event.target.value })}
        />
        <Input
          placeholder={"please type nick name"}
          onChange={event => this.setState({ nickname: event.target.value })}
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
          onChange={event => this.setState({ user: event.target.value })}
        />

        <Button size={"large"} onClick={()=>register(this.state)}>register</Button>
      </div>
    );
  }
}
const mapStateToProps = (state:any) => (state.user)

export default  connect(mapStateToProps)(Register)
