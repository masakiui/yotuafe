import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

// 今あるフォルダのファイルを公開する設定
app.use(express.static(__dirname));

// トップページ（index.html）を表示する
app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`------------------------------------------`);
    console.log(`四葉珈琲店サーバーが起動しました！`);
    console.log(`ブラウザで http://localhost:${PORT} を開いてください`);
    console.log(`------------------------------------------`);
});
