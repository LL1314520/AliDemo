import React from 'react'
import '../../assets/css/page/homebody.scss'



export default class HomeBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {


        return <div className="body-page">
            <div className="body-box">
                <img src={"https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png"} className="img"/>
                <div className="img-opacity"/>

                <div className="mid-box">
                    <div className="float-mid">
                        <div className="float-box">
                            <div className="mid-title">If not now, when?</div>
                            <div className="mid-title">If not me, who?</div>
                            <div className="mid-china">此时此刻，非我莫属！</div>
                            <div className="input-box"/>


                            <div className="input-check">
                                <input maxLength="30" className="input" placeholder="请输入职位关键词"/>
                                <div className="search-button">搜索</div>
                            </div>
                            <div className="hot-txt">
                                <div className="hot-title">热门搜索：</div>
                                <a className="hot-detail">JAVA</a>
                                <a className="hot-detail">IOS</a>
                                <a className="hot-detail">数据</a>
                                <a className="hot-detail">安全</a>
                                <a className="hot-detail">搜索</a>
                                <a className="hot-detail">算法</a>
                                <a className="hot-detail">运营</a>
                                <a className="hot-detail">视觉</a>
                                <a className="hot-detail">交互</a>
                                <a className="hot-detail">前端</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    }
}
