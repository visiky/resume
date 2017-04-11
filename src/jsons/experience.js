const experience = {
  title: '项目经验',
  subtitle: '源代码:https://github.com/me-momo',
  items: [{
    imgUrl: '../public/online-exam.svg',
    type: 'db_examSystem',
    title: '数据库在线考试系统',
    description: `课程设计做的在线考试系统。项目中主要负责前端界面开发及Mysql数据库设计，与两名
java程序员进行开发,使用git进行版本控制
作为小组组长,进行需求分析,网站整体架构和布局的设计，进行前端界面编写，利用ajax和
后台进行数据交互。利用bootstrap进行整体前端框架以及使用改造的easy.ui数据网格插件`
  }, {
    imgUrl: '../public/music.svg',
    type: 'music_player',
    title: '音乐播放器',
    description: `一款使用vue搭建仿造网易云音乐的音乐播放器,项目为独立开发项目，结合vuex,vueresource,
vuerouter
进行开发.使用webpack进行项目打包
仿造网易云完成项目的全部样式，可适应safari移动端;可进行歌单搜索，歌手搜索，在线
音乐播放等功能
利用nodejs搭建服务器后台,为项目提供后台数据API。整个过程的开发加深了自己对于MVVVM框架的理解。`
  }, {
    imgUrl: '../public/resume.svg',
    type: 'resume_generator',
    title: '在线简历生成器',
    description: `从一个类似JSON数据的js文件读取数据,然后生成静态网页的简历生成器,使用了webpack和react技术`,
    refLink: "https://me-momo.github.io/resume/dist/"
  }, {
    imgUrl: '../public/drink.jpg',
    type: 'fightSingleClub',
    title: '喜茶拼单小助手',
    description: "喜茶拼单小助手，一款适合大学生拼单的小助手，当收集完订单之后，通过剪切板剪切即可复制 到 校园小天使进行代购；同时还可以帮选择困难症人士选择一款饮品;基于原生js和clipboard脚本",
    refLink: "https://me-momo.github.io/fightSingleClub/index.html"
  }]
};

export default experience;
