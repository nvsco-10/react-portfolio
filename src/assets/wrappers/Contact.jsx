import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0 5rem;
  background-color: rgba(0,0,0,0.2);

  div {
    display: flex;
    align-items: center;

    .email {
      font-size: 1.4rem;
      margin-left: 1rem;
    }

    .icon {
    font-size: 2rem;
  }
  }

  
`

export default Wrapper