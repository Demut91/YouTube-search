import logo from "../../img/sibdev-logo.svg";
import { useState } from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";
import "antd/dist/antd.min.css";
import "./Loginpage.css";
import { Navigate } from "react-router";

function LoginPage({ isLoggedIn, setIsLoggedIn, login, setLogin, setQueries }) {
  const [password, setPassword] = useState("");

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  function Autorisation() {
    axios
      .post(
        "https://cors-anywhere.herokuapp.com/185.244.172.108:8080/auth/login",
        {
          login: login,
          password: password,
        }
      )
      .then(function (response) {
        console.log("token", response.data.token);
        if (response.status === 200) {
          setIsLoggedIn(true);
          let queryes = JSON.parse(localStorage.getItem(`${login}`));
          if (queryes === null) {
            setQueries([]);
          } else setQueries(queryes);
        }
      })
      .catch(() =>
        alert("Введены неверные данные или не активирован демо сервер")
      );
  }

  if (isLoggedIn) {
    return (
      <Navigate to="/searching"/>
    );
  } else {
    return (
      <div className="login">
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={Autorisation}
          className="login__form"
        >
          <img src={logo} alt="logo"></img>
          <h2>Вход</h2>
          <Form.Item
            label="Логин"
            name="username"
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Поле не может быть пустым!",
              },
            ]}
          >
            <Input onChange={handleLoginChange} value={login} />
          </Form.Item>

          <Form.Item
            label="Пароль"
            name="password"
            labelCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Поле не может быть пустым!",
              },
            ]}
          >
            <Input.Password onChange={handlePasswordChange} value={password} />
          </Form.Item>
          <Form.Item>
            <Button
              className="login__button"
              type="primary"
              htmlType="submit"
              size="large"
            >
              Войти
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default LoginPage;
