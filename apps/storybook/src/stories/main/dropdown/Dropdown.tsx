import { useEffect, useState } from 'react';

import {
    darkTheme,
    globalStyles,
    DropdownHeaderClosed,
    DropdownHeaderOpened,
    DropdownOption,
    DropdownOptionList,
    DropdownContent,
} from './Dropdown.styled';

type DropdownOption = {
    name: string;
}

type DropdownProps = {
    options: DropdownOption[];
    onSelect: (option: string) => string;
    theme?: 'dark' | 'light';
};

export const Dropdown = ({ theme, options }: DropdownProps) => {
    const [currentTheme, setCurrentTheme] = useState(theme);
    const [collapse, setCollapse] = useState(false);
    const [selectedOption, setSelectedOption] = useState(String);

    // Handler when collapse button is clicked
    const handleCollapseClick = () => {
        setCollapse(!collapse);
    };

    // Handler to set option to clicked option
    const handleOptionSelect = (option: DropdownOption) => {
        setSelectedOption(option.name);
        setCollapse(false);
    };

    // Apply global stylings
    globalStyles();

    // Set currentTheme state appropriately
    useEffect(() => setCurrentTheme(theme), [theme]);

    const defaultOption = 'Select ...';

    return (
        <>
            {!collapse ? (
                <DropdownContent className={currentTheme === 'dark' ? darkTheme : ''}>
                    {/* Collapsed options */}
                    <DropdownHeaderClosed onClick={handleCollapseClick}>
                        <p>{selectedOption ? selectedOption : defaultOption}</p>
                        <img
                            alt='Chevron Down'
                            src='src/assets/icons/angle-down.svg'
                        />
                    </DropdownHeaderClosed>
                </DropdownContent>
            ) : (
                <DropdownContent className={currentTheme === 'dark' ? darkTheme : ''}>
                    {/* Show options */}
                    <DropdownHeaderOpened onClick={handleCollapseClick}>
                        <p>{selectedOption ? selectedOption : defaultOption}</p>
                        <img
                            alt='Chevron Up'
                            src='src/assets/icons/angle-up.svg'
                        />
                    </DropdownHeaderOpened>

                    <DropdownOptionList>
                        {options &&
                            options.map((option) => (
                                <DropdownOption onClick={() => handleOptionSelect(option)}>
                                    <p>{option.name}</p>
                                </DropdownOption>
                            ))}
                    </DropdownOptionList>
                </DropdownContent>
            )}
        </>
    );
};