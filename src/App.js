import './App.css';
import React from 'react';
import {Link,Outlet} from 'react-router-dom'; 
export default function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 5px",
          paddingBottom: "1rem",
          textDecoration: 'none'
        }}
      >
        <Link style={{textDecoration: 'none'}} to="/invoices">Invoices</Link> |{"  "}
        <Link style={{textDecoration: 'none'}} to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}