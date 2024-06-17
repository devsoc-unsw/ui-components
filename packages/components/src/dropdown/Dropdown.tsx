import { useState, ReactNode } from 'react';
import React from 'react';
import { type DropdownProps } from './Dropdown.types';
import { globalStyles } from "@/index.styled";
import { DropdownContainer, DropdownLabel, DropdownChildren, DropdownItem, darkTheme } from "@/dropdown/Dropdown.styled"; 
import { ChevronDown } from 'lucide-react';

export const Dropdown = ({
    placeholder = "Select...",
    theme,
    expand: initialExpand = false, 
    disabled,
    error,
    options = [],
    onSelect,
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
        if (onSelect) {
            onSelect(option);
        }
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
                 <label className='dropdown-label-text'>{selectedOption || placeholder}</label>
                <ChevronDown className='chevron-down'/>
            </DropdownLabel>

            <div className='dropdown-error-msg'>Please select an option.</div>
            {expand && 
                <DropdownChildren>
                    {options.map((option, index) => ( 
                        <DropdownItem 
                            key={index} 
                            tabIndex={0} 
                            onClick={() => handleOptionClick(option)}
                            onKeyDown={handleDropdownOptionKeyDown}
                        >
                            {option}
                        </DropdownItem>
                    ))}
                </DropdownChildren>
            }

        </DropdownContainer>
    )
}