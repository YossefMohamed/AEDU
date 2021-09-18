import styled from "styled-components";
import Button from "../utils/button";
import colors from "../utils/colors";

function Pricing(props) {
  return (
    <PricingContainer>
      <div className="title">{props.type}</div>
      <div className="details">
        <div className="price">
          ${props.price}
          <div className="per">PER MONTH</div>
        </div>
        <div className="features">
          <ul>
            <li>
              <span className="correct-sign"> &#10003;</span>
              Unlimited Support
            </li>
            <li>
              {" "}
              <span className="correct-sign"> &#10003;</span>
              5DB server Space{" "}
            </li>
            <li>
              {" "}
              <span className="correct-sign"> &#10003;</span>
              Email Integration{" "}
            </li>
          </ul>
        </div>
        <div className="pricing-button">
          <Button href="#">Choose Plan</Button>
        </div>
      </div>
    </PricingContainer>
  );
}

const PricingContainer = styled.div`
  min-height: 35rem;
  border: 5px solid ${colors.main};

  .title {
    border: 7px solid ${colors.main};
    height: 6rem;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    text-align: center !important;
    justify-content: center;
    padding-left: 1rem;
    color: ${colors.secondary};
    background-color: ${colors.main};
    margin: 0 !important;
  }
  .details {
    flex: 1;
    text-align: center !important;
    display: flex;
    flex-direction: column;
    padding: 4rem;
    .features {
      flex: 1;
      display: flex;
      padding-left: 1rem;
      ul {
        display: flex;
        flex: 1;

        flex-direction: column;
        justify-content: flex-start;
        margin: 3rem 0;
        width: 100%;
        li {
          font-size: 2rem;
          width: 100%;
          margin: 1rem 0;
          list-style: none;

          .correct-sign {
            font-size: 2.5rem;
            margin-right: 1rem;
            font-weight: bold;
            color: ${colors.button}!important;
          }
        }
      }
    }
    .price {
      font-size: 5rem;
      text-align: center;

      color: ${colors.main};
      .per {
        font-size: 2rem;
      }
    }
    .pricing-button {
      display: block;
      margin: auto;
      height: 2rem;
    }
  }
  display: flex;
  width: 30%;
  background-color: rgba(${colors.main}, 1);

  flex-direction: column;
  @media (max-width: 900px) {
    width: 90%;
  }
`;
export default Pricing;
