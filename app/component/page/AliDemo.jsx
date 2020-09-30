import React from 'react'
import '../../assets/css/page/alidemo.scss'
import U from "../../common/U";
import {App, CTYPE} from "../../common";
import HomeBody from './HomeBody';
import HomeNav from './HomeNav';
import HomeFoot from './HomeFoot';


export default class AliDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        U.setWXTitle('首页');
    }



    render() {

        return <div className="ali-page">
            <HomeNav/>
            <HomeBody/>
            <HomeFoot/>
        </div>


    }
}
