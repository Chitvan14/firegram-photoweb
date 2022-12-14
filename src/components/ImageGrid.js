import {React} from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({setSelectedImg}) => {
    const {docs} = useFirestore('images');
return (<div className='img-grid'>
{docs && docs.map(doc => (
    <motion.div whileHover={{opacity : 1}} layout className='img-wrap' key={doc.id} onClick={()=> setSelectedImg(doc.url)}>
        <motion.img inital={{opacity : 0}} animation={{opacity : 1}} transition={{delay:1}} src={doc.url} alt='uploaded pic'/>
    </motion.div>
))}
</div>)
}

export default ImageGrid;