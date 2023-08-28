"use client";

import { Tweet } from "react-tweet";

const Tweets = () => {
  return (
    <div className="px-1 mb-12 md:px-3">
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 content-center gap-2 md:gap-5 light'>
        <Tweet id="1695286225794724351" />
        <Tweet id="1695184272443764752" />
        <Tweet id="1695054583477747945" />
        <Tweet id="1695112678191112213" />
      </div>
    </div>
  );
};

export default Tweets;
