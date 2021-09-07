__NUXT_JSONP__("/developer-resources/Webhooks", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I){return {data:[{document:{slug:i,description:i,title:i,position:400,category:"Developer Resources",menuTitle:i,toc:[{id:r,depth:s,text:t},{id:u,depth:s,text:v},{id:w,depth:3,text:x}],body:{type:"root",children:[{type:a,tag:j,props:{},children:[{type:b,value:"Webhooks allows user to trigger certain operation on following database operations"}]},{type:b,value:d},{type:a,tag:"ul",props:{},children:[{type:b,value:d},{type:a,tag:k,props:{},children:[{type:b,value:"INSERT"}]},{type:b,value:d},{type:a,tag:k,props:{},children:[{type:b,value:"UPDATE"}]},{type:b,value:d},{type:a,tag:k,props:{},children:[{type:b,value:"DELETE"}]},{type:b,value:d}]},{type:b,value:d},{type:a,tag:j,props:{},children:[{type:b,value:"The hook can trigger "},{type:a,tag:f,props:{},children:[{type:b,value:"before"}]},{type:b,value:" or "},{type:a,tag:f,props:{},children:[{type:b,value:"after"}]},{type:b,value:" a certain operation and the triggers will trigger asynchronously without blocking the actual operation."}]},{type:b,value:d},{type:a,tag:y,props:{id:r},children:[{type:a,tag:g,props:{href:"#available-triggers",ariaHidden:l,tabIndex:m},children:[{type:a,tag:n,props:{className:[o,p]},children:[]}]},{type:b,value:t}]},{type:b,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:a,tag:z,props:{},children:[{type:a,tag:A,props:{},children:[{type:a,tag:e,props:{},children:[{type:a,tag:h,props:{},children:[{type:b,value:"Trigger"}]},{type:a,tag:h,props:{},children:[{type:b,value:B}]}]}]},{type:a,tag:C,props:{},children:[{type:a,tag:e,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Email"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Send email to certain email addresses"}]}]},{type:a,tag:e,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Slack"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Notify via Slack channel"}]}]},{type:a,tag:e,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Microsoft Teams"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Notify via Microsoft Teams channel"}]}]},{type:a,tag:e,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Discord"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Notify via Discord channel"}]}]},{type:a,tag:e,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Mattermost"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Notify via Mattermost channel"}]}]},{type:a,tag:e,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Twilio"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Send SMS to certain mobile numbers"}]}]},{type:a,tag:e,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"Whatsapp Twilio"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Send Whatsapp messages to numbers using Twilio"}]}]},{type:a,tag:e,props:{},children:[{type:a,tag:c,props:{},children:[{type:b,value:"URL"}]},{type:a,tag:c,props:{},children:[{type:b,value:"Invoke an HTTP API"}]}]}]}]},{type:b,value:d},{type:a,tag:y,props:{id:u},children:[{type:a,tag:g,props:{href:"#accessing-data",ariaHidden:l,tabIndex:m},children:[{type:a,tag:n,props:{className:[o,p]},children:[]}]},{type:b,value:v}]},{type:b,value:d},{type:a,tag:j,props:{},children:[{type:b,value:"The current row data and other details will be available in the hooks payload so the user can use "},{type:a,tag:g,props:{href:"https:\u002F\u002Fhandlebarsjs.com\u002Fguide\u002F#simple-expressions",rel:[D,E,F],target:G},children:[{type:b,value:"handlebar syntax"}]},{type:b,value:" to use data."}]},{type:b,value:d},{type:a,tag:"blockquote",props:{},children:[{type:b,value:d},{type:a,tag:j,props:{},children:[{type:b,value:"We are using "},{type:a,tag:g,props:{href:"https:\u002F\u002Fhandlebarsjs.com\u002F",rel:[D,E,F],target:G},children:[{type:b,value:"Handlebars"}]},{type:b,value:" library to parse the payload internally."}]},{type:b,value:d}]},{type:b,value:d},{type:a,tag:"h3",props:{id:w},children:[{type:a,tag:g,props:{href:"#available-values-in-context",ariaHidden:l,tabIndex:m},children:[{type:a,tag:n,props:{className:[o,p]},children:[]}]},{type:b,value:x}]},{type:b,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:a,tag:z,props:{},children:[{type:a,tag:A,props:{},children:[{type:a,tag:e,props:{},children:[{type:a,tag:h,props:{},children:[{type:b,value:"Name"}]},{type:a,tag:h,props:{},children:[{type:b,value:B}]},{type:a,tag:h,props:{},children:[{type:b,value:"Example"}]}]}]},{type:a,tag:C,props:{},children:[{type:a,tag:e,props:{},children:[{type:a,tag:c,props:{},children:[{type:a,tag:q,props:{},children:[{type:b,value:"data"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Contains row data"}]},{type:a,tag:c,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"{{ data.Title }}"}]}]}]},{type:a,tag:e,props:{},children:[{type:a,tag:c,props:{},children:[{type:a,tag:q,props:{},children:[{type:b,value:"user"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Logginned user object"}]},{type:a,tag:c,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"{{ user.id }}"}]}]}]},{type:a,tag:e,props:{},children:[{type:a,tag:c,props:{},children:[{type:a,tag:q,props:{},children:[{type:b,value:"env"}]}]},{type:a,tag:c,props:{},children:[{type:b,value:"Environment values"}]},{type:a,tag:c,props:{},children:[{type:a,tag:f,props:{},children:[{type:b,value:"{{ env.SITE_URL }}"}]}]}]}]}]}]},dir:"\u002Fen\u002Fdeveloper-resources",path:"\u002Fen\u002Fdeveloper-resources\u002FWebhooks",extension:".md",createdAt:H,updatedAt:H,to:"\u002Fdeveloper-resources\u002FWebhooks"},prev:{slug:"GraphqlAPIs",title:"GraphQL APIs",to:"\u002Fdeveloper-resources\u002FGraphqlAPIs"},next:{slug:I,title:I,to:"\u002FFAQs"}}],fetch:{},mutations:[]}}("element","text","td","\n","tr","code","a","th","Webhooks","p","li","true",-1,"span","icon","icon-link","strong","available-triggers",2,"Available Triggers","accessing-data","Accessing Data","available-values-in-context","Available values in context","h2","table","thead","Details","tbody","nofollow","noopener","noreferrer","_blank","2021-09-07T10:23:41.569Z","FAQs")));