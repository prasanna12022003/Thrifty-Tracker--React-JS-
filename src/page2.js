import React, { useState, useEffect } from "react";
import './App.css';
import { details } from "./details";
import {
  Button,
  Input,
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
} from "semantic-ui-react";

const Page2 = ({ history }) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);
  const [userData, setUserData] = useState([]);
  const [error, seterror] = useState('');
  const [error1, seterror1] = useState('');

  const loginFunc = () => {
    console.log("username", username, password);
    const data = details.filter(
      (user) => user.Name === username && user.Password === password
    );
    // console.log(details, "details");
    setUserData(data);
    if (data) {
      setLogin(true);
    } else if(!data){
      seterror("Invalid Username");
      seterror1("Invalid Password");
    }
  };
  // console.log("userData", userData);
  return (
    <div>
      {login ? (
        <div>
          {userData?.map((i) => (
            <center>
              <Card key={i.id}>
                <Image src={i.src}></Image>
                <CardContent>
                  Mr.{i.Name} Up-to-date EXPENSES
                  <CardMeta>
                    <span className="personid">ID: {i.id}</span>
                  </CardMeta>
                  <CardDescription>
                    <p>Food Expenses: {i.FoodExpenses}</p>
                    <p>Travel Expenses: {i.TravelExpense}</p>
                    <p>Medical Expenses: {i.MedicalExpenses}</p>
                    <p>EMI Expenses: {i.EMI}</p>
                    <p>Clothing Expenses: {i.ClothingExpenses}</p>
                    <p>Petrol Expenses: {i.PetrolExpenses}</p>
                    <p>Balance Expenses: {i.BalanceSavings}</p>
                  </CardDescription>
                </CardContent>
                <CardContent extra>
                  <a>
                    <Icon name="user" />
                    Joined Recently
                  </a>
                </CardContent>
              </Card>

              <Button onClick={() => history.push(`/page3/${i.id}`)}>
                Calculate Today's Expense
              </Button>
            </center>
          ))}
        </div>
      ) : (
        <div className="login">
          <center>
            <div className="uname">
              <Input
                icon="users"
                iconPosition="left"
                value={username}
                onChange={(a) => setUserName(a.target.value)}
                placeholder="Username"
              />
              <p>{error}</p>
            </div>
            <div className="pwd">
              <Input
                icon="users"
                iconPosition="left"
                type="password"
                value={password}
                onChange={(b) => setPassword(b.target.value)}
                placeholder="Password"
              />
              <p>{error1}</p>
            </div>
            <div>
              <Button onClick={loginFunc} onkeypress={loginFunc}>
                Login
              </Button>
            </div>
          </center>
          <div className="img"></div>
        </div>
      )}
    </div>
  );
};

export default Page2;
