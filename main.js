var service_name = {"違規停車": 0,"路燈故障": 1 ,"噪音舉發": 2,"騎樓舉發": 3,"道路維修": 4,"交通運輸": 5,"髒亂及污染": 6,"民生管線": 7,"動物救援": 8};

function filtJSON(json, key, value) {
    var count = 0;
    for(var foo in json["listData"]){//service_name
        if (json["listData"][foo][key] == value){
            count = count + 1;
        }
    }
    return count;
}

var array =[];
var count = 0;
var sum = 0;
d3.json("fake_areas.json", function(error, data){
    if (error){
        console.log(error);
    }
    console.log("Data read >> outside");
    //console.log(data);
    data.map(function(d){
        var areaName = d.area;
        var array = [];//array用來儲存過濾後可畫圖的資料
        var count = 0;
        var sum = 0;
        for(var foo in service_name){
            var temp = [];
            temp.push(service_name[foo]);//類別對應數字
            temp.push(filtJSON(d, "serviceName", foo));//類別之事件發生數
            temp.push(foo);//類別名稱
            array.push(temp);
        }

        array = array.sort(function(a, b) {//大到小排序
                    return d3.descending(a[1], b[1]);
                });

        for(var foo in array){
            if(count > 2){
                sum +=array[foo][1];
            }
            count = count + 1;
        }

        var temp = [];
        temp.push(9);//其他歸類在第9項
        temp.push(sum);//事件發生數量
        temp.push("其他");
        array.splice(3, count - 3, temp);//保留前三高，其餘加總到「其他」
        createDonut( array , areaName , "column");//畫圖
    })
});

//createDonut("all_item.json", "東區" , "column")
//filename: json filename, name: 區名, column_object: 預計要榜定的tag class
function createDonut(array, name, column_object){
    var width = 450, height = 450;
    var pie = d3.layout.pie();
    var svg = d3.select("." + column_object)
                .append("svg")
                .attr({
                    "width": width,
                    "height": height,
                });
    var arc = d3.svg.arc()
                    .innerRadius((width/5))
                    .outerRadius((width/5));
    var arc2 = d3.svg.arc()
                    .innerRadius((width/4))
                    .outerRadius((width/3));
    var arc3 = d3.svg.arc()
                    .innerRadius((width/3))
                    .outerRadius((width/2.5));
    var arcs = svg.selectAll("g.arc")
                .data(pie(
                    array.map(//遍尋處理每個array element，並取得特定欄位 = 數量
                        function(element,index,array) {
                            return element[1];
                        })
                ))
                .enter()
                .append("g")
                .attr({
                    "class": "arc",
                    "transform": "translate(" + (width/2) + ", " + (width/2) + ")",
                });

    var color = ['#E57373','#DCE775','#F06292','#BA68C8','#7986CB','#4DB6AC','#81C784','#FF8A65','#A1887F','#E0E0E0']
    var path = arcs.append("path")
                    .attr({
                        "fill": function(d,i){
                            return color[array[i][0]];//color的array
                        },
                        "d": arc,
                        "class": function(d,i){
                            //給最大的一點特效！！
                            if(i == 0){
                                return "path_special";
                            }
                            return "path";
                        },
                        "id": function(d, i){
                            return array[i][2];
                        }
                    })
                    .on("mouseover", function(){
                        svg.append("text")
                            .attr({
                                "class": "subject_" + this.id,
                                "x": (width/2),
                                "y": (width/2),
                                "text-anchor": "middle"
                            })
                            .text(this.id);
                    })
                    .on("mouseout", function(){
                        svg.selectAll(".subject_" + this.id).remove();
                    })
    d3.selectAll(".path_special")
        .attr({
            "d": arc3,
        })
    path.transition()
         .duration(1000)
         .attr({
            "d": arc2
        });
}