function createPainter(parent, width, height) {
    var title = elt("h2", null, "Simple Painter");
    var [canvas, ctx] = createCanvas(width, height);
    var toolbar = elt("div", null);
    for(var name in controls) {
        toolbar.appendChild(controls[name](ctx));
    }
    toolbar.style.fontSize = "small";
    toolbar.style.marginBottom = "3px";
    parent.appendChild(elt("div", {id: "container"}, title, toolbar, canvas));
}

function createCanvas(canvasWidth, canvasHeight) {
    var canvas = elt("canvas", { width: canvasWidth, height: canvasHeight, id: "canvas"});
    var ctx = canvas.getContext("2d");
    canvas.style.border = "1px solid gray";
    canvas.style.cursor = "pointer";

    saveImageData(ctx);

    canvas.addEventListener("mousedown", function(e) {
        sliceSavedImageData(); //포인터 위치에 따라 저장된 이미지 데이터 자른다.
        var event = document.createEvent("HTMLEvents");
        event.initEvent("change", false, true);
        colorInput.dispatchEvent(event);
        paintTools[paintTool](e, ctx);
    }, false);
    return [canvas, ctx];
}

function relativePosition(event, element) {
    var rect = element.getBoundingClientRect();
    return {
        x: Math.floor(event.clientX - rect.left),
        y: Math.floor(event.clientY - rect.top)
    };
}

var paintTool;
var paintTools = Object.create(null);

paintTools.brush = function(e, ctx) {
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    var img = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    var p = relativePosition(e, ctx.canvas);

    ctx.beginPath();
    ctx.moveTo(p.x, p.y);

    setDragListeners(ctx, img, function(q) {
        ctx.lineTo(q.x, q.y);
        ctx.stroke();
    });
}

paintTools.line = function(e, ctx) {
    // ❶ 그림을 그리기 위한 초기화 처리 : 선의 끝부분을 둥글게 만든다
	ctx.lineCap = "round";
    // ❷ 그림을 그리기 전에, Canvas에 담긴 그림을 img에 저장한다
	var img = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    // ❸ canvas 요소에 대한, 마우스 포인터의 상대 위치를 구한다
	var p = relativePosition(e, ctx.canvas);
    // ❹ 마우스를 드래그할 때의 이벤트 리스너를 등록한다
	setDragListeners(ctx, img, function(q) {
		ctx.beginPath();
		ctx.moveTo(p.x,p.y); ctx.lineTo(q.x,q.y);
		ctx.stroke();
	});
};

function setDragListeners(ctx, img, draw) {
    var mousemoveEventListener = function(e) {
        ctx.putImageData(img, 0, 0);
        draw(relativePosition(e, ctx.canvas));
    };
    document.addEventListener("mousemove", mousemoveEventListener, false);
    document.addEventListener("mouseup", function(e) {
        ctx.putImageData(img, 0, 0);
        draw(relativePosition(e, ctx.canvas));

        saveImageData(ctx); //이미지 저장

        document.removeEventListener("mousemove", mousemoveEventListener, false);
        document.removeEventListener("mouseup", arguments.callee, false);
    }, false);
}

var controls = Object.create(null);
var colorInput;

controls.painter = function(ctx) {
    var DEFAULT_TOOL = 0;
    var select = elt("select", null);
    var label = elt("label", null, "그리기 도구 : ", select);
    for(var name in paintTools){
        select.appendChild(elt("option", {value: name}, name));
    }
    select.selectedIndex = DEFAULT_TOOL;
    paintTool = select.children[DEFAULT_TOOL].value;
    select.addEventListener("change", function(e) {
        paintTool = this.children[this.selectedIndex].value;
    }, false);
    return label;
};

controls.color = function(ctx) {
	var input = colorInput = elt("input", {type: "color"});
	var label = elt("label", null, " 색：", input);
	input.addEventListener("change", function (e) {// 참고 : Firefox에서는 change 이벤트가 발생하지 않습니다.
		ctx.strokeStyle = this.value;
		ctx.fillStyle = this.value;
	},false);
	return label;
};

controls.brushsize = function(ctx) {
	var size = [1,2,3,4,5,6,8,10,12,14,16,20,24,28];
	var select = elt("select", null);
	for(var i=0; i<size.length; i++) {
		select.appendChild(elt("option",{value:size[i].toString()},size[i].toString()));
	}
	select.selectedIndex = 2;
	ctx.lineWidth = size[select.selectedIndex];
	var label = elt("label",null," 선의 너비：",select);
	select.addEventListener("change", function(e) {
		ctx.lineWidth = this.value;
	},false);
	return label;
};

controls.alpha = function(ctx) {
	var input = elt("input", {type:"number",min:"0", max:"1",step:"0.05",value:"1"});
	var label = elt("label", null, " 투명도：", input);
	input.addEventListener("change", function(e) {
		ctx.globalAlpha = this.value;
	},false);
	return label;
};

var savedImageData = [];
var pointer = -1;

controls.back = function(ctx) {
    var button = elt("button", null, "뒤로 가기");
    button.style.marginLeft = "3px";

    button.addEventListener("click", function(e) {
        var idx = pointer - 1;
        if(idx < 0)
            return;
        var imgData = savedImageData[idx];
        ctx.putImageData(imgData, 0, 0);
        pointer = idx;
    }, false);

    return button;
};

controls.forward = function(ctx) {
    var button = elt("button", null, "앞으로 가기");
    button.style.marginLeft = "3px";

    button.addEventListener("click", function(e) {
        var idx = pointer + 1;
        if(idx >= savedImageData.length)
            return;
        var imgData = savedImageData[idx];
        ctx.putImageData(imgData, 0, 0);
        pointer = idx;
    }, false);

    return button;
};

function saveImageData(ctx) {
    var imgData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
    savedImageData.push(imgData);
    pointer++;
}

function sliceSavedImageData() {
    if(pointer == savedImageData.length - 1)
        return;
    else{
        var tmp = [];
        for(var i = 0; i <= pointer; i++){
            tmp.push(savedImageData[i]);
        }
        savedImageData = tmp;
    }
}

