import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from '@/styles/Home.module.css'
import Light from '@/components/Light'
import { lightData } from '@/utils/lightData'
import GreenLightDurationForm from '@/components/GreenLightDurationForm'
import { useFormContext } from '@/context/form'

const controller = new AbortController()

function TrafficSignal () {
  const { greenLightDuration } = useFormContext()
  const [cycle, setCycle] = useState<number>(0)
  const [step, setStep] = useState(0)
  const [duration, setDuration] = useState(0)
  const mainIntervalRef = useRef<NodeJS.Timer>()
  const timeoutRef = useRef<NodeJS.Timeout>()
  const [group1, setGroup1] = useState('K')
  const [group2, setGroup2] = useState('K')
  const [group3, setGroup3] = useState('K')

  const startCycle = useCallback(async () => {
    const data = lightData(greenLightDuration)
    setGroup3('K')

    for await (let item of data) {
      setDuration(item.duration)
      await new Promise((resolve, reject) => {
        const abortListener = ({ target }) => {
          reject(target.reason)
          item = {
            step: item.step,
            next: {
              group1: group1 === 'Y' ? 'S' : 'K',
              group2: group2 === 'Y' ? 'S' : 'K'
            }
          }
        }

        controller.signal.addEventListener('abort', abortListener)

        setStep(item.step)
        setGroup1(item.current.group1)
        setGroup2(item.current.group2)

        timeoutRef.current = setTimeout(() => {
          if (item.step === data.length) {
            setCycle(cycle + 1)
          }
          setGroup1(item.next.group1)
          setGroup2(item.next.group2)
          resolve(item)
        }, item.duration + 1000)
      })
    }
  }, [cycle, greenLightDuration])

  useEffect(() => {
    mainIntervalRef.current = setInterval(() => {
      if (duration > 0) {
        setDuration(() => duration - 1000)
      }
    }, 1000)

    return () => {
      clearInterval(mainIntervalRef.current)
    }
  }, [duration])

  useEffect(() => {
    if (greenLightDuration > 0) {
      startCycle()
    }
  }, [startCycle, cycle])

  const handleButton = () => {
    controller.abort('pedestrian button clicked')
    setStep(0)
    clearInterval(mainIntervalRef.current)
    clearTimeout(timeoutRef.current)
    setDuration(15000)

    setGroup3('Y')
    setGroup1('S')
    setGroup2('S')

    setTimeout(() => {
      setGroup1('K')
      setGroup2('K')
    }, 6000)

    setTimeout(() => {
      startCycle()
    }, 15000)
  }

  const formattedDuration = duration / 1000

  return (
    <div className={styles.main}>
      <div className={styles.row}>
        <GreenLightDurationForm/>
      </div>

      <div className={styles.row}>
        <button
          onClick={handleButton}
        >
          Yaya Buttonu
        </button>
      </div>

      <div className={styles.row}>
        <div className={styles.spaceBetween}>
          <div>Mevcut adım: {step}</div>
          <div>Sonraki adıma kalan süre: {formattedDuration}</div>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Light color={group1} groupName={'Gr1'}/>
        </div>
        <div>
          <Light color={group2} groupName={'Gr2'}/>
        </div>
        <div>
          <Light color={group3} groupName={'Yaya Grubu'}/>
        </div>
      </div>
    </div>
  )
}

export default TrafficSignal
