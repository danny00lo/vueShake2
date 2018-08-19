export const config = {
    transformRequest: [function (data) {
        // Do whatever you want to transform the data
        let ret = ''
        for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
    }],
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    timeout: 50000,
    responseType: 'json'
};

export const config2 = {
    transformRequest: [function (data) {
        // Do whatever you want to transform the data
        let ret = ''
        for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
    }],
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    timeout: 50000,
    responseType: 'json'
};

// export const axiosUrl = 'https://www.unlimitedfun.com.cn/';  // 发布环境
// export const axiosUrl = 'https://platform.haiguime.com/'; // 测试

export const axiosUrl = window.location.protocol + "//" + window.location.host + "/"; // 测试环境+正式环境 

// 定义网络类型
export const ENUM = {
    ERROR_CODE: {
        OK: 200 // 正常
        // "UNKNOWN_ERROR": 10000, // 内部错误
        // "TOKEN_INVALID": 10001, // Token 无效
        // "TOKEN_EXPIRED": 10002, // Token 过期
        // "SIGN_INVALID": 10003, // Sign 无效
        // "SIGN_EXPIRED": 10004, // Sign 过期
    }
};