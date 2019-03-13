import React, { Component } from 'react';

export default class Message extends Component{
    constructor(){
        super();
        this.state = {
            comments:[
                {
                    author:"王宝强",
                    time:new Date().getTime(),
                    comment:"这是一个很好的电影"                    
                }
            ]
        }
        this.addComment = this.addComment.bind(this)
    }
    // 添加内容
    addComment(){
        let commentObj = {              
            author:this.refs.author.value,
            time:new Date().getTime(),
            comment:this.refs.comment.value                                                  
        }
        this.state.comments.push(commentObj);
        this.setState({
            comments:this.state.comments
        })
    }
    // 计算时间
    formatTime(timestamp){
        let minutes = (new Date() - timestamp)/1000/60;
        minutes = Math.floor(minutes);
        if( minutes < 1){
            return "刚刚"
        }
        else{
            return minutes + '分钟前'
        }
    }
    render(){
        return(
            <div className = "msg">
                <div className = "comments"></div>
                {
                    this.state.comments.map((item,index)=>{
                        return(
                            <div key={item.time}>
                                <span>主演：{item.author}</span><br/>
                                <span>发表时间：{this.formatTime(item.time)}</span>
                                <p>评论：{item.comment}</p>
                            </div>
                        )
                    })
                }
                作者：<input type="text" ref="author"/><br/>
                留言：<textarea ref="comment"/><br/>
                <button onClick = {this.addComment}>发表留言</button>
            </div>
        )
    }
}