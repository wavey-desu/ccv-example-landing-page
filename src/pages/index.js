import React from "react"
import Actividades from "../components/Actividades"
import Modelos from '../components/Modelos'

import '../styles/global.css'
import * as styles from '../styles/home.module.css'

export default function Home() {
  return (

    <section className={styles.body}>

      <div className={styles.hero}>
        <h3>Servicios de Construcción Inicia Desde 69,000 USD*</h3>
        <h1>CCV</h1>
        <p>CONSTRUCTORA CON VISIÓN</p>
      </div>

      <div className={styles.info}>
        <p>Incluimos: Supervisión de obra, trámites de licencia de construcción, proyecto ejecutivo, firmas de perito, materiales de calidad, pruebas de laboratorio, resguardo de materiales, presupuesto fijo y sin sorpresas, garantía por escrito, financiamiento directo sin importar su historial crediticio.</p>
      </div>

      <h1 className={styles.sectTitle}>Nuestros Modelos</h1>
      <Modelos/>

      <div className={styles.info2}>
        <div>
          <img className={styles.info2img} src="/info2.png" alt="logo" />
        </div>
        <div>
          <h3>LA MEJOR ARQUITECTURA Y DISTRIBUCIÓN DE ESPACIOS CON ATRACTIVAS FACILIDADES DE PAGO.</h3>
        </div>

      </div>

      <h1 className={styles.sectTitle}>Que Hacer</h1>
      <Actividades/>


      <footer>
        <a href="/">www.constructoraconvision.com </a>
        <a href="/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/> </svg>  constructoraconvision</a>
      </footer>


    </section>

  )
}
