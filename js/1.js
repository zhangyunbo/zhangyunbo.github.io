window.onload=function(){
	var opSpan1=document.getElementById("span1");
	var opA1=document.getElementById("a1");
	var str=opSpan1.innerHTML;
	var onOff=true;
	opA1.onclick=function(){
		if(onOff){
			opSpan1.innerHTML=str.substring(0,15)+"...";
			opA1.innerHTML="点击展开";
		}
		else{
			opSpan1.innerHTML=str;
			opA1.innerHTML="点击收缩";
		}
		onOff=!onOff;
	}
}