canvas = document.getElementById
ctx = canvas.getcontex("2d")

greencar_width="75"
greencar_height="100"

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar_x="5"
greencar_y ="225"

function add() {
	background_imgtag=new Image()
    background_imgtag.onload = uploadBackground
    background_imgtag.src=background_image;

   greencar_imgtag=new Image()
   greencar_imgtag.onload = uploadgreencar
   greencar_imgtag.src=greencar_image
}

function uploadBackground() {
	ctx.drawImage(background_imgtag,0,0, canvas.width , canvas.height)

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgtag , greencar_width , greencar_height , greencar_x , greencar_y)

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (greencar_y>=0){
        rover_y=rover_y-10;
        uploadbackground();
        uploadrover();
}

function down()
{
	if (greencar_y<=0){
        greencar_y=greencar_y+10;
        uploadbackground();
        uploadrover();	
}

function left()
{
	if (greencar_y>=0){
        rover_y=rover_y-10;
        uploadbackground();
        uploadrover();
}

function right()
{
	if (greencar_y<=0){
        rover_y=rover_y+10;
        uploadbackground();
        uploadrover();

