import { STEP } from "@/libs/constants";
import { SIDE_INFO } from "@/libs/doms";

type Props = {
  step: STEP;
};

const SideItem = ({ info }: { info: string }) => {
  return (
    <li className="flex items-center space-x-3">
      <svg
        className="flex-shrink-0 w-5 h-5 text-green-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span>{info}</span>
    </li>
  );
};

const SidePanel = ({ step }: Props) => {
  return (
    <div className="hidden w-full max-w-md p-12 lg:h-auto lg:block bg-primary-600">
      <div className="block p-8 text-white rounded-lg bg-primary-500">
        <h3 className="mb-1 text-2xl font-semibold">Your £624 tax refund</h3>
        <p className="mb-4 font-light text-primary-100 sm:text-lg">
          ! More information required
        </p>
        <ul role="list" className="space-y-4 text-left">
          {step == STEP.QUICK_QUOTE &&
            SIDE_INFO.slice(0, 1).map((info, index) => {
              return <SideItem key={index} info={info} />;
            })}
          {step == STEP.CLAIM_NOW &&
            SIDE_INFO.slice(0, 2).map((info, index) => {
              return <SideItem key={index} info={info} />;
            })}
          {step == STEP.SIGN_COMPLETE &&
            SIDE_INFO.slice(0, 3).map((info, index) => {
              return <SideItem key={index} info={info} />;
            })}
          {step == STEP.LAST_THING &&
            SIDE_INFO.slice(0, 4).map((info, index) => {
              return <SideItem key={index} info={info} />;
            })}
          {step == STEP.THANK_YOU &&
            SIDE_INFO.map((info, index) => {
              return <SideItem key={index} info={info} />;
            })}
        </ul>
      </div>
    </div>
  );
};

export default SidePanel;
