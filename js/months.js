(function () {
	var Month = Backbone.Model.extend({ });

	var Year = Backbone.Collection.extend({
		model: Month,
		initialize: function () {
			this.sort_key = 'id';
		},
		comparator: function (a,b) {
			a = a.get(this.sort_key);
			b = b.get(this.sort_key);
			return a > b ? 1
				 : a < b ? -1
				 : 			0;
		},
		sort_by_id: function () {
			this.sort_key = 'id';
			this.sort();
		},
		sort_by_name: function () {
			this.sort_key = 'name';
			this.sort();
		}
	});

	var MonthView = Backbone.View.extend({

		tagName: 'div',

		className: 'month',

		//el: "#canvas",

		events: {
			'click': 'changecolor'
		},

		initialize: function () {
			this.on('sort reset', this.render, this);  
		},

		render: function () {
			this.setDimensions();
			//this.setPosition();
			this.setColor();
			this.$el.html(this.model.get('text'));
			this.el.id = this.model.get('id');
			return this;
		},

		setDimensions: function () {
			this.$el.css({
				width: this.model.get('width') + 'px',
				height: this.model.get('height') + 'px'
			});
		},

		// setPosition: function () {
		// 	var position = this.model.get('position');
		// 	this.$el.css({
		// 		left: position.x,
		// 		top: position.y
		// 	});
		// },

		setColor: function () {
			this.$el.css('background-color', this.model.get('color'));
		},

		changecolor: function () {
			//alert(this.$el.css('background-color'));
			
			$("div").each(function () {
				if($(this).attr('id') !== "canvas")
					$(this).css('background-color', '#0000ff');
			});
			if (this.$el.css('background-color') === 'rgb(0, 0, 255)') {
				this.$el.css('background-color', '#ff0000');
				//alert(this.$el.html());
				//var val = this.$el.html();
				birthdayMonth.newMonth(this.$el.html());
			}else {
				this.$el.css('background-color', '#0000ff');
			};
			
		}

	});

var year = new Year( [
 new Month({
	id: 1,
	width: 300,
	height: 50,
	// position: {
	// 	x: 300,
	// 	y: 100
	// },
	color: '#0000ff',
	text: 'January',
	name: 'January'
}),
new Month({
	id: 2,
	width: 300,
	height: 50,
	// position: {
	// 	x: 300,
	// 	y: 175
	// },
	color: '#0000ff',
	text: 'February',
	name: 'February'
}),
new Month({
	id: 3,
	width: 300,
	height: 50,
	// position: {
	// 	x: 300,
	// 	y: 250
	// },
	color: '#0000ff',
	text: 'March',
	name: 'March'
}),
new Month({
	id: 4,
	width: 300,
	height: 50,
	// position: {
	// 	x: 300,
	// 	y: 325
	// },
	color: '#ff0000',
	text: 'April',
	name: 'April'
}),
new Month({
	id: 5,
	width: 300,
	height: 50,
	position: {
		x: 300,
		y: 400
	},
	color: '#0000ff',
	text: 'May',
	name: 'May'
}),
new Month({
	id: 6,
	width: 300,
	height: 50,
	position: {
		x: 300,
		y: 475
	},
	color: '#0000ff',
	text: 'June',
	name: 'June'
}),
new Month({
	id: 7,
	width: 300,
	height: 50,
	position: {
		x: 300,
		y: 550
	},
	color: '#0000ff',
	text: 'July',
	name: 'July'
}),
new Month({
	id: 8,
	width: 300,
	height: 50,
	position: {
		x: 300,
		y: 625
	},
	color: '#0000ff',
	text: 'August',
	name: 'August'
}),
new Month({
	id: 9,
	width: 300,
	height: 50,
	position: {
		x: 300,
		y: 700
	},
	color: '#0000ff',
	text: 'September',
	name: 'September'
}),
new Month({
	id: 10,
	width: 300,
	height: 50,
	position: {
		x: 300,
		y: 775
	},
	color: '#0000ff',
	text: 'October',
	name: 'October'
}),
new Month({
	id: 11,
	width: 300,
	height: 50,
	position: {
		x: 300,
		y: 850
	},
	color: '#0000ff',
	text: 'November',
	name: 'November'
}),
new Month({
	id: 12,
	width: 300,
	height: 50,
	position: {
		x: 300,
		y: 925
	},
	color: '#0000ff',
	text: 'December',
	name: 'December'
})
]);

$('#numerical').click(function () {
	year.sort_by_id();
	$('div#canvas').empty();
	year.each(function (model) {
		$('div#canvas').append(new MonthView({model: model}).render().el);
 		$('div#canvas').append("<br/>");
 		$('div#canvas').append("<br/>");
 		$('div#canvas').append("<br/>");
		$('div#canvas').append("<br/>");
	});
});

 year.each(function (model) {
// 	//model = _(model).sortBy(function (model) {
// 		//model.get("text");
 		$('div#canvas').append(new MonthView({model: model}).render().el);
 		$('div#canvas').append("<br/>");
 		$('div#canvas').append("<br/>");
 		$('div#canvas').append("<br/>");
		$('div#canvas').append("<br/>");
// 	//})
		
 });

$('#alphabetize').click(function () {
	year.sort_by_name();
	$('div#canvas').empty();
	year.each(function (model) {
		$('div#canvas').append(new MonthView({model: model}).render().el);
 		$('div#canvas').append("<br/>");
 		$('div#canvas').append("<br/>");
 		$('div#canvas').append("<br/>");
		$('div#canvas').append("<br/>");
	});
});

})();




