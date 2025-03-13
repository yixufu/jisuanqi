class TextEditor {
    constructor() {
        this.contentInput = document.getElementById('contentInput');
        this.previewArea = document.getElementById('previewArea');
        this.saveButton = document.getElementById('saveImage');
        this.fontSizeSlider = document.getElementById('fontSizeSlider');
        this.fontSizeValue = document.getElementById('fontSizeValue');
        this.titleFontSizeSlider = document.getElementById('titleFontSizeSlider');
        this.titleFontSizeValue = document.getElementById('titleFontSizeValue');
        this.titleInput = document.getElementById('titleInput');
        this.titleColorPicker = document.getElementById('titleColorPicker');
        
        // 添加副标题相关元素
        this.subtitleInput = document.getElementById('subtitleInput');
        this.subtitleFontSizeSlider = document.getElementById('subtitleFontSizeSlider');
        this.subtitleFontSizeValue = document.getElementById('subtitleFontSizeValue');
        this.subtitleColorPicker = document.getElementById('subtitleColorPicker');
        
        // 添加正文颜色选择器
        this.contentColorPicker = document.getElementById('contentColorPicker');
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
        this.autoNumbering = document.getElementById('autoNumbering');
        this.boldFirstLine = document.getElementById('boldFirstLine');
        this.colorSchemeInputs = document.querySelectorAll('input[name="colorScheme"]');
        this.layoutInputs = document.querySelectorAll('input[name="layoutType"]');
        this.templateInputs = document.querySelectorAll('input[name="template"]');
        this.template1Container = document.getElementById('template1-container');
        this.template2Container = document.getElementById('template2-container');

        // 模板二的元素
        this.previewArea2 = document.getElementById('previewArea2');
        this.titleInput2 = document.getElementById('titleInput2');
        this.titleFontSizeSlider2 = document.getElementById('titleFontSizeSlider2');
        this.titleFontSizeValue2 = document.getElementById('titleFontSizeValue2');
        this.titleColorPicker2 = document.getElementById('titleColorPicker2');
        
        this.subtitleInput2 = document.getElementById('subtitleInput2');
        this.subtitleFontSizeSlider2 = document.getElementById('subtitleFontSizeSlider2');
        this.subtitleFontSizeValue2 = document.getElementById('subtitleFontSizeValue2');
        this.subtitleColorPicker2 = document.getElementById('subtitleColorPicker2');
        this.subtitleBold2 = document.getElementById('subtitleBold2');

        this.tableRows2 = document.getElementById('tableRows2');
        this.tableCols2 = document.getElementById('tableCols2');
        this.cellHeightSlider2 = document.getElementById('cellHeightSlider2');
        this.cellHeightValue2 = document.getElementById('cellHeightValue2');
        this.borderWidthSlider2 = document.getElementById('borderWidthSlider2');
        this.borderWidthValue2 = document.getElementById('borderWidthValue2');
        this.borderColorPicker2 = document.getElementById('borderColorPicker2');
        this.borderOpacitySlider2 = document.getElementById('borderOpacitySlider2');
        this.borderOpacityValue2 = document.getElementById('borderOpacityValue2');
        
        this.tableFontSizeSlider2 = document.getElementById('tableFontSizeSlider2');
        this.tableFontSizeValue2 = document.getElementById('tableFontSizeValue2');
        this.tableTextColorPicker2 = document.getElementById('tableTextColorPicker2');
        this.tableBold2 = document.getElementById('tableBold2');
        this.tableContainer2 = document.getElementById('tableContainer2');
        
        this.pagePaddingSlider2 = document.getElementById('pagePaddingSlider2');
        this.pagePaddingValue2 = document.getElementById('pagePaddingValue2');
        this.titleTopSpacingSlider2 = document.getElementById('titleTopSpacingSlider2');
        this.titleTopSpacingValue2 = document.getElementById('titleTopSpacingValue2');
        this.titleSubtitleSpacingSlider2 = document.getElementById('titleSubtitleSpacingSlider2');
        this.titleSubtitleSpacingValue2 = document.getElementById('titleSubtitleSpacingValue2');
        this.subtitleTableSpacingSlider2 = document.getElementById('subtitleTableSpacingSlider2');
        this.subtitleTableSpacingValue2 = document.getElementById('subtitleTableSpacingValue2');
        
        this.watermarkInput2 = document.getElementById('watermarkInput2');
        this.watermarkSizeSlider2 = document.getElementById('watermarkSizeSlider2');
        this.watermarkSizeValue2 = document.getElementById('watermarkSizeValue2');
        this.watermarkBottomSlider2 = document.getElementById('watermarkBottomSlider2');
        this.watermarkBottomValue2 = document.getElementById('watermarkBottomValue2');

        this.bgColorSchemeInputs = document.querySelectorAll('input[name="bgColorScheme"]');
        this.textAlignInputs2 = document.querySelectorAll('input[name="textAlign2"]');

        this.init();
    }

    init() {
        // 添加所有事件监听器
        this.contentInput.addEventListener('input', () => this.updatePreview());
        this.titleInput.addEventListener('input', () => this.updatePreview());
        this.subtitleInput.addEventListener('input', () => this.updatePreview());
        this.saveButton.addEventListener('click', () => this.saveAsImage());
        
        // 字体大小滑块事件
        this.fontSizeSlider.addEventListener('input', () => {
            const size = this.fontSizeSlider.value;
            this.fontSizeValue.textContent = size;
            this.updatePreview();
        });

        // 标题字体大小滑块事件
        this.titleFontSizeSlider.addEventListener('input', () => {
            const size = this.titleFontSizeSlider.value;
            this.titleFontSizeValue.textContent = size;
            this.updatePreview();
        });

        // 副标题字体大小滑块事件
        this.subtitleFontSizeSlider.addEventListener('input', () => {
            const size = this.subtitleFontSizeSlider.value;
            this.subtitleFontSizeValue.textContent = size;
            this.updatePreview();
        });

        // 颜色选择器事件
        this.titleColorPicker.addEventListener('input', () => this.updatePreview());
        this.subtitleColorPicker.addEventListener('input', () => this.updatePreview());
        this.contentColorPicker.addEventListener('input', () => this.updatePreview());

        // 更新字体大小显示
        this.fontSizeValue.textContent = '20';
        this.titleFontSizeValue.textContent = '48';
        this.subtitleFontSizeValue.textContent = '32';

        // 设置初始样式
        this.previewArea.style.setProperty('--content-font-size', '20px');
        this.previewArea.style.setProperty('--title-font-size', '48px');
        this.previewArea.style.setProperty('--subtitle-font-size', '32px');

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

        // 添加配置选项的事件监听
        this.autoNumbering.addEventListener('change', () => this.updatePreview());
        this.boldFirstLine.addEventListener('change', () => this.updatePreview());

        // 添加布局切换事件监听
        this.layoutInputs.forEach(input => {
            input.addEventListener('change', (e) => {
                this.isTwoColumn = e.target.value === 'double';
                this.updatePreview();
            });
        });

        // 添加模板切换事件监听
        this.templateInputs.forEach(input => {
            input.addEventListener('change', (e) => {
                this.switchTemplate(e.target.value);
            });
        });

        this.initColorScheme();

        // 默认显示模板一
        const template1Radio = document.querySelector('input[name="template"][value="template1"]');
        if (template1Radio) {
            template1Radio.checked = true;
            this.switchTemplate('template1');
        }

        // 模板二的事件监听器
        if (this.titleInput2) {
            // 标题相关
            this.titleInput2.addEventListener('input', () => this.updatePreview2());
            this.titleFontSizeSlider2.addEventListener('input', () => {
                this.titleFontSizeValue2.textContent = this.titleFontSizeSlider2.value;
                this.updatePreview2();
            });
            this.titleColorPicker2.addEventListener('input', () => this.updatePreview2());

            // 副标题相关
            this.subtitleInput2.addEventListener('input', () => this.updatePreview2());
            this.subtitleFontSizeSlider2.addEventListener('input', () => {
                this.subtitleFontSizeValue2.textContent = this.subtitleFontSizeSlider2.value;
                this.updatePreview2();
            });
            this.subtitleColorPicker2.addEventListener('input', () => this.updatePreview2());
            this.subtitleBold2.addEventListener('change', () => this.updatePreview2());

            // 表格结构相关
            this.tableRows2.addEventListener('change', () => this.updateTable2());
            this.tableCols2.addEventListener('change', () => this.updateTable2());
            
            // 表格样式相关
            this.cellHeightSlider2.addEventListener('input', () => {
                this.cellHeightValue2.textContent = this.cellHeightSlider2.value;
                this.updateTable2();
            });
            this.borderWidthSlider2.addEventListener('input', () => {
                this.borderWidthValue2.textContent = this.borderWidthSlider2.value;
                this.updateTable2();
            });
            this.borderColorPicker2.addEventListener('input', () => this.updateTable2());
            
            this.tableFontSizeSlider2.addEventListener('input', () => {
                this.tableFontSizeValue2.textContent = this.tableFontSizeSlider2.value;
                this.updateTable2();
            });
            this.tableTextColorPicker2.addEventListener('input', () => this.updateTable2());
            this.tableBold2.addEventListener('change', () => this.updateTable2());
            this.textAlignInputs2.forEach(input => {
                input.addEventListener('change', () => this.updateTable2());
            });

            // 间距相关
            this.pagePaddingSlider2.addEventListener('input', () => {
                this.pagePaddingValue2.textContent = this.pagePaddingSlider2.value;
                this.updatePreview2();
            });
            this.titleTopSpacingSlider2.addEventListener('input', () => {
                this.titleTopSpacingValue2.textContent = this.titleTopSpacingSlider2.value;
                this.updatePreview2();
            });
            this.titleSubtitleSpacingSlider2.addEventListener('input', () => {
                this.titleSubtitleSpacingValue2.textContent = this.titleSubtitleSpacingSlider2.value;
                this.updatePreview2();
            });
            this.subtitleTableSpacingSlider2.addEventListener('input', () => {
                this.subtitleTableSpacingValue2.textContent = this.subtitleTableSpacingSlider2.value;
                this.updatePreview2();
            });

            // 水印相关
            this.watermarkInput2.addEventListener('input', () => this.updatePreview2());
            this.watermarkSizeSlider2.addEventListener('input', () => {
                this.watermarkSizeValue2.textContent = this.watermarkSizeSlider2.value;
                this.updatePreview2();
            });
            this.watermarkBottomSlider2.addEventListener('input', () => {
                this.watermarkBottomValue2.textContent = this.watermarkBottomSlider2.value;
                this.updatePreview2();
            });

            // 背景色系
            this.bgColorSchemeInputs.forEach(input => {
                input.addEventListener('change', () => this.updatePreview2());
            });

            // 初始化表格
            this.updateTable2();
        }
    }

    initColorScheme() {
        this.colorSchemeInputs.forEach(input => {
            input.addEventListener('change', () => {
                this.updateColorScheme(input.value);
            });
        });
    }

    updateColorScheme(scheme) {
        const root = document.documentElement;
        const schemes = {
            yellow: {
                gradientStart: 'var(--yellow-gradient-start)',
                gradientEnd: 'var(--yellow-gradient-end)',
                circleBright: 'var(--yellow-circle-bright)',
                text: 'var(--yellow-text)'
            },
            blue: {
                gradientStart: 'var(--blue-gradient-start)',
                gradientEnd: 'var(--blue-gradient-end)',
                circleBright: 'var(--blue-circle-bright)',
                text: 'var(--blue-text)'
            },
            green: {
                gradientStart: 'var(--green-gradient-start)',
                gradientEnd: 'var(--green-gradient-end)',
                circleBright: 'var(--green-circle-bright)',
                text: 'var(--green-text)'
            },
            purple: {
                gradientStart: 'var(--purple-gradient-start)',
                gradientEnd: 'var(--purple-gradient-end)',
                circleBright: 'var(--purple-circle-bright)',
                text: 'var(--purple-text)'
            },
            pink: {
                gradientStart: 'var(--pink-gradient-start)',
                gradientEnd: 'var(--pink-gradient-end)',
                circleBright: 'var(--pink-circle-bright)',
                text: 'var(--pink-text)'
            }
        };

        const selectedScheme = schemes[scheme];
        const previewArea = document.querySelector('.preview-area');

        // 更新背景渐变
        previewArea.style.background = `linear-gradient(to bottom, ${selectedScheme.gradientStart}, ${selectedScheme.gradientEnd})`;
        
        // 更新圆形装饰的渐变
        previewArea.style.setProperty('--circle-gradient', `linear-gradient(to bottom, ${selectedScheme.circleBright}, ${selectedScheme.gradientStart}, ${selectedScheme.gradientEnd})`);
        
        // 更新文本颜色
        document.querySelectorAll('.item-text, .item-text-first-line, .title-section').forEach(element => {
            element.style.color = selectedScheme.text;
        });

        // 更新序号颜色
        document.querySelectorAll('.item-number').forEach(number => {
            number.style.background = selectedScheme.text;
            number.style.color = selectedScheme.gradientStart;
        });
    }

    updatePreview() {
        const content = this.contentInput.value;
        const title = this.titleInput.value.replace(/\n/g, '<br>');
        const subtitle = this.subtitleInput.value.replace(/\n/g, '<br>');
        const paragraphs = content.split(/\n\s*\n/).filter(para => para.trim());
        
        // 更新预览区域样式
        this.previewArea.style.padding = `${this.pagePaddingSlider.value}px`;
        
        this.previewArea.innerHTML = '';
        
        // 添加标题区域
        if (title) {
            const titleSection = document.createElement('div');
            titleSection.className = 'title-section';
            titleSection.innerHTML = title;
            titleSection.style.fontSize = `${this.titleFontSizeSlider.value}px`;
            titleSection.style.marginBottom = `${this.titleSpacingSlider.value}px`;
            titleSection.style.color = this.titleColorPicker.value;
            this.previewArea.appendChild(titleSection);
        }

        // 添加副标题区域
        if (subtitle) {
            const subtitleSection = document.createElement('div');
            subtitleSection.className = 'subtitle-section';
            subtitleSection.innerHTML = subtitle;
            subtitleSection.style.fontSize = `${this.subtitleFontSizeSlider.value}px`;
            subtitleSection.style.marginBottom = `${this.titleSpacingSlider.value}px`;
            subtitleSection.style.color = this.subtitleColorPicker.value;
            subtitleSection.style.textAlign = 'center';
            this.previewArea.appendChild(subtitleSection);
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
            
            // 根据配置决定是否显示序号
            if (this.autoNumbering.checked) {
            const numberDiv = document.createElement('div');
            numberDiv.className = 'item-number';
            const number = this.generateOffsetNumber(index);
            numberDiv.textContent = String(number).padStart(2, '0');
                itemDiv.appendChild(numberDiv);
            }
            
            const textDiv = document.createElement('div');
            textDiv.className = 'item-text';
            textDiv.style.color = this.contentColorPicker.value;
            textDiv.style.fontSize = `${this.fontSizeSlider.value}px`;
            
            // 分割段落的第一行和剩余内容
            const lines = paragraph.split('\n');
            const firstLine = lines[0];
            const restContent = lines.slice(1).join('\n');
            
            // 根据配置决定是否加粗首行
            if (this.boldFirstLine.checked) {
            const firstLineDiv = document.createElement('div');
            firstLineDiv.className = 'item-text-first-line';
            firstLineDiv.textContent = firstLine;
                firstLineDiv.style.color = this.contentColorPicker.value;
                textDiv.appendChild(firstLineDiv);
            } else {
                const firstLineDiv = document.createElement('div');
                firstLineDiv.textContent = firstLine;
            textDiv.appendChild(firstLineDiv);
            }
            
            // 添加剩余内容
            if (restContent) {
                const restDiv = document.createElement('div');
                restDiv.innerHTML = restContent.replace(/\n/g, '<br>');
                textDiv.appendChild(restDiv);
            }
            
            if (!this.autoNumbering.checked) {
                textDiv.style.marginLeft = '0';
            }
            
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

    switchTemplate(templateId) {
        // 隐藏所有模板
        this.template1Container.style.display = 'none';
        this.template2Container.style.display = 'none';

        // 显示选中的模板
        if (templateId === 'template1') {
            this.template1Container.style.display = 'block';
            this.updatePreview();
        } else if (templateId === 'template2') {
            this.template2Container.style.display = 'block';
            this.updateTable2();
            this.updatePreview2();
        }
    }

    saveAsImage() {
        try {
            // 获取当前激活的预览区域
            const activePreviewArea = document.querySelector('.template-container[style*="display: block"] .preview-area');
            
            // 创建临时容器，用于截图
            const tempContainer = document.createElement('div');
            tempContainer.style.position = 'absolute';
            tempContainer.style.left = '-9999px';
            tempContainer.style.width = '1280px';
            tempContainer.style.height = '1706px';
            document.body.appendChild(tempContainer);

            // 克隆预览区域到临时容器
            const clone = activePreviewArea.cloneNode(true);
            clone.style.transform = 'none';
            clone.style.width = '1280px';
            clone.style.height = '1706px';

            // 特别处理模板二的表格样式
            if (clone.classList.contains('template2')) {
                // 设置背景色
                const selectedBgColor = document.querySelector('input[name="bgColorScheme"]:checked')?.value || '#f8f2d2';
                clone.style.backgroundColor = selectedBgColor;
                
                // 处理表格
                const table = clone.querySelector('.template2-table');
                if (table) {
                    const borderWidth = parseInt(this.borderWidthSlider2.value) || 1;
                    const borderColor = this.borderColorPicker2.value || '#000000';
                    const fontSize = parseInt(this.tableFontSizeSlider2.value) || 16;
                    const textColor = this.tableTextColorPicker2.value || '#000000';
                    const fontWeight = this.tableBold2.checked ? 'bold' : 'normal';
                    const textAlign = document.querySelector('input[name="textAlign2"]:checked')?.value || 'center';
                    const cellHeight = parseInt(this.cellHeightSlider2.value) || 40;

                    // 设置表格基本样式
                    table.style.width = 'calc(100% - 80px)';
                    table.style.margin = '0 auto';
                    table.style.borderCollapse = 'collapse';
                    table.style.fontSize = `${fontSize}px`;
                    table.style.color = textColor;
                    table.style.fontWeight = fontWeight;
                    table.style.border = `${borderWidth}px solid ${borderColor}`;

                    // 处理所有单元格
                    const cells = table.getElementsByTagName('td');
                    for (let cell of cells) {
                        cell.style.height = `${cellHeight}px`;
                        cell.style.textAlign = textAlign;
                        cell.style.padding = '8px';
                        cell.style.boxSizing = 'border-box';
                        cell.style.fontSize = `${fontSize}px`;
                        cell.style.color = textColor;
                        cell.style.fontWeight = fontWeight;
                        cell.style.border = `${borderWidth}px solid ${borderColor}`;
                    }
                }
            }

            tempContainer.appendChild(clone);

            // 配置 html2canvas 选项
            const options = {
                width: 1280,
                height: 1706,
                scale: 2,
                backgroundColor: null,
                useCORS: true,
                allowTaint: true,
                logging: false
            };

            // 生成图片
            html2canvas(clone, options).then(canvas => {
            // 创建下载链接
            const link = document.createElement('a');
            link.download = '图文编辑器导出.png';
            link.href = canvas.toDataURL('image/png', 1.0);
            link.click();

            // 清理临时元素
            document.body.removeChild(tempContainer);
            });
        } catch (error) {
            console.error('保存图片时出错:', error);
        }
    }

    updateTable2() {
        if (!this.tableContainer2) return;
        
        // 获取行列数
        const rows = parseInt(this.tableRows2.value) || 3;
        const cols = parseInt(this.tableCols2.value) || 3;
        
        // 获取当前表格内容
        const currentTable = this.tableContainer2.querySelector('table');
        const existingContent = new Array(rows).fill(null).map(() => new Array(cols).fill(''));
        
        if (currentTable) {
            const currentRows = currentTable.rows;
            for (let i = 0; i < Math.min(rows, currentRows.length); i++) {
                const cells = currentRows[i].cells;
                for (let j = 0; j < Math.min(cols, cells.length); j++) {
                    existingContent[i][j] = cells[j].textContent || '';
                }
            }
        }
        
        // 创建表格HTML
        let tableHtml = '<table class="template2-table">';
        for (let i = 0; i < rows; i++) {
            tableHtml += '<tr>';
            for (let j = 0; j < cols; j++) {
                tableHtml += `<td contenteditable="true">${existingContent[i][j]}</td>`;
            }
            tableHtml += '</tr>';
        }
        tableHtml += '</table>';
        
        // 更新表格容器
        this.tableContainer2.innerHTML = tableHtml;
        
        // 应用表格样式
        this.applyTableStyles();
        
        // 更新预览
        this.updatePreview2();
    }
    
    applyTableStyles() {
        if (!this.tableContainer2) return;
        
        const table = this.tableContainer2.querySelector('table');
        if (!table) return;
        
        // 获取样式值
        const borderWidth = parseInt(this.borderWidthSlider2.value) || 1;
        const borderColor = this.borderColorPicker2.value || '#000000';
        const fontSize = parseInt(this.tableFontSizeSlider2.value) || 16;
        const textColor = this.tableTextColorPicker2.value || '#000000';
        const fontWeight = this.tableBold2 && this.tableBold2.checked ? 'bold' : 'normal';
        const textAlign = document.querySelector('input[name="textAlign2"]:checked')?.value || 'center';
        const cellHeight = parseInt(this.cellHeightSlider2.value) || 40;
        
        // 应用表格基本样式
        table.style.width = 'calc(100% - 80px)';
        table.style.margin = '0 auto';
        table.style.borderCollapse = 'collapse';
        table.style.fontSize = `${fontSize}px`;
        table.style.color = textColor;
        table.style.fontWeight = fontWeight;
        table.style.border = `${borderWidth}px solid ${borderColor}`;
        
        // 应用单元格样式
        const cells = table.querySelectorAll('td');
        cells.forEach(cell => {
            // 添加输入事件监听
            cell.addEventListener('input', () => this.updatePreview2());
            
            // 应用样式
            cell.style.height = `${cellHeight}px`;
            cell.style.textAlign = textAlign;
            cell.style.padding = '8px';
            cell.style.boxSizing = 'border-box';
            cell.style.fontSize = `${fontSize}px`;
            cell.style.color = textColor;
            cell.style.fontWeight = fontWeight;
            cell.style.border = `${borderWidth}px solid ${borderColor}`;
        });
    }

    updatePreview2() {
        if (!this.previewArea2) return;

        // 获取当前选中的背景颜色
        const selectedBgColor = document.querySelector('input[name="bgColorScheme"]:checked')?.value || '#f8f2d2';
        
        // 应用背景色
        this.previewArea2.style.backgroundColor = selectedBgColor;
        
        // 更新预览区域样式
        const padding = parseInt(this.pagePaddingSlider2.value) || 40;
        this.previewArea2.style.padding = `${padding}px`;
        this.previewArea2.innerHTML = '';

        // 添加标题
        const title = this.titleInput2.value.replace(/\n/g, '<br>');
        if (title) {
            const titleSection = document.createElement('div');
            titleSection.className = 'title-section';
            titleSection.innerHTML = title;
            
            // 获取标题样式
            const titleFontSize = parseInt(this.titleFontSizeSlider2.value) || 36;
            const titleColor = this.titleColorPicker2.value || '#000000';
            const titleTopSpacing = parseInt(this.titleTopSpacingSlider2.value) || 20;
            const titleSubtitleSpacing = parseInt(this.titleSubtitleSpacingSlider2.value) || 20;
            
            // 应用标题样式
            titleSection.style.fontSize = `${titleFontSize}px`;
            titleSection.style.color = titleColor;
            titleSection.style.marginTop = `${titleTopSpacing}px`;
            titleSection.style.marginBottom = `${titleSubtitleSpacing}px`;
            titleSection.style.textAlign = 'center';
            
            this.previewArea2.appendChild(titleSection);
        }

        // 添加副标题
        const subtitle = this.subtitleInput2.value.replace(/\n/g, '<br>');
        if (subtitle) {
            const subtitleSection = document.createElement('div');
            subtitleSection.className = 'subtitle-section';
            subtitleSection.innerHTML = subtitle;
            
            // 获取副标题样式
            const subtitleFontSize = parseInt(this.subtitleFontSizeSlider2.value) || 24;
            const subtitleColor = this.subtitleColorPicker2.value || '#000000';
            const subtitleFontWeight = this.subtitleBold2 && this.subtitleBold2.checked ? 'bold' : 'normal';
            const subtitleTableSpacing = parseInt(this.subtitleTableSpacingSlider2.value) || 20;
            
            // 应用副标题样式
            subtitleSection.style.fontSize = `${subtitleFontSize}px`;
            subtitleSection.style.color = subtitleColor;
            subtitleSection.style.fontWeight = subtitleFontWeight;
            subtitleSection.style.marginBottom = `${subtitleTableSpacing}px`;
            subtitleSection.style.textAlign = 'center';
            
            this.previewArea2.appendChild(subtitleSection);
        }

        // 添加表格
        if (this.tableContainer2) {
            const tableContent = this.tableContainer2.querySelector('table')?.cloneNode(true);
            if (tableContent) {
                // 获取表格样式
                const fontSize = parseInt(this.tableFontSizeSlider2.value) || 16;
                const textColor = this.tableTextColorPicker2.value || '#000000';
                const fontWeight = this.tableBold2 && this.tableBold2.checked ? 'bold' : 'normal';
                const textAlign = document.querySelector('input[name="textAlign2"]:checked')?.value || 'center';
                const borderWidth = parseInt(this.borderWidthSlider2.value) || 1;
                const borderColor = this.borderColorPicker2.value || '#000000';
                const cellHeight = parseInt(this.cellHeightSlider2.value) || 40;
                
                // 应用表格样式
                tableContent.style.width = 'calc(100% - 80px)';
                tableContent.style.margin = '0 auto';
                tableContent.style.borderCollapse = 'collapse';
                tableContent.style.fontSize = `${fontSize}px`;
                tableContent.style.color = textColor;
                tableContent.style.fontWeight = fontWeight;
                tableContent.style.border = `${borderWidth}px solid ${borderColor}`;
                
                // 应用单元格样式
                const cells = tableContent.querySelectorAll('td');
                cells.forEach(cell => {
                    cell.style.height = `${cellHeight}px`;
                    cell.style.textAlign = textAlign;
                    cell.style.padding = '8px';
                    cell.style.boxSizing = 'border-box';
                    cell.style.fontSize = `${fontSize}px`;
                    cell.style.color = textColor;
                    cell.style.fontWeight = fontWeight;
                    cell.style.border = `${borderWidth}px solid ${borderColor}`;
                    cell.removeAttribute('contenteditable');
                });

                this.previewArea2.appendChild(tableContent);
            }
        }

        // 添加水印
        const watermarkText = this.watermarkInput2.value.trim();
        if (watermarkText) {
            const watermarkSection = document.createElement('div');
            watermarkSection.className = 'watermark-section';
            watermarkSection.textContent = watermarkText;
            
            // 获取水印样式
            const watermarkSize = parseInt(this.watermarkSizeSlider2.value) || 14;
            const watermarkBottom = parseInt(this.watermarkBottomSlider2.value) || 20;
            
            // 应用水印样式
            watermarkSection.style.fontSize = `${watermarkSize}px`;
            watermarkSection.style.bottom = `${watermarkBottom}px`;
            
            this.previewArea2.appendChild(watermarkSection);
        }
    }

    // 添加辅助方法：将十六进制颜色转换为RGBA
    hexToRGBA(hex, alpha) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }
}

// 初始化编辑器
document.addEventListener('DOMContentLoaded', () => {
    new TextEditor();
});