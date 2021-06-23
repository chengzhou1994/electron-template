module.exports = {
  //
  pluginOptions: {
    electronBuilder: {
      // mainProcessFile: 'src/background.js',
      // removeElectronJunk: false, // 移除Electron 有时会产生一堆垃圾输出
      // 打包参数配置
      builderOptions: {
        // appId: "vue-element-admin.com", // 包名
        // productName: "vue-element-admin", // 项目名 这也是生成的exe文件的前缀名
        // icon: "./public/icons/.ico",
        // files: ["**/*", "static/*"], // 打包的资源无法包含 build 目录
        // asar: true, //查看打包后的目录结构
        // copyright: "chengzhou", //版权  信息
        // compression: "store", // "store" | "normal"| "maximum" 打包压缩情况(store 相对较快)，store 39749kb, maximum 39186kb
        // // 构建win的选项
        // mac: {
        //   icon: "./public/icons/app.png", // 自定义图标路径，如果不指定就用electron默认图标
        //   target: ["zip", "dmg"], // 目标封装类型，默认使用niss，win平台一般也是用这个，可写可不写
        //   category: "com.catpoint-category.utilities",
        // },
        // linux: {
        //   icon: "./public/icons/app.png",
        // },
        // 构建win的选项
        win: {
          // 图标路径 windows系统中icon需要256*256的ico格式图片，更换应用图标亦在此处
          //   icon: "./public/icons/app.ico",
          target: [
            {
              // 打包成一个独立的 exe 安装程序
              target: "nsis",
              // 这个意思是打出来32 bit + 64 bit的包，但是要注意：这样打包出来的安装包体积比较大
              arch: [
                "x64",
                // 'ia32'
              ],
            },
          ],
          // target: ['zip', 'nsis']
          // arch: ['ia32', 'x64'] // Windows 环境下打出 32 位和 64 位二合一包
        },
        //  niss工具配置，niss一般用来配置安装和卸载程序的，
        nsis: {
          oneClick: false, // 一键安装
          allowElevation: true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
          allowToChangeInstallationDirectory: true, // 允许修改安装目录
          //   installerIcon: "./public/icons/app.ico", // 安装图标
          //   uninstallerIcon: "./public/icons/app.ico", //卸载图标
          //   installerHeaderIcon: "./public/icons/app.ico", // 安装时头部图标
          createDesktopShortcut: true, // 创建桌面图标
          createStartMenuShortcut: true, // 创建开始菜单图标
          shortcutName: "chengzhou", // 图标名称
        },
      },
      nodeIntegration: true,
    },
  },
};
