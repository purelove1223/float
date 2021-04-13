import axios from 'axios'

axios.defaults.baseURL = 'http://test.hotbeet.cn/flooat';



// 测试接口
export var api_test=params=>axios.get('/admin/test',params);

// ------------------------------登录模块--------------------------------

// 登录
export var api_Login=params=>axios.post('/admin/login',params);

// 取消登录


// ------------------------------banner模块--------------------------------

// 上传文件


// 添加banner


// 获取banner分页列表
export var api_getBanner=params=>axios.get('/admin/banner/getPageList',params);

// 启用或禁用banner


// ------------------------------活动模块--------------------------------

// 获取活动列表
export var api_actList=params=>axios.get('/admin/active/getPageList',params);

// 删除活动
export var api_actDelete=params=>axios.post('/admin/active/deleteActive',params);





