const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')

const serverHandle = (req,res) => {
    res.setHeader('Content-type','application/json')

    const bolgData = handleBlogRouter(req,res)

    if(bolgData){
        res.end(
            JSON.stringify(bolgData)
        )
        return ;
    }

    const userData = handleUserRouter(req,res)

    if(userData){
        res.end(
            JSON.stringify(userData)
        )
        return ;
    }

    //未命中路由，返回404
    res.writeHead(404,{"Content-type":"text/plain"})

    res.write("404 Not Found\n")

    res.end()
}


module.exports = serverHandle
