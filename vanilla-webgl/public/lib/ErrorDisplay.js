class ErrorDisplay {
    constructor($parentElement) {
        this.parentElement = $parentElement;
        this.ctx = document.createElement('div');
        this.ctx.id = 'error-box';
        this.ctx.style.display = 'block';
        this.ctx.style.border = '2px solid red';
        this.ctx.style.padding = '10px';
        this.ctx.style.margin = '10px 0';
        this.ctx.style.backgroundColor = '#ffeeee';
    
        this.errorMessage = document.createElement('p');
        this.ctx.appendChild(this.errorMessage);
    }

    addError(message) {
        this.errorMessage.textContent = message;
    }

    showError() {
        this.$parentElement.appendChild(this.ctx);
    }
}

export { ErrorDisplay }
