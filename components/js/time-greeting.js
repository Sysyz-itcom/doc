// time
var now = new Date();
    	var hour = now.getHours();
    	var greeting = document.getElementById('greeting');

    	if (hour >= 7 && hour < 12) {
    	    greeting.textContent = "上午好！";
    	} else if (hour >= 12 && hour < 13) {
    	    greeting.textContent = "中午好！";
    	} else if (hour >= 13 && hour < 19) {
        greeting.textContent = "下午好！";
    	} else if (hour >= 19 && hour < 24) {
    	    greeting.textContent = "晚上好！";
    	} else {
    	    greeting.textContent = "凌晨了，早点睡吧！";
    	}
