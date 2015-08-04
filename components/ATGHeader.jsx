
var React = require('react')
var Router = require('react-router')
var Link = Router.Link
var Header = require('grommet/components/Header')
var Title = require('grommet/components/Title')
var Menu = require('grommet/components/Menu')

require('../assets/hp-logo-print.png')

var ATGHeader = React.createClass({

  render: function () {
	return (
		<Header primary={true} fixed={false} float={false} large={true} flush={false}>
			<div itemProp='name' className='atg-wrapper'>
				<span className="logo">HP </span>
				<Title>
					<Link to="home">
						Advanced Technology Group
					</Link>
				</Title>
			</div>
			<Menu direction='right'>
				<Link to='home'>Work</Link>
          		<Link to='about'>Team</Link>
			</Menu>
		</Header>
	)
  }
})

module.exports = ATGHeader