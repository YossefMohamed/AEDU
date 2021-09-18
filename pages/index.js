import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import styled from "styled-components";
import Pricing from "../components/pricing";
import SwiperComponent from "../components/swiper";
import Button from "../utils/button";
import colors from "../utils/colors";
import ImageContainer from "../utils/ImageContainer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>

        <meta name="description" content="Yossef's Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <MeetingLand>
        <div className="content">
          <div className="content_main">
            Need To Make A New Meeting Just Join Us
          </div>
          <div className="content-secondary">
            We’re more than a doc. Or a table. Customize Notion to work the way
            you do.
          </div>
          <div className="content-button">
            <Button href="#">Try AEDU FOR FREE</Button>
          </div>
        </div>
        <div className="image-container">
          <ImageContainer src="/meeting.png" />
        </div>
      </MeetingLand>
      <PricingLand>
        <div className="title">
          <h1>Our Peicing Plans</h1>
          <h2>AEDU solves problems to every function.</h2>
        </div>
        <div className="card-container">
          <Pricing type="Basic" price="10" />
          <Pricing type="Normal" price="17" />
          <Pricing type="Advanced" price="25" />
        </div>
        <div className="slider">
          <SwiperComponent />
        </div>
      </PricingLand>
      <Active>
        <div className="active_image">
          <ImageContainer src="/active.png" className="active-image" />
        </div>
        <div className="active_details">
          <h2>Empowering teachers worldwide</h2>
          <p>
            Classroomscreen is endorsed by a community of teachers and was used
            by over three million people last year.
          </p>
          <div className="flex-user">
            <div className="user-details">
              <h3>350K</h3> Registered users
            </div>
            <div className="user-details">
              <h3>350K</h3> Active users
            </div>
            <div className="user-details">
              <h3>350K</h3> Countries
            </div>{" "}
          </div>
          <div className="active-button">
            <Button href="#">Start Your Journay</Button>
          </div>
        </div>
      </Active>
    </div>
  );
}
//border
const Active = styled.div`
  .active-button {
    margin-top: 1rem;
    background-color: saddlebrown;
  }
  .flex-user {
    display: flex;
    font-size: 1.2rem;
    margin-bottom: 2rem;
    h3 {
      color: ${colors.main};
      font-size: 2.5rem;
    }
    .user-details {
      margin-right: 3rem;
    }
  }
  margin: 10rem 0 10rem;
  padding: 0 5rem;
  min-height: 30rem;
  display: flex;
  .active_details {
    padding: 0 2rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2 {
      font-size: 3.1rem;
    }
    p {
      font-size: 1.7rem;
      margin: 1rem 0;
      color: ${colors.secondFont};
    }
  }
  justify-content: space-between;
  .active_image,
  .active_details {
    width: 50%;
  }
  .active_image {
    width: 45%;
    box-shadow: 24px 23px 16px 0px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 24px 23px 16px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 24px 23px 16px 0px rgba(0, 0, 0, 0.75);
  }
  .active_image {
    display: flex;
    border-radius: 2rem;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
    align-items: center;
    & .active-image {
      flex: 1;
    }
  }
  .active-button {
    background-color: transparent !important;
  }
  @media (max-width: 900px) {
    justify-content: center;

    align-items: center;
    padding: 0 20px;
    flex-direction: column;
    .active_image {
      width: 100%;
    }
    .active_details {
      margin: 5rem;
      padding: 0 !important;
      width: 100%;
    }
    .flex-user {
      justify-content: space-between;
    }
    .active-button {
      background-color: transparent !important;
      text-align: center;
      margin: 7rem 0 0;
    }
  }
`;
const PricingLand = styled.div`
  padding-bottom: 10rem;
  .slider {
    min-height: 10rem;
    max-height: 50rem;
    width: 85%;
    margin: 10rem auto;

    background-color: transparent;
    border-radius: 2rem;

    box-shadow: -3px 2px 10px -8px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -3px 2px 10px -8px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -3px 2px 10px -8px rgba(0, 0, 0, 0.75);
    @media (max-width: 900px) {
      padding: 0 1rem;
    }
  }

  background-color: #5a5a5a0a;
  padding-top: 5rem;
  .card-container {
    display: flex;
    justify-content: space-around;
  }

  .title {
    text-align: center;
    margin-bottom: 5rem;
    h1 {
      font-size: 4rem;
    }
    h2 {
      color: ${colors.secondFont};
      font-size: 2rem;
    }
  }
  @media (max-width: 900px) {
    .card-container {
      display: block !important;
      & > div {
        margin: 5rem auto;
      }
    }
    .slider {
      width: 100% !important;
    }
  }
`;
const MeetingLand = styled.div`
  display: flex;

  justify-content: space-between;
  margin: 10rem 0;
  .content {
    padding: 3rem;

    width: 50%;
    font-size: 4.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    &-secondary {
      font-size: 2.5rem;
      color: ${colors.secondFont};
      margin: 1rem 0;
    }
  }
  .image-container {
    width: 45%;
    height: fit-content;
  }
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;

    .content {
      width: 100%;
      text-align: center;
    }
    .image-container {
      width: 70%;
    }
  }
  .content-button {
    text-align: left;
    @media (max-width: 900px) {
      text-align: center;
    }
    width: 100%;
  }
`;
