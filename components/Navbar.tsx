interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = () => {
  return (
    <div className="navbar w-1/3 m-auto p-4 flex justify-center border-b border-red-500">
      <ul className="flex flex-row text-slate-700">
        <li className="navLink border-2 border-red-300 rounded-lg text-red-500">
          <a href="">Menu</a>
        </li>
        <li className="navLink border-2 border-red-300 rounded-lg text-red-500">
          <a href="">Deals</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
