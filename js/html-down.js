$(document).ready(function(){
			 $("#ok").click(function(){
 		    	i=$("#api").val()+$("#xurl").val();
 		    	window.open(i,'New Tab','fullscreen=1,z-look=yes,menubar=no,toolbar=no,status=no,scrollbars=no');
 		    	console.log('URL:'+i);
 		    	document.getElementById("ts").innerHTML='视频已经在新窗口打开并进行播放<br>（若无，请手动打开下面链接）<br>URL：<a href="'+i+'" target="_blank"> '+i+' </a>';	
			});
});
