import React, { FC } from 'react';
import BlogPostWrapper from '../../components/blog/blog-post-wrapper';
import exampleBlogPost from '../../images/blog/example-blog-post/example-blog-post.jpeg';
import BlogPostEmbeddedVideo from '../../components/blog/blog-post-embedded-video';
import BlogPostCallout from '../../components/blog/blog-post-callout';
import BlogPostCodeBlock from '../../components/blog/blog-post-code-block';

const ExampleBlogPost: FC = () => {
    return (
        <BlogPostWrapper blog={
            {
                topic: 'Miscellaneous', //the topic/category for the filter option (Company, Productivity, Technology or Miscellaneous)
                date: 'August 17th, 2022', //date of publication (syntax: August 17th, 2022)
                author: 'Simon Hubert', //your name
                title: 'Example Blog Post', //title of the post
                description: //small description of the content of the posts
                    'This post is an example placeholder blog page. It will be replaced by the first real blog post.',
                linkedBlogs: ['Example Blog Post'] //blog posts you want to link at the bottom of the text, write titles in an array (three posts is optimal)
            }
        }>

            <p>
                This post is an example placeholder blog page. It will be replaced by the first real blog post.
            </p>
            <a href='https://www.lipsum.com/feed/html' target='_blank' rel='noreferrer'>Source of the following text</a>
            <h2>Lorem Ipsum</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum purus magna, a pulvinar odio condimentum quis. In varius posuere ligula nec maximus. Proin blandit tincidunt euismod. Vivamus dapibus tortor est, at varius ligula pretium convallis. Sed ligula dolor, feugiat non purus non, faucibus tristique enim. Aenean fermentum dictum risus, id sollicitudin turpis accumsan ut. In tincidunt tincidunt nisl, non pharetra metus rhoncus sed. Sed egestas pellentesque urna in volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin pellentesque ante convallis turpis auctor sagittis eu in nibh. Aliquam nec ullamcorper est. Aliquam a turpis sodales, lobortis ligula vitae, aliquam nulla. Nam vel massa sit amet nisl tempus vehicula. Nunc est elit, gravida eleifend quam ut, pretium dapibus dui. Suspendisse vitae leo eu elit ultricies sagittis.
            </p>
            <p>
                Praesent malesuada accumsan ligula at bibendum. Cras maximus massa id leo accumsan facilisis. Donec auctor laoreet tellus vitae volutpat. Curabitur vitae ultricies est. Nulla eu ultricies massa, sit amet molestie erat. Pellentesque ultrices nulla ex, id consequat nunc aliquet eget. Nunc faucibus massa quis rhoncus gravida.
            </p>

            <figure>
                <img src={exampleBlogPost} alt='placeholder'/>
                <figcaption>Placeholder Image</figcaption>
            </figure>

            <p>
                Suspendisse efficitur tempus mattis. Quisque sagittis, nisl semper vestibulum condimentum, felis sem facilisis ligula, a faucibus lorem libero non magna. Aliquam accumsan quam eget vestibulum cursus. Pellentesque nec lectus auctor, suscipit ligula id, posuere ex. Aenean pharetra arcu eu purus laoreet pretium eu vel magna. Mauris bibendum nunc eget lectus commodo egestas. Nunc vitae lacus ligula. Mauris mollis dapibus augue non rhoncus. Nullam sodales mauris id sapien aliquam blandit. Curabitur ut est id purus placerat dignissim non sodales dolor. Ut condimentum justo eu ipsum finibus, vitae dictum turpis ornare. Nunc eros augue, feugiat sed dui in, pellentesque faucibus nulla. Cras lobortis iaculis aliquam. Mauris vel nulla ornare metus iaculis volutpat nec id nibh.
            </p>

            <blockquote>
                Block quote stuff.
            </blockquote>

            <p>
                Donec vel tempus magna. Nulla et pellentesque odio. Etiam dictum vulputate ullamcorper. Etiam mattis rhoncus venenatis. Quisque in imperdiet ligula. Pellentesque id ligula massa. Nullam semper, metus non laoreet eleifend, quam tellus faucibus nisi, vel vestibulum odio neque sed odio. Etiam suscipit in metus at viverra. Nulla finibus porta nunc quis cursus. Praesent porttitor ut neque ut rhoncus. Aenean vel tincidunt augue, et posuere ipsum. Morbi facilisis consequat elit, id varius ipsum porta a.
            </p>

            <figure>
                <BlogPostEmbeddedVideo videoId='WXuK6gekU1Y'/>
                <figcaption>Embedded YouTube Video</figcaption>
            </figure>

            <p>
                Phasellus volutpat non dolor at ullamcorper. Ut tempor tortor diam, in dictum diam sagittis et. Sed vitae dui mauris. Cras arcu turpis, venenatis sed consequat elementum, cursus in enim. Mauris luctus nulla tincidunt dignissim molestie. Pellentesque bibendum auctor risus, porta finibus tellus viverra in. Nunc scelerisque lorem quis fermentum iaculis. Suspendisse imperdiet, tortor nec iaculis ullamcorper, nunc mauris aliquam neque, in ultrices nunc nibh eu lectus. Ut mauris ipsum, fermentum nec tristique vitae, consectetur vestibulum tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed mi nulla, dapibus sit amet purus eget, tincidunt dapibus arcu. Nullam dignissim lacus ac sem pellentesque lacinia.
            </p>
            
            <h3>Example Callout</h3>
            <BlogPostCallout>
                Phasellus volutpat non dolor at ullamcorper.
            </BlogPostCallout>

            <h3>Example Code</h3>
            <BlogPostCodeBlock>{[
                'const func = (name: string): void => {',
                '  const pi: number = 3.14;',
                '  console.log(pi);',
                '  return(<div>{`Hello, ${name}`}</div>);',
                '};'
            ]}</BlogPostCodeBlock>

            <p>It also works inline: <code>return 3.14;</code></p>

        </BlogPostWrapper>
    );
}

export default ExampleBlogPost;