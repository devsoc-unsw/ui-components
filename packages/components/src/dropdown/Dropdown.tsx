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
    const [selectedOption, setSelectedOption] = useState('');

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

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setShowingOptions(false);
        console.log(`Selected option: ${option}`);
    }

    const handleDropdownOptionKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
        if (event.currentTarget.textContent) {
            handleOptionClick(event.currentTarget.textContent);
        }
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
                <label>{selectedOption || label}</label>
                <img src={chevronDown} className='chevron-down'/>
            </DropdownLabel>

            <div className='dropdown-error-msg'>Please select an option.</div>
            {showingOptions && 
                <DropdownChildren>
                    {React.Children.map(children, (child: ReactNode, index: number) => (
                        <DropdownItem 
                            key={index} 
                            tabIndex={0} 
                            onClick={() => handleOptionClick(child)}
                            onKeyDown={handleDropdownOptionKeyDown}
                        >
                            {child}
                        </DropdownItem>
                    ))
                    }
                </DropdownChildren>
            }

        </DropdownContainer>
    )
}