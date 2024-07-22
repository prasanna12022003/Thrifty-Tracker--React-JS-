import React from "react";
import './App.css';
import { Button, Icon } from 'semantic-ui-react'
import logo from './images/logo.jpg';

    const Page1=({history})=>{
      const persondata=()=>{
          history.push('/Page2')
      }
    return (
      <div className="whole">
        <div className="App">
        <center>
        <h1 className='one'>EXPENSE TRACKER</h1>
        <marquee><i>Track your daily updates !</i></marquee>
        </center>
        </div>
        <div className="header">
        <h2>Why Expense Tracker ?</h2>
        <div className='content'>An expense tracker is a tool or app that helps you record and monitor your spending$$$$$$. It allows you to keep track of your expenses, categorize them, and analyze where your money is going, helping you manage your budget effectively.</div>
      </div>
      <div><center><Button className="Button" onClick={persondata} icon labelPosition='right'>Getting Started<Icon name='right arrow' /></Button></center></div>
      <div className="para">"Our expense tracker app simplifies daily spending management. With just a few taps, users can effortlessly log their expenses, categorize them, and track their budget.
         The intuitive interface allows for quick entry of expense details such as amount, category, and optional notes.</div>
         
         <div className="para2">Users can easily view summaries of their spending by category or time period, helping them stay on top of their finances. Our app prioritizes ease of use, making it the perfect companion for anyone looking to take control of their spending habits."</div>

      <div className="imglogo">
        <img src={logo} alt="logo"/>
      </div>

      </div>
    );
  }

export default Page1;