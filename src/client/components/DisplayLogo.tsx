import * as React from "react";

const DisplayLogo: React.FC<IDisplayLogoProps> = () => {
  return (
    <img id="tcLogo" src="/assets/TrueCodersLogo.png" alt="TrueCoders Logo" />
  );
};

interface IDisplayLogoProps {}

export default DisplayLogo;
