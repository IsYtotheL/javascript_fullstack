import {Avatar,Divider} from 'antd'
import '../static/style/components/author.css'
import {GithubOutlined,QqOutlined,WechatOutlined} from '@ant-design/icons';

const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2483458138,2597836900&fm=26&gp=0.jpg"  /></div>
            <div className="author-introduction">
                人在无间心在桃源
                <Divider>社交账号</Divider>
                <Avatar size={28} className="account"><GithubOutlined /></Avatar>
                <Avatar size={28} className="account"><QqOutlined /></Avatar>
                <Avatar size={28} className="account"><WechatOutlined /></Avatar>

            </div>
        </div>
    )

}

export default Author