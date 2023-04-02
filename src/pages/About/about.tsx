import React from 'react';
import {Footer} from "../../components/Footer";
import styles from "../About/about.module.css";

const about = () => {
    return (
        <div className={styles.aboutPage}>
            <h2 className={styles.aboutPage_title}> History: </h2>
            <p className={styles.aboutPage_text}>
                Attack on Titan is a Japanese dark fantasy anime television series, adapted from the manga
                series of the same name by Hajime Isayama, that premiered on April 7, 2013. It has aired
                on NHK General TV in Japan, and Aniplus Asia in various Asia-Pacific countries. In the In
                the United States and Canada, the series has been streamed on Crunchyroll, Funimation,
                Netflix, Amazon Prime Video, and Hulu. Attack on Titan has also aired on Adult Swim&apos;s
                Toonami programming block in the U.S.
            </p>
            <p className={styles.aboutPage_text}>
                Set in a post-apocalyptic world where the remains of humanity live behind walls protecting
                them from giant humanoid Titans, Attack on Titan follows protagonist Eren Yeager, along
                with friends Mikasa Ackerman and Armin Arlert. When a Colossal Titan breaches the wall of
                their hometown, Titans destroy the city and eat Eren&apos;s mother. Vowing vengeance, Eren
                joins the elite Survey Corps, a group of soldiers who fight against Titans. It chronicles
                Eren&apos;s journey with the Survey Corps as they fight against the Titans while
                investigating their origin and history.
            </p>
            <p className={styles.aboutPage_text}>
                Since its debut in 2013, Attack on Titan has received widespread critical acclaim and
                multiple accolades. Critics and audiences have praised the show for its story line,
                animation, action sequences, characters, voice acting (both original and dubbed),
                soundtrack, and dark themes.
            </p>
            <Footer />
        </div>
    );
};

export default about;
