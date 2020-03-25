// Copyright 2020 Vincent Vu

"use strict";

chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    // Redirect the original request to Google Translates
    chrome.extension.getBackgroundPage().console.log("callback info: ", info);
    var url = `https://translate.google.com/translate?anno=2&depth=1&sp=nmt4&sl=en&tl=fr&u=${info.url}`;

    return { redirectUrl: url };
  },
  // filters
  {
    urls: ["https://github.com/*", "http://github.com/*"]
  },
  // opt_extraInfoSpec
  ["blocking"]
);
