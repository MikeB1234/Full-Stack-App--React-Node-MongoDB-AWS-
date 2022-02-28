import React from 'react';
import articleContent from './Article-Content';
import ArticlesList from '../components/ArticlesList';

export const ArticleListPage = () => (
    <>
        <h1>Hello, this is an Article List.</h1>
        <ArticlesList articles={articleContent} />
    </>
)

export default ArticleListPage;