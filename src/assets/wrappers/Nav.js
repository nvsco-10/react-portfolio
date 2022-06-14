import styled from "styled-components";

const Wrapper = styled.header`
  background-color: rgb(3,0,35);
  padding: 1rem 2rem;
  font-family: var(--mono-font);

  position: sticky;
  top: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */


  .container {
    height: 0;
    overflow: hidden;
    transition: var(--transition);
    
  }

  .show-container {
    height: 16rem;
  }

  a {
    font-size: var(--xs-text);
    margin: 0.75rem 1rem;
  }

  .logo {
    display: none;
  }

  .about {
    display: block;
  }

  .icon {
    font-size: 1.3rem;
  }

  .toggle {
    font-size: 1.8rem;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }

  .nav-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .resume {
      border: solid 1px grey;
      border-radius: var(--border-radius);
      padding: 0.1em 0.75em;
    }

    .resume:hover {
      background-color: purple;
    }
    
  }

  .social-links {
    flex-direction: row;
  }

  @media (min-width: 980px) {
    background-color: var(--clear-backdrop);
    
    a {
      font-size: var(--xs-text);
      margin: 0;
    }

    .toggle {
      display: none;
    }

    .logo {
      display: block;
    }

    .about { 
      display: none;
    }

    .container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: auto;

      .nav-section {
        flex-direction: row;
      }

      .page-links {
        gap: 5rem;
      }

      .social-links {
        gap: 2rem;
      }
    }
  }
`

export default Wrapper