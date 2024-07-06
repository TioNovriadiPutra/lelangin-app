import { useState } from "react";
import { useController } from "react-hook-form";

const useTextInput = (inputData, control) => {
  const [seePass, setSeePass] = useState(false);

  const { field } = useController({
    name: inputData.name,
    control,
  });

  const onHandleSee = () => {
    setSeePass(!seePass);
  };

  return {
    seePass,
    field,
    onHandleSee,
  };
};

export default useTextInput;
