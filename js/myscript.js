let box = document.getElementById("box");

//back container color
let boxBack=document.getElementById("boxBack");
let BackColor=document.getElementById("BackColor");

BackColor.oninput=function(){
    boxBack.style.backgroundColor=BackColor.value;
}

//Width,Height,Border

let heightSelector = document.getElementById("boxHeight");
let heightText = document.getElementById("txtHeight");

heightSelector.oninput = function () {
  box.style.height = heightSelector.value + "%";
  heightText.value = heightSelector.value + "%";
};

let widthSelector = document.getElementById("boxWidth");
let widthText = document.getElementById("txtWidth");

widthSelector.oninput = function () {
  box.style.width = widthSelector.value + "%";
  widthText.value = widthSelector.value + "%";
};

let bgColorSelector = document.getElementById("backgroundPicker");

bgColorSelector.oninput = function () {
  box.style.backgroundColor = bgColorSelector.value;
};

let opacitySelector = document.getElementById("opacityPicker");
let opacityText = document.getElementById("opacityText");
opacitySelector.oninput = function () {
  box.style.opacity = opacitySelector.value;
  opacityText.value = opacitySelector.value;
};
//Border

let borderThicknessSelector = document.getElementById(
  "borderThicknessSelector"
);
let borderThicknessText = document.getElementById("borderThickness");
borderThicknessSelector.oninput = function () {
  box.style.borderWidth = borderThicknessSelector.value + "px";
  borderThicknessText.value = borderThicknessSelector.value + "px";
};

let borderTypeSelector = document.getElementById("borderTypeSelector");
borderTypeSelector.oninput = function () {
  box.style.borderStyle = borderTypeSelector.value;
};

let borderColor = document.getElementById("borderColorSelector");
borderColor.oninput = function () {
  box.style.borderColor = borderColor.value;
};

let borderRadiusSelector = document.getElementById("borderRadiusSelector");
let borderRadiusText = document.getElementById("borderRadiusText");

borderRadiusSelector.oninput = function () {
  box.style.borderRadius = borderRadiusSelector.value + "%";
  borderRadiusText.value = borderRadiusSelector.value + "%";
};
//Color label updater
document.querySelectorAll("input[type=color]").forEach(function (picker) {
  var targetLabel = document.querySelector('label[for="' + picker.id + '"]'),
    codeArea = document.createElement("span");

  codeArea.innerHTML = picker.value;
  targetLabel.appendChild(codeArea);

  picker.addEventListener("change", function () {
    codeArea.innerHTML = picker.value;
    targetLabel.appendChild(codeArea);
  });
});

//Transform
function ApplyTransform(trasform, regexTransform) {
  let curTrans = box.style.transform;
  let newTrans;
  if (curTrans.match(regexTransform)) {
    newTrans = curTrans.replace(regexTransform, trasform);
  } else {
    if (curTrans.length == 0) {
      newTrans = trasform;
    } else {
      newTrans = trasform + " " + curTrans;
    }
  }
  box.style.transform = newTrans;
}
//Scale
let scaleSelector = document.getElementById("scaleSelector");
let scaleText = document.getElementById("scaleText");

scaleSelector.oninput = function () {
  let newScaleString;
  if (scaleSelector.value == "1") {
    newScaleString = "";
  } else {
    newScaleString = "scale(" + scaleSelector.value + ")";
  }

  let regex = /scale\([0-9|\.]*\)/;
  ApplyTransform(newScaleString, regex);

  // box.style.scale=scaleSelector.value+"x";
  scaleText.value = scaleSelector.value + "x";
};
//Rotate
let rotateSelector = document.getElementById("rotateBoxSelector");
let rotateBoxText = document.getElementById("rotateBoxText");
rotateSelector.oninput = function () {
  let newRotateString;
  if (rotateSelector.value == "0") {
    newRotateString = "";
  } else {
    newRotateString = "rotate(" + rotateSelector.value + "deg)";
  }
  let regex = /rotate\(\d+deg\)/;
  ApplyTransform(newRotateString, regex);

  rotateBoxText.value = rotateSelector.value + "deg";
};

//Translate X
let translateXSelector = document.getElementById("translateXSelector");
let translateXBoxText = document.getElementById("translateXBoxText");
translateXSelector.oninput = function () {
  let newTranslateXString;
  if (translateXSelector.value == "0") {
    newTranslateXString = "";
  } else {
    newTranslateXString = "translateX(" + translateXSelector.value + "%)";
  }
  let regex = /translateX\(-?\d*\.?\d+%\)/;
  ApplyTransform(newTranslateXString, regex);
  translateXBoxText.value = translateXSelector.value + "%";
};
//Translate Y
let translateYSelector = document.getElementById("translateYSelector");
let translateYBoxText = document.getElementById("translateYBoxText");
translateYSelector.oninput = function () {
  let newTranslateYString;
  if (translateYSelector.value == "0") {
    newTranslateYString = "";
  } else {
    newTranslateYString = "translateY(" + translateYSelector.value + "%)";
  }
  let regex = /translateY\(-?\d*\.?\d+%\)/;
  ApplyTransform(newTranslateYString, regex);
  translateYBoxText.value = translateYSelector.value + "%";
};

//Translate Z
let translateZSelector = document.getElementById("translateZSelector");
let translateZBoxText = document.getElementById("translateZBoxText");
translateZSelector.oninput = function () {
  let newTranslateZString;
  if (translateZSelector.value == "0") {
    newTranslateZString = "";
  } else {
    newTranslateZString = "translateZ(" + translateZSelector.value + "%)";
  }
  let regex = /translateZ\(-?\d*\.?\d+%\)/;
  ApplyTransform(newTranslateZString, regex);
  translateZBoxText.value = translateZSelector.value + "%";
};
//Skew X
let skewXSelector = document.getElementById("skewXSelector");
let skewXBoxText = document.getElementById("skewXBoxText");
skewXSelector.oninput = function () {
  let newSkewXString;
  if (skewXSelector.value == "0") {
    newSkewXString = "";
  } else {
    newSkewXString = "skewX(" + skewXSelector.value + "deg)";
  }
  let regex = /skewX\(-?\d+deg\)/;
  ApplyTransform(newSkewXString, regex);
  skewXBoxText.value = skewXSelector.value + "deg";
};
//Skrew Y
let skewYSelector = document.getElementById("skewYSelector");
let skewYBoxText = document.getElementById("skewYBoxText");
skewYSelector.oninput = function () {
  let newSkewYString;
  if (skewYSelector.value == "0") {
    newSkewYString = "";
  } else {
    newSkewYString = "skewY(" + skewYSelector.value + "deg)";
  }
  let regex = /skewY\(-?\d+deg\)/;
  ApplyTransform(newSkewYString, regex);
  skewYBoxText.value = skewYSelector.value + "deg";
};
function clear(node) {
  while (node.lastElementChild) {
    node.removeChild(node.lastElementChild);
  }
}
//Copy css
let code = document.getElementById("cssCode");

let button = document.getElementById("cssCodeShowToogler");
button.onclick = function () {
  clear(code);
  for (const key in box.style) {
    if (CSSStyleDeclaration.hasOwnProperty.call(box.style, key)) {
      if (!isNaN(key)) {
        let realKey = box.style[key];
        var attribute = document.createElement("p");
        attribute.innerHTML =
          "<code>" + realKey + ":" + box.style[realKey] + ";" + "</code>";
        code.appendChild(attribute);
      }
    }
  }
};
function CopyToClipboard(id) {
  var r = document.createRange();
  r.selectNode(document.getElementById(id));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}
let execCopy = document.getElementById("ExecCopy");
execCopy.onclick = function () {
  CopyToClipboard("cssCode");
};
//Clear css
let clearBtn=document.getElementById("restartButton");
clearBtn.onclick=function(){
    box.style="";
    boxBack.style="";
}