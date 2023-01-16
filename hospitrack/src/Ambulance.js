import React from "react";
import Marquee from "react-fast-marquee";

function Ambulance() {
  return (
    <div>
      <p> Ambulance</p>
      <Marquee
        className="relative text-black bg-gradient-to-bl from-yellow-500 via-red-500 to-blue-500 background-animate"
        onMouseOver="this.stop()"
        onMouseOut="this.start()"
      >
        ADMISSION NOTICE FOR KINDERGARTEN(KG) AND CLASS 1 FOR 2026-24, PLEASE
        CHECK ADMISSION SECTION****** ISC-2022-ISSUE OF DOCUMENTS, KINDLY CHECK
        WEBSITE NOTICE BOARD****FEES CAN BE PAID ON ANY DAY BETWEEN 5TH AND 20TH
        OF EVERY MONTH.
      </Marquee>
    </div>
  );
}

export default Ambulance;
