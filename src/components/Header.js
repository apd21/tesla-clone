import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';


const Header = () => {

    const [open, setOpen] = useState(false);
    const cars = useSelector(selectCars);
    return (
        <Container>
          <a>
            <img src="/images/logo.svg" alt="Tesla Logo" />
          </a> 
          <Menu>
              { cars && cars.map((car, index) => (
                <a key={index} href="#">{car}</a>
              ))}
          </Menu>
          <RightMenu>
            <a href="#">Shop</a>
            <a href="#">Tesla Account</a>
            <CustomMenu onClick={() => setOpen(true) }/>
          </RightMenu>
          <MenuNav show={open}>
            <CloseWrapper>
                <CustomClose onClick={() => setOpen(false)} />
            </CloseWrapper>
            {cars && cars.map((car, index) => (
              <li key={index}><a href="#">{car}</a></li>
            ))}
            <li><a href="#">Existing Inventory</a></li>
            <li><a href="#">Used Inventory</a></li>
            <li><a href="#">Trade-in</a></li>
            <li><a href="#">Cybertruck</a></li>
            <li><a href="#">Roadster</a></li>
            <li><a href="#">Semi</a></li>
            <li><a href="#">Charging</a></li>
            <li><a href="#">Power</a></li>
            <li><a href="#">Commercial</a></li>
            <li><a href="#">Utilities</a></li>
            <li><a href="#">Test Drive</a></li>
          </MenuNav>
        </Container>
    )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap
  }

  @media(max-width: 768px) {
    display: none;
  }
`;

const RightMenu= styled.div`
    display: flex;
    align-items: center;


    a {
      font-weight: 600;
      text-transform: uppercase;
      margin-right: 10px
    }
`;

const CustomMenu= styled(MenuIcon)`
    cursor: pointer;
`;

const MenuNav =styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in;

    li {
      padding: 15px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.23);

      a {
          font-weight: 600;
      }
    }
`;

const CloseWrapper= styled.div`
    display: flex;
    justify-content: flex-end;
`;

const CustomClose = styled(CloseIcon)`
    cursor: pointer;


`;

