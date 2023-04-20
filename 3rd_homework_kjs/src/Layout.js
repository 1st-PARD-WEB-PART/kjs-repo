import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: #FFFFFF;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 7px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 16px;
  background: #FFFFFF;
`;

const SearchInput = styled.input`
  background-color: #F0F2F5;
  border: none;
  padding: 10px;
  margin: 5px;
  border-radius: 15px;
  width: 50px;
  flex: 0.2 1;
`;



const SearchButton = styled.button`
  padding: 3px;
  margin-right: 300px;
  background-color: #007bff;
  color: #fff;
  border-radius: 20px;
  font-size: 14px;
  border: none;
  width: 100px;
  flex: 0.04 1;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  
`;

const NavigationLinks = styled.div`
  display: flex;
  background: #FFFFFF;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  margin-right: 16px;
  background: #FFFFFF;

  img {
    margin: 10px;
    background: #FFFFFF;
  }
  
`;

const LayoutContainer = styled.div`
  position: relative;
  top: 72px;
`;

const Layout = () => {
  return (
    <div>
      <Header>
        <Logo src="/img/Facebook_logo.png" alt="logo" />
        <SearchInput type="text" id="search" name="search" placeholder="FaceBook 검색" />
        <SearchButton>검색</SearchButton>
        <NavigationLinks>
          <NavLink to="/HomePage"><img width = '21px'height='21px' src="/img/home.png" alt="home" /></NavLink>
          <NavLink to="/PeoplePage"><img width= '24px' hight='24px'src="/img/people.png" alt="frame" /></NavLink>
          <NavLink to="/GamePage"><img width= '24px' hight='24px'src="/img/game.png" alt="game" /></NavLink>
        </NavigationLinks>
      </Header>
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </div>
  );
};

export default Layout;
