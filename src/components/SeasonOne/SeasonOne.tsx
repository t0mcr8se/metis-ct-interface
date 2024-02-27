// import BigButtonPrimary from '../BigButtonPrimary/BigButtonPrimary.tsx'

import CheckIcon from "../CheckIcon/CheckIcon";

function SeasonOne() {
  return (
    <>
      <div className="relative border border-solid border-[#6C6C6C] rounded-[20px] pt-3 pb-7 px-4 w-full">
        <div className="text-[#6C6C6C] flex flex-col items-center gap-2">
          <h1 className="text-[#6C6C6C] font-raleway font-medium text-5xl leading-none tracking-wide">
            Season One
          </h1>
          <p className="font-raleway font-medium text-sm text-center">
            Season one of community testing has ended. Thank you for taking
            part! We hope you enjoyed the journey.
          </p>
        </div>
        <CheckIcon className="absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%]" />
      </div>
    </>
  );
}

export default SeasonOne;
