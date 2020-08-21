import React from "react"
import { IAllMarkdownRemark } from "../../interfaces/requests.interface"
import { Link } from "gatsby";
import Img, { GatsbyImageProps } from "gatsby-image"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function getNodeBySlug(slug: string, allMarkdown: IAllMarkdownRemark) {
    for(const edge of allMarkdown.edges) {
        if(edge.node.fields.slug === slug) {
            return edge;
        }
    }
    throw `HVC Blog Error: Could not find the node with slug ${slug}`
}

export default ({
    currentSlug,
    allMarkdown
}: {
    currentSlug: string, 
    allMarkdown: IAllMarkdownRemark
}) => {
    const currentNode = getNodeBySlug(currentSlug, allMarkdown);

    return(<>
        <section id="post-adjacent-posts">
        {(() =>{
            if(currentNode?.previous?.fields.slug){
                const previousNode = getNodeBySlug(currentNode.previous.fields.slug, allMarkdown).node;
                return (
                    <Link to={previousNode.fields.slug} className="col-md-6" key={0}>
                        <FaAngleLeft className="go-to-adjacent-arrow"/>
                        <span className="flex-filler" />
                        <div className="post-description">
                            <h5>{previousNode.frontmatter.title}</h5>
                            <p className="post-author">by {previousNode.frontmatter.author}</p>
                        </div>
                        <Img
                            className="post-image"
                            {...(previousNode.frontmatter.featuredImage.childImageSharp as GatsbyImageProps)}
                        />
                    </Link>
                )
            } else {
                return (<div className="col-md-6" key={0} />);
            }
        })()}
        {(() =>{
            if(currentNode?.next?.fields.slug){
                const nextNode = getNodeBySlug(currentNode.next.fields.slug, allMarkdown).node;
                return (
                    <Link to={nextNode.fields.slug} className="col-md-6" key={1}>
                    <Img
                        className="post-image"
                        {...(nextNode.frontmatter.featuredImage.childImageSharp as GatsbyImageProps)}
                    />
                    <div className="post-description">
                        <h5>{nextNode.frontmatter.title}</h5>
                        <p className="post-author">by {nextNode.frontmatter.author}</p>
                    </div>
                    <span className="flex-filler" />
                    <FaAngleRight className="go-to-adjacent-arrow"/>
                    </Link>
                )
            } else {
                return (<div className="col-md-6" key={1} />);
            }
        })()}
        </section>
    </>)
}