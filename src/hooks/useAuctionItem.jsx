import dayjs from "dayjs";
import { useEffect, useState } from "react";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

const useAuctionItem = (time) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = dayjs();
      const targetTime = dayjs(time);
      const diff = targetTime.diff(now);

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
        return;
      }

      const duration = dayjs.duration(diff);

      setTimeLeft({
        days: Math.floor(duration.asDays()),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds(),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return {
    timer: `${timeLeft.days}D ${timeLeft.hours}H ${timeLeft.minutes}M ${timeLeft.seconds}S`,
    hour: timeLeft.hours,
    done:
      timeLeft.hours === 0 &&
      timeLeft.days === 0 &&
      timeLeft.minutes === 0 &&
      timeLeft.seconds === 0,
  };
};

export default useAuctionItem;
