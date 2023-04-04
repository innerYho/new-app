import Head from 'next/head'

export default function PageLayout({ children, title = 'News App' }) {
    return (
        <>
            <Head>
                {/* si no hay título en la pag, toma este por defecto */}
                {/* <title>News App</title> */}
                <title>{title}</title>
                <meta name="description" content="Next - News app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>NewApi</header>
            <main>
                {children}
            </main>
            <style jsx>{`
    header{
      padding: 20px;
    }`}</style>
        </>
    )
}