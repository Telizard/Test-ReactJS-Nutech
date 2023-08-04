import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, loginStart, loginFailure } from "../../../redux/login/slice";
import { auth } from "../../../services/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.login);
  const [formValue, setFormValue] = useState({
    email: null,
    password: null,
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      setError("Email and password are required");
      return;
    }

    try {
      dispatch(loginStart());

      const response = await axios.post("https://648816ca0e2469c038fceb90.mockapi.io", formValue);

      dispatch(loginSuccess(response.data));
      navigate("/");
      window.location.reload();
    } catch (error) {
      dispatch(loginFailure());
    }
  };

  return loading, email, setEmail, password, setPassword, error, setError, handleEmailChange, handlePasswordChange, handlePasswordChange, handleSubmit, formValue;
}
export default useLogin;
