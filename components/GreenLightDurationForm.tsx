import { useRef } from 'react'
import { useFormContext } from '@/context/form'
import { greenLightInputRegex } from '@/utils'

const GreenLightDurationForm = () => {
  const { error, setError, setGreenLightDuration } = useFormContext()
  const inputRef = useRef<HTMLInputElement>(null)

  const greenLightDurationOnSubmit = () => {
    const inputValue = inputRef.current.value
    const isValidInput = greenLightInputRegex.test(inputValue)

    if (!isValidInput) {
      setError('Girilen değer 1-30 arası olmalıdır!')
      setGreenLightDuration(null)
      return false
    }

    setGreenLightDuration(parseInt(inputValue) * 1000)
    setError('')
  }

  return (
    <div>
      {error.length > 0 && (
        <div>{error}</div>
      )}

      <br/>

      <input
        ref={inputRef}
        maxLength={2}
        type="text"
        placeholder="1-30"
      />  &nbsp;
      <button
        type="submit"
        onClick={greenLightDurationOnSubmit}>
        UYGULA
      </button>
    </div>
  )
}

export default GreenLightDurationForm