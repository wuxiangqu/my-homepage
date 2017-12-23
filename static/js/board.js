class Board {
  constructor (options) {
    this.commondType = {
      DRAW_LINE: 'line',
      DRAW_SEGMENT: 'segment',
      DRAW_RECT: 'rect',
      DRAW_CIRCLE: 'circle',
      ERASE: 'erase',
      CLEAR: 'clear',
      GOFORWARD: 'forword',
      GOBACK: 'back'
    }
    this.canDraw = false
    this.downPoint = null
    this.movePoint = null
    this.canvasImageData = null
    this.eraseRadius = 20
    this.araseLineWidth = 1
    this.eraseStrokeStyle = 'rgba(0,0,0,.5)'
    this.cacheDatas = []
    this.cacheIndex = -1
    this.drawType = this.commondType.DRAW_LINE
    this.canvas = options.canvas
    this.canvas.width = options.width
    this.canvas.height = options.height
    this.context = this.canvas.getContext('2d')
    this.context.lineWidth = options.lineWidth
    this.context.lineCap = options.lineCap
    this.context.lineJoin = options.lineJoin
    this.context.fillStyle = this.context.strokeStyle = options.color
    this.canFill = options.canFill
    this.bindEvent()
  }
  bindEvent () {
    this.canvas.addEventListener('mousedown', (event) => { this.mousedown(event) }, false)
    this.canvas.addEventListener('mousemove', (event) => { this.mousemove(event) }, false)
    this.canvas.addEventListener('mouseup', (event) => { this.mouseup(event) }, false)
    this.canvas.addEventListener('mouseout', (event) => { this.mouseout(event) }, false)
  }
  mousedown (event) {
    this.canDraw = true
    let p = this.windowToCanvas(event)
    this.downPoint = this.movePoint = p
    this.canvasImageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height)
  }
  mousemove (event) {
    if (!this.canDraw) { return }
    let p = this.windowToCanvas(event)
    let prevPoint = this.movePoint
    this.movePoint = p
    switch (this.drawType) {
      case this.commondType.DRAW_LINE:
        this.drawLine(prevPoint, p)
        break
      case this.commondType.DRAW_SEGMENT:
        this.drawSegment(this.downPoint, p)
        break
      case this.commondType.DRAW_RECT:
        this.drawRect(this.downPoint, p)
        break
      case this.commondType.DRAW_CIRCLE:
        this.drawCircle(this.downPoint, p)
        break
      case this.commondType.ERASE:
        this.erase()
        break
    }
  }
  mouseup (event) {
    if (this.drawType === this.commondType.ERASE) {
      this.context.putImageData(this.canvasImageData, 0, 0)
    }
    this.canDraw = false
    this.cacheDatas.push(this.context.getImageData(0, 0, this.canvas.width, this.canvas.height))
    this.cacheIndex++
  }
  mouseout (event) {
    this.canDraw = false
  }
  drawLine (p1, p2) {
    this.context.save()
    this.context.beginPath()
    this.context.moveTo(p1.x, p1.y)
    this.context.lineTo(p2.x, p2.y)
    this.context.stroke()
    this.context.restore()
  }
  drawSegment (p1, p2) {
    this.context.save()
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.context.putImageData(this.canvasImageData, 0, 0)
    this.context.beginPath()
    this.context.moveTo(p1.x, p1.y)
    this.context.lineTo(p2.x, p2.y)
    this.context.stroke()
    this.context.restore()
  }
  drawRect (p1, p2) {
    let x = p1.x < p2.x ? p1.x : p2.x
    let y = p1.y < p2.y ? p1.y : p2.y
    let rectWidth = Math.abs(p2.x - p1.x)
    let rectHeight = Math.abs(p2.y - p1.y)
    this.context.save()
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.context.putImageData(this.canvasImageData, 0, 0)
    this.context.strokeRect(x, y, rectWidth, rectHeight)
    if (this.canFill) {
      this.context.fillRect(x, y, rectWidth, rectHeight)
    }
    this.context.restore()
  }
  drawCircle (p1, p2) {
    let x = p1.x - p2.x
    let y = p1.y - p2.y
    let radius = Math.sqrt(x * x + y * y)
    this.context.save()
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.context.putImageData(this.canvasImageData, 0, 0)
    this.context.beginPath()
    this.context.arc(p1.x, p1.y, radius, 0, Math.PI * 2, false)
    this.context.stroke()
    if (this.canFill) {
      this.context.fill()
    }
    this.context.restore()
  }
  drawEraseCirle () {
    this.context.save()
    this.context.lineWidth = this.araseLineWidth
    this.context.strokeStyle = this.eraseStrokeStyle
    this.context.beginPath()
    this.context.arc(this.movePoint.x, this.movePoint.y, this.eraseRadius, Math.PI * 2, 0)
    this.context.stroke()
    this.context.restore()
  }
  erase () {
    let width = this.canvas.width
    let height = this.canvas.height
    this.context.putImageData(this.canvasImageData, 0, 0)
    this.context.save()
    this.context.strokeStyle = this.eraseStrokeStyle
    this.context.beginPath()
    this.context.arc(this.movePoint.x, this.movePoint.y, this.eraseRadius, Math.PI * 2, 0)
    this.context.clip()
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.canvasImageData = this.context.getImageData(0, 0, width, height)
    this.context.restore()
    this.drawEraseCirle()
  }
  clear () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.cacheDatas = []
    this.cacheIndex = -1
  }
  goBack () {
    if (this.cacheIndex > 0) {
      let index = --this.cacheIndex
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.context.putImageData(this.cacheDatas[index], 0, 0)
    }
  }
  goForward () {
    let len = this.cacheDatas.length
    if (this.cacheIndex < len - 1) {
      let index = ++this.cacheIndex
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.context.putImageData(this.cacheDatas[index], 0, 0)
    }
  }
  setDrawType (drawType) {
    this.drawType = drawType
  }
  setLineWidth (lineWidth) {
    this.context.lineWidth = lineWidth
  }
  setColor (color) {
    this.context.fillStyle = this.context.strokeStyle = color
  }
  setCanFill (canFill) {
    this.canFill = canFill
  }
  windowToCanvas (event) {
    let rect = this.canvas.getBoundingClientRect()
    return {
      x: event.clientX - rect.left * (this.canvas.width / rect.width),
      y: event.clientY - rect.top * (this.canvas.height / rect.height)
    }
  }
}
export {
  Board
}
