import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .header {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* border-radius: 100%; */

      .header-overview {
        border-radius: 8px;
        img {
          max-width: 100%;
        }
      }

      .header-overview.box0 {
        background-color: #273862;
      }

      .header-overview.box1 {
        background-color: #121111;
      }

      .header-overview.box2 {
        background-color: #ff9c34;
      }
    }

    .body {
      margin-top: 1rem;
      padding-inline: 0.75rem;

      .project-title {
        margin-bottom: 0.5rem;
        text-align: center;
      }

      .project-links {
        display: flex;
        justify-content: center;

        a {
          margin: 0.75rem 1rem 0;
          font-size: 1.50rem;
        }
      }
    }

    
`

export default Wrapper