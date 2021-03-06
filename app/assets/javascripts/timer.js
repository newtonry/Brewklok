(function(root) {
	var Timer = root.Timer = function () {
		this.startTime = new Date().getTime();
		this.pausedTime = 0;
	};

	Timer.prototype.timeDifference = function() {
		return new Date().getTime() - (this.startTime + this.pausedTime);
	};
	
	Timer.prototype.timeToString = function(unixTime) {
		var time = new Date(unixTime);
	
		var HH = this.convertToTwoDigits(time.getHours() - new Date(0).getHours());
		var MM = this.convertToTwoDigits(time.getMinutes());
		var SS = this.convertToTwoDigits(time.getSeconds());
		
		return (HH + ":" + MM + ":" + SS);		
	}
	
	//formats numbers so they have 2 digits
	Timer.prototype.convertToTwoDigits = function(digits) {
		digits = String(digits);
		if (digits.length < 2) {
			return "0" + digits;
		} else {
			return digits;
		}
	}
	
	Timer.prototype.updateElement = function(element) {
		$(element).html(this.timeToString(this.timeDifference())); 
	};
	
	Timer.prototype.pause = function() {
		clearInterval(this.intervalId);
		this.pauseStart = new Date().getTime(); 
	};
	
	Timer.prototype.unpause = function() {
		this.pausedTime = this.pausedTime + (new Date().getTime() - this.pauseStart);
	};
})(this);