interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <div className="bg-red-500 w-full text-slate-200 font-sansS p-5 flex justify-center">
      <div id="brandWHeader" className="text-center">
        <div id="brandTitle" className="">
          <h1>Papa Slice®</h1>
        </div>
        <div id="subBrandTitle">
          <h2 className="text-sm">
            {" "}
            <em> The home of giant premium woodfired pizzas!</em>
          </h2>
        </div>
      </div>{" "}
    </div>
  );
};

export default Header;
