import React from 'react';
import { BlogsData } from './BlogsData';
import { DataMap } from '../DataMap/DataMap';
import { BlogsContaner } from './BlogsElements';
import { Newsletter } from '../Newsletter/Newsletter';
const BlogsSection = () => {
    
    return (
        <React.Fragment>
            <BlogsContaner id="blogs">
                    <DataMap Data={BlogsData} Dark={'Dark'}/>
            </BlogsContaner>
            <Newsletter/>
        </React.Fragment>
    )
}

export default BlogsSection
