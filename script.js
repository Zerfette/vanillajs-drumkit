window.addEventListener('keydown', onKeydown)

document.querySelectorAll('.key').forEach((key) => {
  key.addEventListener('transitionend', onTransitionEnd)
  key.addEventListener('mousedown', onMouseDown)
})

function onKeydown({ keyCode }) {
  const querySelector = (selector) =>
    document.querySelector(
      `${selector}[data-key="${keyCode}"]`
    )
  const audio = querySelector('audio')
  const key = querySelector('.key')
  if (!audio) return
  audio.currentTime = 0
  audio.play()
  key.classList.add('playing')
}

function onTransitionEnd({ propertyName }) {
  if (propertyName !== 'transform') return
  this.classList.remove('playing')
}

function onMouseDown(event) {
  const keyCode =
    event.srcElement.parentElement.getAttribute(
      'data-key'
    ) ?? event.srcElement.getAttribute('data-key')
  onKeydown({ keyCode })
}
