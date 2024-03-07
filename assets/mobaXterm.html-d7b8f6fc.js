import{_ as e,p as i,q as s,Q as l,a1 as n}from"./framework-7e1a102e.js";const a={},t=n(`<h1 id="mobaxterm" tabindex="-1"><a class="header-anchor" href="#mobaxterm" aria-hidden="true">#</a> MobaXterm</h1><ul><li>pem：通用证书格式</li><li>ppk：为putty下面的专有格式 (putty 简单易用的SSH工具)</li></ul><hr><ul><li>SSH (Secure Shell) 是一种网络协议，实现两个设备之间的安全通信，通常用于访问远程服务器以及传输文件或执行命令</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>|- SSH
  |- Basic SSH settings
    |- Remote host 服务器 ip
    |- Specify username 用户名(如:root)
    |- Port 一般默认 22

  |- Advanced SSH setting
    |- Follow SSH path 让左侧文件夹显示随着右侧的命令行地址变化
    |- Use private key 使用 加密key文件 如：pem
  
  |- Bookmark settings
    |- Session name 可以修改 session 名称 以作区分

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li></li><li><p>创建session</p><ul><li><p>选择 Session</p></li><li><p>选择 SSH</p></li><li><p>输入 Remote host ； 勾选 Specify username 并输入 账号</p></li><li><p>点击 ok ；双击 创建的 session 然后输入密码 （这里会提示输入一个密码保存，可以随便设置一个，保存记住即可）</p></li><li><p>找到对应的文件夹替换文件，完成上线</p></li></ul></li></ul><hr><ol><li>给session 加上备注</li></ol><p>编辑 session 选择 Bookmark settings</p><p>修改 Session name</p><ol start="2"><li>同步命令行和Sftp的地址</li></ol><p>编辑 session 选择 Advanced SSH settings 勾选 Follow SSH path</p>`,12);function d(o,r){return i(),s("div",null,[l(`
 * @LastEditTime: 2022-08-09 10:34:19
`),t])}const c=e(a,[["render",d],["__file","mobaXterm.html.vue"]]);export{c as default};
