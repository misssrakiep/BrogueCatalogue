//add a new brogue
var ready = document.querySelector(".ready");
ready.addEventListener("click", function() {
    var overlay = document.getElementById("overlay");
    overlay.style.width = "100%";
});

//close addition pane
var close = document.querySelector(".close");
close.addEventListener("click", function() {
    overlay.style.width = "0%";
});


//boxes of radio buttons
var oxfordBox = document.querySelector(".oxfordBox");
var colour = document.getElementById("colour");
var size = document.getElementById("size");
var texture = document.getElementById("texture");
var type = document.getElementById("type");


//existing shoes
var shoeListTemplateText = document.querySelector('.shoeListTemplate').innerHTML;
shoeListTemplate = Handlebars.compile(shoeListTemplateText);
//existing shoe display
var shoeTable = document.querySelector('.allShoes');
shoeTable.innerHTML = shoeListTemplate({
    shoes: shoeList
});
    localStorage.setItem('myShoes', JSON.stringify(shoeList));


//selection Pane
var colourTemplateText =
    document.querySelector(".colorsTemplate").innerHTML;
colorsTemplate = Handlebars.compile(colourTemplateText);

var colorSelection = document.querySelector(".colorSelection");
colorSelection.innerHTML = colorsTemplate({
    colors: colorList
});

var sizeTemplateText =
    document.querySelector(".sizeTemplate").innerHTML;
sizeTemplate = Handlebars.compile(sizeTemplateText);

var sizeSelection = document.querySelector(".sizeSelection");
sizeSelection.innerHTML = sizeTemplate({
    size: sizeList
});

var textureTemplateText =
    document.querySelector(".textureTemplate").innerHTML;
textureTemplate = Handlebars.compile(textureTemplateText);

var textureSelection =
    document.querySelector(".textureSelection");
textureSelection.innerHTML = textureTemplate({
    texture: textureList
});

var typeTemplateText =
    document.querySelector(".typeTemplate").innerHTML;
typeTemplate = Handlebars.compile(typeTemplateText);


var typeSelection =
    document.querySelector(".typeSelection");
typeSelection.innerHTML = typeTemplate({
    type: typeList
});
//////////////////////////////////////////////////////////////

//show all shoes, existing and new

var showAll = document.querySelector(".showAll");
showAll.addEventListener("click", function() {
shoeTable.innerHTML = shoeListTemplate({
    shoes: shoeList
});
	shoeTable.style.display = "inline-block"
	customDisplay.style.display = "inline-block";	
  });


var shoeDisplay = document.querySelector(".shoeDisplay");

//adding custom shoes
var colourInput = document.querySelector(".addColour");
var textInput = document.querySelector(".addTexture");
var typeInput = document.querySelector(".addType");
var imgInput = document.querySelector(".addImg");
var customDisplay = document.querySelector(".customShoes");

///initialise handlebars
var customSource = document.querySelector('.customListTemplate').innerHTML;
var customListTemplate = Handlebars.compile(customSource);

var customList = [];

var addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click", function(){
 
    var popup = document.querySelector(".thankYou");
    popup.style.display = "inline-block";


		customList.push({
		   colour : colourInput.value,
			texture : textInput.value,
			type : typeInput.value,
			picture : imgInput.value,
			size : [3, 4, 5, 6, 7]
		});
	
	localStorage.setItem('item', JSON.stringify(customList));
   	 	
	});


function colourUpdate() {
var colours = ["Blue", "Grey", "White", "Brown", "Black", "Other"];
	for (var x=0; x< colours.length ; x++){
		if (colourInput.value !== colours[x] && colourInput.value !== ""){
			colorList.push({colors : colourInput.value});
			colours.push(colourInput.value);
		}
	break;
	}
	colorSelection.innerHTML = colorsTemplate({
    colors: colorList});
}
function textUpdate(){
var textures = ["Leather", "Suede", "Paten Leather"];
	for (var s=0 ; s< textures.length ; s++){
			if (textInput.value !== textures[s] && textInput.value !== ""){
				textureList.push({texture : textInput.value});
				textures.push(textInput.value);
			}
	break;
		}
	textureSelection.innerHTML = textureTemplate({
    texture: textureList});
}
function typeUpdate(){
var types = ["Oxford", "Boot"];
		for (var o=0 ; o<types.length ; o++){
			if (typeInput.value !== types[o] && typeInput.value !== ""){
				typeList.push({type : typeInput.value});
				types.push(typeInput.value);
			}
	break;
		}
	typeSelection.innerHTML = typeTemplate({
    type: typeList});
}


var customButton = document.querySelector('.showCustom');
customButton.addEventListener('click', function() {
    shoeTable.style.display = "none";
	colourUpdate();
	textUpdate();
	typeUpdate();

var customItems = JSON.parse(localStorage.item);
    customDisplay.innerHTML = customListTemplate({
    customShoe: customList
  });	
});

colorSelection.addEventListener("change", function(evt) {
    var colorValue = evt.target.value;
    var filteredColour = [];
    for (var i = 0; i < shoeList.length; i++) {
        var shoe = shoeList[i];
        if (shoe.colour == colorValue) {
            filteredColour.push(shoe);
        }
    }
	shoeTable.innerHTML = shoeListTemplate({
    shoes: filteredColour
  });
});

var sizeSelection = document.querySelector(".sizeSelection");
var sizeValue = document.getElementsByName("size");

sizeSelection.addEventListener("change", function(evt){
  var sizeValue = evt.target.value;
  var filteredSize = [];
  for(var i=0; i<shoeList.length; i++){
    var shoe = shoeList[i];
      if(shoe.size[j] == sizeValue){
        filteredSize.push(shoe);
      }
    }
  shoeTable.innerHTML = shoeListTemplate({
    shoes: filteredSize
  });
  });

var textureValue = document.getElementsByName("texture");

textureSelection.addEventListener("change", function(evt){
  var textureValue = evt.target.value;
  var filteredText = [];
  for(var i=0; i<shoeList.length; i++){
    var shoe = shoeList[i];
    if(shoe.texture == textureValue){
      filteredText.push(shoe);
    }
  }
  shoeTable.innerHTML = shoeListTemplate({
    shoes: filteredText
});
});

var typeValue = document.getElementsByName("type");

typeSelection.addEventListener("change", function(evt){
  var typeValue = evt.target.value;
  var filteredType = [];
  for(var i=0; i<shoeList.length; i++){
    var shoe = shoeList[i];
    if(shoe.type == typeValue){
      filteredType.push(shoe);
    }
  }
  shoeTable.innerHTML = shoeListTemplate({
    shoes: filteredType
  });
	customTypeFilter();
});

colorSelection.addEventListener("change", function(evt) {
    var colorValue = evt.target.value;
var customColour = [];
for (var j=0; j < customList.length ; j++){
var custom = customList[j];
	if (custom.colour == colorValue){
		customColour.push(custom);
	}	
}
	
 customDisplay.innerHTML = customListTemplate({
    customShoe: customColour
  });	
});

sizeSelection.addEventListener("change", function(evt){
  var sizeValue = evt.target.value;
var customSize = [];
	for (var j=0; j < customList.length ; j++){
		var custom = customList[j];
	if (custom.size == size){
		customSize.push(custom);
	}
	 customDisplay.innerHTML = customListTemplate({
    customShoe: customSize
  });
	}});

textureSelection.addEventListener("change", function(evt){
  var textureValue = evt.target.value;

	var customTexture = [];
	for (var j=0; j < customList.length ; j++){
		var custom = customList[j];
		if (custom.texture == texture){
		customTexture.push(custom);
	}
	 customDisplay.innerHTML = customListTemplate({
    customShoe: customTexture
  });
	}});

typeSelection.addEventListener("change", function(evt){
  var typeValue = evt.target.value;
var customType = [];
		for (var j=0; j < customList.length ; j++){
		var custom = customList[j];			
	 if (custom.type == typeValue){
		customType.push(custom);
	}
		customDisplay.innerHTML = customListTemplate({
    customShoe: customType
  });
	
}
});



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
//var shoeIndexList = [];	
//var shoeIndex = shoeList.map(function(obj, i){
//shoeIndexList.push(shoeIndex);	
//});
//
//
//
//var cart = [];
//var addToCart = document.querySelector(".addToCart");
//addToCart.addEventListener("click", function shopping() {
//	for (var i =0 ; i < numbers.length ; i++){
//		var currentNumber = numbers[i];
//		for (var j =0 ; j < shoeIndexList.length ; j++){
//			var currentShoe = shoeIndexList[j];
//			if (currentNumber == currentShoe) {
//				cart.push(shoeList[j]);
//			}
//		}
//	}
//	});
