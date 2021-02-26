import { Nav, NavItem, NavLink } from "reactstrap";
import { company } from "../../constants/company";

const AppNavigation = () => {
  return (
    <Nav>
      <NavItem>
        <NavLink href="/">{company.abbrv}</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/app/groups">Groups</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/app/rosary">Rosary</NavLink>
      </NavItem>
    </Nav>
  );
};

export default AppNavigation;
