/* eslint-disable */module.exports={languageData:{"plurals":function(n,ord){var s=String(n).split("."),v0=!s[1],t0=Number(s[0])==n,n10=t0&&s[0].slice(-1),n100=t0&&s[0].slice(-2);if(ord)return n10==1&&n100!=11?"one":n10==2&&n100!=12?"two":n10==3&&n100!=13?"few":"other";return n==1&&v0?"one":"other"}},messages:{"A forum for all things old TV":"A forum for all things old TV","Last seen {0,date,date0}":function(a){return["Last seen ",a("0","date","date0")]},"Top {USER_COUNT} Active Users":function(a){return["Top ",a("USER_COUNT")," Active Users"]},"{0, plural, =0 {No comments yet} one {# comment} other {# comments}}":function(a){return[a("0","plural",{0:"No comments yet",one:["#"," comment"],other:["#"," comments"]})]},"{0, plural, =0 {No posts yet} one {# post} other {# posts}}":function(a){return[a("0","plural",{0:"No posts yet",one:["#"," post"],other:["#"," posts"]})]}}};