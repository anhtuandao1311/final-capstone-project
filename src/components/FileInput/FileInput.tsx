import { Fragment, useRef } from 'react'
import { toast } from 'react-toastify'

interface Props {
  onChange?: (file?: File) => void
}

export default function FileInput({ onChange }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileFromLocal = event.target.files?.[0]
    onChange && onChange(fileFromLocal)
  }

  const handleChooseFile = () => {
    fileInputRef.current?.click()
  }
  return (
    <Fragment>
      <input
        className='hidden'
        type='file'
        accept='.jpg,.jpeg,.png'
        ref={fileInputRef}
        onChange={onFileChange}
        onClick={(event) => {
          ;(event.target as any).value = null
        }}
      />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6 cursor-pointer'
        onClick={handleChooseFile}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5'
        />
      </svg>
    </Fragment>
  )
}
