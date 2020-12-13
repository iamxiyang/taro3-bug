使用`taro init`创建项目：

? 请选择框架 React   
? 是否需要使用 TypeScript ？ Yes   
? 请选择 CSS 预处理器（Sass/Less/Stylus） Sass   
? 请选择模板源 Gitee（最快）   
✔ 拉取远程模板仓库成功！  
? 请选择模板 默认模板  

在默认存在的index页面中增加事件：
```ts
    onPageScroll() {
        console.log('onPageScroll');
    }

    onReachBottom() {
        console.log('onReachBottom');
    }
``` 
写一个高度足够的标签撑开，运行`dev:h5`，此时在浏览器中能够正常触发事件执行。

如果再新建一个页面，同时在`app.config.ts`中配置tabbar，重新访问网页tabbar显示出来了，但onPageScroll和onReachBottom事件不执行了
