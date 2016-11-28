function focus(t,e,a,r,n){function i(t,e,a){var r=0;for(var n in t.listData)t.listData[n][e]===a&&(r+=1);return r}function o(t,e){t.selectAll("path.pointer").data(e).enter().append("path").attr("class",function(t){var e;return e=t.value>v/40?"pointer":"foo"}).style("fill","none").style("stroke","black").style("stroke-width",1).style("stroke-opacity",.2).attr("marker-end","url(#circ)").attr("d",function(t){return t.cx>t.ox?"M"+t.sx+","+t.sy+"L"+t.ox+","+t.oy+" "+t.cx+","+t.cy:"M"+t.ox+","+t.oy+"L"+t.sx+","+t.sy+" "+t.cx+","+t.cy})}function s(t){for(var e in DB.areasE)if(DB.areasE[e].toLowerCase()===t.toLowerCase())return e}function c(t){return t>0}var l={top:50,right:300,bottom:40,left:350},u=$("#pie-chart").width(),d=600,f=Math.min(u,d)/2,p=[],v=0,m="",h="",g=d3.select("#pie-chart").append("svg").attr("width",u).attr("height",d).append("g").attr("transform","translate("+u/2+","+d/2+")"),x=d3.select("#pie-chart").append("tooltip").attr("class","toolTip"),y=s(t);$(".infocus").off("click"),$(".infocus .reactive").click(function(){var a=$(this).attr("value");a.length<2?($(".active").removeClass("active"),$(this).addClass("active"),G.focusArea(t,e,a,m,h)):G.select("item_overview")}),$("#self-define").off("click"),$("#self-define").click(function(){$(".ui.modal").modal({onApprove:function(){m=$("#startDate").val(),h=$("#endDate").val(),""!==m&&""!==h&&G.focusArea(t,e,"s",m,h)}}).modal("show");var a=$(this).attr("value");a.length<2?($(".active").removeClass("active"),$(this).addClass("active")):G.select("item_overview")}),$(".area_name").text(y),console.log("state:focus-"+y);var k={"違規停車":0,"路燈故障":1,"噪音舉發":2,"騎樓舉發":3,"道路維修":4,"交通運輸":5,"髒亂及汙染":6,"民生管線":7,"動物救援":8};"s"!==a?(m=getTimeString(DateAdd(now,a,-1)),h=getTimeString(now)):(m=r,h=n),d3.json("../src/fack_areas.json",function(a,r){function n(){g.append("text").attr("x",function(){var t=o.caseCount;return t<10?-25:t<100?-60:t<1e3?-90:void 0}).attr("y",0).attr("id","focus_caseCount_"+t).attr("class","focus_caseCount").text(o.caseCount),g.append("text").attr("x",function(){var e=parseInt($("#focus_caseCount_"+t).attr("x")),a=o.caseCount;return a<10?e+55:a<100?e+100:a<1e3?e+160:void 0}).attr("y",-4).attr("class","focus_caseCountI").text("件"),g.append("text").attr({class:"time_intaveral",x:0,y:40,"text-anchor":"middle"}).text(m+" ~ "+h)}a&&console.log(a);var o=r[e];for(var s in k){var c=[];c.push(k[s]),c.push(i(o,"serviceName",s)),c.push(s),p.push(c)}var l=d3.layout.pie().sort(null);l=l(p.map(function(t,e,a){return t[1]}));var u=d3.svg.arc().innerRadius(f-195).outerRadius(f-145),d=d3.svg.arc().innerRadius(f-165).outerRadius(f-115),v=g.selectAll("g.arc").data(l).enter().append("g").attr({class:"arc"}),y=v.append("path").attr({fill:function(t,e){return G.colorServiceName[p[e][0]]},d:u,class:"pie-path",id:function(t,e){return p[e][2]}}).on("mousemove",function(t,e){x.style("left",d3.event.pageX+10+"px"),x.style("top",d3.event.pageY-25+"px"),x.style("display","inline-block"),x.html(p[e][2]+"<br>"+p[e][1]+"件")}).on("mouseout",function(t){x.style("display","none")});y.transition().duration(400).ease("sin").attr({d:d}),setTimeout(n,0)}),d3.json("../src/fack_items.json",function(t,e){function a(){return d3.svg.axis().scale(m).orient("bottom").ticks(0)}var r=[];for(var n in e)e[n].caseCount>0&&(r.push(e[n]),v+=e[n].caseCount);var i=1e3-l.left-l.right,s=46*e.length-l.top-l.bottom,u=d3.select("#bar-chart").append("svg").attr("width",i+l.left+l.right).attr("height",s+l.top+l.bottom).append("g").attr("transform","translate("+l.left+","+l.top+")"),d=r.map(function(t){return t.item}),p=e.map(function(t){return t.item}),m=d3.scale.linear().domain(d3.extent(e,function(t){return t.caseCount})).nice().range([0,i]),h=d3.scale.ordinal().domain(p).rangeRoundBands([0,s],.1),y=d3.svg.axis().scale(m).orient("top").tickSize(0).ticks(10).tickPadding(10).tickFormat(d3.format("d")),k=d3.svg.axis().scale(h).orient("left").tickSize(0).tickPadding(10);u.append("g").attr("class","grid").attr("transform","translate(0,"+s+")").call(a().tickSize(-s,0,0).tickFormat(""));var C=u.selectAll(".bar").data(e).enter().append("g").attr("class","bar"),$=C.append("rect").attr("class","bar").attr("x",function(t){return m(Math.min(0,t.caseCount))+4}).attr("y",function(t){return h(t.item)+10}).attr("width",0).attr("height",20).attr("rx",5).attr("ry",5).attr("fill",function(t,e){for(var a in DB.areas)if(DB.serviceItems[a]===t.item)return G.colorServiceItem[a]}).style("fill-opacity",.2),w=d3.layout.pie().sort(null),d=r.map(function(t){return t.caseCount}),d=d.filter(c),A=w(d),b=[],D=d3.svg.arc().innerRadius(f-130).outerRadius(f-95),_=d3.svg.arc().innerRadius(f-100).outerRadius(f-65),M=g.selectAll("g.arcs").data(A).enter().append("g").attr({class:"arcs"}),B=r.map(function(t){return t.item}),R=M.append("path").attr({fill:function(t,e){for(var a in DB.areas)if(DB.serviceItems[a]===B[e])return G.colorServiceItem[a]},d:D,class:"pie-path",id:function(t,e){return B[e]+"_inner"}}).on("mousemove",function(t,e){x.style("left",d3.event.pageX+10+"px"),x.style("top",d3.event.pageY-25+"px"),x.style("display","inline-block"),x.html(B[e]+"<br>"+t.value+"件")}).on("mouseout",function(t){x.style("display","none")});R.transition().duration(400).ease("sin").attr({d:_}),A.forEach(function(t){var e=t.a=t.startAngle+(t.endAngle-t.startAngle)/2-Math.PI/2;t.cy=Math.sin(e)*(f-75),t.cx=Math.cos(e)*(f-75)}),g.selectAll("text").data(A).enter().append("text").attr("text-anchor","middle").attr("class","focus_markerText").attr("x",function(t,e){return t.x=Math.cos(t.a)*(f-20)*1.5}).attr("y",function(t,e){return t.y=Math.sin(t.a)*(f-20)*1.02}).text(function(t,e){return t.value<v/40?"":B[e]+" "+formatFloat(t.value/v*100,1)+"%"}).each(function(t,e){var a=this.getBBox();t.sx=t.x-a.width/2-2,t.ox=t.x+a.width/2+2,t.sy=t.oy=t.y+5,b.push(t),e===A.length-1&&o(g,b)}),g.selectAll(".foo").remove(),g.append("defs").append("marker").attr("id","circ").attr("markerWidth",10).attr("markerHeight",10).attr("refX",5).attr("refY",5).append("circle").attr("cx",5).attr("cy",5).style("fill-opacity",.6).attr("r",5),e.sort(function(t,e){return d3.descending(t.caseCount,e.caseCount)}),h=d3.scale.ordinal().domain(e.map(function(t){return t.item})).rangeRoundBands([0,s],.1),$.attr("y",function(t,e){return h(t.item)+10}).style("fill-opacity",1),$.transition().delay(function(t,e){return 30*e}).duration(800).ease("bounce").attr("width",function(t){return m(t.caseCount)-m(0)}),k=d3.svg.axis().scale(h).orient("left").tickSize(0).tickPadding(10),C.append("text").text(function(t){return t.caseCount+"件"}).attr("x",function(t,e){return m(t.caseCount)+10}).attr("y",function(t){return h(t.item)+23}).attr("class","bartip"),u.append("g").attr("class","x axis").attr("transform","translate(0,0)").call(y),u.append("g").attr("class","y axis").attr("transform","translate("+m(0)+",0)").call(k)})}function resetFocus(){d3.select("#pie-chart").selectAll("*").remove(),d3.select("#bar-chart").selectAll("*").remove()}function formatFloat(t,e){var a=Math.pow(10,e);return Math.round(t*a)/a}$("#rangestart").calendar({type:"date",inline:!0,endCalendar:$("#rangeend"),formatter:{date:function(t,e){if(!t)return"";var a=t.getDate(),r=t.getMonth()+1,n=t.getFullYear(),i=n+"-"+r+"-"+a;return i}}}),$("#rangeend").calendar({type:"date",inline:!0,startCalendar:$("#rangestart"),formatter:{date:function(t,e){if(!t)return"";var a=t.getDate(),r=t.getMonth()+1,n=t.getFullYear(),i=n+"-"+r+"-"+a;return i}}}),$(".ui.dropdown.focus_selectArea").dropdown({onChange:function(t,e){var a=$(".active").attr("value"),r=$("#startDate").val(),n=$("#endDate").val();G.focusArea(t,2,a,r,n)}});