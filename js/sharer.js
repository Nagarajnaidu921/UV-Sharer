/*
Copyright (c) 2016 yuvaraj
This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
document.addEventListener("DOMContentLoaded", function() {
  "use strict";

function lit(tabUrl) {
    function urlAssigner(link_) {
      let id = "#"+link_.id;
      let a = document.querySelector(id);
      a.href = link_.href;
      a.target ="_blank";
    }
    
    let facebook = {};
    facebook.href = "https://www.facebook.com/sharer.php?u=" + tabUrl;
    facebook.id = "uv-facebook";

    let twitter = {};
    twitter.href = "https://twitter.com/share?url=" + tabUrl;
    twitter.id = "uv-twitter";

    let googlePlus = {};
    googlePlus.href = "https://plus.google.com/share?url=" + tabUrl;
    googlePlus.id = "uv-google-plus";

    let reddit = {};
    reddit.href = "https://www.reddit.com/submit?url=" + tabUrl;
    reddit.id = "uv-reddit";

    let linkedin = {};
    linkedin.href = "https://www.linkedin.com/shareArticle?url=" + tabUrl;
    linkedin.id = "uv-linkedin";

    let stumbleupon = {};
    stumbleupon.href = "http://www.stumbleupon.com/submit?url=" + tabUrl;
    stumbleupon.id = "uv-stumbleupon";

    let facebookButton = urlAssigner(facebook);
    let googleplusButton = urlAssigner(googlePlus);
    let twitterButton = urlAssigner(twitter);
    let redditButton = urlAssigner(reddit);
    let linkedinButton = urlAssigner(linkedin); 
    let stumbleuponButton = urlAssigner(stumbleupon);   
}

  (function getCurrentTabUrl() {
     let queryInfo = {
     active: true,
     currentWindow: true
   };
    chrome.tabs.query(queryInfo, function(tabs) {
      let tab = tabs[0];
      let tabUrL = tab.url;
      lit(tabUrL)
  });
})();

});
