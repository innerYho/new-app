import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
//desusado
import { useRouter } from 'next/router'
import PageLayout from '@/components/PageLayout'
import { useEffect, useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home({ articles }) {
  // const [articles, setArticles] = useState([]);
  // el fetch se hace en el servidor para mejorar performance
  // useEffect(() => {
  //   fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey={youtApiKey}')
  //     .then(res => res.json())
  //     .then(response => {
  //       const { articles } = response
  //       setArticles(articles)
  //       console.log(articles)
  //     })
  // }, [])

  // navegacion programática
  const router = useRouter()
  return (
    <PageLayout title='NewsApp - Home'>
      {/* css modules y style jsx */}
      <div className={styles.container}>
        <h1>Aprendiendo Next</h1>
        {/* <style jsx>
          {`
        div{
          display: grid;
          place-content: center;
          height: 100vh;
        }`}
        </style> */}
        {/* {articles.length === 0 && <p>Loading ...</p>} */}
        {articles.length === 0 && <p>No tenemos artículos</p>}
        {articles.length > 0 && articles.map((article, index) => (
          <div key={index}>
            <img alt={`Image for the article ${article.title}`} src={article.urlToImage} />
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        ))}

        <a href='/about'>About recarga todos los archivos</a>
        <Link href='/about'>About solo carga los archivos faltantes</Link>
        <button onClick={() => router.push('/article/2')}>useRouter</button>

      </div>
    </PageLayout>
  )
}

// el fetch se ace en el servidor para que el usuario cando cargue la pag ya tenga los datos
// export async function getServerSideProps() {
export const getServerSideProps = async () => {
  const yourApiKey = 'xxxxx'
  // fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey={yourApiKey}')
  const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${yourApiKey}`)
  // .then(async (res) => await res.json)
  // const { articles } = await Promise.all([response])
  const { articles } = await response.json()
  return {
    props: {
      articles
    }
  }
}