document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.getElementById('inputText');
    const outputText = document.getElementById('outputText');
    const formatButton = document.getElementById('formatButton');
    const copyButton = document.getElementById('copyButton');

    formatButton.addEventListener('click', () => {
        let text = inputText.value;

        // 步骤 1: 保留段落标记
        text = text.replace(/\n\s*\n/g, '||PARAGRAPH||');

        // 步骤 2: 智能、区分上下文地处理换行
        // **核心修正**: 只在英文/数字/特定标点之间插入空格
        text = text.replace(/([a-zA-Z0-9,.)?!])\n([a-zA-Z0-9(])/g, '$1 $2');
        
        // **核心修正**: 删除所有其他剩余的单个换行符
        text = text.replace(/\n/g, '');

        // 步骤 3: 恢复段落
        text = text.replace(/\|\|PARAGRAPH\|\|/g, '\n\n');

        // 步骤 4: 标准化所有剩余的空格
        text = text.replace(/\s+/g, ' ');

        // 步骤 5: 进行所有中文相关的精确清理
        text = text.replace(/([\u4e00-\u9fa5])\s+([a-zA-Z0-9])/g, '$1$2');
        text = text.replace(/([a-zA-Z0-9])\s+([\u4e00-\u9fa5])/g, '$1$2');
        text = text.replace(/([\u4e00-\u9fa5])\s+([\u4e00-\u9fa5])/g, '$1$2');
        
        const CJK_PUNCTUATION = `\uff0c\u3002\uff1b\uff1a\u201c\u201d\u2018\u2019\uff08\uff09\u300a\u300b\u3008\u3009\u3010\u3011\u300e\u300f\u300c\u300d\ufe43\ufe44\u3014\u3015\uffe5\uffe6\u2026\u2014\uff5e\ufe4f\uffe0`;
        const cjkPunctBefore = new RegExp(`\\s+([${CJK_PUNCTUATION}])`, 'g');
        const cjkPunctAfter = new RegExp(`([${CJK_PUNCTUATION}])\\s+`, 'g');
        text = text.replace(cjkPunctBefore, '$1');
        text = text.replace(cjkPunctAfter, '$1');
        text = text.replace(/([\u4e00-\u9fa5])\s*·\s*([\u4e00-\u9fa5])/g, '$1·$2');

        // 步骤 6: 最终清理
        outputText.value = text.split('\n\n').map(p => p.trim()).join('\n\n').trim();
    });

    copyButton.addEventListener('click', () => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(outputText.value).then(() => {
                copyButton.textContent = '已复制!';
                setTimeout(() => {
                    copyButton.textContent = '复制结果';
                }, 2000);
            }).catch(err => {
                console.error('无法复制文本: ', err);
                copyButton.textContent = '复制失败';
            });
        } else {
            outputText.select();
            document.execCommand('copy');
            copyButton.textContent = '已复制!';
            setTimeout(() => {
                copyButton.textContent = '复制结果';
            }, 2000);
        }
    });
});
