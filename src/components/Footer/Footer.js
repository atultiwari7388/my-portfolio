import React from "react";
import { Button } from "../../globalStyles";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaYoutube,
  FaMicrosoft,
  FaLinkedin,
  FaSkype,
} from "react-icons/fa";
import { DiStackoverflow } from "react-icons/di";
import { GrAmazon } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
import { FiPhoneCall } from "react-icons/fi";
import { SiWhatsapp, SiWechat } from "react-icons/si";
import {
  FooterContainer,
  FooterSubscription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  SocialIcon,
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join Our Community to Receive The Latest Topics and Working
        </FooterSubHeading>
        <FooterSubText>You Can Unsubscribe any Time</FooterSubText>
        <FooterSubText>
          <Form>
            <FormInput name="email" type="email" placeholder="xyz@gmail.com" />
            <Button fontBig>Subscribe</Button>
          </Form>
        </FooterSubText>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to="/home">Home</FooterLink>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/services">Services</FooterLink>
            <FooterLink to="/support">Support</FooterLink>
            <FooterLink to="/github">Github</FooterLink>
          </FooterLinksItems>

          <FooterLinksItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
            <FooterLink to="/sign-up">
              <FiPhoneCall />
              &nbsp;&nbsp;
              {"+91-6307537145"}
            </FooterLink>
            <FooterLink to="/">
              <SiWhatsapp />
              &nbsp;&nbsp;
              {"+91-6307537145"}
            </FooterLink>
            <FooterLink to="/">
              <SiWechat />
              &nbsp; WeChat
            </FooterLink>
            <FooterLink to="/">
              <FaLinkedin />
              &nbsp; Atul Tiwari
            </FooterLink>
            <FooterLink to="/">
              <FaSkype />
              &nbsp; Mr. Darling
            </FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>Our Partners</FooterLinkTitle>
            <FooterLink to="/sign-up">
              <GrAmazon />
              &nbsp; Amazon
            </FooterLink>
            <FooterLink to="/">
              <FaYoutube />
              &nbsp; YouTube
            </FooterLink>
            <FooterLink to="/">
              <FcGoogle /> &nbsp; Google
            </FooterLink>
            <FooterLink to="/">
              <FaMicrosoft /> &nbsp; MicroSoft
            </FooterLink>
            <FooterLink to="/">
              <DiStackoverflow /> &nbsp; StackOverFlow
            </FooterLink>
          </FooterLinksItems>

          <FooterLinksItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterLink to="/Facebook">Facebook</FooterLink>
            <FooterLink to="/Twitter">Twitter</FooterLink>
            <FooterLink to="/Instagram">Instagram</FooterLink>
            <FooterLink to="/Github">GitHub</FooterLink>
            <FooterLink to="/">Terms of Services</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon />
            React Dev
          </SocialLogo>
          <WebsiteRights>© React Dev 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink
              href="/"
              target="_blank"
              aria-label="Twitter"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink
              href={"https://www.instagram.com/atul_tiwari45/"}
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>

            <SocialIconLink
              href={"https://github.com/atultiwari7388"}
              target="_blank"
              aria-label="GitHub"
            >
              <FaGithub />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
