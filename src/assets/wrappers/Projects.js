import styled from "styled-components";
import placeholder from '../images/placeholder.png'
import proj1 from '../images/crypto.PNG'
import proj2 from '../images/tech.png'
import proj3 from '../images/thy.png'


const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: 2rem;

  .featured-project {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    flex-basis: 100%;
    margin: 1rem;
    
    .box {
      display: flex;
      flex-basis: 100%;
      margin: 1rem;

      img { 
        width: 100%;
        margin: 0 auto;
      }
    }

    .body {

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .header {
        text-align: center;
        width: 100%;
        background-color: var(--clear-backdrop);
        border-radius: var(--border-radius);
        margin-bottom: 2rem;

        p {
          margin-bottom: 0;
          padding: 0.25em;
        }
      }

      .technologies {
        display: flex;

        ul {
          padding: 0;
          margin: 1rem 2rem; 
        }
        
        li {
          font-size: var(--xs-text)
        }
      }
    }
  }

  .other-projects {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    margin: 3rem 0;

    h5 {
      text-align: center;
    }

    .project {
      flex-basis: 100%;
      max-width: 400px;
      padding: 1rem;

      .project-title {
        margin-bottom: 0;
      }

      .image-box {
        background-size: cover;
        background-position: center;
        /* max-width: 400px; */
        height: 230px;
        margin: 0 auto;

        div {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;

          background-color: rgba(28, 6, 94, 0.85);
          transition: 0.3s;
        }

        div:hover {
          background-color: rgba(9, 118, 172, 0.05);
        }
      }

      .body {
        padding: 1em 0.5em;
      }

      .box0 {
        background-image: url(${proj1});
      }

      .box1 {
        background-image: url(${proj2});
      }

      .box2 {
        background-image: url(${proj3});
      }
    }
  }

  p {
    margin-bottom: 1rem;
  }

  .project-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    font-size: 1.4rem;
  }

  @media (min-width: 680px) {
    .featured-project {

      .body {
        max-width: 600px;
      }
      
      img { 
        max-width: 500px;
      }

      .mobile {
        max-width: 350px;
      }
    }

    .other-projects {
      .project {
        max-width: 500px;
      }
      .image-box {
        max-width: 500px;
        height: 280px;
        margin: 0 auto;
      }
    
   }

  @media (min-width: 1140px) {
    .featured-project {
      flex-direction: row;
      width: 1050px;
      align-items: center;

      .box {
        flex-basis: 50%;

      }

    }

    .other-projects {
      flex-direction: row;
      width: 1050px;

      .project {
        flex-basis: 33.33%;

        .image-box {
          width: 100%;
          height: 200px;
        }
      }
    }
  }
}
`

export default Wrapper