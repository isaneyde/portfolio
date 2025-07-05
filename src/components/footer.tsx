import {GithubLogoIcon}  from "@phosphor-icons/react";
export const Footer = () => {
  return (
    <footer className=" text-white w-full h-30 bg-slate-950 p-4 gap-4 flex-1">
      
        <div className=" flex justify-around">
            <span>+258 82 181 9298</span>
          <a
            href="https://www.linkedin.com/in/isa-neide-sitoe-/"
            target="_blank"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </a>

          <a href="https://github.com/isaneyde" target="_blank">
            <GithubLogoIcon size={28} weight="fill"/>
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()}. Todos Direitos Reservados.</p>

    </footer>
  );
};
