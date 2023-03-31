import React, { useEffect, useRef, useState } from 'react'
import styles from '@/styles/Home.module.css'
import GreenLightDurationForm from '@/components/GreenLightDurationForm'
import { useFormContext } from '@/context/form'
import { lightData } from '@/utils/lightData'
import Light from '@/components/Light'

export default function Home () {
  const ref = useRef(null)
  const { greenLightDuration, setGreenLightDuration } = useFormContext()
  const [step, setStep] = useState(0)
  const [cycle, setCycle] = useState(0)
  const [group1, setGroup1] = useState()
  const [group2, setGroup2] = useState()
  const [duration, setDuration] = useState<number>(0)

  const stopCycle = async () => {
    await new Promise((resolve, reject) => {
      setGreenLightDuration(0)
      setDuration(0)
      setStep(0)
      setCycle(0)
      setGroup1(null)
      setGroup2(null)
      resolve('R')
    })
  }

  const startCycle = async () => {
    const lightObjArr = lightData(greenLightDuration)
    setGroup1(lightObjArr[0].current.group1)
    setGroup2(lightObjArr[0].current.group2)

    for (const item of lightObjArr) {
      setDuration(item.duration)
      await new Promise((resolve, reject) => {
        setStep(item.step)
        setTimeout(() => {
          if (item.step === lightObjArr.length) {
            setCycle(cycle + 1)
          }
          setGroup1(item.next.group1)
          setGroup2(item.next.group2)
          resolve(item)
        }, item.duration + 1000)
      })
    }
  }

  useEffect(() => {
    if (greenLightDuration > 0) {
      startCycle()
    }
  }, [greenLightDuration, cycle])

  useEffect(() => {
    const interval = setInterval(() => {
      if (duration > 0) {
        setDuration(() => duration - 1000)
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [duration])

  return (
    <>
      <main className={styles.main}>
        <GreenLightDurationForm/>
        <br/><br/>
        {greenLightDuration > 0 && (
          <div ref={ref} className={styles.row}>
            <div className={styles.header}>
              <div>Mevcut Adım: {step}</div>
              <div>Sonraki adıma kalan süre: {duration / 1000}</div>
            </div>

            <div>
              <div>
                Group1 => <Light color={group1} />
              </div>
              <div>
                Group2 => <Light color={group2} />
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  )
}
