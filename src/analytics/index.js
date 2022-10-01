import mixpanel from "mixpanel-browser";

export const initMP = () => {
  mixpanel.init("8b643d48491a13461e65525a8a2829fe");
  mixpanel.track("page-load");
};
