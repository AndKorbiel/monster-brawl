(this["webpackJsonpmonsters-brawl"]=this["webpackJsonpmonsters-brawl"]||[]).push([[0],{19:function(e,t,n){e.exports=n(33)},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(11),s=n.n(i),c=n(6),r=n(10),l=n(17),m=n(1);var u={gameMode:"Pre-config",monsterConfig:{name:"Moonster",monsterImg:["monster1.png","monster2.png","monster3.png","monster4.png","monster5.png","monster6.png","monster7.png"],lookVersion:0,level:1,attackPoints:5,defencePoints:5,lifePoints:20,levelUpPoints:5},cpuMonsterConfig:{name:"CPU",lookVersion:0,level:1,attackPoints:0,defencePoints:0,lifePoints:0,levelUpPoints:5}};function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.monsterConfig,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GENERATE_NEW_USER_NAME":return Object(m.a)({},e,{name:t.payload});case"CHANGE_LOOK":return Object(m.a)({},e,{lookVersion:t.payload});case"SPEND_LEVEL_UP_POINTS":return Object(m.a)({},e,{levelUpPoints:t.payload.levelUpPoints,attackPoints:t.payload.attackPoints,defencePoints:t.payload.defencePoints,lifePoints:t.payload.lifePoints});case"LEVEL_UP":return Object(m.a)({},e,{levelUpPoints:t.payload*e.level,level:e.level+1});default:return e}}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u.cpuMonsterConfig,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GENERATE_NEW_CPU_NAME":return Object(m.a)({},e,{name:t.payload});case"GENERATE_CPU_MONSTER_STATS":return Object(m.a)({},e,{attackPoints:t.payload.attackPoints,defencePoints:t.payload.defencePoints,lifePoints:t.payload.lifePoints});case"LEVEL_UP":return Object(m.a)({},e,{levelUpPoints:t.payload*e.level,level:e.level+1});default:return e}}var d=n(18),P=(n(29),Object(r.applyMiddleware)(l.a)),g=Object(r.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GENERATE_NEW_USER_NAME":case"CHANGE_LOOK":case"SPEND_LEVEL_UP_POINTS":case"LEVEL_UP":return Object(m.a)({},e,{cpuMonsterConfig:f(e.cpuMonsterConfig,t),monsterConfig:p(e.monsterConfig,t)});case"GENERATE_NEW_CPU_NAME":case"GENERATE_CPU_MONSTER_STATS":return Object(m.a)({},e,{cpuMonsterConfig:f(e.cpuMonsterConfig,t)});case"CHANGE_GAME_MODE":return Object(m.a)({},e,{gameMode:t.payload,monsterConfig:p(e.monsterConfig,"SPEND_LEVEL_UP_POINTS")});default:return e}}),Object(d.composeWithDevTools)(P)),v=n(3),E=n(4),h=n(7),k=n(5),b=n(8),L=function(e){return function(t){fetch("https://api.wordnik.com/v4/words.json/randomWord?api_key=5tlss5fk37wzhgjb0yemzcskbgz2wjab501uv0s5kdvano1xa").then((function(e){return e.json()})).then((function(n){t("user"===e?{type:"GENERATE_NEW_USER_NAME",payload:n.word}:function(e){return{type:"GENERATE_NEW_CPU_NAME",payload:e}}(n.word))})).catch((function(e){return console.log(e)}))}},M=function(e){return function(t){t({type:"CHANGE_GAME_MODE",payload:e})}},T=function(e){return function(t){"user"===e.user?t({type:"SPEND_LEVEL_UP_POINTS",payload:e}):t(function(e){return{type:"GENERATE_CPU_MONSTER_STATS",payload:e}}(e))}},N=function(e){var t=e.gameMode,n=e.name,a=e.methood,i=e.text,s=e.dataFunc,c=e.disabled,r="Pre-config"===t?o.a.createElement("button",{name:n,onClick:a,"data-func":s,disabled:c},i):"";return o.a.createElement("div",null,r)},C=function(e){var t=e.gameMode,n=e.name,a=e.staticValue,i=e.tempValue,s="Pre-config"===t?o.a.createElement("p",null,n,": ",a+i):o.a.createElement("p",null,n,": ",a);return o.a.createElement(o.a.Fragment,null,s)},y=(n(30),function(e){var t=e.gameMode,n=e.name,a=e.generateNewName,i=e.changeCounter,s=e.monsterImg,c=e.lookVersion,r=e.level,l=e.tempLevelUpPoints,m=e.attackPoints,u=e.tempAttackPoints,p=e.defencePoints,f=e.tempDefencePoints,d=e.lifePoints,P=e.tempLifePoints,g=e.addPoints,v=e.saveConfig,E=e.disabled;return o.a.createElement("div",{className:"monsterConfig"},o.a.createElement("h2",null,"Monster name: ",o.a.createElement("br",null),o.a.createElement("span",{className:"name"},n)),o.a.createElement(N,{gameMode:t,methood:a,name:"generateNewName",text:"Generate new name"}),o.a.createElement("div",{className:"look"},o.a.createElement(N,{gameMode:t,methood:i,name:"prev",text:"<"}),o.a.createElement("img",{src:"./img/"+s[c],className:"look"}),o.a.createElement(N,{gameMode:t,methood:i,name:"next",text:">"})),o.a.createElement(C,{gameMode:t,name:"Level",staticValue:r,tempValue:0}),"Pre-config"===t?o.a.createElement(C,{gameMode:t,name:"Points to spend",staticValue:0,tempValue:l}):"",o.a.createElement("div",{className:"stats"},o.a.createElement(N,{gameMode:t,methood:g,name:"removeAttackPoints",text:"-",c:"remove",dataFunc:"remove"}),o.a.createElement(C,{gameMode:t,name:"Attack",staticValue:m,tempValue:u}),o.a.createElement(N,{gameMode:t,methood:g,name:"addAttackPoints",text:"+",c:"add",dataFunc:"add"})),o.a.createElement("div",{className:"stats"},o.a.createElement(N,{gameMode:t,methood:g,name:"removeDefencePoints",text:"-",c:"remove",dataFunc:"remove"}),o.a.createElement(C,{gameMode:t,name:"Defence",staticValue:p,tempValue:f}),o.a.createElement(N,{gameMode:t,methood:g,name:"addDefencePoints",text:"+",c:"add",dataFunc:"add"})),o.a.createElement("div",{className:"stats"},o.a.createElement(N,{gameMode:t,methood:g,name:"removeLifePoints",text:"-",c:"remove",dataFunc:"remove"}),o.a.createElement(C,{gameMode:t,name:"Life points",staticValue:d,tempValue:P}),o.a.createElement(N,{gameMode:t,methood:g,name:"addLifePoints",text:"+",c:"add",dataFunc:"add"})),o.a.createElement(N,{gameMode:t,methood:v,name:"saveConfig",text:"Save config",disabled:E}))}),U=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(h.a)(this,Object(k.a)(t).call(this,e))).changeCounter=function(e){var t=e.target.name,a=n.state.counter;"next"===t?a++:a--,a===n.props.monsterImg.length?a=0:a<0&&(a=n.props.monsterImg.length-1),n.setState({counter:a}),n.props.changeLook(a)},n.addPoints=function(e){var t=e.target.name,a=e.target.getAttribute("data-func"),o=n.props,i=o.levelUpPoints,s=o.attackPoints,c=o.defencePoints,r=o.lifePoints,l=n.state,m=l.tempAttackPoints,u=l.tempDefencePoints,p=l.tempLifePoints,f=l.tempLevelUpPoints;if("remove"===a){if(f<i)switch(t){case"removeAttackPoints":m+s>s&&(m--,f++);break;case"removeDefencePoints":u+c>c&&(u--,f++);break;case"removeLifePoints":p+r>r&&(p--,f++)}}else if(0!==f){switch(t){case"addAttackPoints":m++;break;case"addDefencePoints":u++;break;case"addLifePoints":p++}f--}n.setState({tempAttackPoints:m,tempDefencePoints:u,tempLifePoints:p,tempLevelUpPoints:f})},n.saveConfig=function(){var e=n.props,t=e.levelUpPoints,a=e.attackPoints,o=e.defencePoints,i=e.lifePoints,s=n.state,c=s.tempAttackPoints,r=s.tempDefencePoints,l=s.tempLifePoints;a+=c,t=s.tempLevelUpPoints,o+=r,i+=l,n.props.spendLevelUpPoints({user:"user",attackPoints:a,levelUpPoints:t,defencePoints:o,lifePoints:i}),n.props.changeGameMode("preFight")},n.state={counter:0,tempAttackPoints:0,tempDefencePoints:0,tempLifePoints:0,tempLevelUpPoints:0},n}return Object(b.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.setState({tempLevelUpPoints:this.props.levelUpPoints})}},{key:"componentDidUpdate",value:function(e){this.props.levelUpPoints!=e.levelUpPoints&&this.setState({tempLevelUpPoints:this.props.levelUpPoints})}},{key:"render",value:function(){var e=this.props,t=e.generateNewName,n=e.gameMode,a=e.name,i=e.lookVersion,s=e.monsterImg,c=e.level,r=e.attackPoints,l=e.defencePoints,m=e.lifePoints,u=this.state,p=u.tempAttackPoints,f=u.tempDefencePoints,d=u.tempLifePoints,P=u.tempLevelUpPoints,g=0!==P;return o.a.createElement("div",{className:"config"},o.a.createElement(y,{gameMode:n,name:a,generateNewName:t,changeCounter:this.changeCounter,monsterImg:s,lookVersion:i,level:c,tempLevelUpPoints:P,attackPoints:r,tempAttackPoints:p,defencePoints:l,tempDefencePoints:f,lifePoints:m,tempLifePoints:d,addPoints:this.addPoints,saveConfig:this.saveConfig,disabled:g}))}}]),t}(a.Component),D=Object(c.b)((function(e){return{gameMode:e.gameMode,name:e.monsterConfig.name,monsterImg:e.monsterConfig.monsterImg,lookVersion:e.monsterConfig.lookVersion,level:e.monsterConfig.level,attackPoints:e.monsterConfig.attackPoints,defencePoints:e.monsterConfig.defencePoints,lifePoints:e.monsterConfig.lifePoints,levelUpPoints:e.monsterConfig.levelUpPoints}}),(function(e){return{generateNewName:function(){e(L("user"))},changeLook:function(t){e(function(e){return function(t){t({type:"CHANGE_LOOK",payload:[e]})}}(t))},changeGameMode:function(t){e(M(t))},spendLevelUpPoints:function(t){e(T(t))}}}))(U),A=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(h.a)(this,Object(k.a)(t).call(this,e))).initCpuMonster=function(){var e=Math.floor(7*Math.random());n.setState(Object(m.a)({},n.state,{cpuLookVersion:e})),n.props.generateNewName()},n.generateMonsterStatistics=function(){for(var e=n.props,t=e.levelUpPoints,a=e.attackPoints,o=e.defencePoints,i=e.lifePoints,s=n.state,c=s.tempAttackPoints,r=s.tempDefencePoints,l=s.tempLifePoints,m=0;m<t;m++){switch(Math.floor(3*Math.random())){case 0:c++;break;case 1:r++;break;case 2:l++}n.setState({tempAttackPoints:c,tempDefencePoints:r,tempLifePoints:l})}a+=c,o+=r,i+=l,n.props.spendLevelUpPoints({attackPoints:a,defencePoints:o,lifePoints:i})},n.state={cpuLookVersion:0,tempAttackPoints:0,tempDefencePoints:0,tempLifePoints:0},n}return Object(b.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){this.initCpuMonster();for(var e=this.props,t=e.attackPoints,n=e.defencePoints,a=e.lifePoints,o=0;o<30;o++){switch(Math.floor(3*Math.random())){case 0:t++;break;case 1:n++;break;case 2:a++}}this.props.spendLevelUpPoints({attackPoints:t,defencePoints:n,lifePoints:a})}},{key:"componentDidUpdate",value:function(e){this.props.gameMode!=e.gameMode&&"preFight"===this.props.gameMode&&(this.initCpuMonster(),this.generateMonsterStatistics())}},{key:"render",value:function(){var e=this.props,t=e.gameMode,n=e.monsterImg,a=e.level,i=e.name,s=e.attackPoints,c=e.defencePoints,r=e.lifePoints,l=this.state.cpuLookVersion;return"Pre-config"!==t?o.a.createElement("div",{className:"config"},o.a.createElement(y,{monsterImg:n,lookVersion:l,level:a,name:i,attackPoints:s,defencePoints:c,lifePoints:r})):null}}]),t}(a.Component),O=Object(c.b)((function(e){return{gameMode:e.gameMode,level:e.cpuMonsterConfig.level,monsterImg:e.monsterConfig.monsterImg,name:e.cpuMonsterConfig.name,attackPoints:e.cpuMonsterConfig.attackPoints,defencePoints:e.cpuMonsterConfig.defencePoints,lifePoints:e.cpuMonsterConfig.lifePoints,levelUpPoints:e.cpuMonsterConfig.levelUpPoints}}),(function(e){return{generateNewName:function(){e(L("CPU"))},spendLevelUpPoints:function(t){e(T(t))}}}))(A),_=(n(31),function(e){var t=e.round,n=e.attack,a=e.userAttackPoints,i=e.userTempDefencePoints,s=e.userTempLifePoints,c=e.cpuAttackPoints,r=e.cpuTempDefencePoints,l=e.cpuTempLifePoints,m=e.actionLog;return o.a.createElement("div",{className:"actionBox"},o.a.createElement("h3",null,0===t?"Start the fight":"Round: "+t),o.a.createElement("button",{className:"btn-lg",onClick:n},"Play next round"),o.a.createElement("div",{className:"row display-stats"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement("p",null,"Player"),o.a.createElement("p",null,"Attack: ",a),o.a.createElement("p",null,"Defence: ",i),o.a.createElement("p",null,"Life: ",s)),o.a.createElement("div",{className:"col-md-6"},o.a.createElement("p",null,"CPU"),o.a.createElement("p",null,"Attack: ",c),o.a.createElement("p",null,"Defence: ",r),o.a.createElement("p",null,"Life: ",l))),o.a.createElement("div",{className:"action-log"},m.map((function(e){return o.a.createElement("p",null,e)}))))}),w=function(e){var t=e.gameMode,n=e.instruction,a=e.levelUp,i=e.restart;return o.a.createElement("div",{className:"gameInstructionsBox"},o.a.createElement("h1",null,n),"Pre-config"===t?o.a.createElement(o.a.Fragment,null,o.a.createElement("p",null,"Stats info:"),o.a.createElement("p",null,o.a.createElement("b",null,"Attack points")," are responsible for the amount of damage a monster can inflict. Damage can be in range - from Attack points multiplied by 1 to Attack points multiplied by 1.4. In example: if your Attack is equal 10, than possible damage will be from range: 10 (10x1) to 14 (10x1.4)."),o.a.createElement("p",null,o.a.createElement("b",null,"Defence points")," determine the chance of blocking the attack. The chance is calc based on percentage calculation: (damage to be done by the opponent divided by Defence points) divided by 1.4. In example: if your Defence is equal 5 and your opponent is attacking for 10 points of damage, thank you've got 35% chance to block the damage (becasue: (5 / 10) / 1.4 = 0.35)."),o.a.createElement("p",null,o.a.createElement("b",null,"Life points")," determine how much damage you can take. The player which life points gets to 0 or less, losses the brawl.")):"","Level-up"===t?o.a.createElement("button",{className:"btn-lg",onClick:a},"Level Up"):"","End-game"===t?o.a.createElement("button",{className:"btn-lg",onClick:i},"Restart"):"")},j=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(h.a)(this,Object(k.a)(t).call(this,e))).startBrawl=function(){var e=n.props,t=e.userDefencePoints,a=e.userLifePoints,o=e.cpuDefencePoints,i=e.cpuLifePoints;n.setState({endGame:!1,userTempDefencePoints:t,userTempLifePoints:a,cpuTempDefencePoints:o,cpuTempLifePoints:i,round:0})},n.random=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},n.playRound=function(){var e=n.state,t=e.round;if(!e.endGame){var a=n.setCurrentPlayer(),o=n.calcDamage(a);t++,n.setState({attack:o.randomNumber,round:t,cpuTempLifePoints:o.cpuTempLifePoints,cpuTempDefencePoints:o.cpuTempDefencePoints,userTempLifePoints:o.userTempLifePoints,userTempDefencePoints:o.userTempDefencePoints,currentTurn:a,block:o.block},(function(){n.actionLog(n.state.currentTurn,n.state.attack,n.state.round),n.winingConditionChecker()}))}},n.calcDamage=function(e){var t,a,o=n.props,i=o.userAttackPoints,s=o.cpuAttackPoints,c=n.state,r=c.cpuTempLifePoints,l=c.cpuTempDefencePoints,m=c.userTempLifePoints,u=c.userTempDefencePoints;c.block;return"player"===e?(t=n.random(i/1,1.4*i),l=(a=n.damageMath(t,l,r)).userTempDefencePoints,r=a.userTempLifePoints):(t=n.random(s/1,1.4*s),m=(a=n.damageMath(t,u,m)).userTempLifePoints,u=a.userTempDefencePoints),{randomNumber:t,cpuTempDefencePoints:l,cpuTempLifePoints:r,userTempLifePoints:m,userTempDefencePoints:u,block:a.block}},n.damageMath=function(e,t,n){var a=t/e/1.4;return Math.random()>a?{userTempLifePoints:n-e,userTempDefencePoints:t,block:!1}:{userTempDefencePoints:t,userTempLifePoints:n,block:!0}},n.setCurrentPlayer=function(){var e=n.state,t=e.round,a=e.currentTurn,o=n.random(2,-1);return 0===t?a[o]:"player"===a?"cpu":"player"},n.winingConditionChecker=function(){var e,t=n.state,a=t.cpuTempLifePoints,o=t.userTempLifePoints;(a<=0||o<=0)&&(e=a<=0?"Player":"CPU",n.setState({endGame:!0,winner:e,round:0,attack:0,currentTurn:["player","cpu"]},(function(){n.actionLog(),setTimeout((function(){"Player"===e?n.props.changeGameMode("Level-up"):n.props.changeGameMode("End-game")}),3e3)})))},n.levelUp=function(){n.props.levelUp(3),n.props.changeGameMode("Pre-config")},n.restart=function(){window.location.reload()},n.actionLog=function(e,t,a){var o=n.state,i=o.actionLog,s=o.endGame,c=o.winner,r=o.block;s?i.push("End game, ".concat(c," wins!")):i.push("Round ".concat(a,": ").concat(e," attacks for ").concat(t," ").concat(r?" - but it was blocked!":"")),n.setState({actionLog:i})},n.state={round:0,attack:0,currentTurn:["player","cpu"],userTempDefencePoints:0,userTempLifePoints:0,cpuTempDefencePoints:0,cpuTempLifePoints:0,block:!1,actionLog:[],endGame:!1},n}return Object(b.a)(t,e),Object(E.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this;this.props.gameMode!=e.gameMode&&(this.setState({actionLog:[]}),"preFight"===this.props.gameMode&&setTimeout((function(){t.startBrawl()}),10))}},{key:"render",value:function(){var e,t=this.state,n=t.round,a=t.userTempDefencePoints,i=t.userTempLifePoints,s=t.cpuTempDefencePoints,c=t.cpuTempLifePoints,r=t.actionLog,l=this.props,m=l.gameMode,u=l.userAttackPoints,p=l.cpuAttackPoints;return"Pre-config"===m?(e="Please configure your Monster",o.a.createElement(w,{gameMode:m,instruction:e})):"preFight"===m?(e="Brawl has started... Fight to survive!",o.a.createElement(o.a.Fragment,null,o.a.createElement(w,{gameMode:m,instruction:e}),o.a.createElement(_,{round:n,attack:this.playRound,userAttackPoints:u,userTempDefencePoints:a,userTempLifePoints:i,cpuAttackPoints:p,cpuTempDefencePoints:s,cpuTempLifePoints:c,actionLog:r}))):"Level-up"===m?(e="You have win and level up",o.a.createElement(o.a.Fragment,null,o.a.createElement(w,{gameMode:m,instruction:e,levelUp:this.levelUp}))):"End-game"===m?(e="You have lost... want to play again?",o.a.createElement(o.a.Fragment,null,o.a.createElement(w,{gameMode:m,instruction:e,restart:this.restart}))):void 0}}]),t}(a.Component),S=Object(c.b)((function(e){return{gameMode:e.gameMode,userAttackPoints:e.monsterConfig.attackPoints,userDefencePoints:e.monsterConfig.defencePoints,userLifePoints:e.monsterConfig.lifePoints,cpuAttackPoints:e.cpuMonsterConfig.attackPoints,cpuDefencePoints:e.cpuMonsterConfig.defencePoints,cpuLifePoints:e.cpuMonsterConfig.lifePoints}}),(function(e){return{changeGameMode:function(t){e(M(t))},levelUp:function(t){e(function(e){return function(t){t({type:"LEVEL_UP",payload:e})}}(t))}}}))(j),V=function(e){function t(){return Object(v.a)(this,t),Object(h.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-12 col-md-12 col-lg-4"},o.a.createElement(D,null)),o.a.createElement("div",{className:"col-sm-12 col-md-12 col-lg-4"},o.a.createElement(S,null)),o.a.createElement("div",{className:"col-sm-12 col-md-12 col-lg-4"},o.a.createElement(O,null)))))}}]),t}(a.Component);n(32);s.a.render(o.a.createElement(c.a,{store:g},o.a.createElement(V,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.c94a1b90.chunk.js.map