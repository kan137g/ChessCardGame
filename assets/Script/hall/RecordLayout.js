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

        togglePoker:{
            default:null,
            type:cc.Toggle
        }
      
    },
    // use this for initialization
    onLoad: function () {
        // this.togglePoker.node.on('toggle', this.callback, this);
        
    },

        // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
    callback:function(event){
         //这里的 event 是一个 EventCustom 对象，你可以通过 event.detail 获取 Toggle 组件
    //    var toggle = event.detail;
    //    cc.log(toggle.node.name );
       cc.log(event.node.name);
       cc.log(event);
       
       //do whatever you want with toggle
    },

    hideSelf:function(){
        this.node.setPosition(-2000,0);
    }
});