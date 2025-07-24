# PDF 文本格式化工具 (PDF Text Formatter)

这是一个简单而强大的网页工具，旨在快速修复从 PDF 文件中复制文本时常见的格式问题。它能智能处理中英文混合文本，一键清理多余的换行、空格和连字符，生成干净、规范的文本。

## ✨ 功能特性

- **智能换行处理**: 自动连接被错误断开的英文单词和中文句子，同时保留段落之间的正常间距。
- **中英文混合排版优化**:
    - 自动移除中文汉字之间、汉字与标点符号之间的多余空格。
    - 自动移除汉字与英文/数字之间的空格，使排版更紧凑。
    - 保留英文单词之间的必要空格。
- **特殊格式清理**:
    - 清理翻译人名（如“戈登·摩尔”）中间隔号两边的多余空格。
- **纯前端实现**: 所有操作都在您的浏览器中完成，无需安装任何软件，无需联网，保证了数据的绝对安全和隐私。
- **简洁易用**: 只需“粘贴-点击-复制”三步即可完成所有操作。

## 🚀 如何使用

1.  用浏览器打开 `index.html` 文件。
2.  将从 PDF 中复制的、带有格式问题的文本粘贴到左侧的“输入框”中。
3.  点击“格式化”按钮。
4.  格式化后的干净文本会立即显示在右侧的“输出框”中。
5.  点击“复制结果”按钮，即可方便地将处理好的文本复制到剪贴板。

## 🛠️ 技术实现

- **HTML**: 构建基础的用户界面，包括输入/输出文本框和操作按钮。
- **CSS**: 提供简洁、美观的界面样式，提升用户体验。
- **JavaScript**: 实现核心的格式化逻辑，通过一系列精心设计的正则表达式，智能地识别和修复各种格式问题。

---

This is a simple yet powerful web tool designed to quickly fix common formatting issues when copying text from PDF files. It intelligently handles mixed Chinese and English text, cleaning up unnecessary line breaks, spaces, and hyphens with a single click to produce clean, well-formatted text.
