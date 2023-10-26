const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">BlogRover</h1>
        <p className="mt-3 md:mt-0">
          Where every scroll reveals a{" "}
          <span className="underline decoration-4 decoration-[#F7AB0A]">
            New Adventure!
          </span>
        </p>
      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi obcaecati,
        odit laudantium sint saepe
      </p>
    </div>
  );
};

export default Banner;
