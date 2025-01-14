import { reactive, ref } from 'vue';

/**
 * 根据路径数组生成轨迹动画
 * @param {HTMLElement} element - 要进行动画的元素
 * @param {Array} paths - 路径数组，每个元素包含 x, y 和 duration
 */
export function createPathAnimation(element: any, paths: any[]) {
  const rect = meta2d.getPenRect(element);

  let originalX = rect.x;
  let originalY = rect.y;

  let startTime: number | null = 0;
  let currentPathIndex = 0;
  let startX = originalX;
  let startY = originalY;

  let animationFrameId: number | null = null;
  let isPaused = ref(false);
  let isStopped = ref(false);

  
  function animatePath(timestamp) {
    if (isStopped.value) {
      cancelAnimationFrame(animationFrameId);
      return;
    }

    if (isPaused.value) {
      startTime += timestamp - (startTime + (timestamp - startTime));
      // startTime = timestamp;
      animationFrameId = requestAnimationFrame(animatePath);
      const rect = meta2d.getPenRect(element);
      startX = rect.x;
      startY = rect.y;
      // console.log('pause ------------------- : ', startTime, timestamp);
      return;
    }

    if (!startTime) startTime = timestamp;
    const elapsed = (timestamp - startTime);
    const path = paths[currentPathIndex];
    
    const progress = Math.min(elapsed / path.duration, 1);
    // console.log('animatePath ------------------- : ', startTime, timestamp, progress);
    const currentX = startX + (path.x || 0) * progress;
    const currentY = startY + (path.y || 0) * progress;

    meta2d.setValue({
      id: element.id,
      x: currentX,
      y: currentY,
    });

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(animatePath);
    } else {
      // Path animation completed, move to the next path
      currentPathIndex++;
      if (currentPathIndex < paths.length) {
        startX = currentX;
        startY = currentY;
        startTime = null;
        animationFrameId = requestAnimationFrame(animatePath);
      } else {
        stop();
      }
    }
  }

  function play() {
    isPaused.value = false;
    isStopped.value = false;
    startTime = null;
    currentPathIndex = 0;
    animationFrameId = requestAnimationFrame(animatePath);
  }

  function pause() {
    isPaused.value = true;
  }

  // TODO: 存在 bug，暂停后，再播放，轨迹进度貌似从 0 开始，导致位置移动超出
  function resume() {
    if (isPaused.value) {
      isPaused.value = false;
      startTime = null;
      // console.log(
      //   'resume ------------------- ',
      //   startX,
      //   startY
      // );
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = requestAnimationFrame(animatePath);
    }
  }

  function stop() {
    isStopped.value = true;
    startX = originalX;
    startY = originalY;

    meta2d.setValue({
      id: element.id,
      x: originalX,
      y: originalY,
    });
  }

  return { play, pause, resume, stop, isPaused, isStopped };
}
