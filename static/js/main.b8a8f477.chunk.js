(this["webpackJsonpphoto-carousel"]=this["webpackJsonpphoto-carousel"]||[]).push([[0],[,,,,,,,,,,,,,function(e,n,i){},function(e,n,i){},function(e,n,i){},,function(e,n,i){},function(e,n,i){},function(e,n,i){},function(e,n,i){"use strict";i.r(n);var t=i(1),r=i.n(t),o=i(8),l=i.n(o),c=(i(13),i(3)),a=i(5),s=(i(14),i(15),i(7)),j=i(0),d=function(e){var n=e.polaroidPhotos,i=e.photoMinatures,t=e.bound,r=e.setBound,o=e.slide;return Object(j.jsxs)("div",{id:"photoCarousel",children:[Object(j.jsx)("div",{className:"arrowWrapper left",onClick:function(){r(0===t?9:(t-1)%n.length),o("left")},children:Object(j.jsx)("div",{className:"arrow",children:Object(j.jsx)(s.a,{})})}),Object(j.jsxs)("div",{id:"allPhotosWrapper",children:[Object(j.jsx)("div",{id:"photoContainer",children:n.map((function(e){return e}))}),Object(j.jsx)("div",{id:"photoMinatures",children:i.map((function(e){return e}))})]}),Object(j.jsx)("div",{className:"arrowWrapper right",onClick:function(){r((t+1)%n.length),o("right")},children:Object(j.jsx)("div",{className:"arrow",children:Object(j.jsx)(s.b,{})})})]})},h=(i(17),function(e){var n=e.imgSrc,i=e.imgDesc;return Object(j.jsxs)("div",{className:"polaroidFrame",children:[Object(j.jsx)("div",{className:"polaroidPhoto",children:Object(j.jsx)("img",{alt:"",src:"".concat(n)})}),Object(j.jsx)("div",{className:"polaroidDescription",children:i})]})}),u=(i(18),function(e){var n=e.imgSrc,i=e.onClick;return Object(j.jsx)("div",{className:"photoMinature",onClick:i,children:Object(j.jsx)("img",{src:n,alt:"minature"})})}),b=(i(19),function(){return Object(j.jsx)("div",{id:"breedSelector",children:Object(j.jsxs)("select",{id:"breeds",children:[Object(j.jsx)("option",{value:"all breeds",children:"all breeds"}),Object(j.jsx)("option",{value:"affenpinscher",children:"affenpinscher"}),Object(j.jsx)("option",{value:"african",children:"african"}),Object(j.jsx)("option",{value:"airedale",children:"airedale"}),Object(j.jsx)("option",{value:"akita",children:"akita"}),Object(j.jsx)("option",{value:"appenzeller",children:"appenzeller"}),Object(j.jsx)("option",{value:"australian/shepherd",children:"australian shepherd"}),Object(j.jsx)("option",{value:"basenji",children:"basenji"}),Object(j.jsx)("option",{value:"beagle",children:"beagle"}),Object(j.jsx)("option",{value:"bluetick",children:"bluetick"}),Object(j.jsx)("option",{value:"borzoi",children:"borzoi"}),Object(j.jsx)("option",{value:"bouvier",children:"bouvier"}),Object(j.jsx)("option",{value:"boxer",children:"boxer"}),Object(j.jsx)("option",{value:"brabancon",children:"brabancon"}),Object(j.jsx)("option",{value:"briard",children:"briard"}),Object(j.jsx)("option",{value:"buhund/norwegian",children:"norwegian buhund"}),Object(j.jsx)("option",{value:"bulldog/boston",children:"boston bulldog"}),Object(j.jsx)("option",{value:"bulldog/english",children:"english bulldog"}),Object(j.jsx)("option",{value:"bulldog/french",children:"french bulldog"}),Object(j.jsx)("option",{value:"bullterrier/staffordshire",children:"staffordshire bullterrier"}),Object(j.jsx)("option",{value:"cattledog/australian",children:"australian cattledog"}),Object(j.jsx)("option",{value:"chihuahua",children:"chihuahua"}),Object(j.jsx)("option",{value:"chow",children:"chow"}),Object(j.jsx)("option",{value:"clumber",children:"clumber"}),Object(j.jsx)("option",{value:"cockapoo",children:"cockapoo"}),Object(j.jsx)("option",{value:"collie/border",children:"border collie"}),Object(j.jsx)("option",{value:"coonhound",children:"coonhound"}),Object(j.jsx)("option",{value:"corgi/cardigan",children:"cardigan corgi"}),Object(j.jsx)("option",{value:"cotondetulear",children:"cotondetulear"}),Object(j.jsx)("option",{value:"dachshund",children:"dachshund"}),Object(j.jsx)("option",{value:"dalmatian",children:"dalmatian"}),Object(j.jsx)("option",{value:"dane/great",children:"great dane"}),Object(j.jsx)("option",{value:"deerhound/scottish",children:"scottish deerhound"}),Object(j.jsx)("option",{value:"dhole",children:"dhole"}),Object(j.jsx)("option",{value:"dingo",children:"dingo"}),Object(j.jsx)("option",{value:"doberman",children:"doberman"}),Object(j.jsx)("option",{value:"elkhound/norwegian",children:"norwegian elkhound"}),Object(j.jsx)("option",{value:"entlebucher",children:"entlebucher"}),Object(j.jsx)("option",{value:"eskimo",children:"eskimo"}),Object(j.jsx)("option",{value:"finnish/lapphund",children:"lapphund finnish"}),Object(j.jsx)("option",{value:"frise/bichon",children:"bichon frise"}),Object(j.jsx)("option",{value:"germanshepherd",children:"germanshepherd"}),Object(j.jsx)("option",{value:"greyhound/italian",children:"italian greyhound"}),Object(j.jsx)("option",{value:"groenendael",children:"groenendael"}),Object(j.jsx)("option",{value:"havanese",children:"havanese"}),Object(j.jsx)("option",{value:"hound/afghan",children:"afghan hound"}),Object(j.jsx)("option",{value:"hound/basset",children:"basset hound"}),Object(j.jsx)("option",{value:"hound/blood",children:"blood hound"}),Object(j.jsx)("option",{value:"hound/english",children:"english hound"}),Object(j.jsx)("option",{value:"hound/ibizan",children:"ibizan hound"}),Object(j.jsx)("option",{value:"hound/plott",children:"plott hound"}),Object(j.jsx)("option",{value:"hound/walker",children:"walker hound"}),Object(j.jsx)("option",{value:"husky",children:"husky"}),Object(j.jsx)("option",{value:"keeshond",children:"keeshond"}),Object(j.jsx)("option",{value:"kelpie",children:"kelpie"}),Object(j.jsx)("option",{value:"komondor",children:"komondor"}),Object(j.jsx)("option",{value:"kuvasz",children:"kuvasz"}),Object(j.jsx)("option",{value:"labradoodle",children:"labradoodle"}),Object(j.jsx)("option",{value:"labrador",children:"labrador"}),Object(j.jsx)("option",{value:"leonberg",children:"leonberg"}),Object(j.jsx)("option",{value:"lhasa",children:"lhasa"}),Object(j.jsx)("option",{value:"malamute",children:"malamute"}),Object(j.jsx)("option",{value:"malinois",children:"malinois"}),Object(j.jsx)("option",{value:"maltese",children:"maltese"}),Object(j.jsx)("option",{value:"mastiff/bull",children:"bull mastiff"}),Object(j.jsx)("option",{value:"mastiff/english",children:"english mastiff"}),Object(j.jsx)("option",{value:"mastiff/tibetan",children:"tibetan mastiff"}),Object(j.jsx)("option",{value:"mexicanhairless",children:"mexicanhairless"}),Object(j.jsx)("option",{value:"mix",children:"mix"}),Object(j.jsx)("option",{value:"mountain/bernese",children:"bernese mountain"}),Object(j.jsx)("option",{value:"mountain/swiss",children:"swiss mountain"}),Object(j.jsx)("option",{value:"newfoundland",children:"newfoundland"}),Object(j.jsx)("option",{value:"otterhound",children:"otterhound"}),Object(j.jsx)("option",{value:"ovcharka/caucasian",children:"caucasian ovcharka"}),Object(j.jsx)("option",{value:"papillon",children:"papillon"}),Object(j.jsx)("option",{value:"pekinese",children:"pekinese"}),Object(j.jsx)("option",{value:"pembroke",children:"pembroke"}),Object(j.jsx)("option",{value:"pinscher/miniature",children:"miniature pinscher"}),Object(j.jsx)("option",{value:"pitbull",children:"pitbull"}),Object(j.jsx)("option",{value:"pointer/german",children:"german pointer"}),Object(j.jsx)("option",{value:"pointer/germanlonghair",children:"germanlonghair pointer"}),Object(j.jsx)("option",{value:"pomeranian",children:"pomeranian"}),Object(j.jsx)("option",{value:"poodle/miniature",children:"miniature poodle"}),Object(j.jsx)("option",{value:"poodle/standard",children:"standard poodle"}),Object(j.jsx)("option",{value:"poodle/toy",children:"toy poodle"}),Object(j.jsx)("option",{value:"pug",children:"pug"}),Object(j.jsx)("option",{value:"puggle",children:"puggle"}),Object(j.jsx)("option",{value:"pyrenees",children:"pyrenees"}),Object(j.jsx)("option",{value:"redbone",children:"redbone"}),Object(j.jsx)("option",{value:"retriever/chesapeake",children:"chesapeake retriever"}),Object(j.jsx)("option",{value:"retriever/curly",children:"curly retriever"}),Object(j.jsx)("option",{value:"retriever/flatcoated",children:"flatcoated retriever"}),Object(j.jsx)("option",{value:"retriever/golden",children:"golden retriever"}),Object(j.jsx)("option",{value:"ridgeback/rhodesian",children:"rhodesian ridgeback"}),Object(j.jsx)("option",{value:"rottweiler",children:"rottweiler"}),Object(j.jsx)("option",{value:"saluki",children:"saluki"}),Object(j.jsx)("option",{value:"samoyed",children:"samoyed"}),Object(j.jsx)("option",{value:"schipperke",children:"schipperke"}),Object(j.jsx)("option",{value:"schnauzer/giant",children:"giant schnauzer"}),Object(j.jsx)("option",{value:"schnauzer/miniature",children:"miniature schnauzer"}),Object(j.jsx)("option",{value:"setter/english",children:"english setter"}),Object(j.jsx)("option",{value:"setter/gordon",children:"gordon setter"}),Object(j.jsx)("option",{value:"setter/irish",children:"irish setter"}),Object(j.jsx)("option",{value:"sheepdog/english",children:"english sheepdog"}),Object(j.jsx)("option",{value:"sheepdog/shetland",children:"shetland sheepdog"}),Object(j.jsx)("option",{value:"shiba",children:"shiba"}),Object(j.jsx)("option",{value:"shihtzu",children:"shihtzu"}),Object(j.jsx)("option",{value:"spaniel/blenheim",children:"blenheim spaniel"}),Object(j.jsx)("option",{value:"spaniel/brittany",children:"brittany spaniel"}),Object(j.jsx)("option",{value:"spaniel/cocker",children:"cocker spaniel"}),Object(j.jsx)("option",{value:"spaniel/irish",children:"irish spaniel"}),Object(j.jsx)("option",{value:"spaniel/japanese",children:"japanese spaniel"}),Object(j.jsx)("option",{value:"spaniel/sussex",children:"sussex spaniel"}),Object(j.jsx)("option",{value:"spaniel/welsh",children:"welsh spaniel"}),Object(j.jsx)("option",{value:"springer/english",children:"english springer"}),Object(j.jsx)("option",{value:"stbernard",children:"stbernard"}),Object(j.jsx)("option",{value:"terrier/american",children:"american terrier"}),Object(j.jsx)("option",{value:"terrier/australian",children:"australian terrier"}),Object(j.jsx)("option",{value:"terrier/bedlington",children:"bedlington terrier"}),Object(j.jsx)("option",{value:"terrier/border",children:"border terrier"}),Object(j.jsx)("option",{value:"terrier/cairn",children:"cairn terrier"}),Object(j.jsx)("option",{value:"terrier/dandie",children:"dandie terrier"}),Object(j.jsx)("option",{value:"terrier/fox",children:"fox terrier"}),Object(j.jsx)("option",{value:"terrier/irish",children:"irish terrier"}),Object(j.jsx)("option",{value:"terrier/kerryblue",children:"kerryblue terrier"}),Object(j.jsx)("option",{value:"terrier/lakeland",children:"lakeland terrier"}),Object(j.jsx)("option",{value:"terrier/norfolk",children:"norfolk terrier"}),Object(j.jsx)("option",{value:"terrier/norwich",children:"norwich terrier"}),Object(j.jsx)("option",{value:"terrier/patterdale",children:"patterdale terrier"}),Object(j.jsx)("option",{value:"terrier/russell",children:"russell terrier"}),Object(j.jsx)("option",{value:"terrier/scottish",children:"scottish terrier"}),Object(j.jsx)("option",{value:"terrier/sealyham",children:"sealyham terrier"}),Object(j.jsx)("option",{value:"terrier/silky",children:"silky terrier"}),Object(j.jsx)("option",{value:"terrier/tibetan",children:"tibetan terrier"}),Object(j.jsx)("option",{value:"terrier/toy",children:"toy terrier"}),Object(j.jsx)("option",{value:"terrier/welsh",children:"welsh terrier"}),Object(j.jsx)("option",{value:"terrier/westhighland",children:"westhighland terrier"}),Object(j.jsx)("option",{value:"terrier/wheaten",children:"wheaten terrier"}),Object(j.jsx)("option",{value:"terrier/yorkshire",children:"yorkshire terrier"}),Object(j.jsx)("option",{value:"tervuren",children:"tervuren"}),Object(j.jsx)("option",{value:"vizsla",children:"vizsla"}),Object(j.jsx)("option",{value:"waterdog/spanish",children:"spanish waterdog"}),Object(j.jsx)("option",{value:"weimaraner",children:"weimaraner"}),Object(j.jsx)("option",{value:"whippet",children:"whippet"}),Object(j.jsx)("option",{value:"wolfhound/irish",children:"irish wolfhound"})]})})}),p=function(e){var n=e.substring(30,30+e.substring(30).indexOf("/")).split("-");return n=(n=(n=(n[1]?n[1]:"")+" "+n[0]).trim()).charAt(0).toUpperCase()+n.slice(1)};var v=function(){var e=Object(t.useState)([]),n=Object(a.a)(e,2),i=n[0],r=n[1],o=Object(t.useState)([]),l=Object(a.a)(o,2),s=l[0],v=l[1],O=Object(t.useState)(0),x=Object(a.a)(O,2),g=x[0],m=x[1];return Object(t.useEffect)((function(){for(var e=0;e<10;e++)fetch("https://dog.ceo/api/breeds/image/random").then((function(e){return e.json()})).then((function(e){r((function(n){return[].concat(Object(c.a)(n),[Object(j.jsx)(h,{imgSrc:e.message,imgDesc:p(e.message)})])})),v((function(n){return[].concat(Object(c.a)(n),[Object(j.jsx)(u,{imgSrc:e.message})])}))}));document.getElementById("breeds").addEventListener("change",(function(){var e;r([]),v([]),e="all breeds"===document.getElementById("breeds").value?"https://dog.ceo/api/breeds/image/random":"https://dog.ceo/api/breed/".concat(document.getElementById("breeds").value,"/images/random");for(var n=0;n<10;n++)fetch(e).then((function(e){return e.json()})).then((function(e){r((function(n){return[].concat(Object(c.a)(n),[Object(j.jsx)(h,{imgSrc:e.message,imgDesc:p(e.message)})])})),v((function(n){return[].concat(Object(c.a)(n),[Object(j.jsx)(u,{imgSrc:e.message})])}))}))}))}),[]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{}),Object(j.jsx)(d,{polaroidPhotos:i,photoMinatures:s,bound:g,setBound:m,slide:function(e){"left"===e?i.unshift(i.pop()):i.push(i.shift())}}),Object(j.jsxs)("div",{id:"clause",children:[Object(j.jsx)("a",{target:"_blank",href:"https://icons8.com/icon/9201/dog-paw",rel:"noreferrer",children:"Dog Paw"})," favicon by ",Object(j.jsx)("a",{target:"_blank",href:"https://icons8.com",rel:"noreferrer",children:"Icons8"})]})]})};l.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.b8a8f477.chunk.js.map