import { confirmationSelector } from "@store/pageState";
import { useRecoilState } from "recoil";

const useConfirmationModal = () => {
  const [confirmation, setConfirmation] = useRecoilState(confirmationSelector);

  const onHandleClose = () => {
    setConfirmation({ show: false, data: null });
  };

  return {
    confirmation,
    onHandleClose,
  };
};

export default useConfirmationModal;
