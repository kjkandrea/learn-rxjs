import { fromEvent } from 'https://dev.jspm.io/rxjs@6/_esm2015';
import { map, filter, switchMap } from 'https://dev.jspm.io/rxjs@6/_esm2015/operators';

(() => {
  const immigration = {
    dom: {
      form: document.getElementById('form'),
    },
    observer: {
      form: fromEvent(document, 'click')
    },
    initiate() {
      this.bindEvents();
    },
    bindEvents() {
      this.observer.form.subscribe(this.event.submit)
    },
    event: {
      submit(event) {
        event.preventDefault()

        alert('😝')
      }
    }
  }

  immigration.initiate.call(immigration)
})()