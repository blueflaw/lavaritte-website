import React from 'react';
import { BlogsData } from './BlogsData';
import { DataMap } from '../DataMap/DataMap';
import { BlogsContaner } from './BlogsElements';
const BlogsSection = () => {
    
    return (
        <BlogsContaner id="blogs">
                <DataMap Data={BlogsData} Dark={'Dark'}/>
        </BlogsContaner>
    )
}

export default BlogsSection
