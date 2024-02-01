import Logo from "./Logo";
const Footer = () => {
  return (
    <div className="w-full h-[495px] bg-[#F6F6F7]">
      <div className="m-auto py-[64px] w-[1200px] flex justify-between ">
        <div className="w-1/3 flex flex-col gap-3">
          <p>About</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            tempore, qui vero aspernatur necessitatibus nostrum possimus
            temporibus modi impedit cum, architecto, doloribus dolorum nisi
            fugit eaque delectus illum maxime rerum.
          </p>
          <p>Email: info@jstemplate.com</p>
          <p>Phone: 880 123 456 789</p>
        </div>
        <div>
          <p>Home</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
      </div>
          <div className="w-[1200px] m-auto flex justify-between">
              <Logo />
              <div className="flex gap-4">
                  <p>Terms of Use</p>
                  <p>Privacy Policy</p>
                  <p>Cookie Policy</p>
                  
              </div>
      </div>
    </div>
  );
};
export default Footer;
