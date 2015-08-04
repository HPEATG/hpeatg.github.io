
var React = require('react')
var ATGHeader = require('../components/ATGHeader.jsx')
var ATGFooter = require('../components/ATGFooter.jsx')
var Section = require('grommet/components/Section')
var Tiles = require('grommet/components/Tiles')
var Tile = require('grommet/components/Tile')
var Header = require('grommet/components/Header')
var ATGDocument = require('../components/ATGDocument.jsx')
var Slideshare = require('../components/Slideshare.jsx')
var Project = require('../components/Project.jsx')

var Index = React.createClass({
	render: function () {
		return (
			<ATGDocument className="home" full={true}>
				<ATGHeader />

				<Section className="atg-mission">
					<div itemProp="description">HP's ATG for Open Source and Cloud embraces a vision two steps ahead of today's solutions.
					We use this vision to drive product adoption and incubate technolgies. Through Open Source
					initiatives we foster collaboration across HP and beyond.</div>
				</Section>

				<Section align='center' className='atg-projects'>
					<h2>Projects</h2>
					<div className="atg-projects-subtitle">
						Some of the projects we work on are open source and we can talk about them. The following is a list containing some of these
						projects. Note that with most projects there are correlating ideas being fleshed out. 
					</div>
					
					<Project
						title='Debian Docker Host'
						description="When applications are being run in Docker containers the dependencies for the container are managed
						via Docker images or a Dockerfile. The Docker host, running the containers, doesn't need to have all possible
						dependences locally. Rather, it only needs the minimum requirements of the host. We developed a minimal host install,
						via Ansible, to <a href='https://github.com/hpatg/decore'>setup etcd, docker, fleet, and other elements needed
						in a Docker host on Debian</a>." />

					<Project
						title='IPv6 Tunneling over IPv4 Networks'
						description="IPv6 is a solution for numerous networking issues. As networks migrate from IPv4 to IPv6 there is still
						significant use of IPv4. Most notably with the global web. If we're, for example, attempting to use IPv6 for networking
						within our Docker cluster we may want those containers to interact with IPv4 networks. 
						<a href='https://egustafson.github.io/ipv6-tunneling.html'>We explored ways to bridge these protocols</a>." />

					<Project
						title='Ansible Switch Drivers'
						description="Ansible, typically used to automate servers and applications, can be used to automate other computing
						systems as well. One example is the network switches enabling communication between servers. To enable configuration of
						switches we wrote software enabling Ansible to configure <a href='https://github.com/search?q=user%3ACaptTofu+pro_vision_'>HP
						ProVision</a> and <a href='https://github.com/search?q=user%3ACaptTofu+comware_5_2'>HP Comware</a> switches." />

					<Project
						title='Non-blocking C API for MySQL'
						description="Most of the libraries that allow you to communicate with MySQL block waiting on a response.
						<a href='http://libattachsql.org'>libAttachSQL</a>, which came out of the ATG, is a lightweight non-blocking C API.
						Its functionality can be exposed to other languages as well. One example, under development,
						is <a href='https://github.com/libattachsql/pyattachsql'>pyattachsql</a> that exposes the non-blocking functionality to python." />

					<Project
						title='Live Kernel Patching'
						description="Ever consider patching the Linux kernel without restarting it? When you're operating a large cloud
						there are times you have a large number of machines that need to be updated and you may want to do so without
						taking them offline. We <a href='http://thelinuxjedi.blogspot.co.uk/2014/03/live-kernel-patching.html'>reviewed
						the options for live updates</a>, produced a <a href='http://thelinuxjedi.blogspot.co.uk/2014/06/live-kernel-patching-video-demo.html'>
						demo</a>, and <a href='http://linuxjedi.co.uk/posts/2015/Feb/14/live-kernel-patching-why-you-should-not-use-it/'>came
						to some practical conclusions</a>." />

				</Section>

				<Section align='center'>
					<h2>Presentations</h2>

					<Tiles flush={true}>
						<Tile>
							<Slideshare slideshare='48196181' />
						</Tile>
						<Tile>
							<Slideshare slideshare='34909080' />
						</Tile>
						<Tile>
							<Slideshare slideshare='47879394' />
						</Tile>
					</Tiles>
				</Section>
				<ATGFooter />
			</ATGDocument>
		)
	}
})

module.exports = Index