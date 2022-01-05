import styled from "styled-components";

export const ContainerSlide = styled.div`
  width: 100vw;
  display: flex;
  height: 100vh;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  
  > button {
    width: 120px;
    cursor: pointer;
    padding: 12px;
    background-color: #111;
    color: #fff;
    border-radius: 4px;
    border: none;
  }

  > .Containerfather {
    width: 600px;
    margin: 0px 50px;
    height: 400px;
    background-color: #444;
    overflow: scroll;
    scroll-behavior: smooth;
    display: inline-flexbox;

    ::-webkit-scrollbar {
      width: 0px;
      height: 0px;
    }

    > .ContainerSoon {
      width: 100%;
      height: 100%;
      background-color: red;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;