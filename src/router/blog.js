const handleBlogRouter = (req,res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]

    if(method == 'GET' && path == '/api/blog/list'){
        return {
            msg:'获取博客列表的接口'
        }
    }

    if(method == 'GET' && path == '/api/blog/detail'){
        return {
            msg:'获取博客列表详情的接口'
        }
    }

    if(method == 'POST' && path == '/api/blog/new'){
        return {
            msg:'新增博客列表的接口'
        }
    }

    if(method == 'POST' && path == '/api/blog/update'){
        return {
            msg:'更新博客列表的接口'
        }
    }

    if(method == 'POST' && path == '/api/blog/del'){
        return {
            msg:'删除博客列表的接口'
        }
    }
}


module.exports = handleBlogRouter