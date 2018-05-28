// 请自行封装 ajaxGet(url) 函数，其返回值为 Promise ，其中 data 为获取的数据（内部使用 XMLHttpRequest）
// 请利用自己实现的 ajaxGet(url) 函数，实现串行（一个接一个的）发送10个请求，来获取下面 api 的前10页数据
// 请利用自己实现的 ajaxGet(url) 函数，实现并行（同时）发送10个请求，来获取下面 api 的前10页数
// GET http://api.learning.mafengshe.com/news
// 参数：pageSize：默认值 30（最大200），每一页的新闻条目数。page：默认 1，当前页码
// 例如：pageSize=30&page=1 表示获取第一页数据，每页30条数据
   
// 1.实现串行
    async function main() {
        await ajax({
            type: 'get',
            url: 'http://api.learning.mafengshe.com/news?pageSize=10&page=1',
            success: function(data){
                console.log(data)
            }
        });
        await ajax({
            type: 'get',
            url: 'http://api.learning.mafengshe.com/news?pageSize=10&page=1',
            success: function(data){
                console.log(data)
            }
        });
        await ajax({
            type: 'get',
            url: 'http://api.learning.mafengshe.com/news?pageSize=10&page=1',
            success: function(data){
                console.log(data)
            }
        });
        await ajax({
            type: 'get',
            url: 'http://api.learning.mafengshe.com/news?pageSize=10&page=1',
            success: function(data){
                console.log(data)
            }
        });
        await ajax({
            type: 'get',
            url: 'http://api.learning.mafengshe.com/news?pageSize=10&page=1',
            success: function(data){
                console.log(data)
            }
        });
        await ajax({
            type: 'get',
            url: 'http://api.learning.mafengshe.com/news?pageSize=10&page=1',
            success: function(data){
                console.log(data)
            }
        });
        await ajax({
            type: 'get',
            url: 'http://api.learning.mafengshe.com/news?pageSize=10&page=1',
            success: function(data){
                console.log(data)
            }
        });
        await ajax({
            type: 'get',
            url: 'http://api.learning.mafengshe.com/news?pageSize=10&page=1',
            success: function(data){
                console.log(data)
            }
        });
        await ajax({
            type: 'get',
            url: 'http://api.learning.mafengshe.com/news?pageSize=10&page=1',
            success: function(data){
                console.log(data)
            }
        });
        await ajax({
            type: 'get',
            url: 'http://api.learning.mafengshe.com/news?pageSize=10&page=1',
            success: function(data){
                console.log(data)
            }
        });
    }
    main ()

    // 2.要实现同时加载的话，将async和await删除即可
    