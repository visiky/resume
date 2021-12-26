## 🧾 My Resume

在线简历生成器。支持在线预览、编辑和 PDF 下载。✨ [在线编辑](https://visiky.github.io/resume)

内置 3 套模板，支持自定义主题颜色，生成之后，将简历信息存储在个人 github special 仓库下，然后通过 https://visiky.github.io/resume?user={user}&branch={branch} 访问即可。

| 模板                                                                  | 在线预览                                                                    |
| --------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| ![](https://gw.alipayobjects.com/zos/antfincdn/GLDkiGBSPl/moban1.svg) | [Live Demo](https://visiky.github.io/resume?user=visiky)                    |
| ![](https://gw.alipayobjects.com/zos/antfincdn/RGxVcJ2O3q/moban2.svg) | [Live Demo](https://visiky.github.io/resume?user=visiky&template=template2) |
| ![](https://gw.alipayobjects.com/zos/antfincdn/Kn2jUKcBme/moban2.svg) | [Live Demo](https://visiky.github.io/resume?user=visiky&template=template3) |

## 如何使用（How to use）

**方式 1:**

在线编辑 -> 导出配置 -> 存储“简历信息”在个人 github special 仓库下（例如: [visiky/visiky](https://github.com/visiky/visiky/blob/master/resume.json)）

**方式 2:**

直接创建一个 `resume.json` 文件在自己的 special 仓库下 (内容参考: [visiky/visiky](https://github.com/visiky/visiky/blob/master/resume.json)).

**最后**

访问 https://visiky.github.io/resume?user={user}&branch={branch}

参数说明:

| 参数   | 描述          | 默认值       |
| ------ | ------------- | ------------ |
| user   | github 用户名 | 必选         |
| branch | 分支名        | 默认: master |

## ✨ Recommendation

- [resumemaker](https://www.resumemaker.online/es.php)
- [Geek Resume - Pure Markdown, an online resume editor for developer.](https://www.jijian.press/)
