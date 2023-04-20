import React from 'react';
import './login.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';



const LanguageLink = styled.a`
  background: white;
  color: #65676B;
  font-family: ‘Roboto’;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: none;
  margin-left : 10px;
  padding: 0 10px;
  &:hover {
    text-decoration: underline;
  }
`;
const EtcLink = styled.a`
  background: white;
  color: #65676B;
  font-family: ‘Roboto’;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-decoration-line: none;
  margin-left : 10px;
  margin-right: 35px;
  padding: 0 10px;
  &:hover {
    text-decoration: underline;
  }
`;

const Language = styled.div`
  background: white;
  display: flex;
  -webkit-box-pack: justify;
  flex-wrap: wrap;
`;

function Login({ }) {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/HomePage');
  };

  const languages = ['English (US)', 'Ikinyarwanda', 'Francais (France)', 'Kiswahili', 'Espagnol',
    'Deutsch', 'Japanese', 'Portugues (Brazil)', 'Italiano', 'Arabic'];

  const etc = ['Sign Up','Facebook Lite','Games','Oculus','Bulletin',
  'Services','About','Developers','Log In','Watch','Marketplace','Portal','Local','Places',
  'Create Ad','Careers','Sign Up','Places','Facebook Play','Instagram','Fundraisers','Groups',
  'Create Page','Privacy','Log In','Messenger','Messenger','Voting Information Center',
  'Cookies','Ad choices','Terms','Help'];

  return (
    <div>
      <div className='textbox'>
        <h1> Facebook </h1>
        <h2> Connect with friends and the world around you on Facebook. </h2>
        <div className='container'>
          <div className='form'>
            <input type="text" id="name" name="name" placeholder='Email or phone number' />
            <input type="password" id="password" name="password" placeholder='Password' />
            <button name='login' id="login" onClick={handleLogin}>Login</button>
            <button name='password' id="password">Forgot Password?</button>
            <hr />
            <button name='new' id='new'>Create new account</button>
          </div>
        </div>
        <p><b>Create a Page</b> for a celebrity, brand or business.</p>
      </div>
      <div className='footer'>
      <Language>
        {languages.map((language) => (
          <LanguageLink href='#'>{language}</LanguageLink>))}
        </Language>
        <hr />
        <Language>
          {etc.map((etc) => (
            <EtcLink href='#'>{etc}</EtcLink>))}
        </Language>

        <br></br>
        Meta © 2023
      </div>
    </div>
  );
};

export default Login;