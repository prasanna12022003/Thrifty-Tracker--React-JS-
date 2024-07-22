import React,{useState} from "react";
import {
  ListItem,
  Input,
  Label,
  List,
  Message,
  MessageHeader,
  Button,
} from "semantic-ui-react";
import { details } from './details';

const Person = ({ history, match: { params: { id } } }) => {

  const [foodExpense, setFoodExpense] = useState('');
  const [travelExpense, setTravelExpense] = useState('');
  const [medicalExpense, setMedicalExpense] = useState('');
  const [petrolExpense, setPetrolExpense] = useState('');
  const [emergencyExpense, setEmergencyExpense] = useState('');

//   const Persondata3 = () => {npm 
//     history.push("/page4");
//   };

  const walletAmt = details.find((ele) => id === ele.id)?.Walletamount;
  
  const[total,settotal]=useState("");
  const[walletbal,setwalletbal]=useState("");
  
  const CalcFunc=()=>{
    const exp=[foodExpense,travelExpense,medicalExpense,petrolExpense,emergencyExpense];
    const totexp=exp.reduce((a,b)=>a+b,0);
    settotal(totexp);

    
    setwalletbal(walletAmt-totexp);
  }


  return (
    <div className="result">
      <Message>Fetching Your Daily Expenses!</Message>
      <center>
        WALLET AMOUNT:<Label color="gray">{walletAmt}</Label>
      </center>
      <List divided selection>
        <ListItem>
          <Label color="red" horizontal>
            Enter Food Expenses
          </Label>
          <Input labelPosition="right" type="text" value={foodExpense} onChange={(e)=>setFoodExpense(parseInt(e.target.value))}>
            <Label basic>$</Label>
            <input />
            <Label>.00</Label>
          </Input>
        </ListItem>

        <ListItem>
          <Label color="purple" horizontal>
            Enter Travel Expenses
          </Label>
          <Input labelPosition="right" type="text" value={travelExpense} onChange={(e)=>setTravelExpense(parseInt(e.target.value))}>
            <Label basic>$</Label>
            <input />
            <Label>.00</Label>
          </Input>
        </ListItem>

        <ListItem>
          <Label color="green" horizontal>
            Enter Medical Expenses
          </Label>
          <Input labelPosition="right" type="text" value={medicalExpense} onChange={(e)=>setMedicalExpense(parseInt(e.target.value))}>
            <Label basic>$</Label>
            <input />
            <Label>.00</Label>
          </Input>
        </ListItem>

        <ListItem>
          <Label color="yellow" horizontal>
            Enter Petrol Expenses
          </Label>
          <Input labelPosition="right" type="text" value={petrolExpense} onChange={(e)=>setPetrolExpense(parseInt(e.target.value))}>
            <Label basic>$</Label>
            <input />
            <Label>.00</Label>
          </Input>
        </ListItem>

        <ListItem>
          <Label color="blue" horizontal>
            Enter Emergency Expenses
          </Label>
          <Input labelPosition="right" type="text" value={emergencyExpense} onChange={(e)=>setEmergencyExpense(parseInt(e.target.value))}>
            <Label basic>$</Label>
            <input />
            <Label>.00</Label>
          </Input>
        </ListItem>
      </List>

      <center>
        <Button color="black" onClick={CalcFunc}>CALCULATE</Button>
      </center>

      <Message info>
        <MessageHeader>Your Total Expense </MessageHeader>
        <p><div>Rs.<b>{total}</b></div></p>
      </Message>

      <Message negative>
        <MessageHeader>Your Wallet Balance</MessageHeader>
        <p>Rs.<b>{walletbal}</b></p>
      </Message>
    </div>
  );
};

export default Person;
