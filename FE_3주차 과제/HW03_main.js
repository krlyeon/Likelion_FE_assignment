const customTag = {
    tagName: 'div', // 기본 태그 이름
    textContent: '', // 기본 텍스트
    styles: {
        color: '',
        fontSize: ''
    },
    id: '', // 태그 ID
    class: [], // 클래스 이름 배열

    // 메서드들
    changeTagName(newTag) {
        this.tagName = newTag;
    },

    changeTextContent(newText) {
        this.textContent = newText;
    },

    changeStyles(property, value) {
        this.styles[property] = value;
    },

    setId(newId) {
        this.id = newId;
    },

    addClassName(className) {
        if (!this.class.includes(className)) {
            this.class.push(className);
        }
    },

    removeClassName(className) {
        this.class = this.class.filter(c => c !== className);
    },

    // 수정하지 말아야 할 부분
    toHTML() {
        const classString = this.class.length > 0 ? ` class="${this.class.join(' ')}"` : '';
        const idString = this.id ? ` id="${this.id}"` : '';

        let styleString = '';
        for (const property in this.styles) {
            styleString += `${property === 'fontSize' ? 'font-size' : property}: ${this.styles[property]}; `;
        }
        styleString = styleString ? ` style="${styleString.trim()}"` : '';

        return `<${this.tagName}${idString}${classString}${styleString}>${this.textContent}</${this.tagName}>`;
    },

    render(containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = '';
            container.innerHTML += this.toHTML();
        } else {
            console.error(`Container with ID "${containerId}" not found.`);
        }
    }
};

window.addEventListener('DOMContentLoaded', () => {
    customTag.render('container');
});
