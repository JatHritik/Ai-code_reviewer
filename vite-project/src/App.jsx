import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css" // for proper structure left
import Editor from "react-simple-code-editor" // for left 
import prism from "prismjs"// for proper structure left
import Markdown from "react-markdown" // for proper structure right
import rehypeHighlight from "rehype-highlight";// for highlighting rigght
import "highlight.js/styles/github-dark.css";//  for highlighting rigght
import axios from 'axios'
import './App.css'

function App() {
  const [ code, setCode ] = useState(` function sum() {
  return 1 + 1
}`)

  const [ review, setReview ] = useState(`review your code here...`)

  useEffect(() => {
    prism.highlightAll()
  }, [])

 async function reviewCode() {
  const response = await axios.post(
    'https://ai-code-reviewer-blh9.onrender.com/ai/get-review',
    { code }
  )
  setReview(response.data)
}


  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%"
              }}
            />
          </div>
          <div
            onClick={reviewCode}
            className="review">Review</div>
        </div>
        <div className="right">
          <Markdown

            rehypePlugins={[ rehypeHighlight ]}

          >{review}</Markdown>
        </div>
      </main>
    </>
  )
}



export default App
