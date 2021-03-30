import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterSection>
      <Description>
        <DesciptionText> Made with</DesciptionText>
        <Image
          src="https://www.pngfind.com/pngs/m/56-562383_corazon-png-whatsapp-heart-emoji-cut-out-transparent.png"
          alt="corazón rojo"
        />
      </Description>
    </FooterSection>
  );
}

const FooterSection = styled.div`
  border-top: 1px solid grey;
  height: 1px;
  margin: 30px 0;
  width: 80%;
`;

const Description = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
`;

const DesciptionText = styled.p`
  color: red;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  font-size: 15px;
  margin-right: 2px;
`;

const Image = styled.img`
  height: 20px;
`;
