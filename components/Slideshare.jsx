var React = require('react')

var Slideshare = React.createClass({

	render: function() {

		var slideshare = null;
		if (this.props.slideshare) {
			slideshare = '<iframe src="https://www.slideshare.net/slideshow/embed_code/' + this.props.slideshare + '" width="340" height="290" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe>'
		}

		return(
			<div className='slidehsare'>
				<span dangerouslySetInnerHTML={{__html: slideshare}} />
			</div>
		)
	}
})

module.exports = Slideshare