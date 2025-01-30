import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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

\`\`\`Kotlin
fun main() {
  println("Hello, World!")
}
\`\`\`

| a | b  |  c |  d  |
| - | :- | -: | :-: |

## Tasklist

* [ ] to do
* [x] done
`;

export default function Home() {
  return (
    <div className="p-16">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className="markdown"
      >
        {markdownString}
      </ReactMarkdown>
    </div>
  );
}
