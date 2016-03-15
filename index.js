// index.js contains the main entry point for the site.
var React = require('react')
var App = require('grommet/components/App')
var Router = require('react-router')
var Route = Router.Route
var RouteHandler = Router.RouteHandler
var Index = require('./pages/Index.jsx')
var About = require('./pages/About.jsx')
var IntlMixin = require('grommet/mixins/GrommetIntlMixin')

var siteStyles = require('./assets/styles.scss')

var ico = require('./assets/favicon.ico')
require('./robots.txt')

var ATGRouter = React.createClass({
  mixins: [IntlMixin],
  render: function() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" />
          <link href={siteStyles} rel="stylesheet" />
          <link href={ico} rel="shortcut icon" />
          <meta name="description" itemprop="description"
            content="The HP ATG drives the next generation of cloud and open source solutions." />
          <meta name="keywords" itemprop="keywords"
            content="HPE, Hewlett Packard Enterprise, HP, Hewlett-Packard, ATG, Advanced Technology Group." />
          <meta itemprop="image" content="/assets/logo.png" />
        </head>
        <body>
          <App className='atg'>
          	<RouteHandler />
          </App>
        </body>
      </html>
    );
  }
});

var Routes = (
  <Route name="atg" path='/' handler={ATGRouter}>
    <Route name="home" path='/' handler={Index} />
    <Route name="about" handler={About} />
  </Route>
);

if (typeof document !== 'undefined') {
  Router.run(Routes, Router.HistoryLocation, function (Handler) {
    React.render(React.createElement(Handler), document)
  })
}

module.exports = function render (locals, callback) {
  Router.run(Routes, locals.path, function (Handler) {
    var html = React.renderToString(React.createElement(Handler, locals))
    callback(null, '<!DOCTYPE html>' + html)
  })
}
