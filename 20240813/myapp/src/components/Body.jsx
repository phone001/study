import { Component } from 'react';
import Card from './card/Card'

export default class Body extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id='body'>
                {/* <Card text={1234} title={"과연"}>
                    <div>나는 자식이야</div>
                </Card>
                <Card text={5678} title={"될까?"}>
                    <div>나는 자식이야</div>
                </Card> */}
                {this.props.content.map(() => {
                    <Card></Card>
                })}
            </div>
        )
    }
}