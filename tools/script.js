document.getElementById('textInput').addEventListener('input', function() {
    const text = this.value;

    // 全体文字数
    const totalCharCount = text.length;

    // スペースと改行を除く文字数
    const nonSpaceCharCount = text.replace(/\s+/g, '').length;

    // 全角文字数
    const fullWidthCharCount = text.match(/[\u3000-\uFFEF]/g) ? text.match(/[\u3000-\uFFEF]/g).length : 0;

    // 半角文字数
    const halfWidthCharCount = totalCharCount - fullWidthCharCount;

    // 行数
    const lineCount = text.split('\n').length;

    // 各カウントを表示
    document.getElementById('totalCharCount').textContent = totalCharCount;
    document.getElementById('nonSpaceCharCount').textContent = nonSpaceCharCount;
    document.getElementById('fullWidthCharCount').textContent = fullWidthCharCount;
    document.getElementById('halfWidthCharCount').textContent = halfWidthCharCount;
    document.getElementById('lineCount').textContent = lineCount;
});

// ダークモードの切り替え
document.getElementById('toggleTheme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.container').classList.toggle('dark-mode');
    document.querySelector('textarea').classList.toggle('dark-mode');

    // ボタンのテキストを切り替え
    if (document.body.classList.contains('dark-mode')) {
        this.textContent = 'ライトモード';
    } else {
        this.textContent = 'ダークモード';
    }
});
