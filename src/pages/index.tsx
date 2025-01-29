import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const markdownString = `
# GFM

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, nemo!

## Autolink literals

www.example.com, https://example.com, and contact@example.com.

## Footnote

A note[^1]

[^1]: Big note.

## Strikethrough

~one~ or ~~two~~ tildes.

## Table

| a | b  |  c |  d  |
| - | :- | -: | :-: |

## Tasklist

* [ ] to do
* [x] done
`;

export default function Home() {
  return (
    <div className="p-8">
      <ReactMarkdown remarkPlugins={[remarkGfm]} className="markdown">{markdownString}</ReactMarkdown>
    </div>
  );
}
