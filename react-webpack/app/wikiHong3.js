import React from 'react';
export default class wikiHong3 extends React.Component{
  componentWillMount(){
    console.log(this.props)
  }
  render () {
    return (
     <div>wikiHong3,参数{this.props.match.params.aaa}</div>
    )
  }
}