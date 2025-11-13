# 🎨 Painting with AI  

*Building AI 課程最終專案*

---

## ✨ 摘要

**Painting with AI** 是一個 AI 藝術生成工具。使用者只需輸入文字描述、草圖或參考圖片，AI 就能快速產生獨特的數位畫作。  
適合藝術家、學生與創作者，幫助快速實現創意靈感。

---

## 🖌 背景

創作藝術的門檻往往高，許多人缺乏技巧或時間。AI 可以提供靈感、降低技術限制，並加速創作流程。

**解決問題：**  
- 藝術愛好者無法將想法可視化  
- 專業創作者需要快速概念草稿  
- 創意受阻的人需要靈感來源  

**個人動機：**  
喜歡結合科技與創意，希望 AI 能讓更多人享受數位藝術的樂趣。

---

## 🛠 使用方式

### 使用流程
<div style="background-color:#f0f0f0; padding:10px; border-radius:5px;">
1. 使用者輸入文字描述、草圖或參考圖片  
2. AI 分析輸入並生成數位畫作  
3. 使用者下載或修改輸入以產生新作品
</div>

### 使用對象
- 專業藝術家與概念設計師  
- 學生或藝術愛好者  
- 社群創作者

---

## 🖼 AI 作品展示

### 單張展示
<img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Sleeping_cat_on_her_back.jpg" width="300" style="border-radius:8px; margin:10px 10px 10px 0;">  
*範例作品，可替換成自己的圖像*

### 網格展示多張作品
<table>
<tr>
<td><img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Sleeping_cat_on_her_back.jpg" width="200" style="border-radius:5px;"></td>
<td><img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Sleeping_cat_on_her_back.jpg" width="200" style="border-radius:5px;"></td>
<td><img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Sleeping_cat_on_her_back.jpg" width="200" style="border-radius:5px;"></td>
</tr>
<tr>
<td><img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Sleeping_cat_on_her_back.jpg" width="200" style="border-radius:5px;"></td>
<td><img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Sleeping_cat_on_her_back.jpg" width="200" style="border-radius:5px;"></td>
<td><img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Sleeping_cat_on_her_back.jpg" width="200" style="border-radius:5px;"></td>
</tr>
</table>
*可替換成你的多個 AI 生成作品，形成展示網格*

---

### 範例程式碼
```python
from PIL import Image
from ai_painting import PaintingAI

# 初始化 AI 模型
ai = PaintingAI(model="artistic_v1")

# 根據文字生成作品
artwork1 = ai.generate(prompt="水彩風格的日出森林")
artwork1.save("sunrise_forest.png")

artwork2 = ai.generate(prompt="油畫風格的城市夜景")
artwork2.save("city_night.png")

# 顯示作品
artwork1.show()
artwork2.show()
