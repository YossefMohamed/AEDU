import { useEffect } from "react";
import styled from "styled-components";
import ImageContainer from "../utils/ImageContainer";

function SwiperComponent() {
  useEffect(() => {
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);
  return (
    <SwiperContainer>
      <div className="swiper mySwiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="swiper-content">
              <div className="user">
                <ImageContainer src="/user1.png" className="user-image" />
              </div>

              <div className="quote">
                "AEDU is a great tool to start you meeting and to be in touch
                with your mates"
              </div>
              <div className="user-name">-Yossef Mohamed</div>
            </div>
            <div className="swiper-image">
              <ImageContainer src="/meeting1.png" className="image-container" />
            </div>
          </div>

          <div className="swiper-slide">
            <div className="swiper-content">
              <div className="user">
                <ImageContainer src="/user1.png" className="user-image" />
              </div>

              <div className="quote">
                "AEDU is a great tool to start you meeting and to be in touch
                with your mates"
              </div>
              <div className="user-name">-Yossef Mohamed</div>
            </div>
            <div className="swiper-image">
              <ImageContainer src="/meeting1.png" className="image-container" />
            </div>
          </div>

          <div className="swiper-slide">
            <div className="swiper-content">
              <div className="user">
                <ImageContainer src="/user1.png" className="user-image" />
              </div>

              <div className="quote">
                "AEDU is a great tool to start you meeting and to be in touch
                with your mates"
              </div>
              <div className="user-name">-Yossef Mohamed</div>
            </div>
            <div className="swiper-image">
              <ImageContainer src="/meeting1.png" className="image-container" />
            </div>
          </div>

          <div className="swiper-slide">
            <div className="swiper-content">
              <div className="user">
                <ImageContainer src="/user1.png" className="user-image" />
              </div>

              <div className="quote">
                "AEDU is a great tool to start you meeting and to be in touch
                with your mates"
              </div>
              <div className="user-name">-Yossef Mohamed</div>
            </div>
            <div className="swiper-image">
              <ImageContainer src="/meeting1.png" className="image-container" />
            </div>
          </div>
        </div>
      </div>
    </SwiperContainer>
  );
}

const SwiperContainer = styled.div`
  @media (max-width: 900px) {
    padding: 1rem;
  }
  .swiper-content {
    padding: 3rem 3rem;
    display: flex;
    background-color: #e1edfb;

    justify-content: space-evenly;
    flex-direction: column;
    & .user {
      height: 7rem;
      overflow: hidden;
      & .user-image {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .quote {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3.5rem;
    }
    .user-name {
      font-size: 1.3rem;
      text-align: right;
    }
    @media (max-width: 900px) {
      width: 100% !important;
      .quote {
        font-size: 3rem;
      }
    }
  }

  .swiper-content,
  .swiper-image {
    width: 50%;
  }
  .swiper-image {
    @media (max-width: 900px) {
      width: 0;
    }
    .image-container {
      width: 100%;
      height: 100%;
      display: flex;
    }
    & img {
      flex: 1;
      width: 100%;
      height: 100% !important;
      object-fit: cover;
    }
  }
  .swiper-slide {
    display: flex;
    border-radius: 2rem;
    overflow: hidden;
    width: 100%;

    min-height: 50rem;
  }
`;
export default SwiperComponent;
