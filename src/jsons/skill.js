const skills = {
    master: [{
        type: 'js',
        title: 'ECMAScript ( Javascript ) ',
        level: '90%',
        description: ['熟悉原生Javascript，能脱离jQuery等类库编码；了解ECMAScript新标准,并能在项目中使用；了解javascript函数式编程', '能运用模块化、面向对象的方式编程；']
    }, {
        type: 'html_css',
        title: 'HTML 和 CSS',
        level: '80%',
        description: ['能使用合理的结构和样式编写兼容主流浏览器的页面；', '熟悉已标准化的HTML5/CSS3新特性']
    }, {
        type: 'front_end_practise',
        title: '前端工程实践',
        level: '',
        description: ['了解VUE前端MVVM框架', '熟悉jQuery/jQuery UI/Bootstrap的使用和扩展', '在项目中使用过webpack,grunt,gulp等前端构建工具']
    }],
    practised:
    [{
        type: 'nodejs',
        title: 'Node.js',
        level: '50%',
        description: ['能够进行简单node服务器的开发,使用node开发过音乐播放器api', '熟悉基于Express的Web开发。', '了解异步I/O及事件驱动的服务器模型'
        ]
    }, {
        type: 'other',
        title: '其他',
        level: '',
        description: ['掌握基本的数据结构和算法', '了解基本的java语言,jsp开发', '了解基本的python知识，能够使用python进行爬虫开发']
    }]
}

export default skills;