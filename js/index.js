$(function(){
	$("#juanz .juanz1 .z1").addClass('zk');
	var index=0;
	$(".bton_r").click(function() {
		if(index==0){
			index++;
			$("#juanz .juanz1 .z1").removeClass('zk');
			setTimeout(function(){
				$("#juanz .juanz").addClass('sq');
			},1000)
			setTimeout(function(){
				$("#juanz .juanz1 .z2").addClass('zk');
			},2000)
		}else{
			index=0;
			$("#juanz .juanz1 .z2").removeClass('zk');
			setTimeout(function(){
				$("#juanz .juanz").removeClass('sq');
			},1000)
			setTimeout(function(){
				$("#juanz .juanz1 .z1").addClass('zk');
			},2000)
		}
	});

	$(".bton_l").click(function() {
		if(index==0){
			index++;
			$("#juanz .juanz1 .z1").removeClass('zk');
			setTimeout(function(){
				$("#juanz .juanz").addClass('sq');
			},1000)
			setTimeout(function(){
				$("#juanz .juanz1 .z2").addClass('zk');
			},2000)
		}else{
			index=0;
			$("#juanz .juanz1 .z2").removeClass('zk');
			setTimeout(function(){
				$("#juanz .juanz").removeClass('sq');
			},1000)
			setTimeout(function(){
				$("#juanz .juanz1 .z1").addClass('zk');
			},2000)
		}
	});
	
})