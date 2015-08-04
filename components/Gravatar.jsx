// This is based on react-gravatar. This difference is

var React = require('react')
var querystring = require('querystring')
var isRetina = require('is-retina')

var Gravatar = React.createClass({
	displayName: 'Gravatar',

	propTypes: {
		email: React.PropTypes.string.isRequired,
		size: React.PropTypes.number,
		rating: React.PropTypes.string,
		default: React.PropTypes.string,
		className: React.PropTypes.string,
	},

	getDefaultProps: function() {
		return {
			size: 50,
			rating: 'g',
			default: "retro",
			className: "",
		}
	},

	render: function() {
		var base = "https://secure.gravatar.com/avatar/";

		var query = querystring.stringify({
			s: isRetina() ? this.props.size * 2 : this.props.size,
			r: this.props.rating,
			d: this.props.default,
		});

		var src = base + this.props.hash + "?" + query;

		return(
			<img itemProp="image"
				{...this.props}
				className={"react-gravatar " + this.props.className}
				src={src}
				height={this.props.size}
				width={this.props.size} />
		)
	}
})

module.exports = Gravatar