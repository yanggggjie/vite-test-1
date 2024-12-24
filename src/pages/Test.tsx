import React, { useState } from 'react'

const SwipeToPopup = () => {
  const [startX, setStartX] = useState(0) // 记录起点的 X 坐标
  const [startY, setStartY] = useState(0) // 记录起点的 Y 坐标
  const [isPopupVisible, setIsPopupVisible] = useState(false) // 控制弹窗显示状态

  // 触摸开始
  const handleTouchStart = (e) => {
    const touch = e.touches[0] // 获取第一个触摸点
    setStartX(touch.clientX) // 记录起始点 X
    setStartY(touch.clientY) // 记录起始点 Y
  }

  // 触摸结束
  const handleTouchEnd = (e) => {
    const touch = e.changedTouches[0] // 获取触摸结束点
    const endX = touch.clientX // 结束点 X
    const endY = touch.clientY // 结束点 Y

    // 计算划线的水平和垂直距离
    const deltaX = endX - startX
    const deltaY = endY - startY

    // 判断划线方向（比如判断从左向右划线且水平位移大于一定阈值，同时垂直位移较小）
    if (Math.abs(deltaX) > 50 && Math.abs(deltaY) < 30 && deltaX > 0) {
      setIsPopupVisible(true) // 显示弹窗
    }
  }

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: '#f4f4f4',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <h2>在屏幕上从左向右划线试试！</h2>

      {/* 弹窗 */}
      {isPopupVisible && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fff',
            padding: '20px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            textAlign: 'center',
            zIndex: 1000,
          }}
        >
          <h3>弹窗触发成功！</h3>
          <button
            style={{
              marginTop: '10px',
              padding: '8px 16px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            onClick={() => setIsPopupVisible(false)}
          >
            关闭
          </button>
        </div>
      )}

      {/* 背景遮罩 */}
      {isPopupVisible && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
          }}
          onClick={() => setIsPopupVisible(false)} // 点击遮罩关闭弹窗
        ></div>
      )}
    </div>
  )
}

export default SwipeToPopup
