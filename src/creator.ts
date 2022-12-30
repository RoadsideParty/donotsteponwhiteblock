import Game from "./game";
import Block from './block'

export default class Creator {
    static targetDom: HTMLElement
    static ctx: CanvasRenderingContext2D
    static init(targetDom: HTMLElement) {
        this.targetDom = targetDom
        this.renderUI()
    }
    static renderUI() {
        const { width, height } = this.targetDom.getBoundingClientRect()
        // create start page
        const targetDomStyle = {
            position: 'relative',
            background: 'black'
        }
        // create game page
        const canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height
        this.targetDom.appendChild(canvas)
        this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D
        this.ctx.rect(0, 0, width, height)
        this.ctx.strokeStyle = 'black'
        this.ctx.stroke()
        this.ctx.strokeText('start', 50, 50)
    }
}