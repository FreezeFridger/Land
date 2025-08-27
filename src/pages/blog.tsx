//import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

const BlogLayout = () => {
  const blogPosts = [
    {
      id: 1,
      date: '2025.08.26',
      title: 'Part III: Genesis',
      // Now you can write naturally with markdown!
      excerpt: 
        ` Two months ago, I didn't know any representation theory. This was a problem, as I'm planning on taking the course "Lie Algebras and their Representations" once in Cambridge.

My plan to remedy this was simple: I was to learn the Part II Rep Theory course over the summer. There were two observations that followed which were notable. First, I was in the middle of a summer research project 
which had nothing to do with rep theory. No inherent problems there, it just meant there'd be some variety of thought
going on, which is a good thing! 
The next observation was more lethal: Cambridge problem sheets are hard. This should not have been news (indeed it's 
closer to folklore), and yet it only really hit me when I started actually trying to work through them. 

As an example, a problem on one of the rep theory sheets considers a representation  $\\rho : G \\rightarrow GL_n(\\Bbb{C})$, its character $\\chi := \\mathrm{Tr} \\rho $ and an element $g \\in G$ of order $2$.
The first thing to show is that $\\chi(g) \\equiv \\chi(1) \\mathrm{ \\; (mod \\ 2)}$ (actually it's a step to even show $\\chi (g) \\in \\Bbb{
Z} $). This just uses some basic linear algebra and isn't hard.
The next part though, adds the further assumption that $G$ is non-cyclic and simple, and then asks to show that $\\chi(g) \\equiv \\chi(1) \\mathrm{ \\; (mod \\ 4)}$. The obvious thing to notice (if you've done this sort of thing before!) is that now 
$\\rho$ must be either trivial or faithful (i.e. bijective). 

The useful fact is that this does not help you at all.

Of course, it takes a moment of searching in the dark before you realize this. Some thinking around the problem though leads you to remember that, $\\textit{clairement}$,
$\\det \\rho$ is also a representation! It is hence forced that in fact $\\mathrm{im} \\rho \\leq SL_n(\\Bbb{C})$, which turns out to be just enough information.

Note that at no point in the sheet is the special linear group mentioned, and indeed determinants are only explicitly mentioned once and this is in a different problem.
You're just expected to realize that this stuff is important for the question at hand (and I'm leaving an explanation of why this is true to the reader!) and this freedom
can really make the sheets feel engaging and rewarding (though I'm not claiming that they $\\textit{always}$ feel so. They do not.)

I have so far enjoyed my interactions with the Cambridge math course. We shall see if that remains true once I attend this fall!

(My main other gaps lie in Differential Geometry and Algebraic Number Theory, but I'm also peacefully working through those in sunny St Andrews :)    


      `
      
    },
  ];

  return (
    <div style={{ 
      maxWidth: '900px', 
      padding: '10px 10px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <h1>Blog</h1>
      
      <div style={{ margin: '60px 0', borderTop: '1px solid rgba(89, 89, 89, 0.15)' }} />
      
      {blogPosts.map((post, index) => (
        <div key={post.id} style={{
          paddingTop: index === 0 ? '0' : '25px',
          paddingBottom: '25px',
          borderBottom: index === blogPosts.length - 1 ? 'none' : '1px solid rgba(89, 89, 89, 0.15)'
        }}>
          <div style={{ 
            fontSize: '0.85rem', 
            opacity: '0.6', 
            marginBottom: '8px', 
            fontFamily: 'monospace'
          }}>
            {post.date}
          </div>
          <h3 style={{ 
            fontSize: '1.4rem', 
            fontWeight: '400', 
            marginBottom: '12px'
          }}>
            {post.title}
          </h3>
          <div style={{ 
            lineHeight: '1.7', 
            opacity: '0.9',
            maxWidth: '1000px',
            margin: '0 auto',
            textAlign: 'justify',
            textJustify: 'inter-word'
          }}>
            <ReactMarkdown
              remarkPlugins={[remarkMath]}
              rehypePlugins={[rehypeKatex]}
            >
              {post.excerpt}
            </ReactMarkdown>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogLayout;