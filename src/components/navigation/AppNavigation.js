import { Nav, NavItem, NavLink } from "reactstrap";

const AppNavigation = () => {
  return (
    <Nav>
      <NavItem>
        <NavLink href="/groups">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/rosary">Link</NavLink>
      </NavItem>
      <NavItem>
        <NavLink disabled href="#">
          Disabled Link
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default AppNavigation;
