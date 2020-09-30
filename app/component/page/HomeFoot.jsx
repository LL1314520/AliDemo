import React from 'react'
import '../../assets/css/page/homefoot.scss'



export default class HomeFoot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
        });
    }



    render() {


        return <div className="foot-page">
                <div className="foot-box">
                    <div className="scroll-box"></div>
                    <div className="show-tip"></div>
                </div>
        </div>


    }
}
