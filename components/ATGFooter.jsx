var React = require('react')
var Router = require('react-router')
var Link = Router.Link
var Footer = require('grommet/components/Footer')
var Title = require('grommet/components/Title')


var ATGFooter = React.createClass({

  render: function () {
	return (
		<Footer primary={true} centered={true}>
			© 2015 Hewlett-Packard Development Company, L.P.
			-
			Built with <a href="http://grommet.io">Grommet</a>
		</Footer>
	)
  }
})

module.exports = ATGFooter