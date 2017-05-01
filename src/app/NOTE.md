# 目录结构

- src 
    - app 各个模块目录
        - components 组件目录 不涉及redux，通过属性传入
            - 
        - containers 容器组件 
            通过`connect(mapStateToProps,mapDispatchToProps)(yourComponent)`连接UI组件
            - FullWidthSection
        [- redux [小型项目的话建议见aciton和reducer分成两个项目，但是大型项目的话，个人觉得还是不要分离太远，除非是一些全局的]]
        - reducers
            - 。。。
        - actions
            - 。。。。
        - constants 存放变量的映射
            - actionTypes.js  : Optional,just for avoid conflict
            - index.js : such as `actionsMap`,and `propsMap`
        - APP.js 根组件
        - main.js 入口文件
        - app.ios.js TODO:待补充



=========================================================
    - www 输出目录
        - img
    
    - utils 工具模块
        - withWidth.js 用于监听页面尺寸变化
    
    - styles 样式模块
        - index.js
        - spacing.js 间距 []
        - colors.js 颜色 [待修改自己的颜色标准]
=========================================================


# 数据模型

- BasicInfo 
    - {array}  -- 为了统一state格式
        -{object}
            - name  isRequired
            - telephone isRequired
            - email isRequired
            - blog ？
            - github ？
            - avatarUrl ？(can be a wechat QCode）
            - school
            - schoolTime {array} [from,to]
            - others TODO:

- Experience 
    - {array}
        - {object}
            - time isRequired
            - company isRequired
            - location
            - position 岗位 isRequired
            - introduction {array}

- Skill [Certificate]
    - {array}
        - {object}
            - name 软件技能，编程技能
            - masterDegree 掌握程度 {0-100}%

- SelfEvaluation 
    - {array}
        - {string}



## state 
    - visibilityFormId





## NOTE:


- `Context` Usage:
    - 父组件
        class ParentComponents extends Component {
            //...
            getChildContext(){
                return {
                    propName: propValue
                }
            }

            //...
        }
        ParentComponents.childContextTypes = {
            propName: PropTypes.[类型]
        }
    - 子组件
        class childComponent extends Component {
            // ...
            // ... 通过 this.context[propName] 获取 
        }
        childComponent.contextTypes = {
            propName: PropTypes.[类型]            
        }
