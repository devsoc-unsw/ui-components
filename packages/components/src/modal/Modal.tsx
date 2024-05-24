import { Button } from "@/button";
import { ButtonContainer, IconWrapper, darkTheme as buttonDarkTheme } from "@/button/Button.styled";
import { type ButtonProps } from "@/button/Button.types";

import { globalStyles } from "@/index.styled";
import { darkTheme, ModalContainer, HeaderWrapper, BodyWrapper, ButtonsWrapper } from "@/modal/Modal.styled";
import { type ModalProps } from "@/modal/Modal.types";
import { useState } from "react";
import LightModeCross from "../assets/Lightmodecross.svg"
import DarkModeCross from "../assets/Darkmodecross.svg"


const CrossButton = ({type, theme, icon, onClick}: ButtonProps) => {

  // Apply global styles
  globalStyles();

  return (
    <ButtonContainer 
      className={theme === "dark" ? buttonDarkTheme : ''} 
      onClick={onClick} 
      type={type}
    >
      {icon && (
        <IconWrapper>
          {icon}
        </IconWrapper>
      )}
    </ButtonContainer>
  )
}

export const Modal = ({title, text, theme, option}: ModalProps) => {
  
  // Apply global styles
  globalStyles();

  const [open, setOpen] = useState(true);

  const closeModal = () => {
    setOpen(false);
  }

  return (
    <ModalContainer 
      className={theme === "dark" ? darkTheme : ''} 
      option={option}
      open={open}
    >
      <HeaderWrapper>
        {title}
        <CrossButton type="text" theme={theme === "dark" ? theme : "light"} icon={<img src={theme === "dark" ? DarkModeCross : LightModeCross} alt='cross icon' onClick={closeModal}/>}/>
      </HeaderWrapper>
      <BodyWrapper>
        {text}
      </BodyWrapper>
      {option && (
        <ButtonsWrapper>
          <Button
            label="Cancel" 
            theme={theme === "dark" ? theme : "light"}
            type="text" 
            onClick={closeModal}
          />
          <Button 
            label="Continue"
            theme="light"
          />
        </ButtonsWrapper>
      )}
    </ModalContainer>
  )
}