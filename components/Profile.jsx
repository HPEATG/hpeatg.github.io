var React = require('react')
var Gravatar = require('./Gravatar.jsx')

var Profile = React.createClass({

	render: function() {
		var twitter = null;
		if (this.props.twitter) {
			twitter = '<a href="https://twitter.com/' + this.props.twitter + '" itemprop="sameAs"><i class="fa fa-twitter fa-lg fa-2x"></i></a>'
		}

		var github = null;
		if (this.props.github) {
			github = '<a href="https://github.com/' + this.props.github + '" itemprop="sameAs"><i class="fa fa-github fa-2x"></i></a>'
		}

		var slideshare = null;
		if (this.props.slideshare) {
			slideshare = '<a href="http://www.slideshare.com/' + this.props.slideshare + '" itemprop="sameAs"><i class="fa fa-slideshare fa-2x"></i></a>'
		}

		var site = null;
		if (this.props.site) {
			site = '<a href="' + this.props.site + '" itemprop="url"><i class="fa fa-user fa-2x"></i></a>'
		}

		var linkedin = null;
		if (this.props.linkedin) {
			linkedin = '<a href="https://linkedin.com/' + this.props.linkedin + '" itemprop="sameAs"><i class="fa fa-linkedin fa-2x"></i></a>';
		}

		return(
			<div className='atg-profile' itemProp="member" itemScope itemType="http://schema.org/Person">
				<Gravatar hash={this.props.hash} size='175' />
				<div className='profile-content'>
					<h4><span itemProp="name">{this.props.name}</span> - <span itemProp="jobTitle">{this.props.title}</span></h4>
					<span itemProp="description">{this.props.description}</span>
					<div className='social-media'>
						<span dangerouslySetInnerHTML={{__html: twitter}} />
						<span dangerouslySetInnerHTML={{__html: github}} />
						<span dangerouslySetInnerHTML={{__html: slideshare}} />
						<span dangerouslySetInnerHTML={{__html: linkedin}} />
						<span dangerouslySetInnerHTML={{__html: site}} />
					</div>
				</div>
			</div>
		)
	}
})

module.exports = Profile