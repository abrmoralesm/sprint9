import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;
  background-color: #29184e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  text-align: center;
  font-size: 0.9rem;
  padding: 4rem 4rem 3rem;
  height: 10px;
  border-top: 1px solid white;

  a {
    text-decoration: none;
    font-size: 1.2rem;
    color: white;
    font-family: "Wix Madefor Display", sans-serif;
  }
  .Met {
    color: white;
    font-family: "Wix Madefor Display", sans-serif;
  }

  p:nth-of-type(1) {
    margin-bottom: 1.1rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
  }

  ul:nth-of-type(1) {
    gap: 1rem;
    margin-bottom: 1rem;

    li:nth-child(5) {
      padding-left: 2rem;
      border-left: white;
    }
  }

  ul:nth-of-type(2) {
    gap: 1rem;

    li {
      padding-right: 2rem;
      border-right: 0.1rem solid white;
    }

    li:last-child {
      border-right: none;
    }

    a {
      height: 100%;
      font-size: 1.1rem;
      padding-bottom: 0.15rem;
      border-bottom: 0.1rem solid white;
    }

    a:hover {
      border-bottom: none;
    }
  }

  bottom: 0;
  left: 0;
  width: 100%;
`;
