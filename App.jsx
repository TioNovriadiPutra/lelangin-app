import AppNav from "@navigation/AppNav";
import React from "react";
import { RecoilRoot } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      <AppNav />
    </RecoilRoot>
  );
};

export default App;
