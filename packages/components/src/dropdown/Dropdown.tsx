import { useState, ReactNode } from 'react';
import React from 'react';
import { type DropdownProps } from "@/dropdown/Dropdown.types";
import { globalStyles } from "@/index.styled";
import { DropdownContainer, DropdownLabel, DropdownChildren, DropdownItem, darkTheme } from "@/dropdown/Dropdown.styled"; 
import chevronDown from "@/assets/chevron-down.svg"

export const Dropdown = ({
        label = "Select...", 
        theme, 
        showingOptions: initialShowingOptions, 
        disabled, 
        error, 
        children}: DropdownProps) => {

    globalStyles();

    const [showingOptions, setShowingOptions] = useState(initialShowingOptions);

    const toggleDropdownOptions = () => {
        if(disabled) {
            setShowingOptions(false);
            return;
        };
        setShowingOptions(!showingOptions);
    }

    const handleDropdownKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
          toggleDropdownOptions();
        }
      }
  
    return (
        <DropdownContainer
            className={theme === "dark" ? darkTheme : ''}
            error={error}
        >
           <DropdownLabel
                className='label'
                onClick={toggleDropdownOptions}
                onKeyDown={handleDropdownKeyDown}
                tabIndex={0}
                disabled={disabled}
                error={error}
            >
                <label>{label}</label>
                <img src={chevronDown} className='chevron-down'/>
            </DropdownLabel>

            <div className='dropdown-error-msg'>Please select an option.</div>
            {showingOptions && 
                <DropdownChildren>
                    {React.Children.map(children, (child: ReactNode, index: number) => (
                        <DropdownItem key={index} tabIndex={0}>
                            {child}
                        </DropdownItem>
                    ))
                    }
                </DropdownChildren>
            }

        </DropdownContainer>
    )
}