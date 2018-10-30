export function getEntryUrl0(name) {
    // 判断当前的环境，适配web端
    if (weex.config.env.platform === "Web") {
        return './' + name + '.html'
    } else {
        let arr = weex.config.bundleUrl.split('/');
        arr.pop();//数组末尾移除最后一项
        arr.push(name + '.js');//可以接收任意数量的参数,把它们逐个添加到数组末尾
        return arr.join('/');//将数组的元素组起一个字符串，以separator为分隔符
    }
}


export function getEntryUrl(name, params) {
    if(!params){
        params = ''
    }else{
        if(params.indexOf("?") == -1){
            params = '?' + params
        }
    }
    // 判断当前的环境，适配web端
    if (weex.config.env.platform === "Web") {
        return './' + name + '.html' + params
    } else {
        let arr = weex.config.bundleUrl.split('/');
        arr.pop();//数组末尾移除最后一项
        arr.push(name + '.js' + params);//可以接收任意数量的参数,把它们逐个添加到数组末尾
        return arr.join('/');//将数组的元素组起一个字符串，以separator为分隔符
    }
}