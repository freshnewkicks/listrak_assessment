import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MailingList from '../components/modals/MailingList'
import {useEffect, useState} from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect( () => {
    setIsLoading(false)
  }, [])

  return (
    <div className={styles.container}>
      <MailingList />
    </div>
  )
}
