import { useState, ReactNode } from 'react';
import React from 'react';
import { type DropdownProps } from "@/dropdown/Dropdown.types";
import { globalStyles } from "@/index.styled";
import { DropdownContainer, DropdownLabel, DropdownChildren, DropdownItem, darkTheme } from "@/dropdown/Dropdown.styled"; 
import chevronDown from "@/assets/chevron-down.svg"

// Assuming DropdownProps is in Dropdown.types.ts
export type DropdownProps = {
  label?: string;
  theme?: string;
  expand?: boolean; 
  disabled?: boolean;
  error?: boolean;
  children?: ReactNode;
};

// In Dropdown.tsx
export const Dropdown = ({
    label = "Select...",
    theme,
    expand: initialExpand = false, 
    disabled,
    error,
    children
    }: DropdownProps) => {
    globalStyles();

    const [expand, setExpand] = useState(initialExpand); // renamed from showingOptions
    const [selectedOption, setSelectedOption] = useState('');

    const toggleDropdownOptions = () => {
    if (disabled) {
        setExpand(false);
        return;
    }
    setExpand(!expand);
    }


    const handleDropdownKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter' || event.key === ' ') {
          toggleDropdownOptions();
        }
    }

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        setExpand(false);
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
                <label className='dropdown-label-text'>{selectedOption || label}</label>
                <img src={chevronDown} className='chevron-down'/>
            </DropdownLabel>

            <div className='dropdown-error-msg'>Please select an option.</div>
            {expand && 
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