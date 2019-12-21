module.exports = {
    devServer: {
      proxy: {
        '/vip': { // 当浏览器发起 以 /goods 打头的请求时, 将请求转发给 localhost:5000 服务
            target: 'https://api.juooo.com',
            changeOrigin:true
        },
        '/Schedule': { // 当浏览器发起 以 /goods 打头的请求时, 将请求转发给 localhost:5000 服务
          target: 'https://api.juooo.com',
          changeOrigin:true
        },
        '/Show': { // 当浏览器发起 以 /goods 打头的请求时, 将请求转发给 localhost:5000 服务
          target: 'https://api.juooo.com',
          changeOrigin:true
        },
        '/Card': { // 当浏览器发起 以 /goods 打头的请求时, 将请求转发给 localhost:5000 服务
          target: 'https://api.juooo.com',
          changeOrigin:true
        },        
      }
    }
  }