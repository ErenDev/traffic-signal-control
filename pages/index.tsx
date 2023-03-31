import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from '@/styles/Home.module.css'
import GreenLightDurationForm from '@/components/GreenLightDurationForm'
import Light from '@/components/Light'
import { lightData } from '@/utils/lightData'
import { useFormContext } from '@/context/form'

export default function Home () {
  const { greenLightDuration } = useFormContext()
  const [initialized, setInitialized] = useState(false)
  const [step, setStep] = useState<number>()
  const [cycle, setCycle] = useState<number>(0)
  const [duration, setDuration] = useState<number>(0)
  const [group1, setGroup1] = useState<string>('K')
  const [group2, setGroup2] = useState<string>('K')
  const [group3, setGroup3] = useState<string>('K')

  let interval = null
  let timeout = null
  let p = null

  const handleButton = () => {
    setInitialized(false)
    setCycle(0)
    setDuration(0)
    setGroup1('K')
    setGroup2('K')
    setGroup3('Y')

    return false
  }

  const startCycle = async () => {
    setInitialized(true)
    console.log('cycle started')
    if (initialized) {
      const data = lightData(greenLightDuration)
      for await (const item of data) {
        setDuration(item.duration)
        p = await new Promise((resolve, reject) => {
          setStep(item.step)

          setGroup1(item.current.group1)
          setGroup2(item.current.group2)

          timeout = setTimeout(() => {
            if (item.step === data.length) {
              setCycle(cycle + 1)
            }

            setGroup1(item.next.group1)
            setGroup2(item.next.group2)
            setDuration(0)
            resolve(item)
          }, item.duration + 1000)
        })

        p = null
      }
    }
  }

  useEffect(() => {
    interval = setInterval(() => {
      if (duration > 0) {
        setDuration(() => duration - 1000)
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [initialized, duration])

  useEffect(() => {
    if (greenLightDuration) {
      startCycle()
    }
  }, [greenLightDuration, initialized, cycle])

  return (
    <>
      <main className={styles.main}>
        <GreenLightDurationForm/>
        <br/><br/>
        <button onClick={handleButton}>Yaya Butonu</button>
        <br/><br/>

        <div className={styles.row}>
          <div className={styles.header}>
            <div>Mevcut Adım: {step}</div>
            <div>Sonraki adıma kalan süre: {duration / 1000}</div>
          </div>

          <div className={styles.lightContainer}>
            <div className={styles.lightItem}>
              <Light color={group1} groupName={'Gr1'} />
            </div>
            <div className={styles.lightItem}>
              <Light color={group2} groupName={'Gr2'} />
            </div>

            <div className={styles.lightItem}>
              <Light color={group3} groupName={'Yaya Grubu'} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
