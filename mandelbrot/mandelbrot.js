//noprotect

function setup() {
	simple();
	createCanvas(600,600);
}

function draw() {
	// visit every pixel
	for(var x = 0; x <600; x += 1){
		for(var y = 0; y <600; y += 1){
			//Convert x,y to constant c=a+bi
			var a = map(x , 0 , 600 , -2.25 , 0.75);
			var b = map(y , 0 , 600 , -1.5 , 1.5);
			
			//Start with z = 0 + 0i
			var z_real = 0;
			var z_imag = 0;
			
			//Maximum iterations
			var max_iter = 128;
			
			for(var iteration = 1; (iteration <= max_iter) && (dist(0,0, z_real , z_imag) < 2) ; iteration+=1){
				//apply z*z + c
				var z_real_temp = (z_real * z_real) - (z_imag * z_imag) + a;                
				z_imag = (2*z_real*z_imag) +b;
				z_real = z_real_temp;
			}
			
			if(iteration == max_iter+1){
				//Doesn't escape
				stroke(0,0,0);
				point(x,y);
			}else{
				//Does escape
				stroke(iteration*20,((iteration % 3)*(iteration*12)),255-(iteration*7));
				point(x,y);
			}
			
			
		}
	}
	
}