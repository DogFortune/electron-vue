module.exports = {
    pluginOptions: {
      electronBuilder: {
        builderOptions: {
          productName: "my-application",
          appId: "com.sample.myapplication",
          win: {
            target: [
              {
                target: 'portable', // 'zip', 'nsis', 'portable'
                arch: ['x64'] // 'x64', 'ia32'
              }
            ]
          }
        }
      }
    }
  }