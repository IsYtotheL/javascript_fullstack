import React,{useState,useEffect} from 'react'
import marked from 'marked'
import '../static/css/AddArticle.css'
import {Row,Col,Input,Select,Button,DatePicker,message} from 'antd'
import axios from 'axios'
import servicePath from '../config/apiUrl'
// import {OmitProps} from 'antd/'
const {Option} = Select
const {TextArea}= Input
function AddArticle(props) {
  const [articleId,setArticleId] = useState(0)  // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
  const [articleTitle,setArticleTitle] = useState('')   //文章标题
  const [articleContent , setArticleContent] = useState('')  //markdown的编辑内容
  const [markdownContent, setMarkdownContent] = useState('预览内容') //html内容
  const [introducemd,setIntroducemd] = useState()            //简介的markdown内容
  const [introducehtml,setIntroducehtml] = useState('等待编辑') //简介的html内容
  const [showDate,setShowDate] = useState()   //发布日期
  const [updateDate,setUpdateDate] = useState() //修改日志的日期
  const [typeInfo ,setTypeInfo] = useState([]) // 文章类别信息
  const [selectedType,setSelectType] = useState('请选择文章类型') //选择的文章类别

  useEffect(()=>{
    getTypeIfon()
    let tmpId = props.match.params.id
    if(tmpId){
      setArticleId(tmpId)
      getArticleById(tmpId)
    }
  },[])
  marked.setOptions({
    renderer: marked.Renderer(),
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
  }); 
  const changeContent = (e) => {
    setArticleContent(e.target.value)
    let html = marked(e.target.value)
    setMarkdownContent(html)
  }
  const changeIntroduce = (e) => {
    setIntroducemd(e.target.value)
    let html = marked(e.target.value)
    setIntroducehtml(html)
  }

  const getTypeIfon = () => {
    axios({
      method:'get',
      url:servicePath.getTypeInfo,
      withCredentials:true
    }).then(
      res=>{
        if(res.data.data=='没有登录'){
          localStorage.removeItem('openId')
          console.log(res.data.data)
          props.history.push('/')
        }else{
          console.log(res.data.data)
          setTypeInfo(res.data.data)
        }
      }
    )
  }

  const selectTypeHandler =(value)=>{
    setSelectType(value)
  }

  const saveArticle = ()=>{

    // markedContent()  //先进行转换


    if(!selectedType){
        message.error('必须选择文章类别')
        return false
    }else if(!articleTitle){
        message.error('文章名称不能为空')
        return false
    }else if(!articleContent){
        message.error('文章内容不能为空')
        return false
    }else if(!introducemd){
        message.error('简介不能为空')
        return false
    }else if(!showDate){
        message.error('发布日期不能为空')
        return false
    }

    let dataProps={}   //传递到接口的参数
    dataProps.type_id = selectedType 
    dataProps.title = articleTitle
    dataProps.article_content =articleContent
    dataProps.introduce =introducemd
    let datetext= showDate.replace('-','/') //把字符串转换成时间戳
    dataProps.addTime =(new Date(datetext).getTime())/1000


    if(articleId==0){
        console.log('articleId=:'+articleId)
        dataProps.view_count =Math.ceil(Math.random()*100)+1000
        axios({
            method:'post',
            url:servicePath.addArticle,
            data:dataProps,
            withCredentials: true
        }).then(
            res=>{
                setArticleId(res.data.insertId)
                if(res.data.isScuccess){
                    message.success('文章保存成功')
                }else{
                    message.error('文章保存失败');
                }

            }
        )
    }else{

      dataProps.id = articleId 
      axios({
          method:'post',
          url:servicePath.updateArticle,
          header:{ 'Access-Control-Allow-Origin':'*' },
          data:dataProps,
          withCredentials: true
      }).then(
          res=>{
  
          if(res.data.isSuccess){
              message.success('文章添加成功')
          }else{
              message.error('添加失败');
          }
  
  
          }
      )
  }
  


 } 

const getArticleById=(id)=>{
  axios(servicePath.getArticleById+id,{
    withCredentials:true
  }).then(
    res=>{
      let articleInfo = res.data.data[0]
      setArticleTitle(articleInfo.title)
      setArticleContent(articleInfo.article_content)
      let html = marked(articleInfo.article_content)
      setMarkdownContent(html)
      setIntroducemd(articleInfo.introduce)
      let tmpInt = marked(articleInfo.introduce)
      setIntroducehtml(tmpInt)
      setShowDate(articleInfo.addTime)
      setSelectType(articleInfo.typeId)

    }
  )
}
  return(
    <div>
      <Row gutter={5}>
    <Col span={18}>
            <Row gutter={10} >
                <Col span={20}>
                    <Input 
                          value={articleTitle}
                          placeholder="博客标题" 
                          onChange={e=>{setArticleTitle(e.target.value)}}
                          size="large" 
                          
                          />
                </Col>
                <Col span={4}>
                    &nbsp;
                    <Select defaultValue={selectedType} size="large" onChange={selectTypeHandler}>
                        {/* <Option value="Sign Up">视频教程</Option> */}
                        {
                          typeInfo.map((item,index)=>{
                            return(<Option key={index} value={item.Id}>{item.typeName}</Option>)
                          })
                        }
                    </Select>
                </Col>
            </Row>
            <br/>
            <Row gutter={10} >
                <Col span={12}>
                    <TextArea 
                        className="markdown-content" 
                        rows={35}  
                        placeholder="文章内容"
                        value={articleContent}
                        onChange={changeContent}
                        />
                </Col>
                <Col span={12}>
                    <div 
                        className="show-html"
                        dangerouslySetInnerHTML={{__html:markdownContent}}>
                    </div>

                </Col>
            </Row>  

    </Col>

    <Col span={6}>
  <Row>
      <Col span={24}>
              <Button  size="large">暂存文章</Button>&nbsp;
              <Button type="primary" size="large" onClick={saveArticle}>发布文章</Button>
              <br/>
      </Col>
      <Col span={24}>
    <br/>
    <TextArea 
        rows={4} 
        placeholder="文章简介"
        value={introducemd}
        onChange={changeIntroduce}
    />
    <br/><br/>
    <div  className="introduce-html"
    dangerouslySetInnerHTML={{__html:introducehtml}}></div>
</Col>
<Col span={12}>
    <div className="date-select">
        <DatePicker
            onChange={(date,dateString)=>setShowDate(dateString)} 
            placeholder="发布日期"
            size="large"  
        />
      </div>
</Col>

  </Row>
</Col>

</Row>

    </div>
  )
}
export default AddArticle