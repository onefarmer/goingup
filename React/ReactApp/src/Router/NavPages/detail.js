import React, { Component } from 'react';

export default class Detail extends Component{
    render(){
        return(
            <div>
                <h2>详情页</h2>
                {/* match.params.tel 传参*/}
                <p>{this.props.match.params.tel}</p>
            </div>
        )
    }
}