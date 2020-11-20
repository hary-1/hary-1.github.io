 function draw () {
        // 获取元素
        let box = document.getElementById('box')
        let a = document.querySelector('a')
        let arr = [
          '恭喜你中了一jio',
          '再来一次吧',
          '黑马一日游',
          '再来一次吧',
          '再来一次把',
          '傻逼还想中将去死吧',
          '恭喜你中了一jio',
          '再来一次吧',
          '黑马一日游',
          '再来一次吧',
          '再来一次把',
          '傻逼还想中将去死吧',
          '恭喜你中了一jio',
          '再来一次吧',
          '黑马一日游',
          '再来一次吧',
          '再来一次把',
          '傻逼还想中将去死吧',
          '恭喜你中了一jio',
          '再来一次吧',
          '黑马一日游',
          '再来一次吧',
          '再来一次把',
          '傻逼还想中将去死吧',
          '恭喜你中了一jio',
          '再来一次吧',
          '黑马一日游',
          '再来一次吧',
          '再来一次把',
          '傻逼还想中将去死吧',
          '恭喜你中了一jio',
          '再来一次吧',
          '黑马一日游',
          '再来一次吧',
          '再来一次把',
          '傻逼还想中将去死吧',
          '恭喜你中了一jio',
          '再来一次吧',
          '黑马一日游',
          '再来一次吧',
          '再来一次把',
          '傻逼还想中将去死吧',
          '恭喜你中了一jio',
          '再来一次吧',
          '黑马一日游',
          '再来一次吧',
          '再来一次把',
          '傻逼还想中将去死吧',
          '恭喜你中了一jio',
          '再来一次吧',
          '黑马一日游',
          '再来一次吧',
          '再来一次把',
          '傻逼还想中将去死吧',
          '恭喜你中了一jio',
          '再来一次吧',
          '黑马一日游',
          '再来一次吧',
          '再来一次把',
          '傻逼还想中将去死吧',
          '恭喜你中了一jio',
          '再来一次吧',
          '黑马一日游',
          '再来一次吧',
          '再来一次把',
          '傻逼还想中将去死吧',
          '惊喜密码"wx"'
        ]
        let index = Math.floor(Math.random() * 67)
        if (index === 66) {
          a.innerHTML = arr[index]
        } else {
          box.innerHTML = arr[index]
        }
        let canvas = document.getElementById('canvas')
        if (canvas.getContext) {
          let ctx = canvas.getContext('2d')
          // 将图片用灰色盖住
          ctx.beginPath()
          ctx.fillStyle = 'gray'
          ctx.fillRect(0, 0, 800, 300)

          // 这个方法可以使得重复的绘制地方透明化  或者说是消失
          ctx.globalCompositeOperation = 'destination-out'
          // 画笔的宽度
          ctx.lineWidth = 20
          ctx.lineCap = 'round' // 这里是表示画笔的形状
          canvas.onmousedown = function (e) {
            // 这里的目的就是为了获取鼠标在画布上的坐标
            // 用鼠标相对于浏览器的x 减去 画布的left 相对浏览器的定位  就等于 x鼠标在画布上的坐标
            let x = e.clientX - canvas.offsetLeft
            let y = e.clientY - canvas.offsetTop
            // 设置画笔的宽度
            ctx.lineWidth = 60
            // 开始绘制
            ctx.beginPath
            // 起始点
            ctx.moveTo(x, y)
            // 鼠标移动的事件
            canvas.onmousemove = function (e) {
              let x = e.clientX - canvas.offsetLeft
              let y = e.clientY - canvas.offsetTop
              ctx.lineTo(x, y)
              // 描绘描边显示出来
              ctx.stroke()
              // 最后鼠标离开的时候
              canvas.onmouseup = function () {
                canvas.onmousemove = ''
              }
            }
          }
        }
      }
      draw()