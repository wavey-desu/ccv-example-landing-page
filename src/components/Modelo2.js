import React from 'react'

import * as styles from '../styles/modelo.module.css'

export default function Modelo2() {
  return (
    <div className={styles.modeloCont}>
        <div className={styles.modeloMain}>

            <div className={styles.mainInfo}>
                <h1>Mazatlán</h1>
                <h2>Desde 112,000 USD*</h2>

                <div className={styles.featuresCont}>
                    <div className={styles.features1}>
                        <div className={styles.feature}>
                            <img src="/bed.png" alt="cama" />
                            <p>Recámaras <br />2</p>
                        </div>
                        <div className={styles.feature}>
                            <img src="/sink.png" alt="baño" />
                            <p>Baños Completos <br />2</p>
                        </div>
                        <div className={styles.feature}>
                            <img src="/sink.png" alt="baño" />
                            <p>Medios Baños <br />2</p>
                        </div>
                    </div>

                    <div className={styles.features2}>
                        <div className={styles.feature}>
                            <img src="/square.png" alt="area" />
                            <p>Área Total <br />260 m2</p>
                        </div>
                        <div className={styles.feature}>
                            <img src="/wide.png" alt="terreno" />
                            <p>Terreno <br />240 m2</p>
                        </div>
                    </div>
                </div>

                <div className={styles.tyc}>
                    <p>*Consulte términos y condiciones.</p>
                    <p>Precios en dólares estadounidenses (USD).</p>
                    <p>Aplican restricciones y cambios sin previo aviso.</p>
                </div>
            </div>

            <div className={styles.mainImg} style={{ backgroundImage: `url('/IMG_3356.jpg')`}}></div>
        </div>

        <div className={styles.modeloImgs}>
            <img src="/27MazatlanSala.jpg" alt="interior" />
            <img src="/Mazatlan_RecamaraAmarilla2.jpg" alt="interior" />
            <img src="/IMG_3541.jpg" alt="interior" />
        </div>

        <div className={styles.plantasCont}>
            <div className={styles.planta}>
                <img src="/m2p1.png" alt="planta" />
                <p>Planta Baja</p>
            </div>
            <div className={styles.planta}>
                <img src="/m2p2.png" alt="planta" />
                <p>Planta Alta</p>
            </div>
            <div className={styles.planta}>
                <img src="/m2p3.png" alt="planta" />
                <p>Terraza</p>
            </div>
        </div>
    </div>
  )
}
