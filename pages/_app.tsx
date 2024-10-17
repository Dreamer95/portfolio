import "../styles/globals.css";
import AppContext from "../components/AppContextFolder/AppContext";
import { useRef, useState } from "react";
import GoogleAnalytics from "../components/GoogleAnalytics";

function MyApp({ Component, pageProps }) {
  const timerCookie = useRef(null);
  const windowSizeTrackerRef = useRef(null);
  const mousePositionRef = useRef(null);
  const [sharedState, setSharedState] = useState({
    portfolio: {
      NavBar: {
        IntervalEvent: null,
        scrolling: null,
        scrollSizeY: null,
      },
      Scrolling:{
        IntervalEvent:null
      }
    },
    userdata: {
      timerCookieRef: timerCookie,
      windowSizeTracker: windowSizeTrackerRef,
      mousePositionTracker: mousePositionRef,
    },
    typing: {
      keyboardEvent: null,
      eventInputLostFocus: null,
    },
    finishedLoading: false,
  });

  console.log('ENV', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, process.env.NODE_ENV)

  return (
    <AppContext.Provider value={{ sharedState, setSharedState }}>
      <Component {...pageProps} />
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS && (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      )}
    </AppContext.Provider>
  );
}

export default MyApp;
