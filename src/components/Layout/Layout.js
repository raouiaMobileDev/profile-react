import React from 'react';

import Hoc from '../../hoc/Hoc';
import styles from './Layout.module.css';



const layout = (props) =>(

   <Hoc>
     
    <main className={styles.Content}>
        {props.children}
    </main>
  </Hoc>
);

export default layout;