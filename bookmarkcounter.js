// ==UserScript==
// @name          social-bookmark-counter-on-google-search
// @namespace     https://github.com/ikeikeikeike
// @include       http://www.google.*/search*
// @include       http://www.google.*/custom*
// @include       https://www.google.*/search*
// @include       https://www.google.*/custom*
// @description   Script Summary: Supporting Delicious, Facebook, Twitter, Hatena, Digg and StumbleUpon.
// @author        Tatsuo Ikeda <jp.ne.co.jp at gmail> http://about.me/ikeikeikeike
// @homepage      https://userscripts.org/scripts/show/115527
// @updateURL     https://userscripts.org/scripts/source/115527.meta.js
// @downloadURL   https://userscripts.org/scripts/source/115527.user.js
// @supportURL    https://github.com/ikeikeikeike/social-bookmark-counter-on-google-search/issues
// @version       0.7.3
// @license       Creative Commons
// ==/UserScript==

/*
@include       http://search.yahoo.co.jp/search?*
@include       https://search.yahoo.co.jp/search?*
@include       http://www.bing.com/search*
@include       https://www.bing.com/search*
@include       http://userscripts.org/scripts/search?*
@include       https://userscripts.org/scripts/search?*
*/

(function(){
/* http://www.onicos.com/staff/iz/amuse/javascript/expert/md5.txt */
var md5_hex =(function(){var MD5_T=[0x00000000,0xd76aa478,0xe8c7b756,0x242070db,0xc1bdceee,0xf57c0faf,0x4787c62a,0xa8304613,0xfd469501,0x698098d8,0x8b44f7af,0xffff5bb1,0x895cd7be,0x6b901122,0xfd987193,0xa679438e,0x49b40821,0xf61e2562,0xc040b340,0x265e5a51,0xe9b6c7aa,0xd62f105d,0x02441453,0xd8a1e681,0xe7d3fbc8,0x21e1cde6,0xc33707d6,0xf4d50d87,0x455a14ed,0xa9e3e905,0xfcefa3f8,0x676f02d9,0x8d2a4c8a,0xfffa3942,0x8771f681,0x6d9d6122,0xfde5380c,0xa4beea44,0x4bdecfa9,0xf6bb4b60,0xbebfbc70,0x289b7ec6,0xeaa127fa,0xd4ef3085,0x04881d05,0xd9d4d039,0xe6db99e5,0x1fa27cf8,0xc4ac5665,0xf4292244,0x432aff97,0xab9423a7,0xfc93a039,0x655b59c3,0x8f0ccc92,0xffeff47d,0x85845dd1,0x6fa87e4f,0xfe2ce6e0,0xa3014314,0x4e0811a1,0xf7537e82,0xbd3af235,0x2ad7d2bb,0xeb86d391];var MD5_round1=[[0,7,1],[1,12,2],[2,17,3],[3,22,4],[4,7,5],[5,12,6],[6,17,7],[7,22,8],[8,7,9],[9,12,10],[10,17,11],[11,22,12],[12,7,13],[13,12,14],[14,17,15],[15,22,16]];var MD5_round2=[[1,5,17],[6,9,18],[11,14,19],[0,20,20],[5,5,21],[10,9,22],[15,14,23],[4,20,24],[9,5,25],[14,9,26],[3,14,27],[8,20,28],[13,5,29],[2,9,30],[7,14,31],[12,20,32]];var MD5_round3=[[5,4,33],[8,11,34],[11,16,35],[14,23,36],[1,4,37],[4,11,38],[7,16,39],[10,23,40],[13,4,41],[0,11,42],[3,16,43],[6,23,44],[9,4,45],[12,11,46],[15,16,47],[2,23,48]];var MD5_round4=[[0,6,49],[7,10,50],[14,15,51],[5,21,52],[12,6,53],[3,10,54],[10,15,55],[1,21,56],[8,6,57],[15,10,58],[6,15,59],[13,21,60],[4,6,61],[11,10,62],[2,15,63],[9,21,64]];function MD5_F(x,y,z){return (x&y)|(~x&z)}function MD5_G(x,y,z){return (x&z)|(y&~z)}function MD5_H(x,y,z){return x^y^z}function MD5_I(x,y,z){return y^(x|~z)}var MD5_round=[[MD5_F,MD5_round1],[MD5_G,MD5_round2],[MD5_H,MD5_round3],[MD5_I,MD5_round4]];var CC=String.fromCharCode;function MD5_pack(n32){return CC(n32&0xff)+CC((n32>>>8)&0xff)+CC((n32>>>16)&0xff)+CC((n32>>>24)&0xff)}function MD5_unpack(s4){return s4.charCodeAt(0)|(s4.charCodeAt(1)<<8)|(s4.charCodeAt(2)<<16)|(s4.charCodeAt(3)<<24)}function MD5_number(n){while(n<0)n+=4294967296;while(n>4294967295)n-=4294967296;return n}function MD5_apply_round(x,s,f,abcd,r){var a,b,c,d,kk,ss,ii,t,u;a=abcd[0];b=abcd[1];c=abcd[2];d=abcd[3];kk=r[0];ss=r[1];ii=r[2];u=f(s[b],s[c],s[d]);t=s[a]+u+x[kk]+MD5_T[ii];t=MD5_number(t);t=((t<<ss)|(t>>>(32-ss)));t+=s[b];s[a]=MD5_number(t)}function MD5_hash(data){var abcd,x,state,s,len,index,padLen,f,r,i,j,k,tmp;state=[0x67452301,0xefcdab89,0x98badcfe,0x10325476];len=data.length;index=len&0x3f;padLen=(index<56)?(56-index):(120-index);if(padLen>0){data+="\x80";for(i=0;i<padLen-1;i++)data+="\x00"}data+=MD5_pack(len*8);data+=MD5_pack(0);len+=padLen+8;abcd=[0,1,2,3];x=new Array(16);s=new Array(4);for(k=0;k<len;k+=64){for(i=0,j=k;i<16;i++,j+=4){x[i]=data.charCodeAt(j)|(data.charCodeAt(j+1)<< 8)|(data.charCodeAt(j+2)<<16)|(data.charCodeAt(j+3)<<24)}for(i=0;i<4;i++)s[i]=state[i];for(i=0;i<4;i++){f=MD5_round[i][0];r=MD5_round[i][1];for(j=0;j<16;j++){MD5_apply_round(x,s,f,abcd,r[j]);tmp=abcd[0];abcd[0]=abcd[3];abcd[3]=abcd[2];abcd[2]=abcd[1];abcd[1]=tmp}}for(i=0;i<4;i++){state[i]+=s[i];state[i]=MD5_number(state[i])}}return MD5_pack(state[0])+MD5_pack(state[1])+MD5_pack(state[2])+MD5_pack(state[3])}function MD5_hexhash(data){var i,out,c;var bit128=MD5_hash(data);out="";for(i=0;i<16;i++){c=bit128.charCodeAt(i);out+="0123456789abcdef".charAt((c>>4)&0xf);out+="0123456789abcdef".charAt(c&0xf)}return out}return MD5_hexhash})();


function fnc(doc) {
  var l = doc.getElementsByClassName("l");
  for(var i=0; i<l.length; i++) {
    try {
      hatebuCountView(l[i]);
      deliCountView(l[i]);
      facebookCountView(l[i]);
      twitterCountView(l[i]);
      diggCountView(l[i]);
      stumbleuponCountView(l[i]);
    } catch (e) {
      // console.log(e);
    }
  }
}

try{
  fnc(document);
} catch (e) {
  // console.log(e)
}

if (window.AutoPagerize) {
  boot();
} else {
  window.addEventListener('GM_AutoPagerizeLoaded',boot,false);
}

function boot(){
  window.AutoPagerize.addFilter(function(docs){
    docs.forEach(fnc);
  });
}


/**
 * Api requester.
 */
function requestApi(url, func) {
  GM_xmlhttpRequest({
    method: "GET",
    url: url,
    headers: {"User-Agent":"Mozilla/5.0", "Accept":"text/xml"},
    onload: func
  });
}

/**
 * Render Html
 */
function renderHtml(link, total, url, className) {

  var span = document.createElement('span');
  span.className = className;

  var a = document.createElement('a');
  a.setAttribute('style', 'color: #FFF;');

  a.href = url;
  a.textContent = total;
  span.appendChild(a);

  try {
    // normal
    var s = link.parentNode.parentNode.getElementsByClassName('s')[0];
    if (s && link.parentNode.className == "r") {
      var gl = s.getElementsByClassName('gl')[0];
      gl.parentNode.insertBefore(span, gl.nextSibling);
    }
    // normal + news + url
    else {
      link.parentNode.insertBefore(span, link.nextSibling);
    }
  } catch(e) {/*console.log(e);*/}
}

/**
 * Delicious
 */
function deliCountView(link) {
  var url = "http://feeds.delicious.com/v2/json/urlinfo/" + md5_hex(link.href);

  requestApi(url, function(res) {
    var
      json,
      total;

    try {
      json = eval("(" + res.responseText + ")");
      total = json[0].total_posts;
      if (json.length < 1)
        return;
      if (!total)
        return;
    } catch (e) {/*console.log(e);*/return;}

    renderHtml(link, total, "http://delicious.com/url/"+json[0].hash, "__GMsavers");
  });
}

/**
 * 1. Tweetmeme is over. Thanks!!
 * #. Change Topsy API.
 * #. Change to native twitter API.  # Note: Exists count bug.
 */
function twitterCountView(link) {
  // var url = "http://api.tweetmeme.com/url_info.jsonc?url=" + link.href + '&callback=crossdomain_res';
  var url = "http://urls.api.twitter.com/1/urls/count.json?url=" + link.href + "&callback=crossdomain_res";
  var toUrl = "http://topsy.com/";

  requestApi(url, function(res) {
    var
      json,
      total;

    try {
      json = eval(res.responseText.replace('crossdomain_res', ''));
      total = json.count;
      if (!json)
        return;
      if (!total)
        return;
    } catch (e) {/*console.log(e);*/return;}

    renderHtml(link, total, toUrl + json.url.replace(/^(.+)\/$/, "$1"), "__GMtwisavers");

  });
}

/**
 * digg
 */
function diggCountView(link) {
  var url = "http://services.digg.com/1.0/endpoint?method=story.getAll&link=" + link.href + '&type=javascript&callback=crossdomain_res';

  requestApi(url, function(res) {
    var
      json,
      total;

    try {
      json = eval(res.responseText.replace('crossdomain_res', ''));
      total = json.stories[0].diggs;
      if (!json)
        return;
      if (!total)
        return;
    } catch (e) {/*console.log(e);*/return;}

    renderHtml(link, total, json.stories[0].href, "__GMdiggsavers");
  });
}

/**
 * hatena bookmark
 */
function hatebuCountView(link) {
  var url = "http://b.hatena.ne.jp/entry/json/?url=" + encodeURI(link.href) + "&callback=crossdomain_res";

  requestApi(url, function(res) {
    var
      json,
      total;

    try {
      json = eval(res.responseText.replace('crossdomain_res', ''));
      total = json.count;
      if (json.length < 1)
        return;
      if (!total)
        return;
    } catch (e) {/*console.log(e);*/return;}

    renderHtml(link, total, json.entry_url, "__GMhatebusavers");
  });
}

/**
 * facebook like button
 */
function facebookCountView(link) {
  var
    encode,
    url;

  encode = encodeURI(link.href);
  url = "https://api.facebook.com/method/fql.query?query=select like_count, total_count, share_count, comment_count, normalized_url, url from link_stat where url='" + encode + "'&format=json&callback=crossdomain_res";

  requestApi(url, function(res){
    var
      json,
      total;

    try {
      json = eval(res.responseText.replace('crossdomain_res', ''))[0];
      total = json.total_count;
      if (json.length < 1)
        return;
      if (!total)
        return;
    } catch (e) {/*console.log(e);*/return;}

    renderHtml(link, total, 'https://developers.facebook.com/docs/reference/plugins/like/', "__GMfacebooksavers");
  });
}

/**
 * StumbleUpon
 */
function stumbleuponCountView(link) {
  var url = "http://www.stumbleupon.com/services/1.01/badge.getinfo?url=" + link.href;

  requestApi(url, function(res){
    var
      json,
      total;

    try {
      eval("json = " + res.responseText);
      total = json.result.views;
      if (json.success !== true)
        return;
      if (!total)
        return;
    } catch (e) {/*console.log(e);*/return;}

    renderHtml(link, total, json.result.info_link, "__GMstumbleuponsavers");
  });
}

/**
 * Css
 */
GM_addStyle([
".__GMsavers a\
  {\
    background: #3274D0 none repeat scroll 0 0;\
    color: #FFFFFF;\
    font-weight: bold;\
    padding: 1px 5px;\
    margin-left: 5px;\
    text-decoration: none;\
  }",
".__GMsavers a:hover\
  {\
    background: #7CBA0F none repeat scroll 0 0;\
    color: #FFFFFF;\
    font-weight: bold;\
    padding: 1px 5px;\
    margin-left: 5px;\
    text-decoration: none;\
  }",
".__GMtwisavers a\
  {\
    background: rgba(51,204,255,0.9) none repeat scroll 0 0;\
    color: #FFFFFF;\
    font-weight: bold;\
    padding: 1px 5px;\
    margin-left: 5px;\
    text-decoration: none;\
  }",
".__GMtwisavers a:hover\
  {\
    background: #7CBA0F none repeat scroll 0 0;\
    color: #FFFFFF;\
    font-weight: bold;\
    padding: 1px 5px;\
    margin-left: 5px;\
    text-decoration: none;\
  }",
".__GMdiggsavers a\
  {\
    background: rgba(31,100,105,0.9) none repeat scroll 0 0;\
    color: #FFFFFF;\
    font-weight: bold;\
    padding: 1px 5px;\
    margin-left: 5px;\
    text-decoration: none;\
  }",
".__GMdiggsavers a:hover\
  {\
    background: #7CBA0F none repeat scroll 0 0;\
    color: #FFFFFF;\
    font-weight: bold;\
    padding: 1px 5px;\
    margin-left: 5px;\
    text-decoration: none;\
  }",
".__GMstumbleuponsavers a\
  {\
    background: rgba(255, 112, 0, 0.9) none repeat scroll 0 0;\
    color: #FFFFFF;\
    font-weight: bold;\
    padding: 1px 5px;\
    margin-left: 5px;\
    text-decoration: none;\
  }",
".__GMstumbleuponsavers a:hover\
  {\
    background: #7CBA0F none repeat scroll 0 0;\
    color: #FFFFFF;\
    font-weight: bold;\
    padding: 1px 5px;\
    margin-left: 5px;\
    text-decoration: none;\
  }",
".__GMhatebusavers a\
  {\
    background: rgba(255,99,71,0.9) none repeat scroll 0 0;\
    color: #FFFFFF;\
    font-weight: bold;\
    padding: 1px 5px;\
    margin-left: 5px;\
    text-decoration: none;\
  }",
".__GMhatebusavers a:hover\
  {\
    background: #7CBA0F none repeat scroll 0 0;\
    color: #FFFFFF;\
    font-weight: bold;\
    padding: 1px 5px;\
    margin-left: 5px;\
    text-decoration: none;\
  }",
".__GMfacebooksavers a\
  {\
    background: rgba(0,0,128,0.9) none repeat scroll 0 0;\
    color: #FFFFFF;\
    font-weight: bold;\
    padding: 1px 5px;\
    margin-left: 5px;\
    text-decoration: none;\
  }",
".__GMfacebooksavers a:hover\
  {\
    background: #7CBA0F none repeat scroll 0 0;\
    color: #FFFFFF;\
    font-weight: bold;\
    padding: 1px 5px;\
    margin-left: 5px;\
    text-decoration: none;\
  }"
].join(''));


// GM_addStyle(<><![CDATA[
// .__GMsavers a
// {
// background: #3274D0 none repeat scroll 0 0;
// color: #FFFFFF;
// font-weight: bold;
// padding: 1px 5px;
// margin-left: 5px;
// text-decoration: none;
// }

// .__GMsavers a:hover
// {
// background: #7CBA0F none repeat scroll 0 0;
// color: #FFFFFF;
// font-weight: bold;
// padding: 1px 5px;
// margin-left: 5px;
// text-decoration: none;
// }

// .__GMtwisavers a
// {
// background: rgba(51,204,255,0.9) none repeat scroll 0 0;
// color: #FFFFFF;
// font-weight: bold;
// padding: 1px 5px;
// margin-left: 5px;
// text-decoration: none;
// }

// .__GMtwisavers a:hover
// {
// background: #7CBA0F none repeat scroll 0 0;
// color: #FFFFFF;
// font-weight: bold;
// padding: 1px 5px;
// margin-left: 5px;
// text-decoration: none;
// }
// ]]></>);

})();
