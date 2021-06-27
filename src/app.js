import { Observable, Subject, ReplaySubject, from, of, range } from 'https://dev.jspm.io/rxjs@6/_esm2015';
import { map, filter, switchMap } from 'https://dev.jspm.io/rxjs@6/_esm2015/operators';

(() => {
  const immigration = {
    dom: {
      form: document.getElementById('form'),
    },
    initiate() {
      console.log(Observable)
      this.bindEvents();
    },
    bindEvents() {
      this.dom.form.addEventListener('submit', this.event.submit)
    },
    event: {
      submit(event) {
        console.log(event)
        event.preventDefault()
      }
    }
  }

  immigration.initiate.call(immigration)
})()