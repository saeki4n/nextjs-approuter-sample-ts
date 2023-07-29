import Link from "next/link";
import "./_style/top20.css";
import { getItem, getTopStories } from "../_utils/hackerNews";

interface BlobItem {
  id: number;
  title: string;
}

export default async function Top20Page() {
  // (1) データをして加工する

  // 500件のデータを取得する
  const top500Ids = await getTopStories();
  // 上位20件のIDだけに絞り込む
  const top20Ids = top500Ids.slice(0, 20);
  // 上位20件の記事データを取得する
  const top20 = await Promise.all(top20Ids.map((id: string) => getItem(id)));
  // 記事データのIDとタイトルだけに絞り込み、
  // idとtitleのみのオブジェクトが20件入った配列にする
  const top20Summary = top20.map((item: BlobItem) => ({
    id: item.id,
    title: item.title,
  }));

  return (
    <div>
      <header>
        <h1>Hacker News Viewer</h1>
      </header>
      <div id="container">
        <div id="sidebar">
          <h2>Top 20</h2>
          <nav>
            <ul>
              {top20Summary.map((item: any) => (
                <li key={item.id}>
                  {/* (2) タイトルをリンクにする */}
                  <Link href={`/top20/${item.id}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <main>
          <div>本文をここに表示する</div>
          {/* {children} */}
        </main>
      </div>
    </div>
  );
}
