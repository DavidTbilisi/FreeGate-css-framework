watch.changeText = function(e) {
    if (find(e.target, 'class=btn')) {
        fg('#message-box').toggleHTML('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="31.416px" height="31.416px" x="0px" y="0px" viewBox="0 0 472 472" style="enable-background:new 0 0 472 472;" xml:space="preserve"><g><g><path d="M239.899,48.216C133.94,48.323,48.13,134.307,48.238,240.266s86.091,191.769,192.05,191.662			c34.448-0.046,68.25-9.355,97.864-26.952c58.217-34.618,93.866-97.367,93.798-165.098			C431.842,133.919,345.859,48.109,239.899,48.216z M240.305,415.903c-97.175,0.175-176.093-78.46-176.268-175.635			S142.497,64.175,239.672,64c62.144-0.088,119.732,32.59,151.528,85.984c16.138,27.124,24.683,58.089,24.74,89.651			C416.115,336.811,337.481,415.729,240.305,415.903z"/></g></g><g><g><path d="M326.328,106.632c-10.756,5.03-22.239,8.33-34.024,9.776c-12.121,0.533-24.263-0.272-36.208-2.4			c-16.478-3.276-33.4-3.657-50.008-1.128c-15.889,4.459-30.716,12.077-43.592,22.4c-9.626,7.59-20.394,13.606-31.904,17.824			c-54.68,15.776-76.024,42.56-76.904,43.696l12.6,9.832c0.192-0.232,19.512-23.976,68.744-38.216			c13.205-4.667,25.566-11.446,36.6-20.072c11.172-9.039,24.017-15.787,37.8-19.856c14.789-2.09,29.825-1.643,44.464,1.32			c13.135,2.331,26.491,3.182,39.816,2.536c13.397-1.57,26.46-5.253,38.704-10.912c10.147-5.041,21.215-7.959,32.528-8.576v-16			C351.539,97.443,338.397,100.77,326.328,106.632z"/></g></g><g><g><path d="M363.872,186.32c-12.659,2.924-25.506,4.967-38.448,6.112c-12.221,0.602-24.471,0.19-36.624-1.232			c-20.55-2.876-41.434-2.336-61.808,1.6c-20.294,6.219-39.367,15.882-56.384,28.568c-9.705,6.757-19.862,12.841-30.4,18.208			c-7.864,3.736-15.056,6.808-21.8,9.696c-22.73,8.071-43.366,21.123-60.4,38.2l11.488,11.136			c18.28-18.84,33.76-25.456,55.152-34.664c6.936-2.96,14.32-6.12,22.4-9.952c11.203-5.693,22.002-12.148,32.32-19.32			c15.545-11.612,32.928-20.536,51.424-26.4c18.696-3.426,37.823-3.807,56.64-1.128c13.064,1.527,26.234,1.936,39.368,1.224			c13.611-1.204,27.123-3.343,40.44-6.4c15.97-4.479,32.781-5.066,49.024-1.712l2.888-15.736			C400.838,180.788,381.904,181.405,363.872,186.32z"/></g></g><g><g><path d="M371.072,225.648c-12.99,5.869-26.767,9.809-40.896,11.696c-11.752,0.752-24.08,0.28-36-0.16			c-18.634-1.455-37.374-0.679-55.824,2.312c-20.04,4.144-36.192,16.12-51.832,27.704c-8.906,7.118-18.482,13.355-28.592,18.624			c-6.576,3.072-13.344,5.936-20.104,8.8c-22.064,9.336-44.88,19-61.392,36.696l11.704,10.912			c14.176-15.208,34.456-23.784,55.944-32.88c6.952-2.944,13.912-5.872,20.68-9.072c11.07-5.707,21.557-12.48,31.312-20.224			c14.232-10.552,28.952-21.464,45.528-24.888c17.193-2.723,34.649-3.394,52-2c12.328,0.464,25.04,0.952,37.6,0.152			c15.746-1.971,31.114-6.265,45.6-12.744c14.465-6.808,30.074-10.856,46.024-11.936l0.376-16			C405.155,213.621,387.462,218.036,371.072,225.648z"/></g></g><g><g><path d="M390.08,308.856c-10.575-3.19-21.508-5.044-32.544-5.52c-12.191-0.208-24.348,1.344-36.096,4.608			c-5.24,1.24-10.64,2.528-16.72,3.488c-6.856,1.08-15.728,1.904-25.128,2.76c-17.51,0.805-34.871,3.593-51.752,8.312			c-13.034,5.198-25.311,12.121-36.504,20.584c-4.12,2.896-8.304,5.816-12.8,8.648c-7.78,4.421-16.032,7.956-24.6,10.536			c-12.144,3.139-23.429,8.962-33.024,17.04l11.344,11.288c7.937-6.229,17.091-10.726,26.872-13.2			c9.749-2.95,19.124-7.02,27.936-12.128c4.704-2.968,9.08-6.032,13.432-9.064c10.095-7.677,21.172-13.967,32.936-18.704			c15.575-4.135,31.544-6.607,47.64-7.376c9.664-0.888,18.784-1.728,26.152-2.896c6.68-1.056,12.392-2.408,17.92-3.72			c10.388-2.926,21.145-4.335,31.936-4.184c9.815,0.44,19.535,2.12,28.928,5c5.592,1.448,11.928,3.144,19.592,4.648l3.072-15.704			C401.512,311.872,395.68,310.336,390.08,308.856z"/></g></g><g><g><path d="M317.6,67.608c-11.282-1.596-22.643-2.576-34.032-2.936c-12.628,0.053-25.144,2.372-36.952,6.848			c-6.479,2.25-13.119,4.005-19.864,5.248c-24.816,4.873-49.191,11.771-72.88,20.624l-7.776,2.872			c-20.787,6.852-40.923,15.542-60.168,25.968l8.552,13.536c18.314-9.768,37.425-17.96,57.128-24.488l7.848-2.888			c22.697-8.462,46.036-15.091,69.792-19.824c7.546-1.361,14.976-3.3,22.224-5.8c10.113-3.842,20.815-5.907,31.632-6.104			c10.865,0.339,21.703,1.28,32.464,2.816c3.728,0.472,7.592,0.968,11.856,1.44l1.776-15.896			C325.032,68.552,321.248,68.072,317.6,67.608z"/></g></g><g><g><path d="M382.664,346.712c-12.49,1.753-25.071,2.778-37.68,3.072c-12.552,0.309-25.077,1.302-37.52,2.976			c-16.031,3.084-31.545,8.422-46.08,15.856c-7.424,3.384-14.432,6.584-21.68,9.208c-9.521,3.168-19.231,5.738-29.072,7.696			c-18.544,4.112-36.064,7.992-47.384,18.064l10.64,11.952c8.208-7.304,23.752-10.736,40.184-14.36			c10.519-2.1,20.895-4.866,31.064-8.28c7.848-2.84,15.48-6.328,22.864-9.696c13.201-6.811,27.293-11.734,41.864-14.624			c11.874-1.585,23.825-2.522,35.8-2.808c13.228-0.31,26.427-1.398,39.528-3.256L382.664,346.712z"/></g></g><g><g><circle cx="424" cy="48" r="8"/></g></g><g><g><rect x="432" y="408" width="16" height="16"/></g></g><g><g><rect x="432" y="456" width="16" height="16"/></g></g><g><g><rect x="415.035" y="415.03" transform="matrix(0.7072 -0.707 0.707 0.7072 -175.223 422.9289)" width="16" height="16"/></g></g><g><g><rect x="448.953" y="448.998" transform="matrix(0.7072 -0.707 0.707 0.7072 -189.3082 456.851)" width="16" height="16"/></g></g><g><g><rect x="408" y="432" width="16" height="16"/></g></g><g><g><rect x="456" y="432" width="16" height="16"/></g></g><g><g><rect x="415.031" y="448.951" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -199.2102 432.9656)" width="16" height="16"/></g></g><g><g><rect x="448.967" y="415.041" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -165.2929 447.0301)" width="16" height="16"/></g></g><g><g><path d="M40,24V0H24v24c0,13.255-10.745,24-24,24v16c13.255,0,24,10.745,24,24v24h16V88c0-13.255,10.745-24,24-24V48			C50.745,48,40,37.255,40,24z M32,64c-2.278-3.029-4.971-5.722-8-8c3.029-2.278,5.722-4.971,8-8c2.278,3.029,4.971,5.722,8,8			C36.971,58.278,34.278,60.971,32,64z"/></g></g></svg>');
    }
}


class Observable {
    constructor() {
      this.observers = [];
    }
    subscribe(f) {
      this.observers.push(f);
    }
    unsubscribe(f) {
      this.observers = this.observers.filter(subscriber => subscriber !== f);
    }
    notify(data) {
      this.observers.forEach(observer => observer(data));
    }
}

let p1 = el('.col')[0];
let p2 = el('.col')[1];
let p3 = el('.col')[2];

// here are the functions for changing text
let updateP1 = text => p1.textContent = text;
let updateP2 = text => p2.textContent = text;
let updateP3 = text => p3.textContent = text;

const headingsObserver = new Observable();

headingsObserver.subscribe(updateP1);
headingsObserver.subscribe(updateP2);
headingsObserver.subscribe(updateP3);

el('input').addEventListener('keyup', e => {
    headingsObserver.notify(e.target.value);
});




fg('.container').append(`
  <img class="image-popup full block" src="https://images.pexels.com/photos/1250260/pexels-photo-1250260.jpeg" />
`)