import { useRef } from "react"

interface ButtonProps {
  text: string,
  type?: "button" | "reset" | "submit"
}

function Button ({ text, type = "submit" }: ButtonProps) {
  const buttonRef = useRef(null)
  const rippleRef = useRef(null)

  function clickHandler (e: any) {
    const btn: HTMLButtonElement = buttonRef.current!
    const rect = btn.getBoundingClientRect()
    const {left, top} = rect
    const x = e.clientX - left
    const y = e.clientY - top

    const ripple: HTMLSpanElement = rippleRef.current!
    ripple.style.left = x + 'px'
    ripple.style.top = y + 'px'

    ripple.classList.add('active')

    setTimeout(() => {
      ripple.classList.remove('active')
    }, 400)
  }

  return (
    <button 
      ref={buttonRef}
      onClick={clickHandler}
      className="relative max-w-[320px] w-full py-3 mx-auto mb-3 rounded-lg bg-[#4880FF] text-white text-xl font-semibold flex justify-center items-center overflow-hidden" 
      type={type}
    >
      { text }
      <span ref={rippleRef} className="ripple"></span>
    </button>
  )
}

export default Button
