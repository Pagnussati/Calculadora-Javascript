function createCalc() {
    return {
        display: document.querySelector('.display'),

        btnClear: document.querySelector('.btn-clear'),

        start() {
            this.buttonClick();
            this.pressEnter();
        },

        pressEnter() {
            this.display.addEventListener('keyup', event => {
                if (event.keyCode === 13) {
                    this.btnCalc();
                }
            });
        },

        buttonClick() {
            document.addEventListener('click', function (event) {
                const element = event.target;

                if (element.classList.contains('btn-num')) {
                    this.displayButton(element.innerText);
                };

                if (element.classList.contains('btn-clear')) {
                    this.clearDisplay();
                };

                if (element.classList.contains('btn-del')) {
                    this.deleteDisplay();
                };

                if (element.classList.contains('btn-equal')) {
                    this.btnCalc();
                };

            }.bind(this));
        },

        displayButton(value) {
            this.display.value += value;
        },

        clearDisplay() {
            this.display.value = '';
        },

        deleteDisplay() {
            this.display.value = this.display.value.slice(0, -1)
        },

        btnCalc() {
            let calc = this.display.value;

            try {
                calc = eval(calc)

                if (!calc) {
                    alert('Invalid calculation');
                    this.clearDisplay();
                };

                this.display.value = String(calc);
            } catch (error) {
                alert('Invalid calculation');
                this.clearDisplay();
                return;
            };
        },
    };
};

const calculator = createCalc();
calculator.start();