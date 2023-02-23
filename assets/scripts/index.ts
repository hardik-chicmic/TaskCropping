import { _decorator, Component, Node, UITransform, Sprite, SpriteFrame, Vec3, Input } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('index')
export class index extends Component {

    @property({type: Node})
    square: Node= null;

    @property({type: Node})
    rectangle: Node = null;

    @property(Node)
    get frame(){
        return this.rectangle
    }
    set frame(value: Node){
        this.rectangle = value;
        this.fit();
    }

    @property({type: Node})
    content: Node = null;
    

    onLoad(){
        this.content.getChildByName("Crop").on(Input.EventType.MOUSE_DOWN, this.fun)
        this.content.getChildByName("WCrop").on(Input.EventType.MOUSE_DOWN, this.fun1)
    }

    fit = () => {
        let squareWidth = this.square.getComponent(UITransform).width;
        let rectangleWidth = this.rectangle.getComponent(UITransform).width;

        let squareHeight = this.square.getComponent(UITransform).height;
        let rectangleHeight = this.rectangle.getComponent(UITransform).height;

        let ratio1 = rectangleHeight/squareHeight;
        this.square.setScale(ratio1, ratio1)
    }


    start() {

    }

    update(deltaTime: number) {
        
    }
}

