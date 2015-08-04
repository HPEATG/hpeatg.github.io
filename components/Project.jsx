var React = require('react')

var Project = React.createClass({

  render: function() {

    return(
      <div className='atg-project'>
        <h3>{this.props.title}</h3>
        <div dangerouslySetInnerHTML={{__html: this.props.description}}>
        </div>
      </div>
    )
  }
})

module.exports = Project