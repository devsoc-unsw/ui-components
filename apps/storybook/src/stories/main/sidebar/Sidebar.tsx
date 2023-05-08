import { useCallback, useEffect, useState } from 'react';
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

type NavLink = {
  name: string;
  icon: string;
  onClick: () => void;
};

type NavContent = NavLink & {
  onLogout: () => void;
  content?: NavLink[];
};

type SidebarProps = NavContent & {
  theme?: 'dark' | 'light';
};

export const Sidebar = ({ theme, name, icon, onClick, onLogout, content }: SidebarProps) => {
  const [currentTheme, setCurrentTheme] = useState(theme);
  const [collapse, setCollapse] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Handler when logout button is clicked
  const handleLogoutClick = () => {
    if (isLoggingOut) {
      onLogout();
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

  // Apply global stylings
  globalStyles();

  // Set currentTheme state appropriately
  useEffect(() => setCurrentTheme(theme), [theme]);

  return (
    <>
      {!collapse ? (
        <SidebarNav className={currentTheme === 'dark' ? darkTheme : ''}>
          {/* Big sidebar version */}
          <SidebarHeader>
            <img id='icon' alt={name} src={icon} onClick={onClick} />
            <h1 onClick={onClick}>{name}</h1>
            <img
              alt='Collapse Navbar'
              onClick={handleCollapseClick}
              src='src/assets/icons/collapse.svg'
            />
          </SidebarHeader>
          <SidebarLinkList>
            {content &&
              content.map((link) => (
                <SidebarLink>
                  <img alt={link.name} src={link.icon} />
                  <p>{link.name}</p>
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
            <img id='icon' alt={name} src={icon} onClick={onClick} />
          </SidebarHeader>
          <SidebarLinkList>
            {content &&
              content.map((link) => (
                <SidebarLinkMini>
                  <img alt={link.name} src={link.icon} />
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
