import React from 'react';
import SennoLoading from './react_senno_loading';

const PageLoader = (props) => (
    <div className={"d-flex w-100 align-items-center justify-content-center"} style={{minHeight: '100vh'}}>
        <SennoLoading/>
    </div>
)

export default PageLoader;