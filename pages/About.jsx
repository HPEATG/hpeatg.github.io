
var React = require('react')
var ATGHeader = require('../components/ATGHeader.jsx')
var ATGFooter = require('../components/ATGFooter.jsx')
var Section = require('grommet/components/Section')
var Tiles = require('grommet/components/Tiles')
var Tile = require('grommet/components/Tile')
var Header = require('grommet/components/Header')
var ATGDocument = require('../components/ATGDocument.jsx')
var Profile = require('../components/Profile.jsx')

var Index = React.createClass({
	render: function () {
		return (
			<ATGDocument className="home" full={true}>
				<ATGHeader />

				<Section>
					<h2>The Team</h2>

					<Profile hash='c3828485c6efb73f2dac777aeb791e8d'
						name='Brian Aker'
						title='Fellow'
						description="Brian Aker, an HPE Fellow, is the leader of the ATG. He's known for his
								work in cloud computing, MySQL, Memcached, Gearman, Drizzle, and more. He's
								given keynote speeches at OSCON, DrupalCon, and the International PHP Conference,
								among others."
						twitter='brianaker'
						linkedin='in/brianaker'
						slideshare='brianaker'
						site='http://krow.net/'
						github='BrianAker' />

					<Profile hash='ec387af7b6816cdbfdffb59832dc9e0e'
						name='Clare Springer'
						title='Project Manager / Chief of Staff'
						github='yidclare'
						twitter='idclare'
						site='http://open-dialogue.ghost.io/'
						linkedin='in/clarissaspringer'
						description="As the project manager, Clare wrangles and coordinates the projects the
								ATG works on. With years of experience straddling the line between developers
								and end users she's able to translate incredibly technical topics to managers
								and customers. Clare is a certified scrum master." />

					<Profile hash='90fa101061d9dd86d737afe6c8de0911'
						name='Eric Gustafson'
						title='Principal Engineer'
						github='egustafson'
						twitter='elfwerks'
						slideshare='egg9'
						site='http://egustafson.github.io/'
						linkedin='in/ericggustafson'
						description="Having built applications running in the cloud and built cloud systems,
								Eric has a mass amount of experience with cloud. He's lead the development of
								HP Cloud monitoring, designed and implemented the back-end stack for HP Music,
								and more. These days Eric is interested in monitoring and networking." />

					<Profile hash='63d88121ae5087f0630c3d18efba83ef'
						name='Matt Farina'
						title='Principal Engineer'
						twitter='mattfarina'
						github='mattfarina'
						slideshare='mattfarina'
						site='http://mattfarina.com'
						linkedin='in/matthewfarina'
						description="Learning to write software at the young age of 10, Matt has decades of
								experience developing applications. He's a published author, has spoken at and
								coordinated conferences, and regularly contributes to open source. He's
								currently interested in cloud application development and automation." />

					<Profile hash='d76feb013eb4df994f903c9019145eab'
						name='Patrick Galbraith'
						title='Principal Engineer'
						slideshare='PatrickGalbraith'
						github='CaptTofu'
						twitter='CaptTofu'
						site='http://patg.net/'
						linkedin='patrick-galbraith/0/50b/881'
						description="Software as a service is a staple of the cloud and Patrick has developed
								numerous examples including databases, load balancing, DNS, and others. He's
								a speaker, author, and longtime open source contributor. Patrick is currently
								interested in the next generation of cloud platforms using containers." />

					<Profile hash='b684adde85ce381ebaf7b99858f303e1'
						name='Yazz Atlas'
						title='Principal Engineer'
						github='EntropyWorks'
						twitter='EntropyWorks'
						slideshare='yazzatlas'
						site='http://askyazz.com/'
						linkedin='in/yazzatlas'
						description="Yazz bring the DevOps element to the ATG. He has years of experience managing
								infrastructure, leveraging automation, and making the
								the underpinnings of the cloud work. Yazz is currently working on the layer where
								hardware meets the cloud to enable the next generation of computing." />

					<br /><br />
				</Section>
				<ATGFooter />
			</ATGDocument>
		)
	}
})

module.exports = Index
