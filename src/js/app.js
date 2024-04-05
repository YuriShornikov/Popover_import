import { createPopper } from '@popperjs/core';

export class Btn {
  constructor() {
    this.btn = document.querySelector('.btn');
    this.popover = document.querySelector('.popover');
  }

  // Клик по кнопке
  toShow() {
    this.btn.addEventListener('click', () => {
      if (this.popover.style.display === 'block') {
        this.popover.style.display = 'none';
      } else {
        this.popover.style.display = 'block';

        // Применяем библиотеку поповера
        createPopper(this.btn, this.popover, {
          placement: 'top',
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 6],
                skidding: 0
              }
            },
            {
              name: 'preventOverflow',
              options: {
                padding: 16
              }
            },
            {
              name: 'flip',
              options: {
                padding: 16
              }
            }
          ]
        });
      }
    });
  }
}

const popover = new Btn();
popover.toShow();
