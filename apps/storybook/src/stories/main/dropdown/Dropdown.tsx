import { useEffect, useState } from 'react';

import {
    darkTheme,
    globalStyles,
    DropdownContent,
    DropdownBoxClosed,
    DropdownBoxOpened,
    DropdownErrorMessage,
    DropdownOption,
    DropdownOptionList,
} from './Dropdown.styled';

type DropdownOption = {
    name: string;
}

type DropdownOptions = {
    options: DropdownOption[];
    onSelect: (option: string) => string;
}

type DropdownProps = DropdownOptions & {
    onSubmit: () => void;
    theme?: 'dark' | 'light';
};

export const Dropdown = ({ theme, onSubmit, options }: DropdownProps) => {
    const [currentTheme, setCurrentTheme] = useState(theme);
    const [collapse, setCollapse] = useState(false);
    const [selectedOption, setSelectedOption] = useState(String);
    const [isError, setError] = useState(false);

    const defaultOption = 'Select ...';

    const handleSubmit = (option: string) => {
        (option === defaultOption) ? setError(true) : setError(false);
    };

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

    return (
        <>
            {!collapse ? (
                <DropdownContent className={currentTheme === 'dark' ? darkTheme : ''}>
                    {/* Collapsed options */}
                    <DropdownBoxClosed onClick={handleCollapseClick}>
                        <p>{selectedOption ? selectedOption : defaultOption}</p>
                        <img
                            alt='chevron-down'
                            src='src/assets/icons/angle-down.svg'
                        />
                    </DropdownBoxClosed>
                    {isError ? (
                        <DropdownErrorMessage><p>Please select an option.</p></DropdownErrorMessage>
                    ) : <></>}
                </DropdownContent>
            ) : (
                <DropdownContent className={currentTheme === 'dark' ? darkTheme : ''}>
                    {/* Show options */}
                    <DropdownBoxOpened onClick={handleCollapseClick}>
                        <p>{selectedOption ? selectedOption : defaultOption}</p>
                        <img
                            alt='chevron-up'
                            src='src/assets/icons/angle-up.svg'
                        />
                    </DropdownBoxOpened>
                    <DropdownOptionList className={currentTheme === 'dark' ? darkTheme : ''}>
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