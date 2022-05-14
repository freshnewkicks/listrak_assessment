import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MailingList from '../components/modals/MailingList'
import {useEffect, useState} from "react"
import { GithubForkBanner } from 'react-github-fork-banner'
export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect( () => {
    setIsLoading(false)
  }, [])

  return (
    <div className={styles.container}>
        <>
            <GithubForkBanner
                customHref="https://github.com/freshnewkicks/listrak_assessment"
            />
        </>
        <>
            <MailingList />
        </>
    </div>
  )
}
