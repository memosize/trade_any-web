import axios from "axios";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";

const ERROR_MSG = "ERROR_MESSAGE";
const initState = {
  redirectTo: "",
  msg: "",
  isAuth: false,
  user: "",
  password: "",
  type: ""
};

export function user(state = initState, action) {
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {
        ...state,
        isAuth: true,
        redirectTo: "",
        msg: "",
        ...action.payload
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        redirectTo: "",
        msg: "",
        ...action.payload
      };
    case ERROR_MSG:
      return { ...state, isAuth: false, msg: action.msg };
    default:
      return state;
  }
}
// reducer
export function register({ type, user, repeatpwd, pwd, email }) {
  if (!user || !pwd || !type || !email) {
    return ERROR_MSG("user & password & email is necessary ");
  }
  if (pwd !== repeatpwd) {
    return ERROR_MSG("two passwords are inconsistent");
  }
  return dispatch => {
    axios.post("/user/register", { user, type, pwd, email }).then(res => {});
  };
}
