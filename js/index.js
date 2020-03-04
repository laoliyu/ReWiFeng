var imgUrl = 'https://a.sx.rewifeng.net/logo.png';
var lineLink = 'https://a.sx.rewifeng.net/%E6%9D%BE%E5%B2%97%E5%BE%AE%E5%8A%9E%E4%BA%8B/index.html';
var descContent = '港澳通行证、居住证办理，社保公积金、ETC办理、交通违章缴费、学位申请，水电民生等业务，尽在松岗微生活';
var shareTitle = '松岗微办事';
var appid = '';

$.ajax({
    type: 'POST',
    url: "https://wx7.gongsilu.com/shixi/jsSDKConfig/api.php", //这个地址并非通用且长期有效，请去微信官方查看文档，并自行配置
    dataType: "json",
    data: { url: window.location.href },
    success: function (response) {
        var appId = response.appId;
        var timestamp = response.timestamp;
        var nonceStr = response.nonceStr;
        var signature = response.signature;

        wx.config({
            debug: false,
            appId: 'wxb1fc236279647c7e',
            timestamp: timestamp,
            nonceStr: nonceStr,
            signature: signature,
            jsApiList: [
                'checkJsApi',
                'onMenuShareTimeline',
                'onMenuShareAppMessage'
            ]
        });
        wx.ready(function () {

            wx.onMenuShareTimeline({
                title: shareTitle, // 分享标题
                link: lineLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: imgUrl, // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
            wx.onMenuShareAppMessage({
                title: shareTitle, // 分享标题
                desc: descContent, // 分享描述
                link: lineLink, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: imgUrl, // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function () {
                    // 用户确认分享后执行的回调函数

                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
        });
    },
    error: function (response) {
        window.parent.growl("删除失败[" + response.responseText + "]!", "error");
    }
});