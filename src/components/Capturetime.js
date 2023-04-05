import React from "react";
import TimePicker from "rc-time-picker";
import "@fontsource/roboto";
import "rc-time-picker/assets/index.css";

import moment from "moment";

const format = "h:mm a";
const now = moment().hour(0).minute(0);

export default function Capturetime() {
  const [time, setTime] = React.useState(now);
  const onChange = (value) => {
    setTime(value);
  };

  return (
<>   <TimePicker
        styles={{ fontFamily: "Roboto", }}
        showSecond={false}
        value={time}
        className="timercheck"
        onChange={onChange}
        format={format}
        use12Hours
        minuteStep={1}
      />
      <br />
        {/* time[24hrs]:&nbsp;
        {time ? time.format("HH:mm") : "???"} */}
    </>
  );
}