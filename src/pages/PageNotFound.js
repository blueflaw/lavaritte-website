import React from 'react';
import { Error404 } from '../components/Error404/Error404';
import { SEO } from '../components/SEO/SEO';
import { metaDescription, metaData } from '../components/SEO/SEOMetaData';
import { Helmet } from 'react-helmet';

const PageNotFound = () => {
    return (
        <React.Fragment>
            <Helmet htmlAttributes>
                <link rel="canonical" href="/error" />
            </Helmet>
            <SEO title={'Lavaritte Newsletter'} 
                description={metaDescription} 
                ogUrl={'https://lavaritte.com/newsletter'} 
                image={'https://cdnb.artstation.com/p/assets/images/images/050/886/865/large/allard-lavaritte-into-the-404.jpg?1655921844'}
                meta={metaData}/>
            <Error404/>  
        </React.Fragment>
    )
}

export default PageNotFound
