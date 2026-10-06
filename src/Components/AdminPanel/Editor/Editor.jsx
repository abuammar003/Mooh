import { useState } from "react";
import "./Editor.css";

function Editor() {
    const [news, setNews] = useState("");
    const [allNews, setAllNews] = useState([]);

    function handleNews() {
        // const item = news.split(" ")

        const items = news.trim().split(/\s+/);

        const AddNews = items.map((item) => ({
            id: Date.now() + Math.random(),
            text: item
        }));

        setAllNews([...allNews, ...AddNews]);
        setNews("");
    }

    console.log(allNews)

  return (
    <div className='editor_main'>
        <h1>Editor</h1>


        {/* Editor Form */}
        <div className="editor_form">
            <input type='text' value={news} placeholder='Enter News' onChange={(e)=> {setNews(e.target.value)}}/>
            <button onClick={handleNews}>Add</button>
        </div>


        {/* News Data Map */}
        <ul className="news_container">
            {allNews.map((item) => (
                <li key={item.id}>
                    {item.text}
                </li>
            ))}
        </ul>


    </div>
  )
}

export default Editor