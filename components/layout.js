import styles from './layout.module.css';
import { BorderCircle } from "../style/utils.module"
import Head from 'next/head'
import Image from 'next/image'

function Layout(children){
    return (
        <div id="componente-layout" className={styles.container}>
            <Head id="head">
                <title>Minha home page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>  
                <BorderCircle
                    priority
                    src="/img/profile.jpg"
                    className={utilStyles.borderCircle}
                    height={144}
                    width={144}
                    alt={"Gabriel Longatti"}
                />
            </header>
            <main id="main">{children}</main>
        </div>
    );
}

export default Layout;