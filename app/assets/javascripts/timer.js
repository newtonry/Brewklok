(function(root) {
	// var Timer = root.Timer = ( root.Timer || {});
	var Timer = root.Timer = function () {
		this.startTime = new Date().getTime();
	};
		
	Timer.prototype.timeNow = function() {
		alert(new Date().getTime());
	};

	//returns a string of the time difference
	Timer.prototype.timeDifference = function() {
		var difference = new Date((new Date().getTime() - this.startTime));
		var HH = this.convertToTwoDigits(difference.getHours() - 16);//find out why this starts at 16
		var MM = this.convertToTwoDigits(difference.getMinutes());
		var SS = this.convertToTwoDigits(difference.getSeconds());
		return ( HH + ":" + MM + ":" + SS);
	};
	
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
		$(element).html(this.timeDifference()); 
	};
	
	Timer.prototype.start = function(element) {
		var that = this;
		setInterval(function() { that.updateElement(element); }, 1000);
		
	};
	
	
})(this);