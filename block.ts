type TState = 'active' | 'actived'
type TColor = 'white' | 'black'
interface IBlock {
    x: number,
    y: number,
    width: number,
    height: number
}
export default class Block {
    state: TState
    color: TColor
    block: IBlock
    constructor(state: TState, color: TColor, block: IBlock) {
        this.state = state
        this.color = color
        this.block = block
        this.drop()
    }
    drop() {
        this.block.y++
        if (this.block.y + this.block.height === 1080 && this.state === 'active' && this.color === 'black') {
            //emit event of game over 
        }
    }
    changeState() {
        if (this.color === 'black') {
            this.color = 'white'
        }
    }
}