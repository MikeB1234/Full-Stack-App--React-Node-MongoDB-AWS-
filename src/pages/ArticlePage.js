import React from 'react';
import { useParams } from 'react-router';
import articleContent from './Article-Content'
import ArticlesList from '../components/ArticlesList';

export const ArticlePage = () => {
    const { name } = useParams();
    const article = articleContent.find(article => article.name === name);

    if (!article) {
        return <h1>Article does not exist!</h1>
    }

    const otherArticles = articleContent.filter(article => article.name !== name);

    return (
        <>
            <h1>{article.title}</h1>
            {article.content.map((paragraph, key) => {
                return <p key={key}>{paragraph}</p>
            })}
            <h3>Other Articles:</h3>
            <ArticlesList articles={otherArticles} />
        </>
    )
}

export default ArticlePage;