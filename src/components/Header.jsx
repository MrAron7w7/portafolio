import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

const Header = () => {
  return (
    <header>
      <Navbar>
        <NavbarBrand>
          <h1>hola</h1>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="bg-red-200" href="#">
            Features
          </Link>
        </NavbarItem>
      </Navbar>
    </header>
  );
};

export default Header;
