(function(root) {
	// var Timer = root.Timer = ( root.Timer || {});
	var Timer = root.Timer = function () {
		this.startTime = new Date().getTime();
	};

	//returns a string of the time difference
	Timer.prototype.timeDifference = function() {
		return new Date().getTime() - this.startTime;
	};
	
	Timer.prototype.timeToString = function(unixTime) {
		var time = new Date(unixTime);
	
		var HH = this.convertToTwoDigits(time.getHours() - 16);//find out why this starts at 16
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
	
	Timer.prototype.start = function(element) {
		var that = this;
		
		this.startTime = new Date().getTime()
		setInterval(function() { that.updateElement(element); }, 1000);
		
	};
	
})(this);