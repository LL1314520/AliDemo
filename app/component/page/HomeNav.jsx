import React from 'react'
import '../../assets/css/page/homenav.scss'


export default class HomeNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {

        return <div className="nav-page">
                <div className="top">
                    <a className="ali-logo"/>
                    <i/>
                    <div className="ow">社招官网</div>

                    <a className="txt txt-home txt-check" >首&nbsp;&nbsp;页</a>
                    <a className="last" onMouseOver={()=>{
                        console.log(888)
                    }}>社会招聘</a>
                    <a className="last">了解阿里</a>
                    <a className="last">个人中心</a>

                    <div className="login">
                        <div className="welcome">欢迎来到阿里巴巴集团招聘！</div>

                        <a className="button">登录</a>
                        <i/>
                        <a className="button">注册</a>
                    </div>

                </div>


        </div>


    }
}
