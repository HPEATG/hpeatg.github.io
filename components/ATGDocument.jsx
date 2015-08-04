var React = require('react')
var GrommetDocument = require('grommet/components/Document');

var ATGDocument = React.createClass({

  render: function () {
	return (
		<div itemScope itemType="http://schema.org/Organization">
			<GrommetDocument className="home" full={true}>
				{this.props.children}
			</GrommetDocument>
		</div>
	)
  }
})

module.exports = ATGDocument