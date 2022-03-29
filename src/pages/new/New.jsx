import React, { useState } from 'react';  
import classes from './new.module.scss';

import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';

const New = ({props}) => {

    const [file, setFile] = useState('');
    console.log(file)

    const changePhoto = (e) => {
        
        setFile(e.target.files[0]);
    }

    const {inputs, title} = props
    return (
        <div className={classes.new}>
            <div className={classes.top}>
                <h1 className={classes.title}>{title}</h1>
            </div>
            <div className={classes.bottom}>
                <div className={classes.left}>
                <img src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} alt="item" className={classes.img} /> 
                </div>
                <div className={classes.right}>
                    <form >

                        {inputs.map(({id, type, placeholder, label}) => {
                            return (
                                <div key={id} className={classes.formInput}>
                                    <label htmlFor={id}>{label}</label>
                                    <input type={type} placeholder={placeholder} id={id} />
                                </div>
                            );
                        })}
                        <div className={classes.formInput}>
                            <label htmlFor="loadphoto" className={classes.icon}>Add image: <AddAPhotoOutlinedIcon /></label>
                            <input type="file" id='loadphoto' onChange={changePhoto} style={{display: 'none'}}/>
                        </div>
                        <div className={classes.formInput}>
                            <button className={classes.btn}>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default New;