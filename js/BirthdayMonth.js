BirthdayMonth = function (birthday) {
	var currentbirthday = birthday,

	getMonth = function() {
		console.log('Current Month is ' + currentbirthday);
	},

	setMonth = function() {
		console.log('BirthdayMonth API: user set "' + currentbirthday + '" as the new birthday month');
	}

	//public members
	return{
		newMonth: function(birthday) {
			currentbirthday = birthday;
			setMonth();
		},
		currentMonth: function () {
			getMonth();
		}
	};

};

