import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../globalStyles";
import { DiMongodb, DiHtml5, DiCss3, DiJavascript1 } from "react-icons/di";
import { FaNode, FaReact } from "react-icons/fa";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./InfoSection.elements";

const infoSection = ({
  primary,
  lightBg,
  imgStart,
  lightTopLine,
  lightTextDesc,
  buttonLabel,
  description,
  headline,
  lightText,
  topLine,
  alt,
  img,
  start,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  {description} <br />
                  <br />
                  <DiHtml5 style={{ color: "red", fontSize: "2rem" }} />
                  <DiJavascript1
                    style={{ color: "yellow", fontSize: "2rem" }}
                  />
                  <DiCss3 style={{ color: "blue", fontSize: "2rem" }} />
                  <DiMongodb style={{ color: "green", fontSize: "2rem" }} />
                  <FaReact style={{ color: "skyblue", fontSize: "2rem" }} />
                  <br />
                  <FaNode style={{ color: "green", fontSize: "2rem" }} />
                </Subtitle>
                <Link to="/sign-up">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default infoSection;
