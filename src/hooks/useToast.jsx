import { toastSelector } from "@store/toastState";
import { useEffect } from "react";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { useRecoilState } from "recoil";

const useToast = () => {
  const [toast, setToast] = useRecoilState(toastSelector);

  const toastAnim = useSharedValue(0);

  const toastAnimatedStyle = useAnimatedStyle(() => {
    const bottom = interpolate(toastAnim.value, [0, 1], [-72, 72]);

    return {
      bottom,
    };
  });

  const entry = () => {
    toastAnim.value = withSequence(
      withTiming(1, { duration: 500 }),
      withDelay(2000, withTiming(0, { duration: 500 }))
    );

    setTimeout(() => {
      setToast({ show: false, type: null, message: null });
    }, 3000);
  };

  useEffect(() => {
    if (toast.show) {
      entry();
    }
  }, [toast]);

  return {
    toast,
    toastAnimatedStyle,
  };
};

export default useToast;
