!function(){function t(t){h.css({"background-image":"-webkit-linear-gradient(left ,#222 0%,#222 "+t+"%,#eee "+t+"%, #eee 100%)"});var e=moment.duration({days:_/100*t});console.log(t),$('<style>input[type="range"]::-webkit-slider-thumb{left:'+t+"%;}</style>").appendTo("head"),f=moment("2016-11-09").add(e),d3.selectAll("#show_date").text(b(f._d)),v!=b(f._d)&&(d3.json("../../src/faked2.json",function(t,e){t&&console.log(t),r(e)}),v=b(f._d))}function e(t){var e={};for(var r in DB.serviceItems)e[DB.serviceItems[r]]="";for(var r in t){var n={};for(var o in DB.areas)n[DB.areas[o]]=0;for(var o in t[r].listData)n[t[r].listData[o].area]++;district_sorted=Object.keys(n).sort(function(t,e){return n[e]-n[t]}),e[t[r].item]=district_sorted[0]+n[district_sorted[0]]+"件<br>"+district_sorted[1]+n[district_sorted[1]]+"件<br>"+district_sorted[2]+n[district_sorted[2]]+"件<br>"}var a=i(t);console.log(123),console.log(a.children);var s,l=[],f=0;for(var r in a.children)a.children[r].value>=f&&(f=a.children[r].value,s=a.children[r].item),l.push(a.children[r].value);d3.select("#description").text(s),console.log(l);var v=d3.quantile(l,.1);console.log(v),bubble_data=d.nodes(a).filter(function(t){return t.parent});var p=u.selectAll("circle").data(bubble_data).enter().append("circle").attr({cx:function(t){return t.x},cy:function(t){return 0},r:function(t){return t.r},fill:function(t,e){return t.item_color},id:function(t,e){return"id"+t.item},opacity:0}).on("mouseover",function(){d3.select(this).attr({stroke:"rgba(0, 0, 0, 0.2)","stroke-width":3}),d3.select("#description").text(d3.select(this).attr("id").slice(2)),c.transition().duration(100).style({opacity:.9}),c.html(d3.select(this).attr("id").slice(2)+":<br>"+e[d3.select(this).attr("id").slice(2)]).style({left:d3.event.pageX+"px",top:d3.event.pageY+"px"})}).on("mouseout",function(){c.transition().duration(100).style({opacity:0}),d3.select(this).attr({"stroke-width":1})});p.transition().duration(1e3).attr({opacity:1,cy:function(t){return t.y}});u.selectAll("#item_text").data(bubble_data).enter().append("text").attr({x:function(t){return t.x},y:function(t){return 0},id:"item_text",color:"#eee"}).style({"text-anchor":"middle"}).text(function(t){if(t.value>v&&d3.select("#id"+t.item).attr("r")/t.item.length>=7)return t.item}).transition().duration(1e3).attr({y:function(t){return t.y}})}function r(t){var e={};for(var r in DB.serviceItems)e[DB.serviceItems[r]]="";for(var r in t){var n={};for(var o in DB.areas)n[DB.areas[o]]=0;for(var o in t[r].listData)n[t[r].listData[o].area]++;district_sorted=Object.keys(n).sort(function(t,e){return n[e]-n[t]}),e[t[r].item]=district_sorted[0]+n[district_sorted[0]]+"件<br>"+district_sorted[1]+n[district_sorted[1]]+"件<br>"+district_sorted[2]+n[district_sorted[2]]+"件<br>"}var a,s=i(t),l=[],f=0;for(var r in s.children)s.children[r].value>=f&&(f=s.children[r].value,a=s.children[r].item),l.push(s.children[r].value);d3.select("#description").text(a);var v=d3.quantile(l,.1);bubble_data2=d.nodes(s).filter(function(t){return t.parent});var p=u.selectAll("circle").data(bubble_data2).on("mouseover",function(){d3.select(this).attr({stroke:"rgba(0, 0, 0, 0.2)","stroke-width":3}),d3.select("#description").text(d3.select(this).attr("id").slice(2)),c.transition().duration(100).style({opacity:.9}),c.html(d3.select(this).attr("id").slice(2)+":<br>"+e[d3.select(this).attr("id").slice(2)]).style({left:d3.event.pageX+"px",top:d3.event.pageY+"px"})}).on("mouseout",function(){c.transition().duration(100).style({opacity:0}),d3.select(this).attr({"stroke-width":1})});p.transition().duration(1e3).attr({cx:function(t){return t.x},cy:function(t){return t.y},r:function(t){return t.r}}),u.selectAll("#item_text").remove();var m=u.selectAll("#item_text").data(bubble_data2).enter().append("text").attr({id:"item_text"}).style({"text-anchor":"middle"}).text(function(t){if(t.value>v&&d3.select("#id"+t.item).attr("r")/t.item.length>=7)return t.item}).attr({opacity:0});m.transition().duration(1e3).attr({x:function(t){return t.x},y:function(t){return t.y},opacity:1})}function i(t){var e=[];return t.forEach(function(t,r){var i=t.caseCount,n=a[r];e.push({value:i,item_color:n,item:t.item})}),{children:e}}function n(){var e;d3.select("#play_icon").on("click",function(){e=setInterval(function(){if(b(f._d)!=b(p._d)){var r=moment.duration({days:1});f=f.add(r),d3.select("#show_date").text(b(f._d)),console.log(m),m=parseInt(m)+100/_,console.log(m),t(m),$("input").css("left",m+"%"),(b(f._d)===b(p._d)||m>=100)&&clearInterval(e)}else clearIntnterval(e)},2e3)}),d3.select("#pause_icon").on("click",function(){clearInterval(e)}),d3.select("#stop_icon").on("click",function(){now_bar_value=0,d3.select("#show_date").text(b(f._d)),m=0,console.log(m),t(m),d3.select("input").attr("value",0),clearInterval(e)}),d3.select("#show_date").text()}var o=800,a=(d3.format(",d"),["#E57373","#D4E157","#CDDC39","#AB47BC","#8E24AA","#BA68C8","#9FA8DA","#7986CB","#5C6BC0","#3F51B5","#3949AB","#303F9F","#283593","#1A237E","#B2DFDB","#4DB6AC","#009688","#00796B","#004D40","#A5D6A7","#81C784","#66BB6A","#66BB6A","#43A047","#388E3C","#2E7D32","#FFCCBC","#FF8A65","#FF5722","#E64A19","#BF360C","#8D6E63","#6D4C41"]),c=d3.select("#bubbule_tooltip").append("div").attr("class","bubble_tooltip").attr("opacity",1),s=600,l=6;d3.json("../../src/faked.json",function(t,r){t&&console.log(t),e(r)});var d=d3.layout.pack().sort(null).size([o,s]).padding(l),u=d3.select("#bubble_chart").append("svg").attr({width:o,height:s,id:"bubble_chart"});n();var f=moment("2016-11-09"),v="2016-11-09",p=new moment,m=0,_=parseInt((p._d-f._d)/864e5),b=d3.time.format("%Y-%m-%d"),h=$("input");h.on("mouseenter",function(){console.log(m),h.on("click",function(){m=h.val(),t(m)}),h.on("mousemove",function(){m=h.val()})})}();