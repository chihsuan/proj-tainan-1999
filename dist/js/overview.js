!function(){function t(t,e,a,n){var l=d3.layout.pie();if(n<0)var u=d3.select("."+a).insert("svg",":first-child").attr({width:r,height:i});else var u=d3.select("."+a).append("svg").attr({width:r,height:i});var d=d3.svg.arc().innerRadius(r/5).outerRadius(r/5),p=d3.svg.arc().innerRadius(r/4).outerRadius(r/3),f=d3.svg.arc().innerRadius(r/3).outerRadius(r/2.5),v=l(t.map(function(t,e,a){return t[1]})),h=u.selectAll("g.arc").data(v).enter().append("g").attr({class:"arc",transform:"translate("+r/2+", "+r/2+")"}),m=d3.select(".row").append("tooltip").attr("class","toolTip"),g=G.colorServiceName,w=h.append("path").attr({fill:function(e,a){return g[t[a][0]]},d:d,class:function(t,e){return 0==e?"path_special":"path"},id:function(e,a){return t[a][2]}}).on("mousemove",function(e,a){m.style("left",d3.event.pageX+10+"px"),m.style("top",d3.event.pageY-25+"px"),m.style("display","inline-block"),m.html(t[a][2]+"<br>"+t[a][1]+"件")}).on("mouseout",function(t){m.style("display","none")});d3.selectAll(".path_special").attr({d:f}),w.transition().duration(1e3).attr({d:p}),u.append("text").attr({id:e.eName,class:"overview_areaName",x:r/2-35,y:i-30}).text(function(t){return e.cName+" ›"}).on("click",function(t){$(".active").removeClass("active"),$('.item[value="w"]').addClass("active"),G.focusArea(this.id,n)});var y=Object.keys(c),x=t.map(function(t){return[g[t[0]],y[t[0]]]}),N=18,k=4,A=u.selectAll(".legend").data(x).enter().append("g").attr("class","legend").attr("transform",function(t,e){var a=N+k,n=a*x.length/2,r=o*N,i=e*a+s*n;return"translate("+r+","+i+")"});A.append("rect").attr("width",N).attr("height",N).style("fill",function(t){return t[0]}).style("stroke",g),A.append("text").attr("x",N+k).attr("y",N-k).text(function(t){return t[1]})}function e(t,e,a){var n=0;for(var r in t.listData)t.listData[r][e]==a&&(n+=1);return n}function a(){$(window).width()<=1280?(r=380,i=380,o=8.2,s=3.5):(r=450,i=450,o=10,s=4.1)}function n(){var t=G.time.curTime,e=G.time.lastWTime;$(".overview_title .date").text("． "+e.split("-")[1]+"/"+e.split("-")[2]+" ~ "+t.split("-")[1]+"/"+t.split("-")[2]+" ．")}var r,i,o,s,c={"違規停車":0,"路燈故障":1,"噪音舉發":2,"騎樓舉發":3,"道路維修":4,"交通運輸":5,"髒亂及污染":6,"民生管線":7,"動物救援":8,"其他":9};n(),a(),d3.json("../../src/fack_areas.json",function(a,n){a&&console.log(a);var r=[[0,0,"違規停車"],[1,0,"路燈故障"],[2,0,"噪音舉發"],[3,0,"騎樓舉發"],[4,0,"道路維修"],[5,0,"交通運輸"],[6,0,"髒亂及污染"],[7,0,"民生管線"],[8,0,"動物救援"]];n.map(function(a,n){var i=a.area,o=[],s=0,l={cName:i,eName:DB.areasE[i]};for(var u in c){var d=[];d.push(c[u]),d.push(e(a,"serviceName",u)),d.push(u),o.push(d)}for(var p=0;p<9;p++)r[p][1]+=o[p][1];o=o.sort(function(t,e){return d3.descending(t[1],e[1])}),o.forEach(function(t,e){e>2&&(s+=o[e][1])}),o.splice(3,o.length-3,[9,s,"其他"]),t(o,l,"column",n)}),r=r.sort(function(t,e){return d3.descending(t[1],e[1])});var i=0;r.forEach(function(t,e){e>2&&(i+=r[e][1])}),r.splice(3,r.length-3,[9,i,"其他"]);var o={cName:"台南市",eName:"All"};t(r,o,"column",-1)}),$(".ui.dropdown.overview_selectArea").dropdown({action:"hide",onChange:function(t,e,a){$("html, body").animate({scrollTop:$("#"+t).offset().top-400},"easeInBack",function(){window.location.hash=t})}})}();