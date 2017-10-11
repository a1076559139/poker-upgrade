cc.Class({
    extends: cc.Component,

    properties: {
        btn: cc.Node,
        bg: cc.Node
    },

    // use this for initialization
    onLoad: function () {
        cc.log(this.btn.zIndex);
        setTimeout(function () {
            this.btn.zIndex = 100;
        }.bind(this), 1000);
        setTimeout(function () {
            this.btn.zIndex = 0;
            this.btn.active = false;
        }.bind(this), 2000);
        setTimeout(function () {
            this.btn.active = true;
        }.bind(this), 2100);
        this.btn.on('click', function () {
            cc.log('click');
        });
        this.btn.on('touchstart', function (e) {
            e.stopPropagation();
            cc.log('11');
        });
        this.btn.on('touchmove', function (e) {
            e.stopPropagation();
            cc.log('22');
        });
        this.btn.on('touchend', function (e) {
            e.stopPropagation();
            cc.log('33');
        });
        this.btn.on('touchcancel', function (e) {
            e.stopPropagation();
            cc.log('44');
        });

        this.bg.on('touchstart', function (e) {
            e.stopPropagation();
            cc.log('1');
        });
        this.bg.on('touchmove', function (e) {
            e.stopPropagation();
            cc.log('2');
        });
        this.bg.on('touchend', function (e) {
            e.stopPropagation();
            cc.log('3');
        });
        this.bg.on('touchcancel', function (e) {
            e.stopPropagation();
            cc.log('4');
        });
    }
});
