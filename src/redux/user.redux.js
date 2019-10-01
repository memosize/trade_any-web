import axios from "axios";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOAD_DATA = "LOAD_DATA";
const ERROR_MSG = "ERROR_MESSAGE";
const initState = {
  redirectTo: "",
  msg: "",
  isAuth: false,
  user: "",
  password: "",
  type: "",
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
    case LOAD_DATA:
      return {
        ...state,
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
export function errMsg(msg) {
  return { msg, type: ERROR_MSG };
}
export function registerSuccess(data) {
  return { type: REGISTER_SUCCESS, payload: data };
}
export function register({ type, user, repwd, pwd, email,nick }) {
  // console.log(type, user, repwd, pwd, email);
  if (!user || !pwd || !type || !email) {
    return errMsg("user & password & email is necessary ");
  }
  if (pwd !== repwd) {
    console.log("no match ");
    return errMsg("two passwords are inconsistent");
  }
  return dispatch => {
    axios.post("/user/register", { user, pwd, type, email, nick }).then(res => {
      if (res.status === 200 && res.data.code === 0) {
        dispatch(registerSuccess({ user, pwd, type }));
      } else {
        dispatch(errMsg(res.data.msg));
      }
    });
  };
}
