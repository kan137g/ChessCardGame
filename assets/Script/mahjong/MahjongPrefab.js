cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...

        content: {
            default: null,
            type: cc.Sprite
        },
        // 这张牌是否被选中
        isChoose: Boolean,
        // 是否是刚刚从桌上摸到的牌
        isDeskCard:Boolean,
        // 这张牌的名字
        cardName:String,

        // mjType:null,

    },
    // use this for initialization
    onLoad: function () {
        // this.togglePoker.node.on('toggle', this.callback, this);

    },

   
   

    // onClick: function () {
        // cc.log("点击前的Y：" + this.node.y);
        // if (this.isChoose) {
        //     this.isChoose = false;
        //     this.node.y -= 20;

        // } else {
        //     this.isChoose = true;
        //     this.node.y += 20;

        // }
        // cc.log("点击后的Y：" + this.node.y);
    // },

   

   
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },

});