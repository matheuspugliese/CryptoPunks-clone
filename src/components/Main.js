import React from "react";
import './Main.css';
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";

const Main = () => {
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA6lBMVEVjhZbI+/sAAAAaQ8gWN6Sb4ODO//8ULHxphITK/v6s2NhmipsmLy8mMzm/8PAaRMtLZXILMKVfgZcZQcFniZIXO7EAJJ+ZxN6Co6Nff49Vc4ETGRxObZsJL6UiScWy7u5AVmEtTKFRcrml5uY0Rk8XOqwPPcuYv79FZ7BMX19XeaEWNZoANMVOcKkVMIuaxuosRYIdNX5kkZEKF0EIES+ErNJskMYII3pqjZQAJqYvTZ8UK3glMThie3u25eU+XaMNNrkNHlQACDlSbIxni8kQGjGUvttDX4wxPj5KXV0ZHx9Ybm46T1uSuLj+O8aTAAADs0lEQVR4nO3c6VbaQBiAYUFBAwpFgwWRuiAU0drV1qVaumut9387Xcw3yTmTxIAJk8T3/UkCzCN4MlnI3BwRERERERERERERERERERERERERUTpbjS/TFP/s00ZcndqmMb7Z3YW46iI0E0KECM2XX6HtdBKj8ERe1DTuX6Mdp7P5tbiaP5MXHZnm/W2zIX/5+nxc1eUlG5umeXMIESJEOItyL7RzKxxtOn1qSvkS2jtyxKFZl2IDpkQog4jxo0OIECFChBkS2hE62elrwnqUwmVS3ykZ4ehw4NSVxvLIoCEPHZ07Hcig1R8+tGYIcE1W6helJ4kIB9qQ3WGph44WnRAiRIgQ4eMUqu2hOyy1vVZjUMKFQ2k9SuOQ2cBYVjpNVrj6QmrKeQR1oKJ/JH1+e9eXry+lp1H6Nm4G1d1VayUrdE8mPXO+gPWm+jTP5aN7J2NYKlsTVD5eD/wCd9/LS5UTFirpM/kHCRcWJugeoayFECFChLkWLj5cGHi93ro5Yb15IL2Svk8ntH4Md4MaHlvGhOrL+dquOq1MJyxY5eAEaFRYdZZNLYwUQoQIESLMpPCD03nVZ3uYQK5QvWGywmHb+aVHu9hxUmPoLCeQ++rSShJEj1CuZG0XTfUx98L8f4YIESLMq3BtcHc+YTCUzW7ehEPp57bUkt6o1EORRnrT0royJlQnMKrb8j7Lal7VK/X+V9rSp1phtfQp2r45oeQVyuS4V3La0qfL4UJtmo0QIUKEj1VYjlF4HeV5iewfeoSyp31VqDn5CWUPvaMPUBb9alma8EYt1J+X7D6+h6gOlqi3rshVBZ6hSkv6SNVCDeh53nP9eckep/HJnZdWfIYqI/YR1gLXdrP8hDOCIUSIECHCRISXwRu48sWUwttUCa/377rWJynWZUVLLdzqSTqxJmtfpkGo8jm75nPVpSuU2V7J52tuzfjqy6mFYYUKJYQIESJEmG3hntTJqdA9njHt9TSpFyopQoQIESJEiBAhQoQIESJEiDCcKIWsk21hlBAiRIgQ4aMSTnL7Ic+58OwIa/olC2FdzvquEQ8WWpXiRF3M+s4fMxcuIUSIECFChPeWve1hQf3+JGKF7AmnDCFChAgRIgzMvadiToVWRd1I4rfcpWIjX0L3V0Gz/uWoAaE5GUKECBFmW1jOonCyXfxbuUlEZoSTHqdZScGGXpWIcC8NMgkhQoTmQ4gwf8KNKLVNq7xNKkzV4COFEGH6Q4gw/SFEmP4QIkx/CBGmP4TpEf4BgT1dMpSDVNkAAAAASUVORK5CYII="
              }
              alt=""
            />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">Bandana Punk</div>
          <span className="itemNumber">#3</span>
        </div>
        <div className="owner">
          <div className="ownerImageContainer">
            <img
              src={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAA6lBMVEVjhZbI+/sAAAAaQ8gWN6Sb4ODO//8ULHxphITK/v6s2NhmipsmLy8mMzm/8PAaRMtLZXILMKVfgZcZQcFniZIXO7EAJJ+ZxN6Co6Nff49Vc4ETGRxObZsJL6UiScWy7u5AVmEtTKFRcrml5uY0Rk8XOqwPPcuYv79FZ7BMX19XeaEWNZoANMVOcKkVMIuaxuosRYIdNX5kkZEKF0EIES+ErNJskMYII3pqjZQAJqYvTZ8UK3glMThie3u25eU+XaMNNrkNHlQACDlSbIxni8kQGjGUvttDX4wxPj5KXV0ZHx9Ybm46T1uSuLj+O8aTAAADs0lEQVR4nO3c6VbaQBiAYUFBAwpFgwWRuiAU0drV1qVaumut9387Xcw3yTmTxIAJk8T3/UkCzCN4MlnI3BwRERERERERERERERERERERERERUTpbjS/TFP/s00ZcndqmMb7Z3YW46iI0E0KECM2XX6HtdBKj8ERe1DTuX6Mdp7P5tbiaP5MXHZnm/W2zIX/5+nxc1eUlG5umeXMIESJEOItyL7RzKxxtOn1qSvkS2jtyxKFZl2IDpkQog4jxo0OIECFChBkS2hE62elrwnqUwmVS3ykZ4ehw4NSVxvLIoCEPHZ07Hcig1R8+tGYIcE1W6helJ4kIB9qQ3WGph44WnRAiRIgQ4eMUqu2hOyy1vVZjUMKFQ2k9SuOQ2cBYVjpNVrj6QmrKeQR1oKJ/JH1+e9eXry+lp1H6Nm4G1d1VayUrdE8mPXO+gPWm+jTP5aN7J2NYKlsTVD5eD/wCd9/LS5UTFirpM/kHCRcWJugeoayFECFChLkWLj5cGHi93ro5Yb15IL2Svk8ntH4Md4MaHlvGhOrL+dquOq1MJyxY5eAEaFRYdZZNLYwUQoQIESLMpPCD03nVZ3uYQK5QvWGywmHb+aVHu9hxUmPoLCeQ++rSShJEj1CuZG0XTfUx98L8f4YIESLMq3BtcHc+YTCUzW7ehEPp57bUkt6o1EORRnrT0royJlQnMKrb8j7Lal7VK/X+V9rSp1phtfQp2r45oeQVyuS4V3La0qfL4UJtmo0QIUKEj1VYjlF4HeV5iewfeoSyp31VqDn5CWUPvaMPUBb9alma8EYt1J+X7D6+h6gOlqi3rshVBZ6hSkv6SNVCDeh53nP9eckep/HJnZdWfIYqI/YR1gLXdrP8hDOCIUSIECHCRISXwRu48sWUwttUCa/377rWJynWZUVLLdzqSTqxJmtfpkGo8jm75nPVpSuU2V7J52tuzfjqy6mFYYUKJYQIESJEmG3hntTJqdA9njHt9TSpFyopQoQIESJEiBAhQoQIESJEiDCcKIWsk21hlBAiRIgQ4aMSTnL7Ic+58OwIa/olC2FdzvquEQ8WWpXiRF3M+s4fMxcuIUSIECFChPeWve1hQf3+JGKF7AmnDCFChAgRIgzMvadiToVWRd1I4rfcpWIjX0L3V0Gz/uWoAaE5GUKECBFmW1jOonCyXfxbuUlEZoSTHqdZScGGXpWIcC8NMgkhQoTmQ4gwf8KNKLVNq7xNKkzV4COFEGH6Q4gw/SFEmP4QIkx/CBGmP4TpEf4BgT1dMpSDVNkAAAAASUVORK5CYII="
              }
              alt=""
            />
          </div>
          <div className="ownerDetails">
            <div className="ownerNameAndHandle">
              <div>0xC36d211Da64a4cDD727F722196545Ec8799BeD9e</div>
            </div>
            <div className="ownerLink">
              <img src={instagramLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={twitterLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={moreIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
