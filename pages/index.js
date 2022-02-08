import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>This is the index page</h1>
      <Link href='labeling'>
        <a>Labeling</a>
      </Link>
      <br />
      <Link href='training'>
        <a>Training</a>
      </Link>
      <br />
      <Link href='models'>
        <a>Models</a>
      </Link>
      <br />
      <Link href='naming'>
        <a>Naming</a>
      </Link>
    </div>
  )
}
