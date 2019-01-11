import React, { Component } from 'react';

import './index.less';

class Nav extends Component {
  constructor(props){
    super(props)
    this.state={
      ulData:[
        {
          id:1,
          name:'首頁'
        },
        {
          id:2,
          name:'name1'
        },
        {
          id:3,
          name:'name2'
        }
      ]
    }
  }
  handleClick(item, index, e){
    console.log(item,index,e)
  }
  render() {
    const {ulData} = this.state
    return (
      <div className="nav">
        <ul className="ulNav">
          {
            ulData.map((item,index)=>{
              return (<li onClick={e=>this.handleClick(item,index,e)} key={index}>{item.name}</li>)
            })
          }
          </ul>
      </div>
    );
  }
}

export default Nav;
