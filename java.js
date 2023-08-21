function new_image()
{
	fabric.Image.fromURL('descarga (2)', function(Img){
		block_image_object=Img;
		block_image_object.scaleToWidth(400);
		block_image_object.scaleToHeight(750);
		block_image_object.set({top:0,
		left:0});
		canvas.add(block_image_object);
	});
	
}

function sound(){
	x.play();
}
const parent = document.querySelector('.parent')
const imgs = document.querySelectorAll('.parent img')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

let idx = 0

function changeImg() {
    if(idx > imgs.length - 1){
        idx = 0
    }else if(idx < 0){
        idx = imgs.length - 1
    }  
    parent.style.transform = `translateX(${-idx * 500}px)`
}


next.addEventListener('click' , function change() {
    idx++;   
      
    changeImg()
});


prev.addEventListener('click' , function change() {
    idx--;

    changeImg()
});
