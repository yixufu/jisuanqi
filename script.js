class TextEditor {
    constructor() {
        this.contentInput = document.getElementById('contentInput');
        this.previewArea = document.getElementById('previewArea');
        this.layoutToggle = document.getElementById('layoutToggle');
        this.saveButton = document.getElementById('saveImage');
        this.fontSizeSlider = document.getElementById('fontSizeSlider');
        this.fontSizeValue = document.getElementById('fontSizeValue');
        this.titleFontSizeSlider = document.getElementById('titleFontSizeSlider');
        this.titleFontSizeValue = document.getElementById('titleFontSizeValue');
        this.titleInput = document.getElementById('titleInput');
        this.isTwoColumn = false;
        this.paragraphCount = 0;
        this.watermarkInput = document.getElementById('watermarkInput');
        this.watermarkSizeSlider = document.getElementById('watermarkSizeSlider');
        this.watermarkSizeValue = document.getElementById('watermarkSizeValue');
        this.pagePaddingSlider = document.getElementById('pagePaddingSlider');
        this.pagePaddingValue = document.getElementById('pagePaddingValue');
        this.titleSpacingSlider = document.getElementById('titleSpacingSlider');
        this.titleSpacingValue = document.getElementById('titleSpacingValue');
        this.paragraphSpacingSlider = document.getElementById('paragraphSpacingSlider');
        this.paragraphSpacingValue = document.getElementById('paragraphSpacingValue');
        this.watermarkBottomSlider = document.getElementById('watermarkBottomSlider');
        this.watermarkBottomValue = document.getElementById('watermarkBottomValue');

        this.init();
    }

    init() {
        // 添加所有事件监听器
        this.contentInput.addEventListener('input', () => this.updatePreview());
        this.titleInput.addEventListener('input', () => this.updatePreview());
        this.layoutToggle.addEventListener('click', () => this.toggleLayout());
        this.saveButton.addEventListener('click', () => this.saveAsImage());
        
        // 字体大小滑块事件
        this.fontSizeSlider.addEventListener('input', () => {
            const size = this.fontSizeSlider.value;
            this.fontSizeValue.textContent = size;
            this.previewArea.style.setProperty('--content-font-size', `${size}px`);
        });

        // 标题字体大小滑块事件
        this.titleFontSizeSlider.addEventListener('input', () => {
            const size = this.titleFontSizeSlider.value;
            this.titleFontSizeValue.textContent = size;
            this.previewArea.style.setProperty('--title-font-size', `${size}px`);
        });

        // 更新字体大小显示
        this.fontSizeValue.textContent = '20';
        this.titleFontSizeValue.textContent = '48';

        // 设置初始样式
        this.previewArea.style.setProperty('--content-font-size', '20px');
        this.previewArea.style.setProperty('--title-font-size', '48px');

        // 添加水印相关事件监听
        this.watermarkInput.addEventListener('input', () => this.updatePreview());
        this.watermarkSizeSlider.addEventListener('input', (e) => {
            this.watermarkSizeValue.textContent = e.target.value;
            this.updatePreview();
        });

        // 添加新的事件监听器
        this.pagePaddingSlider.addEventListener('input', (e) => {
            this.pagePaddingValue.textContent = e.target.value;
            this.updatePreview();
        });

        this.titleSpacingSlider.addEventListener('input', (e) => {
            this.titleSpacingValue.textContent = e.target.value;
            this.updatePreview();
        });

        this.paragraphSpacingSlider.addEventListener('input', (e) => {
            this.paragraphSpacingValue.textContent = e.target.value;
            this.updatePreview();
        });

        this.watermarkBottomSlider.addEventListener('input', (e) => {
            this.watermarkBottomValue.textContent = e.target.value;
            this.updatePreview();
        });
    }

    updatePreview() {
        const content = this.contentInput.value;
        const title = this.titleInput.value;
        const paragraphs = content.split(/\n\s*\n/).filter(para => para.trim());
        
        // 更新预览区域样式
        this.previewArea.style.padding = `${this.pagePaddingSlider.value}px`;
        
        this.previewArea.innerHTML = '';
        
        // 添加标题区域
        if (title) {
            const titleSection = document.createElement('div');
            titleSection.className = 'title-section';
            titleSection.textContent = title;
            titleSection.style.marginBottom = `${this.titleSpacingSlider.value}px`;
            this.previewArea.appendChild(titleSection);
        }
        
        // 添加内容区域
        const contentSection = document.createElement('div');
        contentSection.className = 'content-section';
        if (!this.isTwoColumn) {
            contentSection.classList.add('single-column');
        }
        
        paragraphs.forEach((paragraph, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'content-item';
            itemDiv.style.marginBottom = `${this.paragraphSpacingSlider.value}px`;
            
            const numberDiv = document.createElement('div');
            numberDiv.className = 'item-number';
            const number = this.generateOffsetNumber(index);
            numberDiv.textContent = String(number).padStart(2, '0');
            
            const textDiv = document.createElement('div');
            textDiv.className = 'item-text';
            
            // 分割段落的第一行和剩余内容
            const lines = paragraph.split('\n');
            const firstLine = lines[0];
            const restContent = lines.slice(1).join('\n');
            
            // 创建加粗的第一行
            const firstLineDiv = document.createElement('div');
            firstLineDiv.className = 'item-text-first-line';
            firstLineDiv.textContent = firstLine;
            
            textDiv.appendChild(firstLineDiv);
            
            // 添加剩余内容
            if (restContent) {
                const restDiv = document.createElement('div');
                restDiv.innerHTML = restContent.replace(/\n/g, '<br>');
                textDiv.appendChild(restDiv);
            }
            
            itemDiv.appendChild(numberDiv);
            itemDiv.appendChild(textDiv);
            contentSection.appendChild(itemDiv);
        });
        
        this.previewArea.appendChild(contentSection);

        // 添加水印
        const watermarkText = this.watermarkInput.value.trim();
        if (watermarkText) {
            const watermarkSection = document.createElement('div');
            watermarkSection.className = 'watermark-section';
            watermarkSection.textContent = watermarkText;
            watermarkSection.style.fontSize = `${this.watermarkSizeSlider.value}px`;
            watermarkSection.style.bottom = `${this.watermarkBottomSlider.value}px`;
            this.previewArea.appendChild(watermarkSection);
        }
    }

    generateOffsetNumber(index) {
        // 生成连续的序号，每个序号加2，从1开始
        // 例如：1, 2, 3, 4, 5, 6, 7...
        return index + 1;
    }

    toggleLayout() {
        this.isTwoColumn = !this.isTwoColumn;
        const contentSection = this.previewArea.querySelector('.content-section');
        if (contentSection) {
            contentSection.classList.toggle('single-column');
        }
        this.updatePreview();
    }

    async saveAsImage() {
        try {
            // 创建临时容器，用于截图
            const tempContainer = document.createElement('div');
            tempContainer.style.position = 'absolute';
            tempContainer.style.left = '-9999px';
            tempContainer.style.width = '1280px';
            tempContainer.style.height = '1706px';
            document.body.appendChild(tempContainer);

            // 克隆预览区域到临时容器
            const clone = this.previewArea.cloneNode(true);
            clone.style.transform = 'none';
            clone.style.width = '1280px';
            clone.style.height = '1706px';
            tempContainer.appendChild(clone);

            // 配置 html2canvas 选项
            const options = {
                width: 1280,
                height: 1706,
                scale: 2,
                backgroundColor: null,
                useCORS: true,
                allowTaint: true,
                logging: false,
                onclone: (clonedDoc) => {
                    const clonedElement = clonedDoc.querySelector('.preview-area');
                    if (clonedElement) {
                        clonedElement.style.transform = 'none';
                        clonedElement.style.width = '1280px';
                        clonedElement.style.height = '1706px';
                        clonedElement.style.position = 'relative';
                        clonedElement.style.background = 'linear-gradient(135deg, #ffdb4d 0%, #ffd700 100%)';
                    }
                }
            };

            // 生成图片
            const canvas = await html2canvas(clone, options);
            
            // 创建下载链接
            const link = document.createElement('a');
            link.download = '图文编辑器导出.png';
            link.href = canvas.toDataURL('image/png', 1.0);
            link.click();

            // 清理临时元素
            document.body.removeChild(tempContainer);
        } catch (error) {
            console.error('保存图片时出错:', error);
            alert('保存图片时出错，请重试');
        }
    }
}

// 初始化编辑器
document.addEventListener('DOMContentLoaded', () => {
    new TextEditor();
});