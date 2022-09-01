import React from 'react'

import * as styles from '../styles/actividades.module.css'

export default function Actividades() {
  return (
    <div className={styles.actCont}>
        <div className={styles.actRosarito}>
            <h1>Rosarito, Baja California</h1>

            <div className={styles.actFull}>
                <img src="/1 RESORT CODE BEF.jpg" alt="actividad" />
                <h3>Hoteles Bellafer</h3>
            </div>

            <div className={styles.actDiv}>
                <div className={styles.actDivImg}>
                    <img src="/shutterstock_486675022.jpeg" alt="actividad" />
                    <h3>Viñedos</h3>
                </div>
                <div className={styles.actDivImg}>
                    <img src="/EijAj_hU0AA5A8g.jpg" alt="actividad" />
                    <h3>Gastronomia</h3>
                </div>
            </div>

            <div className={styles.actFull}>
                <img src="/shutterstock_352166396.jpeg" alt="actividad" />
                <h3>Playas en clima mediterraneo</h3>
            </div>

            <div className={styles.actFull}>
                <img src="/02.jpg" alt="actividad" />
                <h3>Centro comercial y Medico de Primer Nivel</h3>
            </div>

            <div className={styles.actDiv}>
                <div className={styles.actDivImg}>
                    <img src="/ABCD4484.jpg" alt="actividad" />
                    <h3>Aries Vacation Club</h3>
                </div>
                <div className={styles.actDivImg}>
                    <img src="/close-up-of-male-golfer-teeing-off.jpeg" alt="actividad" />
                    <h3>Golf</h3>
                </div>
                <div className={styles.actDivImg}>
                    <img src="/joe-neric-EGzkhZyFRX4-unsplash.jpg" alt="actividad" />
                    <h3>Motos</h3>
                </div>
            </div>

            <div className={styles.actFull} style={{ height: '90vh'}}>
                <img src="/MasterPlanPuntazul.jpg" alt="actividad" />
                <h3>Puntazul</h3>
            </div>

            <div className={styles.actFull}>
                <img src="/_DSC3460_Small.jpg" alt="actividad" />
                <h3>Las mejores amenidades y experiencias, En Puntazul Residencial en el corazón de Rosarito B.C. a solo 300 mts de la playa</h3>
            </div>
        </div>

        <div className={styles.actMaz}>
            <h1>Mazatlán, Sinaloa</h1>

            <div className={styles.actDiv}>
                <div className={styles.actDivImg}>
                    <img src="/shutterstock_1796380126.jpeg" alt="actividad" />
                    <h3>Impactantes Atardeceres</h3>
                </div>
                <div className={styles.actDivImg}>
                    <img src="/shutterstock_1284317320.jpeg" alt="actividad" />
                    <h3>Centro Historico</h3>
                </div>
                <div className={styles.actDivImg}>
                    <img src="/shutterstock_139654466.jpeg" alt="actividad" />
                    <h3> 2do Malecón más grande del mundo</h3>
                </div>
            </div>

            <div className={styles.actFull}>
                <img src="/Panorama-steromztln-Small.jpg" alt="actividad" />
                <h3>Paradisíaca Playa Residencial</h3>
            </div>

            <div className={styles.actFull}>
                <img src="/VISTA LOCALES INTEIORES.jpg" alt="actividad" />
                <h3>Centro Comercial y Médico de Primer Nivel</h3>
            </div>

            <div className={styles.actDiv}>
                <div className={styles.actDivImg}>
                    <img src="/shutterstock_1544124674.jpeg" alt="actividad" />
                    <h3>Basílica de la Inmaculada Concepción</h3>
                </div>
                <div className={styles.actDivImg}>
                    <img src="/_DSC8165.jpg" alt="actividad" />
                    <h3>Teatro Ángela Peralta</h3>
                </div>
                <div className={styles.actDivImg}>
                    <img src="/shutterstock_1554104138.jpeg" alt="actividad" />
                    <h3> Zona Dorada</h3>
                </div>
            </div>

            <div className={styles.actFull} style={{ height: '95vh'}}>
                <img src="/MasterPlanMazatlan.jpg" alt="actividad" />
                <h3>Las Puertas D'Mazatlán</h3>
            </div>

            <div className={styles.actFull}>
                <img src="/277808659_5186266948101120_5921480981290356283_n.jpg" alt="actividad" />
                <h3>Las mejores amenidades y experiencias, en Las Puertas D´Mazatlán Frente a la Playa </h3>
            </div>
        </div>
    </div>
  )
}
