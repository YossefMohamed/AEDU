import Image from "next/image";
import styled from "styled-components";

const ImageContainer = (props) => {
  return (
    <ImageContainerNext className={props.className}>
      <Image src={props.src} layout="fill" className={"image"} />
    </ImageContainerNext>
  );
};

const ImageContainerNext = styled.div`
  width: 100%;

  > div {
    position: unset !important;
    height: 100%;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: 100% !important;
  }
`;

export default ImageContainer;
