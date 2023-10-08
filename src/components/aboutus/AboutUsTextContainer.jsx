import { Typography } from "@material-tailwind/react";
import React from "react";
import { Check2Circle, CheckCircleFill } from "react-bootstrap-icons";
import LearnMoreButtonYellow from "../buttons/LearnMoreButtonYellow";

function AboutUsTextContainer() {
  return (
    <div className="flex flex-col text-center md:text-left justify-center md:justify-start md:items-start items-center md:ml-[3%] w-full md:w-[43%]">
        <div className="md:block flex items-center justify-center flex-col">
          <div className="-z-[9] relative w-fit">
            <Typography
              variant="h6"
              className="text-yellow-700 tracking-[0.25rem] font-[600]"
            >
              Nos services
            </Typography>
            <div className="bottom-0.5 left-0 bg-yellow-900 opacity-20 absolute w-[100%] -z-[10] h-[0.7rem]"></div>
          </div>
          <Typography variant="h1">
            We Provide Trusted{" "}
            <span className="text-yellow-700">Cab Service</span> In The World
          </Typography>
          <Typography variant="paragraph" color="gray">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour.
          </Typography>
          <div className="mt-[1rem] text-xs flex flex-start gap-[0.5rem] flex-col pl-[1rem]">
            <div className="flex items-center gap-[0.5rem]">
              <CheckCircleFill color="#fbc02d" />
              <Typography color="gray" variant="paragraph" className="font-bold">
                At vero eos et accusamus et iusto odio.
              </Typography>
            </div>
            <div className="flex items-center gap-[0.5rem]">
              <CheckCircleFill color="#fbc02d" />
              <Typography color="gray" variant="paragraph" className="font-bold">
                At vero eos et accusamus et iusto odio.
              </Typography>
            </div>
            <div className="flex items-center gap-[0.5rem]">
              <CheckCircleFill color="#fbc02d" />
              <Typography color="gray" variant="paragraph" className="font-bold">
                At vero eos et accusamus et iusto odio.
              </Typography>
            </div>
          </div>
        </div>
        <div className="mt-6 w-[12rem]">
          <LearnMoreButtonYellow />
        </div>
      </div>    
  );
}

export default AboutUsTextContainer;
