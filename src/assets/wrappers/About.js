import styled from "styled-components";

const Wrapper = styled.header`
  min-height: calc(100vh - 3rem);
  padding: 2em 0.5em;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .card {
    flex-basis: 100%;
    max-width: 400px;
    background-color: var(--clear-backdrop);
    border-radius: var(--border-radius);
    padding: 2em; 

    box-shadow: var(--shadow-1);
  }

  .image {
    max-width: 125px;
    margin: 0 auto;

    img { 
      width: 100%;
    }
  }

  .intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      margin: 0.75rem 0 0.5rem;
    }

    .job-title {
      display: flex;
      justify-content: center;
      align-items: center;

      .title {
        font-size: 1.10rem;
        padding-right: 1.5rem;
      }

      .job-status {
        display: flex;
        flex-direction: column;
        align-items: center;

        padding-left: 1.5rem;
        border-left: solid 1px var(--white);

        span {
           background-color: green;
           border-radius: 5%;
           padding: 0.20em;
           margin-top: 0.25rem;
        }
        .icon {
          font-size: 1.2rem;
        }

      }
    }
  }

  .skills {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 1rem 0 0;

    ul {
      padding: 0;
      margin: 1rem 2rem; 
    }
    li {
      font-size: var(--xs-text)
    }
  }

  .bio {
    margin: 2rem 1rem;
    padding: 1rem;
    max-width: 400px;

    p { 
      margin-bottom: 1rem; 
    }
  }

  @media (min-width: 1040px) {
    flex-direction: row;

    .card, .bio {
      flex-basis: 50%;
    }

    .bio {
      margin: 3rem 0 0 4rem;
    }
  }
 
`

export default Wrapper