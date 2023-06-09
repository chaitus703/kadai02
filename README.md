# 課題　 -じゃんけんアプリ-

## ①課題内容（どんな作品か）
- タイトル：電卓妖怪「じゃんけるべろす」
- 説明：じゃんけるべろすは3つの顔を持つ電卓。
- その①眠った顔：解が３桁以内の簡単な計算は、眠ったまま、電卓として機能する。
- その②目覚めた顔：解が４桁を超えると、目を覚まして、じゃんけん遊びを求める。※誘いに乗った場合は、好きなところでじゃんけんをやめることが出来る。
- その③うざい顔：解が４桁を超え、じゃんけんの誘いを断った場合、強制的にじゃんけんを求められる。※この強制モードでは、３勝するまでじゃんけんをやめることができない。

## ②工夫した点・こだわった点
- 顔が切替わるタイミングや、アラートのタイミング他、動作のスピード設定。
→通常のじゃんけんモードでは、比較的ゆっくりアラート表示されるが、強制モードではアラートが遅いとイライラする為スピーディー。
- じゃんけん中は電卓利用させない設定。
- 顔のウザさ。
- 勝利数のカウント及び、カウント"3"でのイベント発生。

## ③難しかった点・次回トライしたいこと(又は機能)
- 基礎理解にかなりの時間を費やした為、GW中は、ほぼ何も進展しませんでした。
- 単純ですが、顔を切り替える動作が作用せずにGWの丸4日を費やしました。
- また、じゃんけん強制モード時の勝利カウントは、ギリギリまで動作せず、かなり苦戦しました。
- コードの完成形が、見えないまま書き足し書き足し作成した為、ごちゃごちゃしています。
- あとからなるべくコードをまとめてみましたが、まだまだ無駄が多い影響でバグが発生している状況。次回は完結で美しいコードを目指します。
- バグの件：1度じゃんけんを終えて電卓に戻り、再度じゃんけんが発生した場合に、コードが重複しているらしく、バグりました。その為、苦肉の策ですが、じゃんけん終了後にリロードをかけています。その影響で、フェードインの登場を諦めた為、悔しさが残ります。
- 電卓の計算式はコピペですが、どこかでコードを破壊したらしく、3つ以上の要素の計算はできない状況（現在修正中）。次回はその辺りも改善したいです。

## ④質問・疑問・感想、シェアしたいこと等なんでも
- [質問]今回のジャンケンは、おみくじの授業のコードを参考に、自分で勝ち負けを判定してあらかじめ記載する書き方にしていますが、勝ち負けはコード上で判定させる書き方の方が美しかったかもしれないと思っています。
求める機能次第で、最善の書き方は異なるとは思いますが、現状では無駄が多すぎる様に感じる為、お手本の様な美しい書き方があれば知りたいです。、、質問じゃない？
- [疑問]バグの原因が自分では掴めそうになく、疑問です。
- [感想]「エラーは偉い」と入学式で先輩方が仰っていましたが、エラーは出ていないのに思う様に動作してくれない時、原因に辿り着くための地図がない為、確かにエラーは偉いと感じました。
- [tips]エラーはやっぱり偉かった。
- [参考記事]
https://www.work-school.com/parts/59c3e1b9-1c5c-4d8c-9b7e-e3b77a2e5498?courseID=a9e3ae0b-cd35-4539-93bd-67fbac727255
