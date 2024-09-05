import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props) {
        // 생성자 단계에서 props를 사용하려면 super 포함해야한다.
        super(props);
        this.state = {
            count: 0
        }
    }
    componentDidCatch() {
        // 최초 생성시 한번
        console.log("최초")
    }
    componentDidUpdate() {
        // 업데이트 될때마다 상태변수 변할 때 마다
        console.log("업데이트");
        console.log(this.state.count)
    }
    componentWillUnmount() {
        // 컴포넌트가 사라지면 삭제되면 보이지 않게 되면
        console.log("삭제")
    }
    incrementCount = () => {
        this.setState({ ...this.state, count: this.state.count + 1 })
    }
    render() {
        return (
            <div className='card'>
                <div className="title">
                    <p>{this.props.title}</p>
                </div>
                <div className="content">
                    <p>{this.props.text}</p>
                    <p>{this.props.children}</p>
                    <p>{this.state.count}</p>
                    <button onClick={this.incrementCount}>카운트 증가</button>
                </div>
            </div>
        )
    }
}
