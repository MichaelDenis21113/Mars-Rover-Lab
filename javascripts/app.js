// Rover Object Goes Here
// ======================
var rover = 
{
	direction: "N",
	x: 0,
	y: 0,
	traveLog: []
}
// ======================
function turnLeft(rover){
	switch(rover.direction)
	{
		case "N": rover.direction = "W"; break;
		case "W": rover.direction = "S"; break;
		case "S": rover.direction = "E"; break;
		case "E": rover.direction = "N"; break;	
	}
  console.log("turnLeft was called! Rover is now facing: " + rover.direction);
}

function readCommand(com)
{
	for(var i = 0; i < com.length; i++)
	{
		switch(com.charAt(i))
		{
			case "f": moveForward(rover); break;
			case "r": turnRight(rover); break;
			case "l": turnLeft(rover); break;
			default:  console.log("Did not recongize input"); return;
		}
	}
}


function turnRight(rover){
	switch(rover.direction)
	{
		case "N": rover.direction = "E"; break;
		case "E": rover.direction = "S"; break;
		case "S": rover.direction = "W"; break;
		case "W": rover.direction = "N"; break;	
	}
	console.log("turnLeft was called! Rover is now facing: " + rover.direction);
}

function moveForward(rover){
   rover.traveLog.push([rover.x, rover.y]);
   switch(rover.direction)
   {
	   case "N":
		   if(rover.y > 0)
			   rover.y--; 
			else return;
	   break; 

	   case "S": 
	       if(rover.y < 10)
			   rover.y++;
			else return;
	   break;
	   case "E":
		   if(rover.x < 10) 
			   rover.x++;
			else return;
	   break;

	   case "W": 
	   		if(rover.x > 0)
			   rover.x--; 
			else return;
	   break;
   }
  console.log("moveForward was called, position now:" + rover.x + " " + rover.y )
  console.log(rover.traveLog);
}

function moveBackward(rover){
	rover.traveLog.push([rover.x, rover.y]);
	switch(rover.direction)
	{
		case "N":
			if(rover.y < 10)
				rover.y++; 
			 else return;
		break; 
 
		case "S": 
			if(rover.y > 0)
				rover.y--;
			 else return;
		break;
		case "E":
			if(rover.x > 0) 
				rover.x--;
			 else return;
		break;
 
		case "W": 
				if(rover.x < 10)
				rover.x++; 
			 else return;
		break;
	}
   console.log("moveBackWard was called, position now:" + rover.x + " " + rover.y )
   console.log(rover.traveLog);
 }

