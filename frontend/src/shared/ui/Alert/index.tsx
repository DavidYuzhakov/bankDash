import successImg from '../../assets/icons/success.svg'
import errorImg from "../../assets/icons/error.svg"

interface AlertProps {
  text: string
  type?: 'success' | 'error'
  visible: boolean
}

function Alert({ type = 'success', text, visible = false }: AlertProps) {
  return (
    <div
      className={` absolute top-2 left-1/2 -translate-x-1/2 w-full max-w-[350px] border rounded p-2 flex items-center text-black transition-all duration-300
        ${
          type === 'success'
            ? 'border-success bg-[#DCFAF8]'
            : 'border-error bg-[#FFE0EB]'
        }
        ${
         visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
        }
        `
      }
    >
      {type === 'success' ? (
        <img className='mr-2' src={successImg} width="24px" height="24px" alt="success" />
      ) : (
        <img className='mr-2' width="24px" height="24px" src={errorImg} alt="error" />
      )}
      {text}
    </div>
  )
}

export default Alert
