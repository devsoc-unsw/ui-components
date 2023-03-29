import { useState } from 'react';
import {
  Copyright,
  darkTheme,
  globalStyles,
  Logout,
  LogoutConfirmation,
  LogoutConfirmationMini,
  SidebarFooter,
  SidebarFooterMini,
  SidebarHeader,
  SidebarLink,
  SidebarLinkList,
  SidebarLinkMini,
  SidebarMini,
  SidebarNav,
  SidebarProfile,
  TermsAndConditions,
} from './Sidebar.styled';

interface INavLink {
  name: string;
  icon: string;
}

interface INavDetailsItem {
  name: string;
  icon: string;
  navLinks: INavLink[];
}

interface INavDetails {
  [key: string]: INavDetailsItem;
}

interface ISidebarProps {
  theme?: 'dark' | 'light';
  project: string;
}

export const Sidebar = ({ theme, project }: ISidebarProps) => {
  const [currentTheme, setCurrentTheme] = useState(theme);
  const [collapse, setCollapse] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Handler when logout button is clicked
  const handleLogoutClick = () => {
    if (isLoggingOut) {
      // Perform logging out here
      console.log('Logged out');
    } else {
      setIsLoggingOut(true);
    }
  };

  // Handler when logout button is blurred
  const handleLogoutBlur = () => {
    setIsLoggingOut(false);
  };

  // Handler when collapse button is clicked
  const handleCollapseClick = () => {
    setCollapse(!collapse);
  };

  // Handler when theme button is clicked
  const handleThemeClick = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  // Array for navigation links
  const navDetails: INavDetails = {
    'uni-lectives': {
      name: 'Uni-lectives',
      icon: 'src/assets/icons/cselectives-icon.png',
      navLinks: [
        {
          name: 'Browse Courses',
          icon: 'src/assets/icons/book-open.svg',
        },
        {
          name: 'My Reviews',
          icon: 'src/assets/icons/edit.svg',
        },
        {
          name: 'Terms and Conditions',
          icon: 'src/assets/icons/terms-and-conditions.svg',
        },
      ],
    },
  };

  // Apply global stylings
  globalStyles();

  return (
    <>
      {!collapse ? (
        <SidebarNav className={currentTheme === 'dark' ? darkTheme : ''}>
          {/* Big sidebar version */}
          <SidebarHeader>
            <img id='icon' alt={navDetails[project].name} src={navDetails[project].icon} />
            <h1>{navDetails[project].name}</h1>
            <img
              alt='Collapse Navbar'
              onClick={handleCollapseClick}
              src='src/assets/icons/collapse.svg'
            />
          </SidebarHeader>
          <SidebarLinkList>
            {navDetails[project].navLinks.map((navLink) => (
              <SidebarLink>
                <img alt={navLink.name} src={navLink.icon} />
                <p>{navLink.name}</p>
              </SidebarLink>
            ))}
          </SidebarLinkList>
          <SidebarFooter>
            <SidebarProfile>
              <div>
                <img
                  id='sidebar-profile-picture'
                  src='src/assets/icons/default-avatar-profile.jpg'
                  alt='Profile picture'
                />
                <p>Darian Lee</p>
              </div>
              <SidebarLink onClick={handleThemeClick}>
                <img alt='Change theme' src='src/assets/icons/dark-mode.svg' />
              </SidebarLink>
            </SidebarProfile>
            {!isLoggingOut ? (
              <Logout onClick={handleLogoutClick}>
                <img alt='Logout' src='src/assets/icons/logout.svg' />
                Logout
              </Logout>
            ) : (
              <LogoutConfirmation
                autoFocus={true}
                onClick={handleLogoutClick}
                onBlur={handleLogoutBlur}
              >
                <img alt='Logout' src='src/assets/icons/logout.svg' />
                Are you sure?
              </LogoutConfirmation>
            )}
            <TermsAndConditions>
              By using this site, you agree to the <a href='/'>terms and conditions</a>.
            </TermsAndConditions>
            <Copyright>© CSESoc 2023, v1.0.0</Copyright>
          </SidebarFooter>
        </SidebarNav>
      ) : (
        <SidebarMini className={currentTheme === 'dark' ? darkTheme : ''}>
          {/* Small sidebar version */}
          <SidebarHeader>
            <img id='icon' alt={navDetails[project].name} src={navDetails[project].icon} />
          </SidebarHeader>
          <SidebarLinkList>
            {navDetails[project].navLinks.map((navLink) => (
              <SidebarLinkMini>
                <img alt={navLink.name} src={navLink.icon} />
              </SidebarLinkMini>
            ))}
          </SidebarLinkList>
          <SidebarFooterMini>
            <SidebarLinkMini>
              <img
                id='sidebar-profile-picture'
                src='src/assets/icons/default-avatar-profile.jpg'
                alt='Profile picture'
              />
            </SidebarLinkMini>
            <SidebarLinkMini onClick={handleCollapseClick}>
              <img alt='Collapse Navbar' src='src/assets/icons/collapse.svg' />
            </SidebarLinkMini>
            <SidebarLinkMini onClick={handleThemeClick}>
              <img alt='Change theme' src='src/assets/icons/dark-mode.svg' />
            </SidebarLinkMini>
            {!isLoggingOut ? (
              <Logout onClick={handleLogoutClick}>
                <img alt='Logout' src='src/assets/icons/logout.svg' />
              </Logout>
            ) : (
              <LogoutConfirmationMini
                autoFocus={true}
                onClick={handleLogoutClick}
                onBlur={handleLogoutBlur}
              >
                <img alt='Logout' src='src/assets/icons/logout.svg' />
              </LogoutConfirmationMini>
            )}
          </SidebarFooterMini>
        </SidebarMini>
      )}
    </>
  );
};
