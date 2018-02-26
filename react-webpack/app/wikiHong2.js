import React from 'react';
import {Prompt} from 'react-router-dom';
export default class wikiHong2 extends React.Component{
  constructor(props){
    super(props);
    this.state={
      power: false
    }
    // 绑定this
    this.changePower = this.changePower.bind(this)
  }
  changePower(){
    alert('开始启用提示效果')
    this.setState({
      power: true
    })
  }
  render () {
    return (
     <div>
       <Prompt message="是否残忍离开？" when={this.state.power}/>
       <p>wikiHong2</p>
       <button onClick={this.changePower}>启用</button>
     </div>
    )
  }
}