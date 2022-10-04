import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin: 0 1rem;
  /* max-width: 1050px; */

  .projects-container {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 3rem;
    row-gap: 2rem;

  }

  .spacer {
    height: 6rem;
  }

  h5 {
    text-align: center;
    margin-bottom: 3rem;
  }

  .other-projects-container {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 3rem;
    row-gap: 2rem;
  }

  @media (min-width: 820px) {
    .other-projects-container {
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
    row-gap: 2rem;
  }
  }

  @media (min-width: 1140px) {

    .projects-container {
      max-width: 1150px;
      grid-template-columns: 1fr 1fr;
    }

    .other-projects-container {
      max-width: 1150px;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }

  }
`

export default Wrapper