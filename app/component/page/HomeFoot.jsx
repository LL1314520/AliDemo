import React from 'react'
import '../../assets/css/page/homefoot.scss'
import {List} from 'antd'

let scrollInterval='';
export default class HomeFoot extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            scroll:[
                {name:'蚂蚁集团-客户体验及权益保障',workPosition:'杭州',time:'1分钟前'},
                {name:'阿里集团-阿里云智能事业群',workPosition:'杭州',time:'2分钟前'},
                {name:'阿里云-基础设施事业部-网络研发事业部-网络自动化',workPosition:'杭州,北京,上海',time:'1小时前'},
                {name:'阿里集团-CPO线-人力资源部',workPosition:'杭州',time:'12分钟前'},
                {name:'口碑-市场营销中心-商家联合营销部',workPosition:'成都',time:'2分钟前'},
                {name:'蚂蚁集团-CRO线-全面风险管理部',workPosition:'杭州',time:'16分钟前'},
                {name:'支付宝事业线-中国区域营运中心-全国区域地网',workPosition:'北京',time:'2小时前'},
                {name:'阿里集团-CPO线-人力资源部',workPosition:'武汉',time:'26分钟前'},
                {name:'阿里云智能事业群-阿里云-基础设施事业部',workPosition:'深圳',time:'3小时前'},
                {name:'阿里云智能事业群-阿里云-基础设施事业部',workPosition:'深圳',time:'3小时前'},
                {name:'蚂蚁集团-客户体验及权益保障',workPosition:'杭州',time:'1分钟前'},
                {name:'阿里集团-阿里云智能事业群',workPosition:'杭州',time:'2分钟前'},
                {name:'阿里云-基础设施事业部-网络研发事业部-网络自动化',workPosition:'杭州,北京,上海',time:'1小时前'},
                {name:'阿里集团-CPO线-人力资源部',workPosition:'杭州',time:'12分钟前'},
                {name:'口碑-市场营销中心-商家联合营销部',workPosition:'成都',time:'2分钟前'},
                {name:'蚂蚁集团-CRO线-全面风险管理部',workPosition:'杭州',time:'16分钟前'},
                {name:'支付宝事业线-中国区域营运中心-全国区域地网',workPosition:'北京',time:'2小时前'},
                {name:'阿里集团-CPO线-人力资源部',workPosition:'武汉',time:'26分钟前'},
                {name:'阿里云智能事业群-阿里云-基础设施事业部',workPosition:'深圳',time:'3小时前'},
                {name:'阿里云智能事业群-阿里云-基础设施事业部',workPosition:'深圳',time:'3小时前'},
                {name:'蚂蚁集团-客户体验及权益保障',workPosition:'杭州',time:'1分钟前'},
                {name:'阿里集团-阿里云智能事业群',workPosition:'杭州',time:'2分钟前'},
                {name:'阿里云-基础设施事业部-网络研发事业部-网络自动化',workPosition:'杭州,北京,上海',time:'1小时前'},
                {name:'阿里集团-CPO线-人力资源部',workPosition:'杭州',time:'12分钟前'},
                {name:'口碑-市场营销中心-商家联合营销部',workPosition:'成都',time:'2分钟前'},
                {name:'蚂蚁集团-CRO线-全面风险管理部',workPosition:'杭州',time:'16分钟前'},
                {name:'支付宝事业线-中国区域营运中心-全国区域地网',workPosition:'北京',time:'2小时前'},
                {name:'阿里集团-CPO线-人力资源部',workPosition:'武汉',time:'26分钟前'},
                {name:'阿里云智能事业群-阿里云-基础设施事业部',workPosition:'深圳',time:'3小时前'},
                {name:'阿里云智能事业群-阿里云-基础设施事业部',workPosition:'深圳',time:'3小时前'},
                {name:'蚂蚁集团-客户体验及权益保障',workPosition:'杭州',time:'1分钟前'},
                {name:'阿里集团-阿里云智能事业群',workPosition:'杭州',time:'2分钟前'},
                {name:'阿里云-基础设施事业部-网络研发事业部-网络自动化',workPosition:'杭州,北京,上海',time:'1小时前'},
                {name:'阿里集团-CPO线-人力资源部',workPosition:'杭州',time:'12分钟前'},
                {name:'口碑-市场营销中心-商家联合营销部',workPosition:'成都',time:'2分钟前'},
                {name:'蚂蚁集团-CRO线-全面风险管理部',workPosition:'杭州',time:'16分钟前'},
                {name:'支付宝事业线-中国区域营运中心-全国区域地网',workPosition:'北京',time:'2小时前'},
                {name:'阿里集团-CPO线-人力资源部',workPosition:'武汉',time:'26分钟前'},
                {name:'阿里云智能事业群-阿里云-基础设施事业部',workPosition:'深圳',time:'3小时前'},
                {name:'阿里云智能事业群-阿里云-基础设施事业部',workPosition:'深圳',time:'3小时前'},
            ],
            listMarginTop:"0",
            animate:false,
        }
    }

    render() {

        let {scroll=[]}=this.state;

        return <div className="foot-page">
                <div className="foot-box">
                    <div className="scroll-box">
                        <div className="last-head">
                            <div className="last-title">最新职位</div>
                            <a className="last-more" >更多</a>
                        </div>
                        <div className="ul-div">
                            <List
                                itemLayout="horizontal"
                                id="scrollList"
                                className="scroll-ul"
                                dataSource={scroll}
                                renderItem={item => {
                                    let {name,workPosition,time}=item;
                                    return <List.Item className="li-work">
                                        <div className="name">{name}</div>
                                        <div className="workPosition">{workPosition}</div>
                                        <div className="time">{time}</div>
                                    </List.Item>
                                }}/>
                        </div>


                    </div>


                    <div className="show-tip">
                        <div className="top-tip">
                            <a><img className="top-img" src='https://img.alicdn.com/tfs/TB1SbxarYj1gK0jSZFOXXc7GpXa-2546-848.png'/></a>
                        </div>

                        <div className="top-tip">
                            <a><img className="bottom-img"  src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg"/></a>
                        </div>

                    </div>
                </div>
        </div>


    }
}
