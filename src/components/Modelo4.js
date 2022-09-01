import React from 'react'

import * as styles from '../styles/modelo.module.css'

export default function Modelo4() {
  return (
    <div className={styles.modeloCont}>
        <div className={styles.modeloMain}>

            <div className={styles.mainInfo}>
                <h1>Rosarito Beach</h1>
                <h2>Desde 132,000 USD*</h2>

                <div className={styles.featuresCont}>
                    <div className={styles.features1}>
                        <div className={styles.feature}>
                            <img src="/bed.png" alt="cama" />
                            <p>Recámaras <br />3</p>
                        </div>
                        <div className={styles.feature}>
                            <img src="/sink.png" alt="baño" />
                            <p>Baños Completos <br />3</p>
                        </div>
                        <div className={styles.feature}>
                            <img src="/sink.png" alt="baño" />
                            <p>Medios Baños <br />2</p>
                        </div>
                    </div>

                    <div className={styles.features2}>
                        <div className={styles.feature}>
                            <img src="/square.png" alt="area" />
                            <p>Área Total <br />376 m2</p>
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

            <div className={styles.mainImg} style={{ backgroundImage: `url('/2RosartioExt.jpg')`}}></div>
        </div>

        <div className={styles.modeloImgs}>
            <img src="/6RosaritoSala.jpg" alt="interior" />
            <img src="/C-4.jpg" alt="interior" />
            <img src="/IMG_3588.jpg" alt="interior" />
        </div>

        <div className={styles.plantasCont}>
            <div className={styles.planta}>
                <img src="/m4p1.png" alt="planta" />
                <p>Planta Baja</p>
            </div>
            <div className={styles.planta}>
                <img src="/m4p2.png" alt="planta" />
                <p>Planta Alta</p>
            </div>
            <div className={styles.planta}>
                <img src="/m4p3.png" alt="planta" />
                <p>Terraza</p>
            </div>
        </div>
    </div>
  )
}
