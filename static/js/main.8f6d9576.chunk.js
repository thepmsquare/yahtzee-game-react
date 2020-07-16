(this["webpackJsonpyahtzee-game-react"]=this["webpackJsonpyahtzee-game-react"]||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var r=t(0),o=t.n(r),s=t(7),c=t.n(s),n=(t(13),t(1)),i=t(2),l=t(4),d=t(3),u=t(5),p=(t(14),function(e){Object(l.a)(t,e);var a=Object(d.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"Dice"},this.props.diceValues.map((function(a){return o.a.createElement("i",{className:"fas fa-dice-".concat(a.text," Dice-Die ").concat(a.isFrozen?"Dice-Frozen":""),key:a.id,"data-id":a.id,onClick:e.props.freezeDie})})),o.a.createElement("button",{className:"Dice-RollButton ".concat(this.props.rollsRemaining<1?"disabled":""),onClick:this.props.rollDice},this.props.rollsRemaining," Rolls Left"))}}]),t}(r.Component)),m=(t(15),function(e){Object(l.a)(t,e);var a=Object(d.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Scoreboard"},o.a.createElement("h2",null,"Upper"),o.a.createElement("div",{onClick:this.props.updateScore,"data-id":"Ones",className:this.props.clickedCategories.includes("Ones")?"Scoreboard-disabled":""},o.a.createElement("span",{className:"Scoreboard-category"},"Ones"),o.a.createElement("span",{className:"Scoreboard-score"},"Score 1 for every 1.",o.a.createElement("span",{className:"Scoreboard-curScore"},"+",this.props.possibleScores.Ones))),o.a.createElement("div",{onClick:this.props.updateScore,"data-id":"Twos",className:this.props.clickedCategories.includes("Twos")?"Scoreboard-disabled":""},o.a.createElement("span",{className:"Scoreboard-category"},"Twos"),o.a.createElement("span",{className:"Scoreboard-score"},"Score 2 for every 2.",o.a.createElement("span",{className:"Scoreboard-curScore"},"+",this.props.possibleScores.Twos))),o.a.createElement("div",{onClick:this.props.updateScore,"data-id":"Threes",className:this.props.clickedCategories.includes("Threes")?"Scoreboard-disabled":""},o.a.createElement("span",{className:"Scoreboard-category"},"Threes"),o.a.createElement("span",{className:"Scoreboard-score"},"Score 3 for every 3.",o.a.createElement("span",{className:"Scoreboard-curScore"},"+",this.props.possibleScores.Threes))),o.a.createElement("div",{onClick:this.props.updateScore,"data-id":"Fours",className:this.props.clickedCategories.includes("Fours")?"Scoreboard-disabled":""},o.a.createElement("span",{className:"Scoreboard-category"},"Fours"),o.a.createElement("span",{className:"Scoreboard-score"},"Score 4 for every 4.",o.a.createElement("span",{className:"Scoreboard-curScore"},"+",this.props.possibleScores.Fours))),o.a.createElement("div",{onClick:this.props.updateScore,"data-id":"Fives",className:this.props.clickedCategories.includes("Fives")?"Scoreboard-disabled":""},o.a.createElement("span",{className:"Scoreboard-category"},"Fives"),o.a.createElement("span",{className:"Scoreboard-score"},"Score 5 for every 5.",o.a.createElement("span",{className:"Scoreboard-curScore"},"+",this.props.possibleScores.Fives))),o.a.createElement("div",{onClick:this.props.updateScore,"data-id":"Sixes",className:this.props.clickedCategories.includes("Sixes")?"Scoreboard-disabled":""},o.a.createElement("span",{className:"Scoreboard-category"},"Sixes"),o.a.createElement("span",{className:"Scoreboard-score"},"Score 6 for every 6.",o.a.createElement("span",{className:"Scoreboard-curScore"},"+",this.props.possibleScores.Sixes))),o.a.createElement("h2",null,"Lower"),o.a.createElement("div",{onClick:this.props.updateScore,"data-id":"3 of Kind",className:this.props.clickedCategories.includes("3 of Kind")?"Scoreboard-disabled":""},o.a.createElement("span",{className:"Scoreboard-category"},"3 of Kind",o.a.createElement("span",{className:"Scoreboard-description"},"If 3+ of one value.")),o.a.createElement("span",{className:"Scoreboard-score"},"Score sum of all dice.",o.a.createElement("span",{className:"Scoreboard-curScore"},"+",this.props.possibleScores["3 of Kind"]))),o.a.createElement("div",{onClick:this.props.updateScore,"data-id":"4 of Kind",className:this.props.clickedCategories.includes("4 of Kind")?"Scoreboard-disabled":""},o.a.createElement("span",{className:"Scoreboard-category"},"4 of Kind",o.a.createElement("span",{className:"Scoreboard-description"},"If 4+ of one value.")),o.a.createElement("span",{className:"Scoreboard-score"},"Score sum of all dice."," ",o.a.createElement("span",{className:"Scoreboard-curScore"},"+",this.props.possibleScores["4 of Kind"]))),o.a.createElement("div",{onClick:this.props.updateScore,"data-id":"Full House",className:this.props.clickedCategories.includes("Full House")?"Scoreboard-disabled":""},o.a.createElement("span",{className:"Scoreboard-category"},"Full House",o.a.createElement("span",{className:"Scoreboard-description"},"If 3 of one value and 2 of another.")),o.a.createElement("span",{className:"Scoreboard-score"},"Score 25.",o.a.createElement("span",{className:"Scoreboard-curScore"},"+",this.props.possibleScores["Full House"]))),o.a.createElement("div",{onClick:this.props.updateScore,"data-id":"Small Straight",className:this.props.clickedCategories.includes("Small Straight")?"Scoreboard-disabled":""},o.a.createElement("span",{className:"Scoreboard-category"},"Small Straight",o.a.createElement("span",{className:"Scoreboard-description"},"If 4+ values in a row.")),o.a.createElement("span",{className:"Scoreboard-score"},"Score 30.",o.a.createElement("span",{className:"Scoreboard-curScore"},"+",this.props.possibleScores["Small Straight"]))),o.a.createElement("div",{onClick:this.props.updateScore,"data-id":"Large Straight",className:this.props.clickedCategories.includes("Large Straight")?"Scoreboard-disabled":""},o.a.createElement("span",{className:"Scoreboard-category"},"Large Straight",o.a.createElement("span",{className:"Scoreboard-description"},"If 5 values in a row.")),o.a.createElement("span",{className:"Scoreboard-score"},"Score 40.",o.a.createElement("span",{className:"Scoreboard-curScore"},"+",this.props.possibleScores["Large Straight"]))),o.a.createElement("div",{onClick:this.props.updateScore,"data-id":"Yahtzee",className:this.props.clickedCategories.includes("Yahtzee")?"Scoreboard-disabled":""},o.a.createElement("span",{className:"Scoreboard-category"},"Yahtzee",o.a.createElement("span",{className:"Scoreboard-description"},"If all values match.")),o.a.createElement("span",{className:"Scoreboard-score"},"Score 50.",o.a.createElement("span",{className:"Scoreboard-curScore"},"+",this.props.possibleScores.Yahtzee))),o.a.createElement("div",{onClick:this.props.updateScore,"data-id":"Chance",className:this.props.clickedCategories.includes("Chance")?"Scoreboard-disabled":""},o.a.createElement("span",{className:"Scoreboard-category"},"Chance"),o.a.createElement("span",{className:"Scoreboard-score"},"Score sum of all dice.",o.a.createElement("span",{className:"Scoreboard-curScore"},"+",this.props.possibleScores.Chance))),o.a.createElement("hr",null),o.a.createElement("button",{className:"Scoreboard-startover",onClick:this.props.startOver},"Start Over?"))}}]),t}(r.Component)),h=(t(16),function(e){Object(l.a)(t,e);var a=Object(d.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Rules",id:"Rules"},o.a.createElement("h1",null,"Rules"),o.a.createElement("ul",null,o.a.createElement("li",null,"Ideal with 2 or more players."),o.a.createElement("li",null,"Open the same link on other devices to play simultaneously."),o.a.createElement("li",null,"Main goal of the game is to score more than the opponent."),o.a.createElement("li",null,"Game consists of 13 total rounds. "),o.a.createElement("li",null,"Each round begins with 5 dice already rolled for you."),o.a.createElement("li",null,"Points are scored if the numbers on dice match the pattern given in the table."),o.a.createElement("li",null,"You can roll these dice upto 2 more times each round until you reach the desired outcome."),o.a.createElement("li",null,"You can freeze/unfreeze any die by clicking on it. Frozen dice will not roll."),o.a.createElement("li",null,"The Round ends when you select a pattern."),o.a.createElement("li",null,"You must select at least one pattern for the next round to begin")))}}]),t}(r.Component)),S=t(21),f=(t(17),function(e){Object(l.a)(t,e);var a=Object(d.a)(t);function t(e){var r;Object(n.a)(this,t),(r=a.call(this,e)).generateRandomValues=function(e){for(var a=Object(u.a)(e),t=0;t<5;t++)if(!e[t].isFrozen){var r=Math.floor(6*Math.random())+1,o="";switch(r){case 1:o="one";break;case 2:o="two";break;case 3:o="three";break;case 4:o="four";break;case 5:o="five";break;case 6:o="six"}a[t].num=r,a[t].text=o}return a},r.rollDice=function(){if(r.state.rollsRemaining>0)if(1===r.state.rollsRemaining){var e=r.generateRandomValues(r.state.diceValues);e.forEach((function(e){e.isFrozen=!0})),r.setState((function(a){return{diceValues:e,rollsRemaining:a.rollsRemaining-1,possibleScores:r.updatePossibleScores(e)}}))}else{var a=r.generateRandomValues(r.state.diceValues);r.setState((function(e){return{diceValues:a,rollsRemaining:e.rollsRemaining-1,possibleScores:r.updatePossibleScores(a)}}))}},r.freezeDie=function(e){var a=Object(u.a)(r.state.diceValues),t=a.findIndex((function(a){return a.id===e.target.getAttribute("data-id")}));a[t].isFrozen=!1===a[t].isFrozen,r.setState({diceValues:a})},r.doesArrayContain=function(e,a){return a.every((function(a){return e.includes(a)}))},r.updatePossibleScores=function(e){var a=e.map((function(e){return e.num}));return{Ones:1*a.filter((function(e){return 1===e})).length,Twos:2*a.filter((function(e){return 2===e})).length,Threes:3*a.filter((function(e){return 3===e})).length,Fours:4*a.filter((function(e){return 4===e})).length,Fives:5*a.filter((function(e){return 5===e})).length,Sixes:6*a.filter((function(e){return 6===e})).length,"3 of Kind":a.some((function(e){return a.filter((function(a){return e===a})).length>=3}))?a.reduce((function(e,a){return a+e}),0):0,"4 of Kind":a.some((function(e){return a.filter((function(a){return e===a})).length>=4}))?a.reduce((function(e,a){return a+e}),0):0,"Full House":a.some((function(e){return 3===a.filter((function(a){return e===a})).length}))&&a.some((function(e){return 2===a.filter((function(a){return e===a})).length}))?25:0,"Small Straight":r.doesArrayContain(a,[1,2,3,4])||r.doesArrayContain(a,[2,3,4,5])||r.doesArrayContain(a,[3,4,5,6])?30:0,"Large Straight":r.doesArrayContain(a,[1,2,3,4,5])||r.doesArrayContain(a,[2,3,4,5,6])?40:0,Yahtzee:1===Object(u.a)(new Set(a)).length?50:0,Chance:a.reduce((function(e,a){return a+e}),0)}},r.updateScore=function(e){var a=r.state.possibleScores[e.target.getAttribute("data-id")],t=e.target.getAttribute("data-id");if(r.state.clickedCategories.length<=12){for(var o=[],s=0;s<5;s++)o.push({id:Object(S.a)(),isFrozen:!1});o=r.generateRandomValues(o),r.setState((function(e){return{diceValues:o,rollsRemaining:2,possibleScores:r.updatePossibleScores(o),score:e.score+a,clickedCategories:[].concat(Object(u.a)(e.clickedCategories),[t])}}))}},r.startOver=function(){for(var e=[],a=0;a<5;a++)e.push({id:Object(S.a)(),isFrozen:!1});e=r.generateRandomValues(e),r.setState({diceValues:e,rollsRemaining:2,possibleScores:r.updatePossibleScores(e),score:0,clickedCategories:[]})};for(var o=[],s=0;s<5;s++)o.push({id:Object(S.a)(),isFrozen:!1});return o=r.generateRandomValues(o),r.state={diceValues:o,rollsRemaining:2,possibleScores:r.updatePossibleScores(o),score:0,clickedCategories:[]},r}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=getComputedStyle(document.querySelector(".Yahtzee-fixed")).height;document.querySelector(".Yahtzee-notfixed").style.paddingTop=e}},{key:"render",value:function(){return o.a.createElement("div",{className:"Yahtzee"},o.a.createElement("div",{className:"Yahtzee-fixed"},o.a.createElement("h1",null,"Yahtzee"),o.a.createElement(p,{diceValues:this.state.diceValues,rollDice:this.rollDice,freezeDie:this.freezeDie,rollsRemaining:this.state.rollsRemaining}),this.state.clickedCategories.length<=12?o.a.createElement("h2",{className:"Yahtzee-round"},"Round ",this.state.clickedCategories.length+1):"",o.a.createElement("h1",{className:"Yahtzee-score"},13===this.state.clickedCategories.length?"Final ":"","Score:"," ",this.state.score),o.a.createElement("a",{href:"#Rules",className:"Yahtzee-rules"},"Rules")),o.a.createElement("div",{className:"Yahtzee-notfixed"},o.a.createElement(m,{possibleScores:this.state.possibleScores,updateScore:this.updateScore,clickedCategories:this.state.clickedCategories,startOver:this.startOver}),o.a.createElement(h,null)))}}]),t}(r.Component)),b=(t(18),function(e){Object(l.a)(t,e);var a=Object(d.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(f,null))}}]),t}(r.Component)),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function E(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/yahtzee-game-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/yahtzee-game-react","/service-worker.js");g?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):E(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):E(a,e)}))}}()}],[[8,1,2]]]);
//# sourceMappingURL=main.8f6d9576.chunk.js.map