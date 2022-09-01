import React, {useState} from 'react'
import Modelo1 from '../components/Modelo1'
import Modelo2 from '../components/Modelo2'
import Modelo3 from '../components/Modelo3'
import Modelo4 from '../components/Modelo4'

import * as styles from '../styles/modelos.module.css'

export default function Modelos() {
    const [modelo, setModelo] = useState('m1')


  return (
    <div className={styles.modelosCont}>
        <div className={styles.modelosNav}>
            <button onClick={() => setModelo('m1')}>El Contemporáneo</button>
            <button onClick={() => setModelo('m2')}>Mazatlán</button>
            <button onClick={() => setModelo('m3')}>Pacífico</button>
            <button onClick={() => setModelo('m4')}>Rosarito Beach</button>
        </div>
        {modelo === 'm1' && <Modelo1/>}
        {modelo === 'm2' && <Modelo2/>}
        {modelo === 'm3' && <Modelo3/>}
        {modelo === 'm4' && <Modelo4/>}

    </div>
  )
}
