import Head from "next/head";
import Image from "next/image";
import styles from "../styles/LigthMode.module.css";
import { useState } from "react";
import HomePage from "../pages/index";

export default function Home() {
  const [mode, setMode] = useState(false);
  const onLigthMode = () => {
    setMode(!mode);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {mode === false ? (
        <div className={styles.topBG}>
          <header className={styles.header}>
            <div className={styles.header__title}>
              <h1>Social Media Dashboard</h1>
              <h5>Total Followers: 23,004</h5>
            </div>
            <div className={styles.line}></div>
            <div className={styles.header__toggle}>
              <h4>Dark Mode</h4>
              <label className={styles.switch}>
                <input type="checkbox" onChange={onLigthMode} checked />
                <span className={styles.slider}></span>
              </label>
            </div>
          </header>
          <div className={styles.cards}>
            <div className={styles.card}>
              <span className={styles.facebook}></span>
              <h4>
                <Image src="/images/icon-facebook.svg" width={20} height={20} />
                @nathanf
              </h4>
              <h1>1987</h1>
              <h2>FOLLOWERS</h2>
              <h3>
                <Image src="/images/icon-up.svg" width={8} height={4} />
                12 Today
              </h3>
            </div>
            <div className={styles.card}>
              <span className={styles.twitter}></span>
              <h4>
                <Image src="/images/icon-twitter.svg" width={20} height={20} />
                @nathanf
              </h4>
              <h1>1044</h1>
              <h2>FOLLOWERS</h2>
              <h3>
                <Image src="/images/icon-up.svg" width={8} height={4} />
                99 Today
              </h3>
            </div>
            <div className={styles.card}>
              <span className={styles.instagram}></span>
              <h4>
                <Image
                  src="/images/icon-instagram.svg"
                  width={20}
                  height={20}
                />
                @realnathanf
              </h4>
              <h1>11k</h1>
              <h2>FOLLOWERS</h2>
              <h3>
                <Image src="/images/icon-up.svg" width={8} height={4} />
                1099 Today
              </h3>
            </div>
            <div className={styles.card}>
              <span className={styles.youtube}></span>
              <h4>
                <Image src="/images/icon-youtube.svg" width={20} height={20} />
                @nathanf
              </h4>
              <h1>8239</h1>
              <h2>SUBSCRIBERS</h2>
              <h3 className={styles.down}>
                <Image src="/images/icon-down.svg" width={8} height={4} />
                144 Today
              </h3>
            </div>
          </div>
          <div className={styles.overview__container}>
            <h1 className={styles.overview__title}>Overview - Today</h1>
            <div className={styles.overview__cards}>
              <div className={styles.overview__card}>
                <div className={styles.overview__card__top}>
                  <h4>Page Views</h4>{" "}
                  <Image
                    src="/images/icon-facebook.svg"
                    width={20}
                    height={20}
                  />
                </div>
                <div className={styles.overview__card__bottom}>
                  <h1>87</h1>
                  <h4>
                    <Image src="/images/icon-up.svg" width={8} height={4} />
                    3%
                  </h4>
                </div>
              </div>
              <div className={styles.overview__card}>
                <div className={styles.overview__card__top}>
                  <h4>Likes</h4>{" "}
                  <Image
                    src="/images/icon-facebook.svg"
                    width={20}
                    height={20}
                  />
                </div>
                <div className={styles.overview__card__bottom}>
                  <h1>52</h1>
                  <h4 className={styles.down}>
                    <Image src="/images/icon-down.svg" width={8} height={4} />
                    2%
                  </h4>
                </div>
              </div>
              <div className={styles.overview__card}>
                <div className={styles.overview__card__top}>
                  <h4>Likes</h4>{" "}
                  <Image
                    src="/images/icon-instagram.svg"
                    width={20}
                    height={20}
                  />
                </div>
                <div className={styles.overview__card__bottom}>
                  <h1>5462</h1>
                  <h4>
                    <Image src="/images/icon-up.svg" width={8} height={4} />
                    2257%
                  </h4>
                </div>
              </div>
              <div className={styles.overview__card}>
                <div className={styles.overview__card__top}>
                  <h4>Profile views</h4>{" "}
                  <Image
                    src="/images/icon-instagram.svg"
                    width={20}
                    height={20}
                  />
                </div>
                <div className={styles.overview__card__bottom}>
                  <h1>52k</h1>
                  <h4>
                    <Image src="/images/icon-up.svg" width={8} height={4} />
                    1375%
                  </h4>
                </div>
              </div>
              <div className={styles.overview__card}>
                <div className={styles.overview__card__top}>
                  <h4>Retweets</h4>{" "}
                  <Image
                    src="/images/icon-twitter.svg"
                    width={20}
                    height={20}
                  />
                </div>
                <div className={styles.overview__card__bottom}>
                  <h1>117</h1>
                  <h4>
                    <Image src="/images/icon-up.svg" width={8} height={4} />
                    303%
                  </h4>
                </div>
              </div>
              <div className={styles.overview__card}>
                <div className={styles.overview__card__top}>
                  <h4>Likes</h4>{" "}
                  <Image
                    src="/images/icon-twitter.svg"
                    width={20}
                    height={20}
                  />
                </div>
                <div className={styles.overview__card__bottom}>
                  <h1>507</h1>
                  <h4>
                    <Image src="/images/icon-up.svg" width={8} height={4} />
                    553%
                  </h4>
                </div>
              </div>
              <div className={styles.overview__card}>
                <div className={styles.overview__card__top}>
                  <h4>Likes</h4>{" "}
                  <Image
                    src="/images/icon-youtube.svg"
                    width={20}
                    height={20}
                  />
                </div>
                <div className={styles.overview__card__bottom}>
                  <h1>107</h1>
                  <h4 className={styles.down}>
                    <Image src="/images/icon-down.svg" width={8} height={4} />
                    19%
                  </h4>
                </div>
              </div>
              <div className={styles.overview__card}>
                <div className={styles.overview__card__top}>
                  <h4>Total views</h4>{" "}
                  <Image
                    src="/images/icon-youtube.svg"
                    width={20}
                    height={20}
                  />
                </div>
                <div className={styles.overview__card__bottom}>
                  <h1>1407</h1>
                  <h4 className={styles.down}>
                    <Image src="/images/icon-down.svg" width={8} height={4} />
                    12%
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <HomePage />
      )}
    </div>
  );
}