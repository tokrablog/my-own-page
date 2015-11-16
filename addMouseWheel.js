//版权 北京智能社©, 保留所有权利

function addMouseWheel(obj,fn){
	//1.判断浏览器
	if(navigator.userAgent.toLowerCase().indexOf('firefox') != -1){
		//ff
		obj.addEventListener('DOMMouseScroll',fnWheel,false);	
	}else{
		obj.onmousewheel=fnWheel;//ie chrome	
	}
	//2.确定方向	
	function fnWheel(ev){
		var oEvt=ev||event;
		//a.兼容
		var down=true;
		if(oEvt.wheelDelta){//ie chrome
			//b.统一方向
			down=oEvt.wheelDelta<0?true:false;
		}else{
			down=oEvt.detail>0?true:false;	
		}
		
		fn(down);//回调
		
		oEvt.preventDefault && oEvt.preventDefault();
		return false;
		
	}
}




