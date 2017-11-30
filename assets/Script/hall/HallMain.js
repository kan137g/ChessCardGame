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
        recordLayout: {
            default: null,
            type: cc.Layout
        },
    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },

    clickClubButton: function () {

    },
    clickShareButton: function () {

    },
    clickMessage: function () {

    },
    clickRecordButton: function () {
        this.recordLayout.node.setPosition(0,0);
        cc.log(this.recordLayout.name);
        var Button_zb = this.node.getComponentInChildren("Button_zb");
        if (Button_zb) {
            Button_zb.setPosition(0, 0);

        } else {
            cc.log("找不到");
        }
    },

});
