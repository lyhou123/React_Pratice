import { Button, Navbar } from 'flowbite-react';
const NavbarComponent1=()=>{
  return (
    <Navbar className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="src/assets/react.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className='bg-black'>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default NavbarComponent1;