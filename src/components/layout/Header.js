import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div>
    <header style={headerStyle}>Todo List</header>
    <Link to="/">Home</Link> |  <Link to="/about">About</Link>
  </div>
)

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  fontWeight: 'bold',
  padding: '10px',
}

export default Header;