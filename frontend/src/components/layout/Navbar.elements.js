import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: rgba(255, 0, 0, 0.918); 
  position: relative;
`;

export const Wrapper = styled.div`
position: relative;

  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  @media screen and (max-width: 960px){
    width: 90%;
    justify-content: space-between;
  }
`;

export const Menu = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  
  @media screen and (max-width: 960px) {
    background-color: rgba(255, 0, 0, 0.918);
    position: relative;
    top: 70px;
    margin-left: -5.7%;
    left: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 80%;
    height: 600%;
    z-index: 1;
    flex-direction: column;
    transition: 0.5s all ease;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    position: absolute;
    top: 20px;
    left: -20px;
    display: flex;
    cursor: pointer;
    svg {
      fill: black;
      margin-right: 0.5rem;
    }
  }
`;